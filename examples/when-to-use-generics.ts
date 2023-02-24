interface Animal {
    name: string;
}

interface Human {
    firstName: string;
    lastName: string;
}

const getDisplayName = (item: Animal | Human): {displayName: string} => {
    return {
        displayName: item.name;
    }
}

const getDsiplayNameIn = (item: Animal | Human): { displayName: string } => {
    if("name" in item) return {displayName: item.name};
}

const getDisplayGeneric = <T extends Animal | Human> (item: T ): T extends Human ? { humanName: string } : { animalName: string } => {
    if("firstName" in item) return { humanName: item.firstName };
    return { animalName: item.name };
}

getDisplayGeneric({name: "Doge"});
getDisplayGeneric({firstName: "John", lastName: "Doe"});