import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Logos";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import WhyChoose from "@/components/Choose";
import EarlyAccess from "@/components/EarlyAccess";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Features />
        <WhyChoose />
        <EarlyAccess />
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
