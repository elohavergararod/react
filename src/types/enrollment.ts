export interface ActiveEnrollment {
  type: "ACTIVE";
  student: { name: string };
  courses: unknown[];
  startDate: Date;
}

export interface SuspendedEnrollment {
  type: "SUSPENDED";
  student: { name: string };
  suspensionReason: string;
  suspensionDate: Date;
}

export interface CompletedEnrollment {
  type: "COMPLETED";
  student: { name: string };
  averageGrade: number;
  completionDate: Date;
}

export type EnrollmentStatus =
  | ActiveEnrollment
  | SuspendedEnrollment
  | CompletedEnrollment;