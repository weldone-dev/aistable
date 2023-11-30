"use client"
import {useState} from "react";
import {useScroll, motion, useMotionValueEvent} from "framer-motion";
import MobileNav from "@/components/navbar/mobile";
import DesktopNav from "@/components/navbar/desktop";

const NavBar = () => {
    const [hidden, setHidden] = useState(false);
    const {scrollY} = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            return setHidden(true);
        } else {
            return setHidden(false);
        }
    })
    return (
        <motion.nav
            variants={{
                visible: {y: 0},
                hidden: {y: "-100%"}
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{duration: 0.35, easing: "easeInOut"}}
            className={"fixed w-full backdrop-blur-lg bg-black/30  flex justify-between text-white/80 font-semibold z-40"}
        >
            <div className={"hidden sm:block w-full"}>
                <DesktopNav/>
            </div>
            <div className={"sm:hidden w-full"}>
                <MobileNav isHidden={hidden}/>
            </div>
        </motion.nav>
    );
};

export default NavBar;