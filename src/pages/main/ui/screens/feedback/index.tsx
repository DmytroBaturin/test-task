import { Comment } from "@/pages/main/ui/components/comments";
import {
  Feedback,
  feedbacks,
} from "@/pages/main/ui/screens/feedback/feedbacks";
import { routes } from "@/shared/config/routes";
import { PageLayout } from "@/shared/layout/page";
import { Button } from "@/shared/ui/button";

const FeedbackGroup = ({ feedbacks }: { feedbacks: Feedback[] }) => {
  return (
    <div className="flex flex-col gap-[20px]">
      {feedbacks.map((feedback: Feedback, index: number) => (
        <div key={index} className="flex flex-col">
          <Comment {...feedback} />
        </div>
      ))}
    </div>
  );
};

export const FeedbackScreen = () => {
  const midIndex = Math.ceil(feedbacks.length / 2);
  const leftFeedbacks = feedbacks.slice(0, midIndex);
  const rightFeedbacks = feedbacks.slice(midIndex);

  return (
    <PageLayout
      id={routes.feedback.link}
      as="section"
      classname="justify-center max-w-[1064px] md:mb-[96px] mt-[56px] md:mt-[96px] mb-[64px] gap-[56px] w-full flex flex-col"
    >
      <h1 className="uppercase font-bold md:text-[44px] text-[28px] leading-tight ">
        отзывы учасников комьюнити
      </h1>
      <div className="items-center flex flex-col md:gap-[72px] gap-[24px]">
        <div className="flex flex-col md:flex-row  gap-[20px] w-full">
          <FeedbackGroup feedbacks={leftFeedbacks} />
          <FeedbackGroup feedbacks={rightFeedbacks} />
        </div>
        <Button
          variant="outline"
          className="bg-transparent text-[16px] hover:bg-accent/10"
        >
          Загрузить больше отзывов
        </Button>
      </div>
    </PageLayout>
  );
};
