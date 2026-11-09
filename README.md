# Assignment 1: Problem Solving with TypeScript & OOP

This is my submission for Programming Hero's Assignment 1 (Module 4). The assignment covers core TypeScript concepts from Modules 1 to 3: basic types, optional/default/rest parameters, readonly tuples, interfaces, type narrowing, generics, Promises, and Object-Oriented Programming.

All eight problems are solved in a single `solutions.ts` file, and every solution follows the requirements: explicit parameter and return types, exact function and class names, exact output formats, no `any`, and no `console.log` in the final file.

## Problems Solved

| # | Function / Class | Concept |
|---|---|---|
| 1 | `multiplyValue` | Optional parameter with default handling (0-safe) |
| 2 | `processInput` | Union types and type narrowing with `typeof` |
| 3 | `formatCoordinate` | Readonly tuple |
| 4 | `concatenateArrays` | Generics with rest parameters |
| 5 | `Course`, `getPopularCourses` | Interface and array filtering |
| 6 | `pluckValues` | Generics with `keyof` constraint |
| 7 | `Employee`, `Manager` | OOP: `private`, `protected`, inheritance, `super` |
| 8 | `validateAgeAsync` | Promise, `setTimeout`, resolve/reject |

## Blog Posts

I wrote two blog posts as part of the blog task (10 marks):

1. [Type Narrowing in TypeScript: Checking a Value Before Using It](./type-narrowing.md) — narrowing with `typeof`, `instanceof`, and the `in` operator.
2. [Generics in TypeScript: Write Once, Use With Any Type](./generics-and-promises.md) — generics in reusable functions and how they type async `Promise<T>` responses.

## Tech Stack

- TypeScript
- Node.js (for type checking with `tsc`)

## Getting Started

```bash
git clone https://github.com/skmajumder/b8-assignment-1
cd b8-assignment-1
npx tsc --noEmit -p tsconfig.json
```

## File Structure

```text
├── solutions.ts
├── type-narrowing.md
├── generics-and-promises.md
├── tsconfig.json
└── README.md
```
