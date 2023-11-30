"use client"
import {FC, useEffect, useState} from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import ParallaxText from "@/components/ParallaxText";
import MenuButton from "@/components/navbar/menuButton";
import {menuList} from "@/components/navbar/menu";
import logo from "@/public/logo.svg";

interface IProps {
    isHidden: boolean;
}

const MobileNav: FC<IProps> = ({isHidden}) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    useEffect(() => {
        if (isHidden) {
            setOpenMenu(false);
        }
    }, [isHidden]);
    return (
        <div className={"relative h-full flex flex-col justify-center"}>
            <div className={"p-[10px] my-auto flex z-50 justify-between items-center text-white font-semibold"}>
                <Image src={logo} alt={"AI Hob"}/>
                <div className={"flex gap-x-5"}>
                    <div className={"overflow-hidden w-[80px]"}>
                        <ParallaxText>Get the App</ParallaxText>
                    </div>
                    <button className={"flex items-center gap-4"} onClick={() => setOpenMenu(open => !open)}>
                        <span>Menu</span>
                        <div className={"mt-2"}>
                            <MenuButton isOpen={openMenu}/>
                        </div>
                    </button>
                </div>
            </div>
            <motion.div
                variants={{
                    close: {
                        opacity: 0,
                        rotateX: 90
                    },
                    open: {
                        opacity: 1,
                        rotateX: 0
                    }
                }}
                animate={openMenu ? "open" : "close"}
                style={{originY: 0}}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100
                }}
                className={"absolute flex top-[100%] -translate-y-[150%] left-0 right-0 z-10 overflow-hidden"}
            >
                <ul className={"transform-gpu py-[20px]  px-[45px] bg-black rounded-b-[20px] w-full"}>
                    {menuList.map((item, index) => (
                        <li key={index} className={"py-[10px] block"}>
                            <a href={item.path} className={"block"}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default MobileNav;