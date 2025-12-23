// function greet(name:string):string{
//     return `Hi ${name}`
// }

const greet2=(name:string):string=>`Hi ${name}`
console.log(greet2('Victor2'))

interface User{
    uid:string;
    username:string
}
function getUser():User{
    return{
        uid:'abc123',
        username:'gordito'
    }
}
const getUser2=():User=>({uid:'abc567',username:'gato'})
const user=getUser()
const user2=getUser2()
console.log(user, user2)