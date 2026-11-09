# Type Narrowing in TypeScript: Checking a Value Before Using It

Sometimes a function gets a value that could be more than one type. Maybe it is a string, maybe a number. TypeScript calls this a union type. But inside the function, you usually want to treat each type differently. Type narrowing means writing a simple check so TypeScript knows exactly which type you have at that moment.

Here is a small example:

```ts
function processInput(input: string | number): string {
  if (typeof input === "string") {
    return input.trim().toUpperCase(); // here input is a string
  }
  return input.toFixed(2); // here input is a number
}
```

The `typeof` check tells TypeScript: inside the `if`, this value is a string. After the `if`, it must be a number. That is why `.trim()` and `.toFixed()` do not cause errors.

When you work with classes, use `instanceof` instead:

```ts
function formatDate(value: Date | string): string {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return new Date(value).toISOString();
}
```

And when you have two different objects, use the `in` operator to check if a property exists:

```ts
function move(animal: Bird | Fish): void {
  if ("fly" in animal) {
    animal.fly(); // it must be a Bird
  } else {
    animal.swim(); // it must be a Fish
  }
}
```

The nice part is that you do not need any type casting like `as`. You just write a normal check, and TypeScript follows your logic. If your code has fewer type assertions, it usually means your narrowing is good.

So next time you get a union type, do not panic. Add a check, and TypeScript will understand the rest.
