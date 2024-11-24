import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addCard}) {
  const blankObj = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  }

  const [formData, setFormData] = useState(blankObj);

  function updateForm(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(prevData=>
      {return {...prevData,
        [name]: value
      }}
    )
  }

  function handleSubmit() {
    const newCard = {
      name: formData.name,
      hp: formData.hp,
      sprites: {front: formData.frontUrl, back: formData.backUrl}
    }

    fetch("http://localhost:3001/pokemon",
      {method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newCard)
      }
    )
    .then(res=>res.json())
    .then(pokemon=>
      {addCard(pokemon)
        console.log("Added", pokemon)
      setFormData(prevData=>blankObj)}
    );
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name} 
            onChange={updateForm}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formData.hp} 
            onChange={updateForm}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl} 
            onChange={updateForm}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl} 
            onChange={updateForm}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
