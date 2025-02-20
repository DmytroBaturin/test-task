import { AboutScreen } from "@/pages/main/ui/screens/about";
import { DigitsScreen } from "@/pages/main/ui/screens/digits";
import { FeedbackScreen } from "@/pages/main/ui/screens/feedback";
import { HowStartScreen } from "@/pages/main/ui/screens/how-start";
import { MainScreen } from "@/pages/main/ui/screens/main";
import { PastTransactionsScreen } from "@/pages/main/ui/screens/past-transactions";
import { QuestionsScreen } from "@/pages/main/ui/screens/FAQ";
import { Tariffs } from "@/pages/main/ui/screens/tariffs";
import { TradebladeScreen } from "@/pages/main/ui/screens/tradeblade";

export const MainPage = () => {
  return (
    <>
      <MainScreen />
      <DigitsScreen />
      <PastTransactionsScreen />
      <AboutScreen />
      <TradebladeScreen />
      <HowStartScreen />
      <Tariffs />
      <FeedbackScreen />
      <QuestionsScreen />
    </>
  );
};
