export enum DIFFICULTY {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
}

export function getColor(E: DIFFICULTY) {
  if (E === DIFFICULTY.EASY) {
    return "text-level-easy";
  } else if (E === DIFFICULTY.MEDIUM) {
    return "text-level-medium";
  } else {
    return "text-level-hard";
  }
}
