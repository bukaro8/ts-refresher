
import { heroes,type Hero} from "./data/heroes.data";
// const getHeroById=(id:number):(Hero|undefined)=>{
//     return heroes.find((el)=>el.id===id)
// }
// console.log(getHeroById(1))

export const getHeroesByOwner=(owner:string):Hero[]=>{
    return heroes.filter((word)=>word.owner.toLowerCase()===owner.toLowerCase())
}





