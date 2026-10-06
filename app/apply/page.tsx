import Navbar from "@/components/Navbar";
import ApplySection from "@/components/ApplySection";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

export default function ApplyPage() {
  return (
    <Layout>
      <Navbar />
      <section className="pt-20 pb-16">
        <ApplySection />
      </section>
      <Footer />
    </Layout>
  );
}