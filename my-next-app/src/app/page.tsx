async function getUsers() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return ['Lucas', 'Zezinho', 'Matheus']
}

export default async function Home() {
  const users = await getUsers();
  return (
    <div>
      Hello World!
      <hr></hr>
      {users.map(user => (
        <p>{user}</p>
      ))}
    </div>
  );
}
