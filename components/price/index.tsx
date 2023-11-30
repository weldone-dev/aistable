import Subtitle from "@/components/Subtitle";
import {Heading, Selection} from "@/components/Title";
import classNames from "classnames";
import {FaCheck} from "react-icons/fa";
import {GoDash} from "react-icons/go";
import {HiOutlineCursorArrowRipple} from "react-icons/hi2";

const Price = () => (
    <>
        <div className={"flex flex-col gap-[40px] items-center p-[10px]"}>
            <Subtitle className={""}>Pricing Plans</Subtitle>
            <Heading>Affordable. <Selection>Flexible.</Selection></Heading>
        </div>
        <ul className={"flex flex-wrap gap-10 justify-center mx-[5%] mt-[40px]"}>
            {priceOfferList.map((item, index) => (
                <li
                    key={index}
                    className={classNames("w-full sm:max-w-[30%] sm:min-w-[320px]  inline-block p-[24px] text-[#9D9EB6] hover:text-white border-2 border-[#343542] rounded-xl duration-300", index == 1 && "text-white")}
                >
                    <div className={"relative"}>
                        <h3 className={"text-xl font-bold leading-[2]"}>{item.name}</h3>
                        <div className={"absolute -top-[10px] right-0 text-[#0044F1]"}>{item.sale}</div>
                    </div>
                    <div className={"text-5xl font-bold tracking-widest"}>${item.price}<span
                        className={"text-2xl"}>/month</span></div>
                    <button
                        className={"group relative flex items-center text-white justify-center border-white border-[1px] hover:border-transparent w-full rounded-lg py-[10px] mt-[30px] mb-[10px] overflow-hidden duration-300 hover:scale-110"}>
                        <div className={"flex items-center gap-x-4"}>
                            Select Plan
                            <HiOutlineCursorArrowRipple className={"mt-0.5 scale-125 -rotate-12"}/>
                        </div>
                        <svg
                            className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 w-full h-full pointer-events-none -z-10 "
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <linearGradient id="bg-gradient-010f2c7" x1="0" y1="0.5" x2="1" y2="0.5">
                                    <stop offset="0%" stopColor="#986FEF">
                                        <animate dur="20" repeatCount="indefinite" attributeName="stop-color"
                                                 values="#986FEF;#D4419C;#58DA79;#5610EC;#986FEF"></animate>
                                    </stop>
                                    <stop offset="100%" stopColor="#E34F4F">
                                        <animate dur="20" repeatCount="indefinite" attributeName="stop-color"
                                                 values="#E34F4F;#545EBF;#76A3C7;#5610EC;#E34F4F"></animate>
                                    </stop>
                                </linearGradient>
                            </defs>
                            <rect
                                width="100%" height="100%"
                                className="w-full h-full"
                                fill="url(#bg-gradient-010f2c7)">
                            </rect>
                        </svg>
                    </button>
                    <div className={"text-center py-4"}>{item.description}</div>
                    <div className={"flex flex-col gap-y-4 mt-5"}>
                        {includedPrice.map((text, index) => (
                            <div key={index}
                                 className={classNames("flex items-center gap-x-3", !item.advantages.includes(index) && "text-[#9D9EB6]")}
                            >
                                {item.advantages.includes(index)
                                    ? <FaCheck/>
                                    : <GoDash/>
                                }
                                {text}
                            </div>
                        ))}
                    </div>
                </li>
            ))}
        </ul>
    </>
);
const includedPrice = [
    "300 Words / Month",
    "User Analitics",
    "2 Languages",
    "Api Access",
    "Free Support"
];
const priceOfferList = [
    {
        name: "Free",
        sale: "",
        price: 0,
        description: "The cheapest way to get stasrted.",
        advantages: [0, 1, 2]
    },
    {
        name: "Standart",
        sale: "Save 40%",
        price: 23,
        description: "The most popular plan.",
        advantages: [0, 1, 2, 3]
    },
    {
        name: "Enterprise",
        sale: "",
        price: 89,
        description: "Contact us for more information.",
        advantages: [0, 1, 2, 3, 4]
    }
];
export default Price;