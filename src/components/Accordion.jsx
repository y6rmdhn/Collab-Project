import { IoIosArrowDown } from "react-icons/io";

export const Accordion = (props) => {
  return (
    <div className="overflow-hidden flex flex-col">
      <div className="flex justify-between cursor-pointer py-3">
        <button className="text-base">{props.contentBtn}</button>
        <IoIosArrowDown className="h-5 w-5" />
      </div>
      <div
        className={`transition-[max-height] duration-300 ease-in-out flex flex-col gap-3 font-normal text-gray-500`}
      >
        <p className="pt-3">{props.contentOne}</p>
        <p>{props.contentTwo}</p>
        <p>{props.contentThree}</p>
        <p>{props.contentFour}</p>
        <p>{props.contentFive}</p>
      </div>
      <div className="h-[2px] w-full rounded-full mt-2 bg-gray-200"></div>
    </div>
  );
};
