import Header from "./Header.jsx";
import DisplayData from "./DisplayData.jsx";
import Card from "./Card.jsx";
import SubHeading from "./SubHeading.jsx";
import Pagination from "./Pagination.jsx";
import DataSearchSort from "./DataSearchSort.jsx";
import TableHeader from "./TableHeader.jsx";

function Dashboard() {
  return (
    <div className="w-[1216px] bg-[#FAFAFA]">
      <Header />
      <div className="w-[1216px] flex flex-col gap-8 px-8 py-8">
        <div className="flex flex-col gap-6">
          <SubHeading />
          <div className="flex gap-5">
            <Card title={"Online Orders"} desc={"231"} />
            <Card title={"Amount received"} desc={"₹23,92,312.19"} />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <TableHeader />
          <div className="flex flex-col pt-3 pl-3 pb-6 pr-3 rounded-[8px] bg-[#FFF] shadow-sm">
            <DataSearchSort />
            <DisplayData />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
