# The significance of union and intersection types in Typescript.

In TypeScript, union, and intersection types help us write flexible and type-safe code, making our work easier and our code more robust.

**Union Types (|): **
Allow a variable to be one of several types, ideal for values varying between options. With union types, TypeScript restricts our variable to these types, catching errors early and keeping our code consistent.

**Example:**

`type Vehicle = 'car' | 'bus' | 'plane';
const currentStatus: Vehicle = 'car';`

**Intersection Types (&): **
It combines multiple types into one, requiring all properties of those types, perfect for merging object structures.

**Example:**

`type Name = {
name: string;
}

type Age = {
age: number;
}

type Person = Name & Age;

const person: Person = {
name: 'Sazzad',
age: 27
};`

## When to Use Union vs. Intersection Types
- We use union types when a variable can be one of several distinct types.
- We use intersection types when we want to combine properties from multiple types into a single type.
