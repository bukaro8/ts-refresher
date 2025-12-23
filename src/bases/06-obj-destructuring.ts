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
const {firstName}=person
console.log(firstName)