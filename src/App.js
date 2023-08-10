import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main } from './components/Main';
import { Header } from './components/Header';
import { Contacts } from './components/Contacts';
import { Post } from './components/Post';
import { Photos } from './components/Photos';
import post1Photo from './img/1.jpg';
import profile1Photo from './img/2.jpg';
import comment from './img/comment.png';
import like from './img/like.png';
import share from './img/share.png';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path='/posts' element={
            <Post author={{
              name: "The Pupa",
              photo: profile1Photo,
              nickname: "@pupapupa"
            }}
            content="Those who know, do. Those that understand, teach."
            image={post1Photo}
            date={"29 лип. 23"}
            buttons={{
              commentBut: comment,
              likeBut: like,
              shareBut: share,
              commentAmount: "15",
              likeAmount: "99",
              shareAmount: "6"
            }}
            />} />
            <Route path="/photos" element={<Photos />}/>  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
