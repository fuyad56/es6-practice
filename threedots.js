const ages = [12, 14, 16, 12, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 41, 61, 32, 47];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 =[...ages, ...ages2, 5, ...ages3];
console.log(allAges2);

const business = 650;
const minister = 450;
const socib = 200;
const maximum = Math.max (business, minister, socib);
console.log(maximum);

const takaPoisa = [650, 300, 450];
const max = Math.max(...takaPoisa);
console.log(max);