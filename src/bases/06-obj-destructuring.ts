type Person={
    firstName:string;
    lastName:string;
    age:number
    address:Address
    city:string
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
    },
    city:'ciudad'

}
const useContext=({firstName,lastName,age,city}:Person)=>{
    return {
        keyName:firstName,
        user:{
            lastName,
            age
        },
        city
    }
}

const {keyName,city,user}=useContext(person)
console.log(keyName,city,user.age)
