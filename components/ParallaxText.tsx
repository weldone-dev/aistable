import type {FC} from 'react';
import Parallax from "@/components/Parallax";

interface IProps {
    children: string
}

const ParallaxText: FC<IProps> = ({children}) => (
    <Parallax className={"font-semibold"}>
        {[...new Array(4)].map((_, index) => (<span key={index} className={"block mr-8"}>Get the App </span>))}
    </Parallax>
)

export default ParallaxText;