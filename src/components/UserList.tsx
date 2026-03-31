interface User {
  id: number;
  naam: string;
}
interface Props {
  users: User[];
  registeredUsers: string;
}

export default function UserList({ users, registeredUsers }: Props) {
  return (
    <>
      <div>
        <h1>Geregistreerde Gebruikers:</h1>
      </div>
      <ul>
        {users.map((info) => (
          <li>{info.naam}</li>
        ))}
      </ul>
    </>
  );
}
