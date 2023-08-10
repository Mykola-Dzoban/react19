import './Post.css';

export function Post(props){
  return (
    <div className='post'>
      <div className='authorInfo'>
        <img className='authorPhoto' src={props['author']['photo']} alt="Profile" />
        <span className='authorName'>{props['author']['name']}</span> <span className='authorNick'>{props['author']['nickname']}</span> · <span className='publicDate'>{props['date']}</span>
      </div> 
      <div className='content'>
        <div className='content__main'>
          <p className='postText'>{props['content']}</p>
          <img className='postPhoto' src={props['image']} alt="Post" />
        </div>
        <div className='content__additional-buttons'>
          <span><img src={props['buttons']['commentBut']} alt="Comment" /><span>{props['buttons']['commentAmount']}</span></span>
          <span><img src={props['buttons']['likeBut']} alt="Like" /><span>{props['buttons']['likeAmount']}</span></span>
          <span><img src={props['buttons']['shareBut']} alt="Share" /><span>{props['buttons']['shareAmount']}</span></span>
        </div>
      </div>
    </div>
  )
}