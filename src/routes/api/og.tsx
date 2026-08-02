import { Resvg } from "@resvg/resvg-js";
import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/start-client-core";
import satori from "satori";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

// Fetch font once and cache
let _fontData: ArrayBuffer | null = null;

async function getFontData(): Promise<ArrayBuffer> {
  if (_fontData) return _fontData;
  const res = await fetch(
    "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf",
  );
  _fontData = await res.arrayBuffer();
  return _fontData;
}

function OgSvg({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div
      style={{
        width: OG_WIDTH,
        height: OG_HEIGHT,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "72px 80px",
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        fontFamily: "Inter",
        color: "#FAFAF9",
      }}
    >
      {/* Company name */}
      <div
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: "#0D9488",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          marginBottom: 24,
        }}
      >
        Gabeyre Global Inc
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 52,
          fontWeight: 700,
          lineHeight: 1.15,
          maxWidth: 1000,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {title}
      </div>

      {/* Description */}
      {description ? (
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: "#94A3B8",
            marginTop: 18,
            maxWidth: 900,
            lineHeight: 1.4,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description.length > 120
            ? `${description.slice(0, 120)}\u2026`
            : description}
        </div>
      ) : null}

      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 6,
          background: "#0D9488",
        }}
      />
    </div>
  );
}

export const Route = createFileRoute("/api/og")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const title = url.searchParams.get("title") || "Gabeyre Global Inc";
        const description = url.searchParams.get("description") || undefined;

        try {
          const fontData = await getFontData();

          const svg = await satori(
            <OgSvg title={title} description={description} />,
            {
              width: OG_WIDTH,
              height: OG_HEIGHT,
              fonts: [
                {
                  name: "Inter",
                  data: Buffer.from(fontData),
                  weight: 700,
                  style: "normal",
                },
              ],
            },
          );

          const resvg = new Resvg(svg, {
            fitTo: { mode: "width", value: OG_WIDTH },
          });
          const pngData = resvg.render();
          const pngBuffer = pngData.asPng();

          return new Response(new Uint8Array(pngBuffer), {
            headers: {
              "Content-Type": "image/png",
              "Cache-Control": "public, max-age=86400, s-maxage=604800",
            },
          });
        } catch (err) {
          console.error("OG image generation error:", err);
          return new Response("OG image generation failed", { status: 500 });
        }
      },
    },
  },
});
