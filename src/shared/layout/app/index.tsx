import { ReactNode } from "react";

interface AppLayoutProps {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

export const AppLayout = ({ header, footer, children }: AppLayoutProps) => (
  <div className="flex flex-col min-h-screen ">
    {header}
    <div className="flex-grow mt-[48px] md:mt-[68px]">{children}</div>
    {footer}
  </div>
);
