import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [myCards, setMyCards] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  function addCard(newCard) {
    setMyCards(prevCards=> 
    [...prevCards, newCard]
    );
  }

  function filterCards(event) {
    setSearchQuery(prevSearch=>event.target.value);
  }
  console.log(searchQuery)

  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then(res=>res.json())
    .then(cards=>setMyCards(prevCards=>cards))
  }, [])

  const filteredCards = searchQuery==="" ? myCards : myCards.filter(card=>card.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addCard={addCard}/>
      <br />
      <Search filterCards={filterCards}/>
      <br />
      <PokemonCollection showCards={filteredCards} />
    </Container>
  );
}

export default PokemonPage;
