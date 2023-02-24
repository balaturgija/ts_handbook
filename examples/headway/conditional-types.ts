type Diesel = {
    type: "petroleum" | "bio" | "synthetic";
}

type Gasoline = {
    type: "hybrid" | "conventional";
}

type Bus = {
    engine: Diesel;
}

type Car = {
    engine: Gasoline;
}

const bmwCar: Car = {
    engine: {
        type: "hybrid"
    }
}

const volvoBus: Bus = {
    engine: {
        type: 'petroleum'
    }
}
/* 
 *  Generic aproach
 */
type Engine<T> = T extends Bus | Car ? T["engine"] : never;

type BusEngine = Engine<Bus>;

const busEngine: Engine<Bus> = {
    type: 'bio'
};

const carengine: Engine<Car> = {
    type: "conventional"
}

const invalid: Engine<Car> = {
    type: "bio"
}

type Bicycle = {
    power: "limbs";
}

type NoEngine = Engine<Bicycle>; // never

const noEngine: NoEngine = {
    type: "limbs"
}


/* 
    *Example 2 
*/
enum Priority {
    mustHave = "Must Have",
    shouldHave = "Should Have",
    couldHave = "Could Have",
    wontHave = "Won't Have"
}

const backlog = {
    releases: [
        {
            name: "Sprint 1",
            epics: [
                {
                    name: "Account Management",
                    tasks: [
                        { name: "Singles Sign On", priority: Priority.mustHave },
                        { name: "Email Notifications", priority: Priority.mustHave },
                    ],
                },
            ],
        },
    ],  
};

type Unarray<T> = T extends Array<infer U> ? U : T;
type Release = Unarray<typeof backlog["releases"]>;

const releases: Release[] = [
    {
        name: "Sprint 1",
        epics: [
            {
                name: "Account Management",
                tasks: [
                    { name: "Singles Sign On", priority: Priority.mustHave },
                    { name: "Email Notifications", priority: Priority.mustHave },
                ],
            },
        ],
    },
];

type Epic = Unarray<Release["epics"]>; 
const epic: Epic = {
    name: "Account Management",
    tasks: [
        { name: "Singles Sign On", priority: Priority.mustHave },
        { name: "Email Notifications", priority: Priority.mustHave },
    ],
},

export {};