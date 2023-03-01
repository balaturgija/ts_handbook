enum Size {
  S,
  M,
  L,
  XL,
  XXL,
}

let sizeS = Size.S;
++sizeS;
console.log(Size[sizeS]); // M

let sizeXL = Size.XL;
--sizeXL;
console.log(Size[sizeXL]); // L

let sizeXXL = Size.XXL;
++sizeXXL;
console.log(Size[sizeXXL]); // undefined
