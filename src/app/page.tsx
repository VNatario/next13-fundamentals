export default async function Home() {
  const response = await fetch('https://api.github.com/users/VNatario')
  const data = await response.json()
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
