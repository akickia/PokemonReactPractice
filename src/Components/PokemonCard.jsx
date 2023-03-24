function PokemonCard({pokemon, handleClick}) {
  return ( 
    <article className="pokemon-card" onClick={() => handleClick(pokemon)}>
      <div style={{backgroundColor:pokemon.color}}></div>
      <section>
      <h3>{pokemon.name}</h3>
      <p>{pokemon.cp} CP</p>
      </section>
      </article>
   );
}

export default PokemonCard;