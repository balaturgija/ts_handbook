interface Person {
    firstName: string;
    lastName: string;
  }
  
  interface Error {
    message: string;
  }

  function isPerson(data: Person | Error): data is Person {
    return Boolean((data as Person).firstName);
  }

  function isPersonV2(data?: unknown): data is Person {
    if(!data) return false;

    const person = data as Person;
    return(
        person.firstName !== undefined && person.lastName !== undefined
    )
  }

  function isPersonV3(data: unknown): data is Person {
    if(!data) return false;

    const person = data as Person; 
    const validProps: Array<keyof typeof person> = [
        'firstName',
        'lastName',
    ]
    return validProps.every(person.hasOwnProperty);
  }

  function test(data: Error | Person) {
    if(isPerson(data)) {
        data.firstName;
        return;
    }
  }

  const eerr: Error = { message: '', };
  test(eerr);

  export {};