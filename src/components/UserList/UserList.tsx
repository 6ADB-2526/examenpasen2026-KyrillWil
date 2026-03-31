import "./UserList.css";

//interface voor een nieuwe user
interface User {
  id: number;
  naam: string;
}
//interface voor users die er al in waren
interface RegisteredUser {
  naam: string;
}
//interface die zegt dat het een object is
interface Props {
  users: User[];
  registeredUsers: RegisteredUser[];
}

export default function UserList({ users, registeredUsers }: Props) {
  return (
    //maak voor alle waarden in de object een li aan met de naam, doe dit van de lijst users en registeredUsers
    <>
      <div>
        <h1>Geregistreerde Gebruikers:</h1>
      </div>
      <ul>
        {registeredUsers.map((info) => (
          <li className="registered">{info.naam}</li>
        ))}
        {users.map((info) => (
          <li className="nonRegistered">{info.naam}</li>
        ))}
      </ul>
    </>
  );
}
