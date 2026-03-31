import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList/UserList";

interface User {
  id: number;
  naam: string;
}

export default function App() {
  //statische lijst met users die al geregistreerd waren
  const GeregistreerdePersonen = ["Karel", "Els", "Piet"];
  //dynamische lijst voor users toe te voegen(voornaam is even weggelaten)
  const [newUser, setNewUser] = useState([{ id: 0, naam: "" }]);
  function voegToe(formData: User) {
    setNewUser({ ...newUser, formData });
    // const newList = setNewUser([{ ...newUser, formData }]);
    // return newList;
  }
  return (
    <div>
      <RegistrationForm onRegister={voegToe} />
      <hr />
      <UserList registeredUsers={GeregistreerdePersonen} users={newUser} />
    </div>
  );
}
