import PokemonCard from "./PokemonCard";

function PokemonsList({pokemons, title, handleClick}) {
  function calcCP() {
    let totalCP = 0
    pokemons.forEach(p => {
      totalCP += p.cp        
    });
    if (title === "Chosen Pokémons") {
      return `Total: ${totalCP} CP`
    }
  }
  return ( 

    <section className="pokemon-list">
      <h3>{title}</h3>
      <section>
        {
          pokemons.map((pokemon, i) => (
           
              <PokemonCard key={i} pokemon={pokemon} handleClick={handleClick}/>

          ) )
        }
      </section>

        <p>{calcCP()}</p>
  
    </section>
   );
}

export default PokemonsList;