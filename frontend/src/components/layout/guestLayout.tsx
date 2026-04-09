
export default function GuestLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex items-center justify-center relative">
            {children}
        </main>
    )
}