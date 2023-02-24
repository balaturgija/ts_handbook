type StringUnion = 'a' | 'b';
type stringUnionFail = string | StringUnion;

const stringUnion: StringUnion = 'a';

export {};