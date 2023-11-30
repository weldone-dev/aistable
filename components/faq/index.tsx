import Subtitle from "@/components/Subtitle";
import {Heading, Selection} from "@/components/Title";
import QuestionsItem from "@/components/faq/item";

const Faq = () => {
    return (
        <div className={"py-[80px]"}>
            <div className={"flex flex-col gap-[40px] items-center p-[10px]"}>
                <Subtitle>Have a question?</Subtitle>
                <Heading>Let us <Selection>help you.</Selection></Heading>
            </div>
            <div
                className={"mt-[60px] flex flex-wrap lg:flex-nowrap justify-center lg:justify-between text-white mx-[5%] gap-x-8 "}>
                <ul className={"flex flex-col h-fit"}>
                    {questionList.slice(0, questionList.length / 2 | 0).map((question, index) => (
                        <li key={index} className={" border-b-[1px] border-b-slate-300 max-w-[531px] min-h-[124px]"}>
                            <QuestionsItem title={question.title} answer={question.answer}/>
                        </li>
                    ))}
                </ul>
                <ul className={"flex flex-col h-fit"}>
                    {questionList.slice(questionList.length / 2 | 0, questionList.length).map((question, index) => (
                        <li key={index} className={"border-b-[1px] border-b-slate-300 max-w-[531px] min-h-[124px]"}>
                            <QuestionsItem title={question.title} answer={question.answer}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
const questionList = [
    {
        title: "Is there a limit to the number of patterns created?",
        answer: "Absolutely not! Our platform is designed to cater to your creativity without any limitations. You can create as many patterns as your heart desires. Whether you're a pattern enthusiast or a professional designer, our platform encourages you to explore an infinite array of patterns, without any restrictions on quantity."
    },
    {
        title: "What types of image formats can I export (supporting formats)?",
        answer: "We offer a wide range of image export formats to ensure compatibility and convenience for our users. Our platform supports popular formats such as JPEG, PNG, GIF, and TIFF. You can choose the format that best suits your needs and seamlessly export your created images in the format of your choice."
    },
    {
        title: "How long does it take to generate a single image?",
        answer: "The time it takes to generate a single image using our platform depends on various factors, such as the complexity of the design, the processing power of your device, and the settings you choose. Our platform employs powerful algorithms and advanced techniques to ensure efficient image generation without compromising on quality.\n" +
            "Can I use the images I create "
    },
    {
        title: "Can I use the images I create for commercial purposes?",
        answer: "Absolutely! We understand the importance of your creative endeavors and believe in empowering our users. Once you create images using our platform, you have full ownership and rights to use them for any commercial purposes. Whether it's for marketing campaigns, merchandise, or any other commercial project, the images you create are yours to monetize and showcase your talent."
    },
    {
        title: "What is the quality of the images created using this platform?",
        answer: "We take great pride in the quality of the images generated by our platform. We utilize advanced algorithms and cutting-edge technology to ensure that the images produced are of the highest quality. You can expect crisp details, vibrant colors, and excellent resolution in the images you create. We strive to deliver professional-grade results that meet the standards of even the most discerning designers."
    },
    {
        title: "What is the quantity of the images created using this platform?",
        answer: "Our platform offers unparalleled flexibility when it comes to the quantity of images you can create. Whether you're looking to generate a single image or an extensive collection, our platform can accommodate your needs. You can create images in batches or even automate the process for larger-scale projects. The choice is yours, and our platform is here to support your creative output, no matter the quantity you require."
    }
];
export default Faq;