"use client"
import Image from "next/image";
import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion"
import Subtitle from "@/components/Subtitle";
import {Heading, Selection} from "@/components/Title";
import img1 from "@/public/img-capabilities-1.jpg"
import img2 from "@/public/img-capabilities-2.jpg"
import img3 from "@/public/img-capabilities-3.jpg"
import img4 from "@/public/img-capabilities-4.jpg"

const Capabilities = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end start", "start start"]
    })
    const transformYImage1 = useTransform(scrollYProgress, [0, 1], ["20%", "25%"]);
    const transformYImage2 = useTransform(scrollYProgress, [0, 1], ["60%", "90%"]);
    return (
        <div ref={ref}
             className={"pt-[50px] pb-[100px] mt-[60px] sm:mt-[100px] border-t-[rgb(157,158,182)] border-t-[1px] border-b-[rgb(157,158,182)] border-b-[1px]"}
        >
            <div className={"flex flex-col gap-[40px] items-center p-[10px]"}>
                <Subtitle>Unleash the power of AI</Subtitle>
                <Heading>Generate <Selection className={"justify-center"}>unique images.</Selection></Heading>
            </div>
            <div className={"relative h-[800px]"}>
                <motion.div
                    style={{y: transformYImage1, x: "5%"}}
                    className={"absolute w-3/4 max-w-[650px] h-[450px] left-0 group"}
                >
                    <Image src={img2} alt={""}
                           className={"absolute inset-0 w-full h-full object-cover duration-300 object-left-top"}/>
                    <Image src={img1} alt={""}
                           className={"absolute inset-0 w-full h-full object-cover object-top opacity-100 group-hover:opacity-0 duration-500"}/>
                </motion.div>
                <motion.div
                    style={{y: transformYImage2, x: "-5%"}}
                    className={"absolute w-4/5 max-w-[650px] h-[450px] right-0 group"}
                >
                    <Image src={img4} alt={""}
                           className={"absolute inset-0 w-full h-full object-cover object-right-top duration-300"}/>
                    <Image src={img3} alt={""}
                           className={"absolute inset-0 w-full h-full object-cover object-top opacity-100 group-hover:opacity-0 duration-500"}/>
                </motion.div>
            </div>
            <div className={"text-white p-[20px] flex flex-col gap-y-[60px] justify-between overflow-x-hidden"}>
                <motion.div
                    initial={"hidden"}
                    transition={{duration: .5, delay: 0.3}}
                    whileInView={"visible"}
                    variants={{
                        hidden: {
                            rotateX: 90,
                            rotateZ: -45,
                            opacity: 0
                        },
                        visible: {
                            rotateX: 0,
                            rotateZ: 0,
                            opacity: 1
                        }
                    }}
                    className={"max-w-[630px] origin-bottom-left"}
                >
                    <h3 className={"text-3xl mb-[20px] font-bold leading-[1.4]"}>
                        Customizable Image Styles
                    </h3>
                    <p className={"text-[26px] leading-[32px] text-[#6C6C6C]"}>
                        This feature gives users the freedom to design images according to their own style and
                        preferences, as well as ready-made templates.
                    </p>
                </motion.div>
                <motion.div
                    initial={"hidden"}
                    transition={{duration: .5, delay: 0.3}}
                    whileInView={"visible"}
                    variants={{
                        hidden: {
                            rotateX: 90,
                            rotateZ: 45,
                            opacity: 0
                        },
                        visible: {
                            rotateX: 0,
                            rotateZ: 0,
                            opacity: 1
                        }
                    }}
                    className={"ml-auto max-w-[630px] text-right origin-bottom-right"}
                >
                    <h3 className={"text-3xl mb-[20px] font-bold leading-[1.4]"}>
                        Unprecedented Image Creation
                    </h3>
                    <p className={"text-[26px] leading-[32px] text-[#6C6C6C]"}>
                        Using advanced AI algorithms, you can create unique images for users beyond their imagination.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Capabilities;