export interface TradeCardProps {
  pair: string;
  tradeType: string;
  lastUpdate: string;
  profitPercent: number;
  profitDirection?: "up" | "down";
  target: number;
  entryDate: string;
}

export const Card = ({
  pair,
  tradeType,
  lastUpdate,
  profitPercent,
  profitDirection,
  target,
  entryDate,
}: TradeCardProps) => {
  return (
    <div className="relative px-[16px] py-[12px] min-w-[300px] h-[208px] rounded-[4px]">
      <svg
        viewBox="0 0 299 208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full  "
      >
        <path
          d="M258.169 1.15469C257.42 0.41488 256.41 0 255.357 0H4C1.79086 0 0 1.79086 0 4V204C0 206.209 1.79086 208 4 208H295C297.209 208 299 206.209 299 204V43.1709C299 42.1017 298.572 41.0771 297.811 40.3256L258.169 1.15469Z"
          fill="#6A54FF"
        />
      </svg>
      <svg
        width="111"
        height="161"
        viewBox="0 0 111 161"
        fill="none"
        className="absolute top-2 right-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.15">
          <path
            d="M63.4329 116.829L4.96763e-05 7.32207L31.5081 32.6069L71.7832 102.365L63.4329 116.829Z"
            fill="#000001"
          />
          <path
            d="M122.979 50.5303L59.8597 160.218L66.003 120.289L106.278 50.5303L122.979 50.5303Z"
            fill="#000001"
          />
          <path
            d="M74.058 94.1007L97.9159 52.7775H50.2L74.058 94.1007Z"
            fill="#000001"
          />
          <path
            d="M36.1579 32.8049L162.71 32.6237L125.058 47.2681L44.5082 47.2681L36.1579 32.8049Z"
            fill="#000001"
          />
        </g>
      </svg>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <h3 className="uppercase text-[20px]">{pair}</h3>
          <p className="text-[14px] opacity-40">
            {tradeType} * {lastUpdate}
          </p>
        </div>
        <div>
          <div>
            <p className="text-[14px] opacity-70 uppercase">
              {profitDirection === "up" ? "Прибыль" : "Убыток"}
            </p>
            <h3
              className="text-[28px]"
              style={{
                color: profitDirection === "up" ? "#65ff54" : "#FF4D4F",
              }}
            >
              {profitPercent}
            </h3>
          </div>
          <div className="flex text-[14px] justify-between">
            <p className="opacity-70 text-[14px] ">Цель {target}</p>
            <h3 className="opacity-40 text-[14px] ">{entryDate}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
