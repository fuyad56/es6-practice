const person = {Name: "Jack William", Age: 17, Job: "facebooker", gfName: "Ema Watson", address:"Kocu Khet", phone: 0125532142, friends: ["Tom hancks", "Tom cruise", "Tom yarn"]};

const {phone, gfName, address} = person;
// const gfName = person.gfName;
// const phone = person.phone;

console.log(gfName, phone, address);


const friends = ["Shakib Khan", "Arman Khan", "Amir Khan", "Salman Khan", "Sharukh Khan"];
const [cotoFriend, ...restF] = friends;
console.log(restF);


const complexObject ={
    name: "ABC",
    info: {
        address: "Kola Bagan",
        leader: "Tiger Leader"
    }
}

const {leader} = complexObject.info;
console.log(leader);
