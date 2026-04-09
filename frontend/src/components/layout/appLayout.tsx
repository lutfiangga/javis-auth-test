
import Navbar from "../partials/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <main className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-start mx-auto max-w-4xl">
          {children}
        </div>
      </main>
  )
}