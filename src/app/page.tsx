import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import CtaBanner from "@/components/sections/CtaBanner";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <FeaturedProperties />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Contact />
      <Footer />
    </main>
  );
}
