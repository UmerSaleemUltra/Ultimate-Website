import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Brands from "../components/Brands";
import Services from "../components/Services";
import Features from "../components/Features";
import WorldWide from "../components/WorldWide";
import Stats from "../components/Stats";
import PricingPlans from "../components/PricingPlans";
import Process from "../components/Process";
import AllFees from "../components/AllFees";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

import Footer from "../components/Footer";

export default function Home(){
    return(
        <>
        <Header />
        <HeroSection />
        <Brands />
        <Services />
        <Features />
        <AllFees />
        <WorldWide />
        <Stats />
        <PricingPlans />
        <Process />
        <Testimonials />
        <CTA />
        <Footer />
        </>
    )
}