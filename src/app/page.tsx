import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BarberServices from "@/components/BarberServices";
import StylistServices from "@/components/StylistServices";
import WorkGallery from "@/components/WorkGallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <BarberServices />
      <StylistServices />
      <WorkGallery />
      <ContactSection />
      <Footer />
    </main>
  );
}
