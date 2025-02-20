import { routes } from "@/shared/config/routes";
import { PageLayout } from "@/shared/layout/page";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export const MainScreen = () => {
  return (
    <div>
      <PageLayout
        id={routes.main.link}
        as="main"
        classname="h-dvh flex justify-between items-center max-h-[768px]"
      >
        <section className="flex gap-2  lg:flex-nowrap flex-wrap-reverse justify-center lg:justify-between w-full items-start ">
          <div className="flex gap-6 flex-col max-w-[630px]">
            <div className="flex gap-3 w-full flex-col">
              <h2 className="font-bold  text-[35px] md:text-[60px] text-wrap tracking-[-2.4px] uppercase leading-[40px] md:leading-[72px]">
                моментально Копируй сделки профи трейдеров
              </h2>
              <p className="max-w-[565px]  font-light opacity-80 text-[16px]">
                Начни копировать сделки с успешной командой профессиональных
                трейдеров в автоматическом режиме.
              </p>
            </div>
            <div className="flex gap-3 flex-col">
              <Input
                widthMain="max-w-[500px]"
                className="h-[60px] mr-[100px]"
                action={
                  <Button className="px-[24px] text-[16px] py-[14px]">
                    Начать
                  </Button>
                }
                placeholder="Ваш e-mail"
              />
              <p className="text-sm opacity-30 font-light">
                5 дней бесплатного пользования
              </p>
            </div>
          </div>
          <img className="mb-[36px]" src="./main.png" alt="main" />
        </section>
      </PageLayout>
    </div>
  );
};
