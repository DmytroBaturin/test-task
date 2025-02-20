import { routes } from "@/shared/config/routes";
import { PageLayout } from "@/shared/layout/page";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };
  return (
    <PageLayout as={"footer"} classname="h-[353px] flex md:flex-row flex-col">
      <div className="py-[44px] h-full flex md:flex-col justify-between">
        <span className="uppercase opacity-40">Быстрая навигация</span>
        <nav className=" flex md:flex-row flex-col flex-wrap items-start gap-4 md:gap-8">
          {Object.values(routes).map((route) => {
            if (route.link === "") return null;
            return (
              <button
                className="opacity-70 uppercase font-normal text-sm "
                key={route.link}
                onClick={() => {
                  scrollToSection(route.link);
                }}
              >
                {route.label}
              </button>
            );
          })}
        </nav>
      </div>
      <div className="w-full py-[44px] max-w-[500px]">
        <div className="h-full gap-[80px] md:border-none border-t border-white/30 md:pt-[0px] pt-[40px] justify-between flex-col md:items-end w-full  flex">
          <img className="max-w-[165px]" src={"./icon.svg"} />
          <p className="text-[14px] opacity-50">
            © 2022 TradeBlade. All rights reserved
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
