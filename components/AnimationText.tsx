"use client"
import type {ComponentProps, FC} from 'react';
import {motion} from "framer-motion";
import classNames from "classnames";

interface IProps extends ComponentProps<"span"> {
    children: string;
    className?: string;
}

const AnimationText: FC<IProps> = ({children, className}) => {
    const textArray = children.split(" ");
    const result = textArray.map((word, index) => (
        <span key={index} className={"inline-block whitespace-nowrap overflow-hidden"}>
            <motion.span
                className={"inline-block"}
                variants={{
                    hidden: {
                        y: "200%",
                        transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85}
                    },
                    visible: {
                        y: 0,
                        transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: Math.log2(index + 2)}
                    }
                }}

            >
                {word}
            </motion.span>
        </span>
    ));
    return (
        <motion.p
            initial={"hidden"}
            animate={"visible"}
            className={classNames("flex flex-wrap justify-center gap-x-2 text-[aliceblue] text-lg font-medium leading-[24px] tracking-[.2px]", className)}
        >
            {result}
        </motion.p>
    )
};

export default AnimationText;