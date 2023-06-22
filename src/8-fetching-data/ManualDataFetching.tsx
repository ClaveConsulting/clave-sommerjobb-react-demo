import { useEffect, useState } from "react";
import { UsersResult, fetchUsers } from "./fetchUsers";
import { UsersTable } from "./UsersTable";

export function ManualDataFetching() {
    const [data, setData] = useState<UsersResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<unknown | null>(null);

    useEffect(() => {
        async function doFetch() {
            setIsLoading(true);
            setError(null);
            try {
                const result = await fetchUsers();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        doFetch();
    }, []);

    if (isLoading) return <p>Laster...</p>;
    if (error) return <p>Feil: {error.toString()}</p>;
    if (!data) return <p>Ingen data</p>;

    return <UsersTable users={data.results} />;
}
