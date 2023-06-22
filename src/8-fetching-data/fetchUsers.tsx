export interface User {
  gender: "male" | "female";
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
  };
  email: string;
}

export interface UsersResult {
  results: User[];
}

export async function fetchUsers() {
  const response = await fetch("https://randomuser.me/api", { mode: "cors" });

  if (!response.ok) throw new Error(`Request failed: ${response.status}`);

  const data: UsersResult = await response.json();

  return data;
}
