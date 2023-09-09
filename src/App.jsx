import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'
function App() {
  function handleBtn1 (){
    alert('btn 1 clicked')
  };
  const handleBtn2 = () =>{
    alert('btn 2 clicked')
  }
  const addToFive = (num) =>{
    alert(5 + num)
  }
  return (
    <>
    <Friends></Friends>
    <Users></Users>
    <Team></Team>
    <Counter></Counter>
    <button onClick={handleBtn1}>Click me</button>
    <button onClick={handleBtn2}>Click me 2</button>
    <button onClick={() =>{alert('btn 3 clicked')}}>Click me 3</button>
    <button onClick={() => addToFive(4)}>click me 4</button>
    </>
  )
}

export default App
