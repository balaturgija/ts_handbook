enum DiscFlags {
  None = 0,
  Drive = 1,
  Influence = 2,
  Steadiness = 4,
  Conscientiousness = 8,
}

const personality = DiscFlags.Drive | DiscFlags.Conscientiousness;

const hasD = (personality & DiscFlags.Drive) == DiscFlags.Drive; // true
const hasI = (personality & DiscFlags.Influence) == DiscFlags.Influence; // false
