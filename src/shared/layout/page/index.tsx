import { ElementType, ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

interface PageLayoutProps {
  children: ReactNode;
  classname?: string;
  isSvg?: boolean;
  color?: string;
  border?: boolean;
  as?: ElementType;
  id?: string;
  clip?: boolean;
}

export const PageLayout = ({
  children,
  classname,
  as = "div",
  clip = false,
  id,
  isSvg = false,
  border = false,
  color,
}: PageLayoutProps) => {
  const Component = as;

  return (
    <Component id={id} className={cn("w-full relative ")}>
      {isSvg && (
        <svg
          className="h-[60px] w-[45%] bottom-0 left-0"
          height="60"
          preserveAspectRatio="none"
          viewBox="0 0 639 60"
          fill="none"
        >
          <path
            d="M0 0H575.686C577.808 0 579.843 0.842855 581.343 2.34315L639 60H0V0Z"
            fill={color}
          />
        </svg>
      )}

      <div
        className={cn(
          "flex w-full justify-center",
          border ? "border-b border-white/40" : "",
          clip ? "overflow-hidden" : "",
        )}
        style={{
          backgroundColor: color,
        }}
      >
        <div
          className={cn("max-w-[1280px] lg:px-0 px-4 w-full h-full", classname)}
        >
          {children}
        </div>
      </div>
    </Component>
  );
};
