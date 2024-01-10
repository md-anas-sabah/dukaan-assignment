/* eslint-disable react/prop-types */
function Card({ title, desc }) {
  return (
    <div className="flex p-5 flex-col gap-4 flex-1 bg-[#fff] rounded-lg shadow-sm">
      <h1 className="text-[#4D4D4D] font-px-regular text-base leading-6">
        {title}
      </h1>
      <p className="text-[#1A181E] text-[32px] font-medium leading-[38px] font-px-regular">
        {desc}
      </p>
    </div>
  );
}

export default Card;
