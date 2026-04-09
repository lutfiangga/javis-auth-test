import Layout from "@/components/layout/appLayout";
import WelcomeCard from "@/components/partials/welcomeCard";
import { useAuthStore } from "@/lib/stores/useAuthStore";

export default function Dashboard() {
    const { name, initials } = useAuthStore();

    return (
        <Layout>
            <WelcomeCard name={name} initials={initials} />
        </Layout>
    )
}