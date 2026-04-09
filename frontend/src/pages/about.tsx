import Layout from "@/components/layout/appLayout";
import AboutContent from "@/components/partials/aboutContent";
import { useAuthStore } from "@/lib/stores/useAuthStore";

export default function About() {
  const { name, initials } = useAuthStore();

  return (
    <Layout>
      <div className="w-full flex justify-center mt-3">
        <AboutContent name={name} initials={initials} />
      </div>
    </Layout>
  );
}
