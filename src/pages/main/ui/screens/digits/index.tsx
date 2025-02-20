import { routes } from "@/shared/config/routes";
import { PageLayout } from "@/shared/layout/page";

export const DigitsScreen = () => {
  const sections = [
    {
      title: "Торговой прибыли",
      description: "2756%",
    },
    {
      title: "фьючерсных и спотовых сделок",
      description: "67",
    },
    {
      title: "прибыль подписчиков",
      description: "375000",
    },
  ];
  return (
    <PageLayout
      id={routes.digits.link}
      color="#FFF"
      classname="bg-white min-h-[220px] text-black flex items-center"
      isSvg
    >
      <div className="flex gap-y-[40px] pb-[48px] pt-[24px]  md:pb-[0px] md:pt-[0px]  items-center min-h-[220px] justify-between flex-wrap w-full">
        <div>
          <h1 className="md:text-[44px] text-[28px] font-bold uppercase">
            Цифры
          </h1>
          <p className="opacity-50">Cентябрь 2022</p>
        </div>
        <div className="flex w-full flex-wrap justify-between max-w-[860px] md:mr-[96px]">
          {sections.map((section) => (
            <div key={section.title} className="max-w-[150px] md:max-w-none">
              <h2 className="opacity-80 uppercase text-[14px]">
                {section.title}
              </h2>
              <p className="text-[35px] md:text-[60px] text-primary font-medium">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
