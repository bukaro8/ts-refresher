// const charactersNames:string[]=['gato','perro','conejo', 'mouse']
// const[,,conejo]=charactersNames
// console.log({conejo})

const useState=(str:string)=>{
    return [str,(str:string)=>console.log(str)] as const
}
const [name, setName] = useState('Goku');
console.log({name});       
setName('Vegeta');    