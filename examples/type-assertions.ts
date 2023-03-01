interface House {
  bedrooms: number;
  bathrooms: number;
}

interface Mansion {
  bedrooms: number;
  bathrooms: number;
  butlers: number;
}

const avenueRoad: House = {
  bedrooms: 11,
  bathrooms: 10,
  butlers: 1,
};

const mansionbad: Mansion = avenueRoad;

/* 
    Force type assertion 
*/
const mansiongood: Mansion = <Mansion>avenueRoad;
