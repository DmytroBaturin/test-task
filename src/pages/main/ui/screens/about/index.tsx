import { routes } from "@/shared/config/routes";
import { PageLayout } from "@/shared/layout/page";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export const AboutScreen = () => {
  return (
    <PageLayout
      id={routes.about.link}
      color="#FFF"
      classname="bg-white text-black flex min-h-[437px] md:min-h-[424px] md:items-center"
      isSvg
    >
      <div className="flex z-50 items-center relative md:flex-row md:py-[0px] py-[24px] flex-col justify-between w-full">
        <div className="flex flex-col gap-[40px] max-w-[413px]">
          <h1 className="text-[28px] md:text-[44px] font-bold uppercase">
            О компании
          </h1>
          <p className="text-[16px] leading-[20px] text-background/80">
            Мы опытная команда, для которой трейдинг – профессия. TradeBlade
            является авторизованным официальным брокером биржи Binance. <br />
            <br />
            Он представляет пользователям множество преимуществ, таких как более
            високая скорость синхронизации API и возможность создать учетную
            запись Binance через платформу TradeBlade всего в 1 клик.
          </p>
        </div>
        <div className="max-w-[630px] md:static absolute -bottom-[125px] w-full h-[236px] gap-[20px] gap-8 px-2 flex flex-col items-center justify-center rounded-[4px] bg-primary">
          <p className="text-white tracking-[-1.12px] text-center font-medium text-[20px] md:text-[28px] max-w-[500px]">
            Попробуйте сейчас и получите 5 дней бесплатного пользования
          </p>
          <Input
            wrapped
            widthMain="w-full max-w-[500px]"
            bgColor="md:bg-[#4A3BB3] bg-transparent"
            className="h-[60px] text-white bg-[#4A3BB3]"
            action={
              <Button className="px-[24px] w-full text-[16px] py-[14px]">
                Попробовать
              </Button>
            }
            placeholder="Ваш e-mail"
          />
        </div>
      </div>
    </PageLayout>
  );
};
