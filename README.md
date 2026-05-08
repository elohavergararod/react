![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=FFF)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)


# React + TypeScript Strongly Typed DataTable

> Reusable generic DataTable component built with React, TypeScript and Vite, focused on type safety and scalable UI architecture.

---

## 🏗️ Features

- Generic `DataTable<T>` component
- Strong typing with `keyof T`
- Row editing system using `Partial<T>`
- Utility function for date calculations
- Strict TypeScript configuration

---

## ⚙️ Technologies

| Frontend | Usage |
|----------|------|
| React | UI rendering |
| TypeScript | Type safety |
| Vite | Build tool |
| date-fns | Date utilities |

---

## 🧠 TypeScript Concepts

| Concept | Usage |
|--------|------|
| Generics | `DataTable<T>` reusable component |
| keyof | Dynamic column mapping |
| Partial<T> | Editing state management |
| Strict typing | Runtime error prevention |

---

## 📁 Project Structure

src/
├── components/ # Reusable UI components (e.g. DataTable)
├── utils/ # Utility functions (e.g. dateDiff)
├── data/ # Static or future mock data (currently empty)
├── assets/ # Static assets (images, icons, etc.)
├── types/ # TypeScript types and interfaces (if applicable)
├── App.tsx # Root component
├── main.tsx # Entry point
└── index.css # Global styles

---

## 📊 DataTable Component

A reusable generic table component that:

- Accepts typed data (`T[]`)
- Dynamically renders columns
- Supports row editing
- Maintains full type safety

---

## 🧮 Utilities

### dateDiff

```ts
dateDiff(start: Date, end: Date): number
```

 Calculates the difference in days between two dates using date-fns.

---

## 🛡️ Type Safety Benefits

Compared to JavaScript:

-Compile-time error detection
-Safer refactoring
-Predictable data structures
-Reduced runtime bugs

---

## 🚀 Run Project

``` npm install
npm run dev
```

---

## 🔍 Type Check

``` npx tsc --noEmit
```
Expected result:
✔ No type errors found

---

## 📦 Clone Project

```bash
git clone https://github.com/user/project.git
cd project
```

---

## 👨‍💻 Author

* Developed during practice in [Corner Estudios](https://www.corner-estudios.com) - Elohá Vergara Rodrigues - 2026 *
