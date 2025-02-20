import { routes } from "@/shared/config/routes";
import { PageLayout } from "@/shared/layout/page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";

export const QuestionsScreen = () => {
  return (
    <PageLayout
      id={routes.FAQ.link}
      as={"section"}
      color={"#FFF"}
      classname=" h-fit md:py-[96px] py-[56px] items-center flex justify-center"
    >
      <div className="flex text-background md:gap-[64px] gap-[40px] flex-col">
        <h1 className="uppercase  md:mb-[0px] mb-[40px] font-bold text-[28px] md:text-[44px] leading-tight">
          часто задаваемые вопросы
        </h1>
        <Accordion
          type="single"
          className="flex w-full md:w-[846px] flex-col gap-3"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Что такое TradeBlade</AccordionTrigger>
            <AccordionContent>
              Мы опытная команда, для которой трейдинг – профессия. TradeBlade
              является авторизованным официальным брокером биржи Binance. Он
              представляет пользователям множество преимуществ, таких как более
              високая скорость синхронизации API и возможность создать учетную
              запись Binance через платформу TradeBlade всего в 1 клик.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Что TradeBlade предлагает инвесторам
            </AccordionTrigger>
            <AccordionContent>
              Мы опытная команда, для которой трейдинг – профессия. TradeBlade
              является авторизованным официальным брокером биржи Binance. Он
              представляет пользователям множество преимуществ, таких как более
              високая скорость синхронизации API и возможность создать учетную
              запись Binance через платформу TradeBlade всего в 1 клик.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Должен ли я перевести свои средства на TradeBlade
            </AccordionTrigger>
            <AccordionContent>
              Мы опытная команда, для которой трейдинг – профессия. TradeBlade
              является авторизованным официальным брокером биржи Binance. Он
              представляет пользователям множество преимуществ, таких как более
              високая скорость синхронизации API и возможность создать учетную
              запись Binance через платформу TradeBlade всего в 1 клик.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </PageLayout>
  );
};
