import { Card } from "@/pages/main/ui/components/card";
import { cards } from "@/pages/main/ui/screens/past-transactions/cards";
import { routes } from "@/shared/config/routes";
import { PageLayout } from "@/shared/layout/page";
import { ScrollArea, ScrollBar } from "@/shared/ui/scroll-area";

export const PastTransactionsScreen = () => {
  return (
    <PageLayout
      id={routes.transactions.link}
      clip
      as="section"
      classname="h-dvh md:max-h-[609px] max-h-[413px] items-center flex"
    >
      <div className="flex flex-col  w-full">
        <div className="mb-[24px] md:mb-[72px]">
          <h1 className="uppercase text-[28px] md:text-[44px] font-bold">
            Прошедшие сделки
          </h1>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <span className="text-green-400 text-[14px]">Онлайн</span>
          </div>
        </div>

        <ScrollArea
          type="always"
          className="flex  items-center w-full justify-center flex-col gap-3"
        >
          <div className="flex gap-5">
            {cards.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
          <div className="max-w-[900px] mb-7 h-fit bg-white">
            <ScrollBar
              className="left-1/2 px-[20px] max-w-[900px] absolute bg-white/10"
              orientation="horizontal"
            />
          </div>
        </ScrollArea>
      </div>
    </PageLayout>
  );
};
