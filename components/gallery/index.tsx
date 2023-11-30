"use client"
import {useRef} from "react";
import {useScroll} from "framer-motion";
import GalleryItem, {images} from "@/components/gallery/item";

const Gallery = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["center end", "end center"]
    })

    return (
        <div
            className={"hidden sm:block relative py-20 "}
            ref={ref}
        >
            <div className={"absolute bg-white/10 inset-0 blur-xl"}></div>
            <div className={"flex items-center gap-x-[10%] w-4/5 mx-auto"}>
                {images.map((image, index) => (
                    <GalleryItem key={index} image={image} index={index} scrollYProgress={scrollYProgress}/>
                ))}
            </div>
        </div>
    );
};

export default Gallery;