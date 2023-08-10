import h1 from '../img/h1.jpg';
import h2 from '../img/h2.jpg';
import h3 from '../img/h3.jpg';
import h4 from '../img/h4.jpg';
import h5 from '../img/h5.jpg';
import h6 from '../img/h6.jpg';
import './Photos.css';

export function Photos(){
  return (
    <div className='photosWrapper'>
      <img src={h1} alt="Hamster"/>
      <img src={h2} alt="Hamster"/>
      <img src={h3} alt="Hamster"/>
      <img src={h4} alt="Hamster"/>
      <img src={h5} alt="Hamster"/>
      <img src={h6} alt="Hamster"/>
    </div>
  );
}