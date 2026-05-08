import type { EnrollmentStatus } from "../types/enrollment";

export function generarReporte(enrollment: EnrollmentStatus): string {
  switch (enrollment.type) {
    case "ACTIVE":
      return `Activo: ${enrollment.student.name} - Cursos: ${enrollment.courses.length}`;

    case "SUSPENDED":
      return `Suspendido: ${enrollment.student.name} - Motivo: ${enrollment.suspensionReason}`;

    case "COMPLETED":
      return `Completado: ${enrollment.student.name} - Nota: ${enrollment.averageGrade}`;

    default:
      const _exhaustive: never = enrollment;
      return _exhaustive;
  }
}