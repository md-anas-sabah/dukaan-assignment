function Pagination() {
  return (
    <div className="mt-6 flex justify-center items-center gap-6 font-px-regular ">
      <div className="flex pt-[6px] pr-3  pb-[6px] pl-[6px] items-center justify-center gap-[6px] rounded border border-[#D9D9D9] ">
        <img src="./images/prev.svg" alt="prev" className="h-[18px] w-[18px]" />
        <p className="font-px-regular text-[14px] font-medium leading-5 text-[#4D4D4D]">
          Previous
        </p>
      </div>
      <div className="flex flex-start gap-2 ">
        <div>1</div>
        <div>...</div>
        <div className="text-white font-medium flex w-[28px] h-[28px] py-[6px] px-2 rounded bg-[#146EB4] items-center justify-center text-center ">
          10
        </div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
      </div>
      <div className="flex  items-center justify-center pt-[6px] pr-3  pb-[6px] pl-[6px] gap-[6px] rounded border border-[#D9D9D9] ">
        <p className="font-px-regular text-[14px] font-medium leading-5 text-[#4D4D4D]">
          Next
        </p>
        <img src="./images/next.svg" alt="prev" className="h-[18px] w-[18px]" />
      </div>
    </div>
  );
}

export default Pagination;
