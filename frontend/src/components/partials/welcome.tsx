


interface WelcomeCardProps {
  name?: string;
  initials?: string;
  date?: string;
  children?: React.ReactNode;
}

const today = new Date().toLocaleDateString("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function Welcome({
  title,
  subtitle,
  name = "John Doe",
  initials = "JD",
  date = today,
  children
}: WelcomeCardProps & { title?: React.ReactNode; subtitle?: React.ReactNode }) {

  return (
    <div className="w-full flex justify-center p-4">
      <div
        className="w-full rounded-2xl border bg-white overflow-hidden"
        style={{
          borderColor: "rgba(0,0,0,0.1)",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-5 pb-4 border-b" style={{ borderColor: "rgba(0,0,0,0.05)" }}>
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-medium"
            style={{ background: "#EEEDFE", color: "#3C3489" }}
          >
            {initials}
          </div>
          <div>
            <p className="text-sm font-medium" style={{ color: "#1a1a18" }}>
              {title || `Selamat datang kembali, ${name}!`}
            </p>
            <p className="text-xs" style={{ color: "#888780" }}>
              {subtitle || date}
            </p>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}