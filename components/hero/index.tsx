import BgParticle from "@/components/hero/bg-particle";
import Content from "@/components/hero/content";

const Hero = () => (
    <section className={"min-h-[100dvh] h-auto overflow-x-clip overflow-y-visible"}>
        <div className={"absolute -z-10 pointer-events-none w-full h-[100dvh]"}>
            <BgParticle/>
        </div>
        <div className={"flex max-w-[610px] m-auto w-full min-h-[inherit] pt-[44px]"}>
            <Content/>
        </div>
    </section>
);

export default Hero;