import type {FC} from 'react';
import Image from "next/image";
import classNames from "classnames";
import {IAboutPeople} from "@/components/testimonials/types";

const AboutPeople: FC<IAboutPeople & { className?: string }> = ({name, avatar, position, description, className}) => (
    <div
        className={classNames("inline-block group text-white border-2 rounded-lg p-[24px] duration-300 hover:bg-[#FFF8F8] hover:text-black hover:scale-110 hover:shadow-[0_20px_70px_0_rgba(255,255,255,0.1)]", className)}
    >
        <div className={"flex items-center gap-4"}>
            <div className={"inline-block overflow-hidden rounded-full  min-w-[60px] h-[60px]"}>
                <Image src={avatar} alt={""} className={"w-full h-full object-contain"}/>
            </div>
            <div>
                <div className={"text-xl"}>{name}</div>
                <div className={"text-sm leading-[1.8] text-[#9D9EB6]"}>{position}</div>
            </div>
        </div>
        <p className={"mt-4 text-[#9D9EB6] group-hover:text-black/75 text-lg"}>
            {description}
        </p>
    </div>
);

export default AboutPeople;