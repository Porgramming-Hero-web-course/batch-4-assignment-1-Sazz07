The significance of union and intersection types in Typescript.
TypeScript’s union and intersection types enhance flexibility and safety in handling different types.

Union Types (|): Allow a variable to be one of several types, ideal for values that can vary between options.

example:
type Vehicle = 'car' | 'bus' | 'plane';
const currentStatus: Vehicle = 'car';

Intersection Types (&): It combine multiple types into one, requiring all properties of those types, perfect for merging object structures.

example:

type Name = {
name: string;
}

type Age = {
age: number;
}

type Person = Name & Age;

const person: Person = {
name: 'Sazzad',
age: 27
};

We use union for variable type options, intersection to combine structures. These types help keep our code flexible and type-safe.
