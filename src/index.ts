import { createAssignments } from "./createAssignments";
import { getNames } from "./getNames";
import { writeAssignments } from "./writeAssignments";

(async () => {
  const names = await getNames();
  const assignments = createAssignments(names);
  writeAssignments(assignments);
})().catch(console.error);
