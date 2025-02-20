import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

import { WithIcon } from "@/shared/ui/with-icon";

interface TariffCardProps {
  title: string;
  features: string[];
  price: number;
  discountPercentage: number;
  buttonText: string;
  isPrimary?: boolean;
}

const TariffCard = ({
  title,
  features,
  price,
  discountPercentage,
  buttonText,
  isPrimary,
}: TariffCardProps) => {
  return (
    <div
      className={cn(
        "flex max-w-[413px] flex-col gap-4 rounded-[8px]",
        isPrimary ? "border-primary border" : "bg-primary",
      )}
    >
      <h2 className="md:text-[28px] text-[20px] p-[16px] md:p-[24px] font-medium leading-[36px] tracking-[-1.12px]">
        {title}
      </h2>

      <ul className="list-none text-[16px] leading-[20px] opacity-80">
        {features.map((feature, i) => (
          <li
            className="border-b px-[16px] md:px-[24px] border-dotted border-white/10 py-2"
            key={i}
          >
            <WithIcon
              icon={
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5625L4.71231 9.27481L9.96232 1.39982"
                    stroke="white"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            >
              {feature}
            </WithIcon>
          </li>
        ))}
      </ul>

      <div className="w-full p-[16px] md:p-[24px] flex flex-col gap-[24px] mt-auto">
        <div className="justify-between flex items-center">
          <div className="relative flex">
            <p className="text-[35px] font-medium">${price}</p>
            <p className="text-[18px] text-green-300 font-medium">
              -{discountPercentage}%
            </p>
          </div>
          <Select defaultValue="first">
            <SelectTrigger className="max-w-[128px] h-[36px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="first">12 месяцев</SelectItem>
              <SelectItem value="second">6 месяцев</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full flex-col">
          <p>{buttonText}</p>
          <p className="text-[12px] normal-case opacity-[56%]">
            5 дней бесплатно
          </p>
        </Button>
      </div>
    </div>
  );
};

export default TariffCard;
