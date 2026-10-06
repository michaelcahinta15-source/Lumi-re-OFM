import Navbar from "@/components/Navbar";
import ManagementSection from "@/components/ManagementSection";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

export default function ManagementPage() {
  return (
    <Layout>
      <Navbar />
      <section className="pt-20 pb-16">
        <ManagementSection />
      </section>
      <Footer />
    </Layout>
  );
}