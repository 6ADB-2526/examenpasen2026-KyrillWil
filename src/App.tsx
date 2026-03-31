import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList";

interface User {
  id: number;
  naam: string;
}

export default function App() {
  const GeregistreerdePersonen = ["Karel", "Els", "Piet"];
  const [newUser, setNewUser] = useState([{ id: 0, naam: "" }]);
  function voegToe(formData: User) {
    const newList = [{ ...newUser, formData }];
    return setNewUser(newList);
  }
  return (
    <div>
      <RegistrationForm onRegister={voegToe} />
      <hr />
      <UserList users={newUser} />
    </div>
  );
}
