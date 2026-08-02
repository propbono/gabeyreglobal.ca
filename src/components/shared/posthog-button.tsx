import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";
import { initPostHog } from "@/lib/posthog";

interface PostHogButtonProps extends ComponentProps<typeof Button> {
  eventName: string;
  eventProperties?: Record<string, unknown>;
}

export function PostHogButton({
  eventName,
  eventProperties,
  onClick,
  ...props
}: PostHogButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const posthog = initPostHog();
    if (posthog) {
      posthog.capture(eventName, eventProperties ?? {});
    }
    onClick?.(e);
  };

  return <Button onClick={handleClick} {...props} />;
}
