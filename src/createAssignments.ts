import { Assignments } from "./Assignments";

export function createAssignments(names: string[]): Assignments {
  if (names.length === 1) {
    return { [names[0]]: names[0] };
  }
  return createAssignmentsRecursive(names);
}

function createAssignmentsRecursive(
  names: string[],
  firstSanta?: string,
  currentSanta?: string,
  assignments: Assignments = {}
): Assignments {
  const { santa: nextSanta, remainingNames } = selectSanta(names);
  if (!firstSanta) {
    return createAssignmentsRecursive(
      remainingNames,
      nextSanta,
      nextSanta,
      assignments
    );
  } else if (names.length > 1) {
    return createAssignmentsRecursive(remainingNames, firstSanta, nextSanta, {
      ...assignments,
      [currentSanta!]: nextSanta,
    });
  } else {
    return {
      ...assignments,
      [currentSanta!]: nextSanta,
      [nextSanta]: firstSanta,
    };
  }
}

function selectSanta(names: string[]) {
  const selectedIndex = Math.floor(Math.random() * names.length);
  return {
    santa: names[selectedIndex],
    remainingNames: names.filter((_, i) => i != selectedIndex),
  };
}
