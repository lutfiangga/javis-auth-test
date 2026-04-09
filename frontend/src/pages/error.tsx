import { Button } from "@base-ui/react";
import { Link, useNavigate } from "react-router-dom";

interface ErrorPageProps {
  code?: number;
  title?: string;
  description?: string;
  traceId?: string;
  onGoHome?: string;
  onBack?: string | (() => void);
}

export default function ErrorPage({
  code = 404,
  title = "Halaman tidak ditemukan",
  description = "Maaf, halaman yang Anda cari tidak ada.",
  traceId = "ERR-20260409-A3F7C",
  onGoHome = "/",
  onBack,
}: ErrorPageProps) {
  const navigate = useNavigate();

  const Back = () => {
    if (typeof onBack === "string") {
      navigate(onBack);
    } else if (typeof onBack === "function") {
      onBack();
    } else {
      navigate(-1);
    }
  };
  return (
    <div
      className="flex min-h-screen items-center justify-center p-6"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      <div className="flex w-full max-w-sm flex-col items-center text-center">

        <div
          className="mb-8 flex items-center gap-2 rounded-full border px-4 py-1.5"
          style={{ background: "#FCEBEB", borderColor: "#F09595" }}
        >
          <div className="h-1.5 w-1.5 rounded-full" style={{ background: "#E24B4A" }} />
          <span
            className="text-xs font-medium tracking-widest"
            style={{ fontFamily: "'DM Mono', monospace", color: "#A32D2D" }}
          >
            ERROR {code}
          </span>
        </div>

        {/* Illustration */}
        <svg
          className="mb-8"
          width="180"
          height="130"
          viewBox="0 0 180 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="30" y="20" width="120" height="76" rx="8" fill="#F1EFE8" stroke="#D3D1C7" strokeWidth="0.5" />
          <rect x="44" y="33" width="92" height="8" rx="3" fill="#D3D1C7" />
          <rect x="44" y="47" width="60" height="6" rx="3" fill="#E4E2DB" />
          <rect x="44" y="59" width="76" height="6" rx="3" fill="#E4E2DB" />
          <rect x="44" y="71" width="44" height="6" rx="3" fill="#FCEBEB" />
          <circle cx="128" cy="74" r="10" fill="#FCEBEB" stroke="#F09595" strokeWidth="0.5" />
          <line x1="124" y1="70" x2="132" y2="78" stroke="#E24B4A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="132" y1="70" x2="124" y2="78" stroke="#E24B4A" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="60" y="96" width="60" height="5" rx="2.5" fill="#D3D1C7" />
          <rect x="75" y="101" width="30" height="12" rx="2" fill="#D3D1C7" />
          <rect x="50" y="113" width="80" height="6" rx="3" fill="#E4E2DB" />
          <circle cx="50" cy="33" r="3" fill="#F09595" />
          <circle cx="60" cy="33" r="3" fill="#FAC775" />
          <circle cx="70" cy="33" r="3" fill="#97C459" />
        </svg>

        <h1
          className="mb-2.5 text-xl font-medium leading-snug"
          style={{ color: "#1a1a18" }}
        >
          {title}
        </h1>
        <p
          className="mb-7 text-sm leading-relaxed"
          style={{ color: "#6b6a65" }}
        >
          {description}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-2.5">
          <Link
            to={onGoHome}
            className="rounded-xl px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
            style={{
              background: "#1a1a18",
              color: "#f0ede8",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Kembali ke beranda
          </Link>
          <Button
            onClick={Back}
            className="rounded-xl px-5 py-2.5 text-sm font-medium transition-colors hover:bg-gray-100"
            style={{
              background: "transparent",
              color: "#1a1a18",
              border: "0.5px solid rgba(0,0,0,0.2)",
              cursor: "pointer",
              fontFamily: "inherit",
              outline: "none"
            }}
          >
            Kembali
          </Button>
        </div>

        {/* Trace ID */}
        {traceId && (
          <div
            className="mt-8 w-full border-t pt-5"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            <p className="mb-1.5 text-xs" style={{ color: "#b4b2a9" }}>
              Kode referensi
            </p>
            <p
              className="text-xs tracking-wider"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#6b6a65",
              }}
            >
              {traceId}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}