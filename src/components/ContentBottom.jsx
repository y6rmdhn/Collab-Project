import { Button } from "./UI/Button";

export const ContentBottom = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center pt-[84px] px-[24px]">
        <h3 className="text-3xl font-extrabold mt-5">NEW THIS WEEK</h3>
        <p className="font-helvetica text-sm">
          Featuring The Nike Tech Moven Suit.
        </p>
        <Button bgColor={"#000"}>Shop New Arrivals</Button>
      </div>

      <img src="./assets/" alt="" />
    </div>
  );
};
