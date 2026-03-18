import Hero from "@/components/Hero";
import Features from "@/components/Logos";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import WhyChoose from "@/components/Choose";
import Benefits from "@/components/Benefits/Benefits";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Benefits />
        <Features />
        <WhyChoose />
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
