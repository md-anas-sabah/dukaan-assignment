import orderData from "../Data/data.json";
function DisplayData() {
  return (
    <table className="w-[1128px] mt-3">
      <thead className="flex py-[10px] px-3  rounded bg-[#F2F2F2]">
        <tr className="flex gap-10 w-full">
          <th className="flex items-start flex-col flex-1 font-px-regular text-[14px] font-medium leading-5">
            Order ID
          </th>
          <th className="flex flex-1 items-center gap-1  font-px-regular text-[14px] font-medium leading-5">
            Order date
            <img src="./images/triangle.svg" alt="down" className="h-2 w-2" />
          </th>
          <th className="flex flex-1 justify-end items-center gap-1  font-px-regular text-[14px] font-medium leading-5">
            Order amount
          </th>
          <th className="flex flex-1 justify-end items-center gap-1  font-px-regular text-[14px] font-medium leading-5">
            Transaction fees <img src="./images/Info.svg" alt="info" />
          </th>
        </tr>
      </thead>
      {orderData.map((data) => {
        return (
          <tbody className="flex py-[10px] px-3  rounded" key={data.orderId}>
            <tr className="flex gap-10 w-full">
              <td className="flex items-start flex-col flex-1 font-px-regular text-[14px] font-medium leading-5 text-[#146EB4] ">
                {data.orderId}
              </td>
              <td className="flex flex-1 items-center gap-1  font-px-regular text-[14px] font-normal leading-5">
                {data.orderDate}
              </td>
              <td className="flex flex-1 justify-end items-center gap-1  font-px-regular text-[14px] font-normal leading-5">
                {data.orderAmount}
              </td>
              <td className="flex flex-1 justify-end items-center gap-1  font-px-regular text-[14px] font-normal leading-5">
                {data.transaction}
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

export default DisplayData;
