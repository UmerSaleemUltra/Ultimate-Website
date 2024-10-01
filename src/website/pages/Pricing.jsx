import Header from "../components/Header";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import PricingHero from "../components/PricingHero";
import Comparison from "../components/Comparison";
import PricingFeatures from "../components/PricingFeatures";
import Advantages from "../components/Advantages";
import FAQ from "../components/FAQ";

export default function Pricing() {
    return (
        <>
            <Header />
            <PricingHero />
            <Comparison />
            <PricingFeatures />
            <Advantages />
            <FAQ />
            <CTA />
            <Footer />
        </>
    )
}