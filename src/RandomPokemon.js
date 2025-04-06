import "./RandomPokemon.css";

export default function RandomPokemon() {
  const randomNumber = Math.floor(Math.random() * 151 + 1);
  const pokemonUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`;
  return (
    <div className="RandomPokemon">
      <h1>Random #{randomNumber}</h1>
      <img src={pokemonUrl} alt="pokemon" />
    </div>
  );
}

// 1. Math.random() 에서 r 소문자
// 2. Math.random은 함수이기 때문에 () 붙여줘야함
