import Navbar from "@/components/Navbar";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

export default function BenefitsPage() {
  return (
    <Layout>
      <Navbar />
      <section className="pt-20 pb-16">
        <BenefitsSection />
      </section>
      <Footer />
    </Layout>
  );
}