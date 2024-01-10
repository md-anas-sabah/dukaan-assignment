function SubHeading() {
  return (
    <div className="flex justify-between items-center self-stretch">
      <h1 className="font-px-regular text-xl font-medium leading-7 text-[#1A181E] ">
        Overview
      </h1>
      <div className="flex items-center gap-1 justify-center w-[137px] h-[36px] rounded border border-filter bg-[#fff]">
        <p className="font-px-regular text-base leading-6 text-[#4D4D4D]">
          Last Month
        </p>
        <img src="./images/arrow.svg" alt="arrow" className="h-4 w-4" />
      </div>
    </div>
  );
}

export default SubHeading;
