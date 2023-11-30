"use client"
import type {FC} from "react";
import {motion, SVGMotionProps} from "framer-motion";

interface IProps extends SVGMotionProps<SVGElement> {
    isOpen: boolean;
}

const MenuButton: FC<IProps> = ({isOpen, ...props}) => {
    const width = 24
    const height = 16;
    const unitHeight = 3;
    const unitWidth = (unitHeight * (width)) / (height);
    const top = {
        closed: {rotate: 0, translateY: 0},
        opened: {rotate: 45, translateY: 1}
    };
    const bottom = {
        closed: {rotate: 0, translateY: 0},
        opened: {rotate: -45, translateY: -1}
    };
    const variant = isOpen ? "opened" : "closed";
    const lineProps = {
        stroke: "#FFF",
        strokeWidth: 4,
        vectorEffect: "non-scaling-stroke",
        initial: "closed",
        animate: variant,
        transition: {type: "spring"}
    };
    return (
        <motion.svg
            viewBox={`0 0 ${unitWidth} ${unitHeight}`}
            overflow="visible"
            preserveAspectRatio="none"
            width={width}
            height={height}
            {...props}
        >
            <motion.line
                x1="0"
                x2={unitWidth}
                y1="0"
                y2="0"
                variants={top}
                strokeLinecap={'round'}
                {...lineProps}
            />
            <motion.line
                x1="0"
                x2={unitWidth}
                y1="2"
                y2="2"
                variants={bottom}
                strokeLinecap={'round'}
                {...lineProps}
            />
        </motion.svg>
    );
};

export default MenuButton;