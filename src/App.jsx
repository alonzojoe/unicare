import Header from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import RectruitmentSection from "./components/RectruitmentSection";
import Footer from "@/components/Footer";

function App() {
  return (
    <main className="text-lg text-palette-neutral-600 antialiased">
      <Header />

      <HeroSection />

      <TreatmentsSection />

      <RectruitmentSection />

      <Footer />
    </main>
  );
}

export default App;
