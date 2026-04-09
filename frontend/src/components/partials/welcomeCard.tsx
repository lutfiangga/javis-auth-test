
interface Metric {
  label: string;
  value: string;
  change: string;
  up: boolean;
}

interface WelcomeCardProps {
  name?: string;
  initials?: string;
  date?: string;
  summary?: string;
  metrics?: Metric[];
}

const defaultMetrics: Metric[] = [
  { label: "Pendapatan hari ini", value: "Rp 12 JT", change: "+8% vs kemarin", up: true },
  { label: "Pengguna aktif", value: "1.284", change: "+3% vs kemarin", up: true },
];

const today = new Date().toLocaleDateString("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

import Welcome from "./welcome";

export default function WelcomeCard({
  name,
  initials,
  date = today,
  summary = "There are 5 new transactions and 3 pending orders to review since yesterday.",
  metrics = defaultMetrics,
}: WelcomeCardProps) {

  return (
    <div className="w-full max-w-4xl">
      <Welcome name={name} initials={initials} date={date}>
        <div className="pt-2">
          {/* Highlight banner */}
          <div className="mx-5 mb-4 rounded-xl p-3" style={{ background: "#EEEDFE" }}>
            <p className="mb-1 text-xs font-medium" style={{ color: "#534AB7" }}>
              Ringkasan hari ini
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "#3C3489" }}>
              {summary}
            </p>
          </div>

          {/* Metrics */}
          <div className="mx-5 mb-4 grid grid-cols-2 gap-2">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl p-3"
                style={{ background: "#f4f3ee" }}
              >
                <p className="mb-1 text-xs" style={{ color: "#888780" }}>
                  {m.label}
                </p>
                <p className="text-lg font-medium" style={{ color: "#1a1a18" }}>
                  {m.value}
                </p>
                <p
                  className="mt-1 text-xs"
                  style={{ color: m.up ? "#1D9E75" : "#D85A30" }}
                >
                  {m.up ? "↑" : "↓"} {m.change}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Welcome>
    </div>
  );
}