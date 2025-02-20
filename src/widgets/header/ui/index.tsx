import { routes } from "@/shared/config/routes";
import { PageLayout } from "@/shared/layout/page";
import { Button } from "@/shared/ui/button";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header className="fixed bg-background flex z-50 items-center w-screen h-[96px] md:h-[68px]">
      <PageLayout
        as="header"
        classname="justify-between left-0 bottom-0 flex items-center py-[2px] w-full"
      >
        <button onClick={() => scrollToSection(routes.main.link)}>
          <img src="icon.svg" alt="logo" />
        </button>
        <nav className="uppercase lg:flex hidden font-normal text-sm gap-8">
          {Object.values(routes).map((route) => {
            if (route.link === "") return null;
            return (
              <button
                className="uppercase ont-normal text-sm opacity-70"
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
        <div className="z-50 lg:hidden flex  gap-3">
          <Hamburger size={23} toggled={isOpen} toggle={setOpen} />
        </div>
        <div className=" lg:flex hidden gap-3">
          <Button className="hover:bg-accent/30" variant="outline">
            Вход
          </Button>
          <Button>Регистрация</Button>
        </div>
      </PageLayout>
      {isOpen && (
        <div className="fixed px-4 bg-primary items-center flex z-20 top-0 left-0 w-screen h-dvh">
          <nav className="flex py-[16px] h-full w-full flex-col items-start ">
            <div className="flex flex-col items-start gap-8 mt-[86px]">
              {Object.values(routes).map((route) => {
                if (route.link === "") return null;
                return (
                  <button
                    className="opacity-70 uppercase text-[24px]"
                    key={route.link}
                    onClick={() => {
                      setOpen(false);
                      scrollToSection(route.link);
                    }}
                  >
                    {route.label}
                  </button>
                );
              })}
            </div>
            <div className="flex w-full gap-3 justify-between mt-auto">
              <Button className="w-full">Регистрация</Button>
              <Button className="w-full" variant="outline">
                Вход
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
