import React from "react";
import { Card } from "semantic-ui-react";


function CardGroup(props) {
  const characters = Array.from(props.characterArray);

  const cards = characters.map((character, index) => {
    return (
      <Card key={index}>
        <Card.Content>
          <Card.Header>{character.name}</Card.Header>
          <Card.Description>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  });
  return <Card.Group>{cards}</Card.Group>;
}
export default CardGroup;
