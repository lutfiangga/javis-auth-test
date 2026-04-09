import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Welcome from "./welcome";

export interface UserData {
  id: number;
  name: string;
  email: string;
}

interface UserListProps {
  users: UserData[];
  name?: string;
  initials?: string;
}

export default function UserList({ users, name, initials }: UserListProps) {
  return (
    <div className="w-full max-w-4xl">
      <Welcome 
        initials={initials} 
        name={name}
        title="Daftar Pengguna" 
        subtitle="Kelola data seluruh pengguna di dalam sistem."
      >
        <div className="w-full overflow-x-auto p-0">
          <Table>
            <TableHeader>
              <TableRow style={{ background: "#f4f3ee", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                <TableHead className="w-16 text-center text-xs font-medium" style={{ color: "#888780" }}>
                  No
                </TableHead>
                <TableHead className="text-xs font-medium" style={{ color: "#888780" }}>
                  Nama
                </TableHead>
                <TableHead className="text-xs font-medium" style={{ color: "#888780" }}>
                  Email
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <TableRow key={user.id} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <TableCell className="text-center font-medium text-sm" style={{ color: "#888780" }}>
                      {index + 1}
                    </TableCell>
                    <TableCell className="font-medium text-sm" style={{ color: "#1a1a18" }}>
                      {user.name}
                    </TableCell>
                    <TableCell className="text-sm" style={{ color: "#888780" }}>
                      {user.email}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center py-10 text-sm"
                    style={{ color: "#888780" }}
                  >
                    Tidak ada data pengguna.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Welcome>
    </div>
  );
}
