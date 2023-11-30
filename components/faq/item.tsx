"use client"
import {useState} from "react";
import {motion} from "framer-motion";

const QuestionsItem = ({title, answer}: { title: string, answer: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div
                className={"cursor-pointer text-2xl font-medium py-[30px]"}
                onClick={() => setOpen(open => !open)}
            >
                {title}
            </div>
            <motion.div
                className={"overflow-hidden text-lg text-[rgb(157,158,182)]"}
                initial={"hide"}
                animate={open ? "open" : "hide"}
                variants={{
                    hide: {
                        height: 0,
                        marginBottom: 0,
                    },
                    open: {
                        height: "fit-content",
                        marginBottom: "24px"
                    }
                }}
            >
                {answer}
            </motion.div>
        </div>

    );
};
export default QuestionsItem;