import Image from "next/image";
import Link from "next/link";
import ParallaxText from "@/components/ParallaxText";
import {menuList} from "@/components/navbar/menu";
import logo from "@/public/logo.svg";

const DesktopNav = () => (
    <div className={"flex p-[10px] w-full h-full justify-between items-center"}>
        <Image src={logo} alt={"AI Hob"}/>
        <div className={"flex"}>
            <ul className={"flex gap-[54px]"}>
                {menuList.map((item, index) => (
                    <li key={index} className={"hover:text-white duration-300"}><Link
                        href={item.path}>{item.title}</Link></li>
                ))}
            </ul>
        </div>
        <div className={"overflow-hidden w-[80px]"}>
            <ParallaxText>Get the App</ParallaxText>
        </div>
    </div>
);

export default DesktopNav;