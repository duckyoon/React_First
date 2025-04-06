import "./Die.css";

export default function Die() {
  const roll = Math.floor(Math.random() * 6 + 1);
  return <h3 class="Die"> Die Roll: {roll} </h3>;
}
