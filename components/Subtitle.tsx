import type {ButtonHTMLAttributes, FC} from "react";

const Subtitle: FC<ButtonHTMLAttributes<HTMLDivElement>> = ({children, ...props}) => (
    <div className={"inline-block rounded-full py-[6px] px-[12px] bg-white/5"} {...props}>
        <h6 className={"block bg-[linear-gradient(90deg,_#E35252_0%,#AD87FF_100%)] bg-clip-text text-transparent font-bold"}>
            {children}
        </h6>
    </div>
);

export default Subtitle;