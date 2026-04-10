import Welcome from "./welcome";
import {
  FiBookOpen,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiLock,
  FiServer,
} from "react-icons/fi";

interface AboutContentProps {
  name?: string;
  initials?: string;
}

const frontendStack = [
  "React + Vite",
  "Tailwind CSS",
  "shadcn/ui",
  "jwt-decode",
  "axios",
  "zustand",
  "react-router-dom",
  "@tanstack/react-table",
  "react-icons",
];

const backendStack = [
  "Express",
  "bcrypt",
  "cors",
  "jsonwebtoken",
  "cookir-parser",
  "sequelize",
  "express-rate-limit",
];

const authFlow = [
  "User login via endpoint /login dengan limit request.",
  "Server membuat access token + refresh token.",
  "Refresh token disimpan sebagai httpOnly cookie.",
  "Frontend memanggil /token untuk perbarui access token.",
  "Route private divalidasi dengan bearer token.",
];

export default function AboutContent({ name, initials = "AB" }: AboutContentProps) {
  return (
    <div className="w-full max-w-4xl">
      <Welcome
        initials={initials}
        name={name}
        title="README Project"
        subtitle="Website auth page dengan stack frontend dan backend modern."
      >
        <div className="p-6 pt-4 w-full flex flex-col gap-4">
          <div className="rounded-xl border bg-white p-5 border-slate-200">
            <div className="mb-2 flex items-center gap-2 text-slate-800">
              <FiBookOpen className="text-[16px]" />
              <h2 className="text-[15px] font-semibold">Project Overview</h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Aplikasi ini adalah website autentikasi dengan arsitektur fullstack. Frontend dibangun
              menggunakan React + Vite, sedangkan backend menggunakan Express. Fokus utama project:
              login/register, manajemen sesi JWT, proteksi route, dan halaman data pengguna.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border bg-slate-50/50 p-5 border-slate-200">
              <div className="mb-3 flex items-center gap-2 text-slate-800">
                <FiCode className="text-[16px]" />
                <h3 className="text-[15px] font-semibold">Frontend Stack</h3>
              </div>
              <ul className="space-y-2">
                {frontendStack.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <FiCheckCircle className="text-indigo-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border bg-slate-50/50 p-5 border-slate-200">
              <div className="mb-3 flex items-center gap-2 text-slate-800">
                <FiServer className="text-[16px]" />
                <h3 className="text-[15px] font-semibold">Backend Stack</h3>
              </div>
              <ul className="space-y-2">
                {backendStack.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <FiCheckCircle className="text-indigo-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-5 border-slate-200">
            <div className="mb-2 flex items-center gap-2 text-slate-800">
              <FiLock className="text-[16px]" />
              <h3 className="text-[15px] font-semibold">Authentication Flow</h3>
            </div>
            <ul className="space-y-2">
              {authFlow.map((step, index) => (
                <li key={step} className="text-sm text-slate-600">
                  <span className="mr-2 font-medium text-slate-800">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border bg-slate-50/50 p-5 border-slate-200">
            <div className="mb-2 flex items-center gap-2 text-slate-800">
              <FiDatabase className="text-[16px]" />
              <h3 className="text-[15px] font-semibold">Main Endpoints</h3>
            </div>
            <div className="rounded-lg bg-slate-900 p-4">
              <pre className="overflow-x-auto text-xs leading-6 text-slate-100">
{`POST   /login
DELETE /logout
GET    /token
GET    /users      (protected)
POST   /users/register      (resgiter)`}
              </pre>
            </div>
          </div>

        </div>
      </Welcome>
    </div>
  );
}
