import React, { useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import ItemContext from "./itemContext";

function FoodItem() {
  const { id, itemType } = useParams();
  const { drinks, snacks } = useContext(ItemContext);
  let food;

  //If on snacks page, find the snack
  if (itemType === 'snacks') {
    food = snacks.find(i => i.id === id);

    //If on drinks page, find the drink 
  } else if (itemType === 'drinks') {
    food = drinks.find(i => i.id === id);
  }

  //If the snack or drink doesnt exist, redirect to their list page
  if (!food) return <Redirect to={`/${itemType}`} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {food.name}
          </CardTitle>
          <CardText className="font-italic">{food.description}</CardText>
          <p>
            <b>Recipe:</b> {food.recipe}
          </p>
          <p>
            <b>Serve:</b> {food.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
