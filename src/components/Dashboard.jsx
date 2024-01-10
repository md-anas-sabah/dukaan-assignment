import Header from "./Header.jsx";

function Dashboard() {
  return (
    <div className="w-[1216px] bg-[#FAFAFA]">
      <Header />
      <div className="w-[1216px] flex flex-col gap-8 px-8 py-8">
        <div className="flex flex-col gap-6">
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
          <div className="flex gap-5">
            <div className="flex p-5 flex-col gap-4 flex-1 bg-[#fff] rounded-lg shadow-sm">
              <h1 className="text-[#4D4D4D] font-px-regular text-base leading-6">
                Online Orders
              </h1>
              <p className="text-[#1A181E] text-[32px] font-medium leading-[38px] font-px-regular">
                231
              </p>
            </div>
            <div className="flex p-5 flex-col gap-4 flex-1 bg-[#fff] rounded-lg shadow-sm">
              <h1 className="text-[#4D4D4D] font-px-regular text-base leading-6">
                Amount received
              </h1>
              <p className="text-[#1A181E] text-[32px] font-medium leading-[38px] font-px-regular">
                ₹23,92,312.19
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-[#1A181E] text-[20px] font-medium leading-[28px] font-px-regular ">
            Transactions | This Month
          </div>
          <div className="flex flex-col pt-3 pl-3 pb-6 pr-3 rounded-[8px] bg-[#FFF] shadow-sm">
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
                  <img
                    src="./images/download.svg"
                    alt="download"
                    className="w-5 h-5"
                  />
                </div>
              </div>
            </div>
            {/* <div className="w-[1128px flex py-[10px] px-3 items-center gap-10 rounded bg-[#F2F2F2] mt-3"> */}
            <table className="w-[1128px] mt-3">
              {/* order Id order date */}
              <thead className="flex flex-col py-[10px] px-3  gap-10 rounded bg-[#F2F2F2]">
                <tr>
                  <th className="flex items-start flex-col flex-1 ">Order ID</th>
                  <th>
                    Order date
                    <img src="./images/triangle.svg" alt="down" />
                  </th>
                  <th>Order amount</th>
                  <th>
                    Transaction fees <img src="./images/info.svg" alt="info" />
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
            {/* </div> */}
            <div>{/*  */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
