import mainPhoto from '../img/main.jpg'
import './Main.css';

export function Main(){
  return (
    <div className='main-wrapper'>
      <img className='mainPhoto' src={mainPhoto} alt="Main"/>
      <p className='mainText'>If you're feeling lazy to code today, answer these 2 questions:<br/>1. What happens if you code today?<br/>2. What happens if you don't code today?</p>
    </div>
  )
}