import api from "@/lib/api";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/appLayout";
import UserList from "@/components/partials/userList";
import { useAuthStore } from "@/lib/stores/useAuthStore";

export default function User() {
  const [users, setUsers] = useState([]);
  const { name, initials, token } = useAuthStore();

  useEffect(() => {
    if (token) {
      getUsers();
    }
  }, [token]);

  const getUsers = async () => {
    try {
      const response = await api.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="w-full flex justify-center mt-3">
        <UserList users={users} name={name} initials={initials} />
      </div>
    </Layout>
  );
}