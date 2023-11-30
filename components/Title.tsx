"use client";
import type {ButtonHTMLAttributes, FC} from 'react';
import classNames from "classnames";

export const Heading: FC<ButtonHTMLAttributes<HTMLHeadingElement>> = ({children, className, ...props}) => (
    <h2 className={classNames("flex flex-col items-center text-white text-[calc(24px+10vw)] sm:text-8xl font-bold", className)} {...props}>
        {children}
    </h2>
);

interface ISelectionProps extends ButtonHTMLAttributes<HTMLHeadingElement> {
    children: string;
}

export const Selection: FC<ISelectionProps> = ({children, className, ...props}) => {
    const items = children.split(" ");
    let child;
    let style = "inline-block bg-clip-text text-transparent";
    if (items.length == 1) {
        child =
            <div className={classNames(style, "bg-[linear-gradient(90deg,#E35252_0%,#AD87FF_100%)]")}>{items[0]}</div>
    }
    if (items.length == 2) {
        child = items.map((item, index) => (
            <div key={index}
                 className={classNames(style, index == 0 ? "bg-[linear-gradient(90deg,#E45353_0%,#CD699A_100%)]" : "bg-[linear-gradient(90deg,_#C76EAC_0%,#AD86FF_100%)]")}>{item}</div>
        ));
    }
    return (
        <div
            className={classNames("inline-flex flex-wrap gap-x-4 leading-[1.2] text-[calc(24px+10vw)] sm:text-8xl", className)}
            {...props}
        >
            {child}
        </div>
    )
};
