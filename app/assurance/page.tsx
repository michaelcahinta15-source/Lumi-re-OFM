import Navbar from "@/components/Navbar";
import AssuranceSection from "@/components/AssuranceSection";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

export default function AssurancePage() {
  return (
    <Layout>
      <Navbar />
      <section className="pt-20 pb-16">
        <AssuranceSection />
      </section>
      <Footer />
    </Layout>
  );
}