//# Type inference is the ability of TypeScript to automatically deduce the type of a variable or expression based on the context in which it is used. This means you don't always have to explicitly specify the type of a variable, as TypeScript can often infer it for you.
let message = "Hello, world!"; // TypeScript infers that 'message' is of type 'string'

//# Type annotations are explicit declarations of the types of variables, function parameters, return values, etc. They are useful when you want to be explicit about the types or when TypeScript cannot infer the type correctly.
let name2: string = "John Doe"; // Explicitly declare 'name' as a 'string