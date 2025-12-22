type Person={
    firstName:string;
    lastName:string;
    age:number
    address:Address
}
type Address={
    postcode:number;
    city:string
}
const person:Person={
    firstName:'gato',
    lastName:'loco',
    age:5,
    address:{
        postcode:123,
        city:'New York'
    }

}
const yayo:Person={
    firstName: "yayo",
    lastName: "Yayina",
    age: 12,
    address: {
        postcode: 10,
        city: "Orea"
    }
}
console.log(person['firstName'],yayo.address)