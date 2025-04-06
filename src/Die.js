export default function Die() {
  const roll = Math.floor(Math.random() * 6 + 1);
  return <h3> Die Roll: {roll} </h3>;
}
