import './style.css'
import { getHeroesByOwner } from './bases/08-imp-exp'
// import './bases/01-const-let'
// import './bases/03-object-literal'
// import './bases/04-arrays'
// import './bases/05-functions'
// import "./bases/07-arr-destructuring"
import './bases/08-imp-exp'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  ${console.log(getHeroesByOwner('Dc'))}
   <h1>Hello World</h1>
  </div>
`

