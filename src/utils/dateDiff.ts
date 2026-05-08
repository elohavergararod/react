import { differenceInDays } from "date-fns";

/**
 * Calculates the difference in days between two dates.
 * Includes runtime validation to ensure both inputs are valid Date objects.
 */
export function dateDiff(start: Date, end: Date): number {
  if (!(start instanceof Date) || !(end instanceof Date)) {
    throw new Error("dateDiff: both arguments must be valid Date objects");
  }

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    throw new Error("dateDiff: invalid Date value");
  }

  return differenceInDays(end, start);
}