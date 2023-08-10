import "./Contacts.css";
import { useState, useEffect } from "react";
import { Contact } from "./Contact.js";
import uuid4 from "uuid4";

const contacts = [
  {
    id: uuid4(),
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    id: uuid4(),
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    id: uuid4(),
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    id: uuid4(),
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    id: uuid4(),
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    id: uuid4(),
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

export function Contacts() {
  const [userContacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [bySurname, setBySurname] = useState(true);
  const [byName, setByName] = useState(false);
  const [byPhone, setByPhone] = useState(false);
  const [maleOnly, setMaleOnly] = useState(false);
  const [femaleOnly, setFemaleOnly] = useState(false);
  const [unspecifiedGender, setUnspecifiedGender] = useState(false);

  useEffect(() => {
    setContacts(contacts);
  }, []);

  useEffect(() => {
    filterContacts();
  }, [bySurname, byName, byPhone, maleOnly, femaleOnly, unspecifiedGender, search]);

  const handleSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearch(searchValue);

    if (searchValue === "") {
      setContacts(contacts);
    } else {
      filterContacts();
    }
  };

  const resetSearch = () => {
    setSearch("");
    setBySurname(true);
    setByName(false);
    setByPhone(false);
    setMaleOnly(false);
    setFemaleOnly(false);
    setUnspecifiedGender(false);
    setContacts(contacts);
  };

  const filterContacts = () => {
    let filteredContacts = contacts;

    if (search) {
      filteredContacts = contacts.filter((userContact) => {
        let surname = userContact.lastName.toLowerCase();
        let name = userContact.firstName.toLowerCase();
        let phone = userContact.phone.includes(search);

        return (
          (!bySurname || surname.includes(search)) &&
          (!byName || name.includes(search)) &&
          (!byPhone || phone)
        );
      });
    }

    let filteredByGenderContacts = filteredContacts.filter((userContact) => {
      let isMale = maleOnly && userContact.gender === "male";
      let isFemale = femaleOnly && userContact.gender === "female";
      let isUnspecifiedGender = unspecifiedGender && !userContact.gender;

      return (
        (!maleOnly || isMale) &&
        (!femaleOnly || isFemale) &&
        (!unspecifiedGender || isUnspecifiedGender)
      );
    });

    setContacts(filteredByGenderContacts);
  };

  return (
    <div className="contacts-wrapper">
      <div className="search">
        <input type="text" name="contactText" value={search} onChange={handleSearchChange} placeholder="Пошук серед контактів"/>
        <button onClick={resetSearch}>X</button>
      </div>
      
      <div className="filters">
        <div className="byInfo">
          <label htmlFor="surname">За прізвищем</label>
          <input id="surname" type="checkbox" name="bySurname" checked={bySurname} onChange={(event) => setBySurname(event.target.checked)} />
          <label htmlFor="name">За ім'ям</label>
          <input id="name" type="checkbox" name="byName" checked={byName} onChange={(event) => setByName(event.target.checked)}/>
          <label htmlFor="phone">За телефоном</label>
          <input id="phone" type="checkbox" name="byPhone" checked={byPhone} onChange={(event) => setByPhone(event.target.checked)} />
        </div>
        <div className="byGender">
          <label htmlFor="maleOnly">Чоловік</label>
          <input id="maleOnly" type="checkbox" name="maleOnly" checked={maleOnly} onChange={(event) => setMaleOnly(event.target.checked)} />
          <label htmlFor="femaleOnly">Жінка</label>
          <input id="femaleOnly" type="checkbox" name="femaleOnly" checked={femaleOnly} onChange={(event) => setFemaleOnly(event.target.checked)} />
          <label htmlFor="unspecifiedGender">Не вказано</label>
          <input id="unspecifiedGender" type="checkbox" name="unspecifiedGender" checked={unspecifiedGender} onChange={(event) => setUnspecifiedGender(event.target.checked)} />
        </div>
      </div>
      {userContacts.map((userContact) => (
        <Contact key={userContact.id} user={userContact} />
      ))}
    </div>
  );
}
