import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id, name, hp, sprites}) {
  const [onFront, setOnFront] = useState(true);

  function handleClick() {
    setOnFront(onFront=>!onFront);
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img 
            src={onFront ? sprites.front : sprites.back}
            alt="oh no!" 
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
