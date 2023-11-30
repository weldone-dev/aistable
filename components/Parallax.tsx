"use client"
import {useRef} from "react";
import type {ComponentProps, FC} from 'react';
import {motion, useAnimationFrame, useMotionValue, useTransform, wrap} from "framer-motion";
import classNames from "classnames";

interface IProps extends ComponentProps<"div"> {
    speed?: number;
}

const Parallax: FC<IProps> = ({children, className, speed = 5}) => {
    const baseX = useMotionValue(0);
    const x = useTransform(baseX, (v) => `${wrap(-0, -25, v)}%`);
    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * speed * (delta / 1000);
        moveBy += directionFactor.current * moveBy;
        baseX.set(baseX.get() - moveBy);
    })
    return (
        <div className={"overflow-hidden flex whitespace-nowrap flex-nowrap"}>
            <motion.div className={classNames("flex flex-nowrap whitespace-nowrap", className)} style={{x}}>
                {children}
            </motion.div>
        </div>
    );
};

export default Parallax;