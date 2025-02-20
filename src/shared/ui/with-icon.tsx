import type { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

interface WithIconProps {
  icon: ReactNode;
  classname?: string;
  children: ReactNode;
  iconClassName?: string;
  iconPosition?: "left" | "right";
}

export const WithIcon = ({
  icon,
  classname,
  children,
  iconClassName,
  iconPosition = "left",
}: WithIconProps) => {
  return (
    <span className={cn("flex gap-2 w-full flex-row items-center", classname)}>
      {iconPosition === "left" && (
        <span className={cn(iconClassName)}>{icon}</span>
      )}
      {children}
      {iconPosition === "right" && (
        <span className={cn(iconClassName)}>{icon}</span>
      )}
    </span>
  );
};
