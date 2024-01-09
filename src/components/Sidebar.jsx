const navbarItems = [
  {
    id: 1,
    name: "Home",
    icon: "./images/home.svg",
    alt: "home",
  },
  {
    id: 2,
    name: "Orders",
    icon: "./images/orders.svg",
    alt: "orders",
  },
  {
    id: 3,
    name: "Products",
    icon: "./images/products.svg",
    alt: "products",
  },
  {
    id: 4,
    name: "Delivery",
    icon: "./images/delivery.svg",
    alt: "delivery",
  },
  {
    id: 5,
    name: "Marketing",
    icon: "./images/marketing.svg",
    alt: "marketing",
  },
  {
    id: 6,
    name: "Analytics",
    icon: "./images/analytics.svg",
    alt: "Analytics",
  },
  {
    id: 7,
    name: "Payments",
    icon: "./images/payment.svg",
    alt: "Payments",
  },
  {
    id: 9,
    name: "Discounts",
    icon: "./images/discount.svg",
    alt: "Discounts ",
  },
  {
    id: 10,
    name: "Audience",
    icon: "./images/audience.svg",
    alt: "Audience",
  },
  {
    id: 11,
    name: "Appearance",
    icon: "./images/appearance.svg",
    alt: "Appearance",
  },
  {
    id: 12,
    name: "Plugins",
    icon: "./images/plugins.svg",
    alt: "Plugins",
  },
];

function Sidebar() {
  return (
    <div className="flex flex-col justify-between flex-grow-1 bg-sidebarBG items-center">
      <div className="flex flex-col w-[224px] py-4 px-[10px] gap-6">
        <div className="flex w-[192px] items-center gap-3">
          <img
            src="./images/navbar-image.png"
            alt="logo"
            className="h-[39px] w-[39px] rounded-[4px]"
          />
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col">
              <h1 className="text-[15px] text-[#fff] font-px-regular font-medium ">
                Nishyan
              </h1>
              <p className="underline text-gray-500 leading-4 font-px-regular text-[13px]">
                Visit store
              </p>
            </div>
            <img
              src="./images/dropdown.svg"
              alt="dropdown"
              className="h-[20px] w-[20px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          {navbarItems.map((item) => {
            return (
              <div
                key={item.id}
                className="flex w-[208px] py-2 px-4 flex-start gap-3 rounded items-center"
              >
                <img src={item.icon} alt={item.alt} className="w-5 h-5" />
                <h1 className="text-[#fff] font-px-regular font-medium leading-5">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[#353C53] w-[192px] py-[6px] px-3 mb-4 rounded">
        <div className="flex w-[192px] items-center gap-3">
          <div className="flex p-[6px] rounded-[4px] bg-credit ">
            <img
              src="./images/credits.svg"
              alt="logo"
              className="h-[24px] w-[24px]"
            />
          </div>
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-[13px] text-gray-400 font-px-regular leading-4">
                Available credits
              </h1>
              <p className="text-[#fff] leading-4 font-px-regular text-[16px]">
                222.10
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
