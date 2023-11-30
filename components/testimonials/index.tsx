import Image from "next/image";
import Subtitle from "@/components/Subtitle";
import Parallax from "@/components/Parallax";
import {Heading, Selection} from "@/components/Title";
import BgParticle from "@/components/testimonials/bg-particle";
import AboutPeople from "@/components/testimonials/about-people";
import type {IAboutPeople} from "@/components/testimonials/types";
import avatar1 from "@/public/avatar-1.jpg";
import avatar2 from "@/public/avatar-2.jpg";
import avatar3 from "@/public/avatar-3.jpg";
import avatar4 from "@/public/avatar-4.jpg";
import avatar5 from "@/public/avatar-5.jpg";
import logo1 from "@/public/logo-1.png"
import logo2 from "@/public/logo-2.png"
import logo3 from "@/public/logo-3.png"
import logo4 from "@/public/logo-4.png"
import logo5 from "@/public/logo-5.png"

const Testimonials = () => (
    <div
        className={"relative flex flex-col gap-[60px] lg:gap-[100px] pt-[50px] pb-[100px] mt-[60px] sm:mt-[100px]"}
    >
        <div className={"flex flex-col gap-[40px] items-center p-[10px]"}>
            <Subtitle>Testimonials</Subtitle>
            <Heading>Trusted by <Selection>millions.</Selection></Heading>
        </div>
        <div className={"max-w-full overflow-hidden grid grid-cols-1 lg:grid-cols-3  p-8 gap-8"}>
            {data.map((person, index) => (
                <AboutPeople key={index} {...person}
                             className={index === 4 ? "lg:col-span-1 lg:row-span-2 lg:col-start-2 lg:row-start-1" : ""}/>
            ))}
        </div>
        <div className={"bg-[url(/planet.png)] bg-cover pt-[120px] pb-[100px]"}>
            <Parallax className={"gap-x-8"} speed={1}>
                {new Array(4).fill(logosCompany.map((img, index) => (
                    <div key={index} className={"h-[32px] w-[180px]"}>
                        <Image
                            src={img}
                            alt={""}
                            className={"w-full h-full object-contain"}
                        />
                    </div>
                )))}
            </Parallax>
        </div>
        <div className={"absolute -z-10 w-full h-1/4 bottom-[100px] left-0 right-0 pointer-events-none"}>
            <BgParticle/>
        </div>
    </div>
);


const data: IAboutPeople[] = [
    {
        name: "Olive Moore",
        avatar: avatar1,
        position: "Design Systems",
        description: "I was able to create stunning images that looked like they were professionally edited. The AI algorithms are truly impressive."
    },
    {
        name: "Megan Hild",
        avatar: avatar2,
        position: "Head of Brand Strategy at Persond",
        description: "I love being able to experiment with different styles and filters. I highly recommend this platform to anyone looking to take their images to the next level."
    },
    {
        name: "Josh Hilty",
        avatar: avatar3,
        position: "Founder & CEO at PixelWave",
        description: "I was able to create stunning images that looked like they were professionally edited. The AI algorithms are truly impressive."
    },
    {
        name: "Grace Becker",
        avatar: avatar4,
        position: "Art Director",
        description: "I love being able to experiment with different styles and filters. I highly recommend this platform to anyone looking to take their images to the next level."
    },
    {
        name: "Maria Ruth",
        avatar: avatar5,
        position: "Graphic Designer",
        description: "As someone who's not particularly tech-savvy, I was a little intimidated by the idea of using an AI image platform. But Hub AI was incredibly user-friendly, and the customer support team was always there. I'm now able to create images that I never thought were possible, and I'm thrilled with the results. this is something extraordinary. Thank you so much AI Hub!"
    },
]
const logosCompany = [
    logo1, logo2, logo3, logo4, logo5
]

export default Testimonials;