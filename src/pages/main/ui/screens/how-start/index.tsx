import { cards } from "@/pages/main/ui/screens/how-start/cards";
import { routes } from "@/shared/config/routes";
import { PageLayout } from "@/shared/layout/page";
import { Button } from "@/shared/ui/button";

export const HowStartScreen = () => {
  return (
    <PageLayout
      id={routes.howStart.link}
      isSvg
      color="#6A54FF"
      classname="min-h-[620px]"
    >
      <div className="mt-[24px] md:mt-[56px]">
        <h1 className="text-[28px] md:text-[44px] mb-[51px] md:mb-[79px] uppercase tracking-[-1.76px] font-bold">
          Как начать пользоваться сервисом
        </h1>
        <div className="flex items-center gap-[56px] flex-col">
          <div className="w-full gap-y-[26px] flex flex-col md:flex-row justify-between">
            {cards.map((card) => (
              <div className="max-w-[305px] pl-[26px] md:border-t-[2px] md:border-l-0  border-l-[2px] flex flex-col md:pt-9">
                <div className="w-full">
                  <h3 className="text-[20px] w-full md:text-[28px] tracking-[-1.12px] font-medium">
                    {card.title}
                  </h3>
                  <p className="text-[16px] md:text-[20px] opacity-80 leading-[26px]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button className="px-[24px] mb-[46px] py-[16px] w-full max-w-[343px] text-[16px] font-medium">
            Попробовать бесплатно
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
