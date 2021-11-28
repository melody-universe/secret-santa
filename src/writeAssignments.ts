import { Assignments } from "./Assignments";

export function writeAssignments(assignments: Assignments) {
  Object.keys(assignments).forEach((santa) => {
    console.log(`${santa} => ${assignments[santa]}`);
  });
}
