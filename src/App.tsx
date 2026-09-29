import './App.css'

function App() {


  return (
    <>
          <h1>Get A started</h1>
          <Person></Person>
          <Gaget></Gaget>
          <Daynamic></Daynamic>
          <Money></Money>
    </>
  )
}

function Person(){
  return <p>I Am Here</p>
}

function Gaget(){
  return(
    <>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}
function Daynamic(){
  return(
    <>
    <p>Add 1+2 Sum= {1+2} </p>
    <p>Divaided 10/2 Sum= {10/2} </p>
    <p>Multipli 10/2 Sum= {10*2} </p>
    </>
  )
}
const Taka= "Taka";
function Money(){
  return(
    <>
    <p>I Love {Taka}</p>
    </>
  )
}

export default App
