// 'use client' -> Usar componente no modo CSR

export default async function Home() {
  async function getUsers() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return ['Lucas', 'Zezinho', 'Matheus']
  }

  console.log('Oi!')

  const users = await getUsers();
  return (
    <div>
      Hello World!
      <hr></hr>
      {users.map((user, i) => (
        <p key={i}>{user}</p>
      ))}
    </div>
  );
}
