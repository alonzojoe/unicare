import Header from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import RectruitmentSection from "@/components/RectruitmentSection";
import OwnersSection from "@/components/OwnersSection";
import Footer from "@/components/Footer";

function App() {
  return (
    <main className="text-lg text-palette-neutral-600 antialiased">
      <Header />

      <HeroSection />

      <TreatmentsSection />

      <RectruitmentSection />

      <OwnersSection />

      <Footer />
    </main>
  );
}

export default App;
