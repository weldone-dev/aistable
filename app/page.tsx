import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import Capabilities from "@/components/capabilities";
import Testimonials from "@/components/testimonials";
import Price from "@/components/price";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main className={"relative"}>
            <Hero/>
            <Gallery />
            <Capabilities/>
            <Testimonials />
            <Price />
            <Faq />
            <Footer />
        </main>
    )
}
