import { Effect } from "./Effect";
import { State } from "./State";

export function Hooks() {
  return (
    <div>
      <div>
        <h2>State</h2>
        <State />
      </div>
      <div>
        <h2>Effect</h2>
        <Effect />
      </div>
    </div>
  );
}
