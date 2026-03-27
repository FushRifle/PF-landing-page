import Hero from "@/components/Hero";
import Features from "@/components/Logos";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import WhyChoose from "@/components/Choose";
import Benefits from "@/components/Benefits/Benefits";
import MerchSlideshow from "@/components/Merch";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Benefits />
        <MerchSlideshow />
        <WhyChoose />
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
