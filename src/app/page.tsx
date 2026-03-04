import Hero from "@/components/Hero";
import Features from "@/components/Logos";
import Container from "@/components/Container";
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
