function Header() {
  return (
    <div className="flex w-full py-3 px-8 items-center gap-4 bg-[#FFF] border-b border-[#D9D9D9]">
      <div className="flex items-center gap-4 flex-1">
        <h1 className="font-px-regular text-[15px] leading-[22px]">Payments</h1>
        <div className="flex items-center gap-[6px]">
          <img
            src="./images/help.svg"
            alt="help"
            className="h-[14px] w-[14px]"
          />
          <p className="font-px-regular text-[12px] leading-4 text-[#4D4D4D]">
            How it works
          </p>
        </div>
      </div>
      <div className="flex w-[400px] py-[9px] px-4 bg-[#F2F2F2] rounded-[6px] items-center gap-[8px]">
        <img src="./images/search.svg" alt="search" className="w-4 h-4" />
        <p className="font-px-regular text-[15px] leading-[22px] text-[#808080]">
          Search features, tutorials, etc.
        </p>
      </div>
      <div className="flex-1 flex flex-row justify-end items-center gap-[8px]">
        <div className="bg-[#E6E6E6] rounded-full h-10 w-10 items-center flex justify-center">
          <img
            src="./images/group.svg"
            alt="group"
            className="h-5 w-5 items-center flex justify-center"
          />
        </div>
        <img src="./images/dashdown.svg" alt="dropdown" />
      </div>
    </div>
  );
}

export default Header;
