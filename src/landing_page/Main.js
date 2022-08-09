import React from 'react'
import Ebook from './imagebook.jpg'
import Romance from './imagerom.jpg'
import Adventure from './imageadv.jpg'
import Mystery from './imagemys.jpg'
import History from './imagehis.jpg'
import Biog from './imagebiog.jpg'
import Thrill from './imagethr.jpg'
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div to={"/pages"} className="innerbox">
      <img src={props.img} className="imgs" id="wid" />
      <h4>{props.name}</h4>
    </div>
  );
}

function Main(props) {
  return (
    <div className="main">
      <div className="grid">
        <div className="grid-item">
          <img src={Ebook} className="imge" />
          <h2 className='ebook'>Lots of Ebooks </h2>
        </div>
      </div>

      <div className="">
        <h3>Browse Genres</h3>
          <div className="top">
          <Link to="genre1" onClick={()=>{props.changeGenre("math")}}><Card name="Mystery" img={Mystery}/></Link>
          <Link to="genre1" onClick={()=>{props.changeGenre("romance")}}><Card name="Romance" img={Romance} search={"physics"} /></Link>
          <Link to="genre1" onClick={()=>{props.changeGenre("tech")}}><Card name="Adventure" img={Adventure} /></Link>
          <Link to="genre1" onClick={()=>{props.changeGenre("chemistry")}}><Card name="Biography" img={Biog} /></Link>
          <Link to="genre1" onClick={()=>{props.changeGenre("math")}}><Card name="History" img={History} /></Link>
          <Link to="genre1" onClick={()=>{props.changeGenre("sports")}}><Card name="Thriller" img={Thrill} /></Link>
        </div>
      </div>
    </div>
  )
}

export default Main