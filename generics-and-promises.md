# Generics in TypeScript: Write Once, Use With Any Type

Have you ever written the same function twice, once for strings and once for numbers? Generics solve that problem. A generic function takes a type as a placeholder, usually named `T`, and TypeScript replaces it with the real type when you call the function.

Here is a simple example:

```ts
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((combined, current) => combined.concat(current), []);
}

const strings = concatenateArrays(["a", "b"], ["c"]); // string[]
const numbers = concatenateArrays([1, 2], [3]); // number[]
```

One function, two different types, and no `any`. TypeScript looks at the arguments, figures out `T` by itself, and gives you the correct return type. You can also add a rule about what `T` can be:

```ts
function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}
```

The `extends keyof T` part means the key must exist on the objects. If you try `pluckValues(users, "age")` and there is no `age` property, the compiler stops you before the code even runs.

Generics become really useful with async code. Every API call returns a `Promise<T>`, where `T` is the value you get back:

```ts
function fetchUser(id: number): Promise<User> {
  return fetch(`/api/users/${id}`).then((res) => res.json());
}

const user = await fetchUser(1); // user is a User
```

Because the function promises a `User`, everything after the `await` knows the type. Autocomplete works, wrong property names show errors, and you do not need to guess anything.

That is why generics are worth learning early. They keep your types correct in shared functions and API calls, which is where most real projects need them.
