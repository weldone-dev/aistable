"use client"
import type {FC} from "react";
import {motion, MotionValue, useTransform} from "framer-motion";
import Image, {StaticImageData} from "next/image";
import img1 from "@/public/imgs-1.webp";
import img2 from "@/public/imgs-2.webp";
import img3 from "@/public/imgs-3.webp";
import img4 from "@/public/imgs-4.webp";
import img5 from "@/public/imgs-5.webp";
export var images = [img1, img2, img3, img4, img5];

interface IGalleryItemProps {
    image: StaticImageData;
    index: number;
    scrollYProgress: MotionValue<number>;
}
const GalleryItem: FC<IGalleryItemProps> = ({image, index, scrollYProgress}) => {
    const value = (((images.length / 2) | 0) - index);
    let rotateZ: MotionValue<number> | number = useTransform(scrollYProgress, [0, 1], [value > 0 ? 45 : -45, 0])
    if (value === 0) {
        rotateZ = 0;
    }
    let translateX: MotionValue<string> | number = useTransform(scrollYProgress, [0, 1], [value > 0 ? "100%" : "-100%", "0%"]);
    if (value === 0) {
        translateX = 0;
    }
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 0.9]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
    return (<motion.div
        style={{
            opacity: value === 0 ? 1 : opacity,
            rotateZ,
            translateX,
            zIndex: value === 0 ? 2 : 1,
            scale
        }}
        className={"overflow-hidden rounded-lg"}
    >
        <Image src={image} alt={"Example"} className={"object-contain"}/>
    </motion.div>)
};
export default GalleryItem