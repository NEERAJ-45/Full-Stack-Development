let slugify  = require('slugify')

let a  = slugify('Neeraj is too Good')
console.log(a);

// if You prefer Something Other than -

let b = slugify('Neeraj is just a ^&*(%$#@Failure... Nothing Else','&')
console.log(b);
