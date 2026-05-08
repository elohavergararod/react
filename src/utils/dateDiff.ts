import { differenceInDays } from "date-fns";

export function dateDiff(a: Date, b: Date): number {
  return differenceInDays(b, a);
}