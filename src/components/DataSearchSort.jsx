function DataSearchSort() {
  return (
    <div className="flex justify-between items-center self-stretch flex-1">
      <div className="flex w-[248px] bg-[#ffff] py-[10px] px-4 items-center gap-2 rounded border border-[#D9D9D9]">
        <img src="./images/search.svg" alt="search" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search by order ID..."
          className="font-px-regular w-full focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex py-[6px] px-3 items-center gap-[6px] rounded border border-[#D9D9D9] bg-[#FFF]">
          <p className="">Sort</p>
          <img src="./images/sort.svg" alt="sort" className="w-4 h-4" />
        </div>
        <div className="w-9 h-9 border border-[#D9D9D9] bg-[#FFF] rounded flex items-center justify-center">
          <img src="./images/download.svg" alt="download" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default DataSearchSort;
