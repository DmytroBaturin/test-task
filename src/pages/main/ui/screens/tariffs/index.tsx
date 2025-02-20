import TariffCard from "@/pages/main/ui/components/tariff-card";
import {
  ITariffs,
  Tariff,
  tariffs,
} from "@/pages/main/ui/screens/tariffs/tariffs";
import { routes } from "@/shared/config/routes";
import { PageLayout } from "@/shared/layout/page";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";

export const Tariffs = () => {
  const tariffKeys = Object.keys(tariffs);

  return (
    <PageLayout
      border
      id={routes.tariffs.link}
      as="section"
      classname="max-w-[876px]  h-full  md:mb-[0px] mb-[44px] justify-center flex items-center"
    >
      <div className="w-full items-start flex md:my-[96px] mb-[44px] mt-[56px] gap-[24px] md:gap-[40px] flex-col">
        <h1 className="uppercase w-full font-bold md:text-[44px] text-[28px] leading-tight">
          Тарифы
        </h1>
        <Tabs
          defaultValue={tariffKeys[0]}
          className="flex flex-col md:gap-[44px] gap-[24px] items-start"
        >
          <TabsList className="h-[52px] ">
            {tariffKeys.map((key) => (
              <TabsTrigger className="text-[18px]" key={key} value={key}>
                {key}
              </TabsTrigger>
            ))}
          </TabsList>

          {tariffKeys.map((key) => (
            <TabsContent key={key} value={key}>
              <div className="flex md:flex-row flex-col gap-[20px]">
                {tariffs[key as keyof ITariffs].map(
                  (tariff: Tariff, index: number) => (
                    <TariffCard
                      isPrimary={tariff.title === "STANDART"}
                      key={index}
                      {...tariff}
                    />
                  ),
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </PageLayout>
  );
};
