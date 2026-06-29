import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Statistics from "@/components/home/Statistics";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Statistics />
      <Footer />
    </>
  );
}