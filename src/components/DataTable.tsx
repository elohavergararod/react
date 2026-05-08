import { useState } from "react";

export type Column<T> = {
  header: string;
  accessor: keyof T;
};

type DataTableProps<T extends { id: string | number }> = {
  data: T[];
  columns: Column<T>[];
};

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
}: DataTableProps<T>) {
  // ✔ REQUISITO: Partial<T> para edición parcial
  const [editingRow, setEditingRow] = useState<Partial<T> | null>(null);

  const handleEdit = (row: T) => {
    setEditingRow({ ...row });
  };

  const handleChange = <K extends keyof T>(key: K, value: T[K]) => {
    setEditingRow((prev) => {
      if (!prev) return null;

      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return (
    <div>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.accessor)}>{col.header}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={String(row.id)}>
              {columns.map((col) => (
                <td key={String(col.accessor)}>
                  {String(row[col.accessor])}
                </td>
              ))}

              <td>
                <button onClick={() => handleEdit(row)}>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✔ edición parcial obligatoria */}
      {editingRow && (
        <div style={{ marginTop: 20 }}>
          <h3>Editando fila</h3>

          {columns.map((col) => (
            <div key={String(col.accessor)}>
              <label htmlFor={String(col.accessor)}>
                {col.header}
            </label>

            <input
                id={String(col.accessor)}
                value={String(editingRow[col.accessor] ?? "")}
                onChange={(e) =>
                    handleChange(
                        col.accessor,
                        e.target.value as T[typeof col.accessor]
                    )
                }
            />
            </div>
          ))}

          <button onClick={() => setEditingRow(null)}>
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
}