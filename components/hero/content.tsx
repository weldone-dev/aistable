"use client"
import {useRef} from "react";
import {WiStars} from "react-icons/wi";
import {motion, useScroll, useTransform} from "framer-motion";
import AnimationText from "@/components/AnimationText";

const Content = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "end start"]
    })
    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const contentScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
    return (
        <motion.div
            style={{y: contentY, opacity: contentOpacity, scale: contentScale}}
            ref={ref}
            className={"flex flex-col justify-center items-center gap-y-6 pt-[50px] pb-[100px] px-[10px] text-white max-sm:!transform-none "}
        >
            <div className={"flex flex-wrap gap-[9px] items-center justify-center leading-[14px] text-sm font-bold"}>
                <div className={"flex gap-x-[9px] text-[#FFBCBC] rounded-[3px]"}>
                    <div className={"bg-[#FFFFFF1A] py-[4px] px-[6px]"}>N</div>
                    <div className={"bg-[#FFFFFF1A] py-[4px] px-[6px]"}>E</div>
                    <div className={"bg-[#FFFFFF1A] py-[4px] px-[6px]"}>W</div>
                </div>
                <div
                    className={"bg-[linear-gradient(90deg,_#FFBCBC_0%,#AD87FF_100%)] bg-clip-text text-transparent text-center"}>Next-Generation
                    of AI Images
                </div>
            </div>
            <h2 className={"text-[20vw] sm:text-8xl text-center sm:leading-[0.85] font-extrabold -tracking-[1.8px]"}>AI
                Image Generator ⚡️
            </h2>

            <AnimationText>Cost-effective solution to generate text in seconds and increasing your conversion
                rate.</AnimationText>

            <div className={"w-full"}>
                <form
                    className={"flex gap-x-[10px] py-[10px] px-[15px] rounded-[19px] shadow-[0px_1px_1px_0px_rgba(255,255,255,0.17)_inset] bg-[#3535357F]"}
                    onSubmit={(e) => e.preventDefault()}>
                    <div className={"text-4xl"}><WiStars/></div>
                    <input className={"bg-transparent w-full text-lg focus:outline-none"} type="text"
                           placeholder="an astronaut riding a horse on mars, hd, dramatic lighting"/>
                    <button
                        className={"rounded-[10px] text-[#AD87FF] font-semibold bg-white/10 py-0.5 px-6 hover:text-white hover:scale-110 hover:bg-transparent duration-300"}>Generate
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default Content;