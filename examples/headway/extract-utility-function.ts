type Trip = | { 
    origin: { 
        uuid: string, 
        city: string, 
        state: string 
    } 
} | { 
    originUuid: string 
};

type TripWithOriginRef = Extract<Trip, { originUuid: string }>;
type TripWithOriginWhole = Extract<Trip, { origin: { uuid: string } }>;

const tripOriginRef: TripWithOriginRef = { originUuid: "as2df2-das23-sada-f34t-dsa2-6hfgh" };

const tripOriginWhole: TripWithOriginWhole = {
    origin: {
        uuid: "as2df2-das23-sada-f34t-dsa2-6hfgh",
        city: "Denver",
        state: "Colorad",
    }
}

const isRef = ( trip: Trip ): trip is TripWithOriginRef => {
    return "originUuid" in trip;
}

const isDraft = (trip: Trip): trip is TripWithOriginWhole => {
    return "origin" in trip;
}

const result = [tripOriginRef, tripOriginWhole].filter(isRef);


export {};