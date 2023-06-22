import { User } from "./fetchUsers";

export function UsersTable({ users }: { users: User[]; }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>E-mail</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.email}>
            <td>
              {u.name.title} {u.name.first} {u.name.last}
            </td>
            <td>{u.gender}</td>
            <td>{u.email}</td>
            <td>
              {u.location.street.name} {u.location.street.number}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
