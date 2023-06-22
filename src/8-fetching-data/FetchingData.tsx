import { ReactQuery } from "./ReactQuery";
import { ManualDataFetching } from "./ManualDataFetching";

export function FetchingData() {
  return (
    <div>
      <h2>Manual</h2>
      <ManualDataFetching />
      <hr />
      <h2>React Query</h2>
      <ReactQuery />
    </div>
  );
}
