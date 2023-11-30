import Link from "next/link";
import {FaSquareFacebook, FaInstagram, FaTwitter} from "react-icons/fa6";
import {Heading, Selection} from "@/components/Title";
import AnimationText from "@/components/AnimationText";

const Footer = () => (
    <div className={"py-[100px] bg-[url('/footer-bg.jpg')] bg-cover bg-center"}>
        <div className={"flex flex-col gap-[40px] items-center p-[10px] sm:w-1/2 mx-auto"}>
            <div className={"text-center"}>
                <Heading className={"!inline"}>AI Hub is built </Heading>
                <Selection className={"max-[1227px]:!inline !leading-[1]"}>for everyone.</Selection>
            </div>
            <AnimationText className={"!text-2xl text-[rgb(157,158,182)]"}>
                Join us today and experience the power of
                AI-powered text creation for yourself!
            </AnimationText>
        </div>
        <div className={"w-full flex justify-center"}>
            <button
                className={"group relative flex items-center text-white justify-center border-white/50 border-2  rounded-full py-[10px] mt-[30px] mb-[10px] overflow-hidden duration-300 hover:scale-110 px-[20px]"}
            >
                <div className={"flex items-center gap-x-4 z-10 text-2xl tracking-wider font-bold"}>
                    Get Started
                </div>
                <svg
                    width="100"
                    height="100"
                    className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 w-full h-full pointer-events-none"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient
                            id="bg-gradient-5689ad4"
                            x1="0.088163490354232"
                            y1="0"
                            x2="0.91183650964577"
                            y2="1"
                        >
                            <stop offset="0%" stopColor="#59D877">
                                <animate
                                    dur="8"
                                    repeatCount="indefinite"
                                    attributeName="stop-color"
                                    values="#59D877;#356EF4;#FF3CF6;#59D877"
                                ></animate>
                            </stop>
                            <stop offset="100%" stopColor="#FFB7B7">
                                <animate
                                    dur="8"
                                    repeatCount="indefinite"
                                    attributeName="stop-color"
                                    values="#FFB7B7;#32F1B8;#FF3CF6;#FFB7B7"
                                ></animate>
                            </stop>
                        </linearGradient>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        className="w-full h-full"
                        fill="url(#bg-gradient-5689ad4)"
                    ></rect>
                </svg>

            </button>
        </div>
        <ul className={"flex flex-wrap text-white/50 justify-center gap-8 mt-16"}>
            {['Management', 'Reporting', 'Tracking', 'Subscribe', 'Company'].map((item, index) => (
                <li key={index} className={"hover:text-white duration-300"}>
                    <Link href={"#"}>{item}</Link>
                </li>
            ))}
        </ul>
        <ul className={"flex text-white/50 justify-center gap-8 mt-16 text-2xl"}>
            <li><Link href={"#"}><FaSquareFacebook/></Link></li>
            <li><Link href={"#"}><FaInstagram/></Link></li>
            <li><Link href={"#"}><FaTwitter/></Link></li>
        </ul>
    </div>
);


export default Footer;