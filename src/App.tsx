import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList/UserList";

interface User {
  naam: string;
}

export default function App() {
  //statische lijst met users die al geregistreerd waren
  const GeregistreerdePersonen = ["Karel", "Els", "Piet"];
  //dynamische lijst voor users toe te voegen(id en voornaam is even weggelaten hier en ook uit UserList omdat het eerst met naam moet werken)
  const [newUser, setNewUser] = useState([{ naam: "" }]);
  //functie die de nieuwe formDatan toevoegd aan de lijst
  function voegToe(formData: User) {
    const newList = setNewUser({ ...newUser, formData }); //maak een nieuwe lijst en spread de data van newUser uit en voeg het nieuwe data erbij
    return newList;
  }
  return (
    <div>
      <RegistrationForm onRegister={voegToe} />
      <hr />
      <UserList registeredUsers={GeregistreerdePersonen} users={newUser} />
    </div>
  );
}
