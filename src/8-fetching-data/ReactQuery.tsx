import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { fetchUsers } from "./fetchUsers";
import { UsersTable } from "./UsersTable";

const queryClient = new QueryClient();

export function ReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

export function Users() {
  const usersQuery = useQuery(["users"], fetchUsers);

  if (usersQuery.isLoading) return <p>Laster...</p>;
  if (usersQuery.error) return <p>Feil: {usersQuery.error.toString()}</p>;
  if (!usersQuery.data) return <p>Ingen data</p>;

  return <UsersTable users={usersQuery.data.results} />;
}
