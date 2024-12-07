//# Intersection Types

//?  1.Union
let abc: string | null;

//? &&

type EUser = {
  Username: string;
  Password: string;
  age: number;
};

type admin = EUser & {
  getDetails(user: string): void;
};
function rns(obj:admin): void {
   
}
