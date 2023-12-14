import React from 'react';
import burger from './burger.jpg'
import './App.css'

function MyButton() {
  return (
    <button>
      მე ვარ ღილაკი
    </button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there. <br/>How do you do</p>
    </>
  );
}
function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <MyButton/>
      <AboutPage/>
      <Image/>
      <Gilaki/>
    </div>
  );
}
function Image(){
  return(
    <div>
      <h1>ბურგერი</h1>
      <img
      src={burger}
      alt='Burger'
      />
    </div>
  )
}
function Gilaki(){
  function pressButton(){
    alert('შენ დააჭირე ღილაკს!')
  }
  return(
    <button onClick={pressButton}>Damachire</button>
  )
}
g
export { MyButton, AboutPage, Image, Gilaki};
export default App
