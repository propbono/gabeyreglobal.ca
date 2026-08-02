import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionWrapper } from "@/components/shared/section-wrapper";

describe("SectionWrapper", () => {
  it("renders children", () => {
    render(
      <SectionWrapper>
        <p>Hello</p>
      </SectionWrapper>,
    );
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("applies background class", () => {
    const { container } = render(
      <SectionWrapper background="primary">
        <p>Dark</p>
      </SectionWrapper>,
    );
    expect(container.firstChild).toHaveClass("bg-primary");
  });

  it("applies id for scroll anchoring", () => {
    const { container } = render(
      <SectionWrapper id="work">
        <p>Work</p>
      </SectionWrapper>,
    );
    expect(container.firstChild).toHaveAttribute("id", "work");
  });
});
