import { cards } from "@/pages/main/ui/screens/tradeblade/cards";
import { PageLayout } from "@/shared/layout/page";

export const TradebladeScreen = () => {
  return (
    <PageLayout classname="min-h-[788px] mt-[125px] md:mt-[0px] py-[96px]">
      <div className="flex flex-wrap justify-between items-start">
        <h1 className="uppercase md:mb-[0px] mb-[40px] max-w-[305px] font-bold text-[28px] md:text-[44px] leading-tight">
          tradeblade это
        </h1>
        <div className="grid w-fit grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12  ">
          {cards.map((card, index) => (
            <div key={index} className="flex items-start gap-[32px]">
              <img src={card.image} alt={card.title} />
              <div className="max-w-[325px] flex flex-col gap-2">
                <h2 className="md:text-[28px] text-[20px] font-medium leading-[36px] tracking-[-1.12px]">
                  {card.title}
                </h2>
                <p className="text-[16px] leading-[20px] opacity-80">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
