import "./Contact.css";
import phonePhoto from "../img/phone.png"

export function Contact(props){
  const {user} = props;
  return <div className="user-contact">
    <div className="userPhoto">{user.firstName[0]}</div>
    <div className="user-info">
      <p>{user.firstName} {user.lastName}</p>
      <p>{user.phone}</p>
    </div>
    <img className="phonePhoto" src={phonePhoto} alt="Phone" />
  </div>;
}