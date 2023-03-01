function extractProps(name: string, options: Record<string, unknown>) {
    return options[name];
  }

type ExtractPropsFn = (
    name: string;
    options: Record<string, unknown>
) => unknown;

type ExtractPropsFromFunction = Parameters<typeof extractProps>;
type ExtractPropsFromType = Parameters<ExtractPropsFn>;

/* 
  * Use it if your data seems to alway be an object and never undefined or missing
    data?: unknown => data: Record<string, unknown>
*/

interface ActiveUser {
  id: string;
  activated: boolean;
}
                            //Record<string. unknown> | ActiveUser
function isActive(data: Record<keyof ActiveUser, | unknown>): data is ActiveUser {
  if(!data) return false;

  const user = data as ActiveUser;
  const validProps: Array<keyof typeof user> = ['id', 'activated'];
  return validProps.every((val) => user.hasOwnProperty(val));

}

/* 
 * documentation example
*/

interface CatType {
  age: number;
  breed: string;
}

type CatKeys = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatKeys, CatType> = {
  miffy: {age: 10, breed: "Persian"},
  boris: {age: 5, breed: "Maine Coon"},
  mordred: {age: 16, breed: "British Shorthair"},
}

cats.boris;

export {};