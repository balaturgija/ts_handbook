/* 
*Distributivity
*/

type Letters = "a" | "b" | "c";

type RemoveC<T> = T extends "c" ? never : T;
type WithoutC = RemoveC<Letters>;

type RemoveCAddD<T> = T extends "c" ? "d" : T;
type WidouthCWithD = RemoveCAddD<Letters>;