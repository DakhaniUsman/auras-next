import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
        <Navbar />
        <main className="w-full min-h-[100vh] relative mt-5">
            <Hero/>
            <About />
            <Services />
            <Contact />
        </main>
        <Footer />
    </>
  );
}
