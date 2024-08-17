import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import ItemContext from "./itemContext";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
} from "reactstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import AddItemForm from "./AddItemForm";
function Menu() {
    const { itemType } = useParams();
    const { drinks, snacks } = useContext(ItemContext);
    const [list, setList] = useState([]);

    //set the list of items based on the page
    useEffect(() => {
        if (itemType === 'snacks') {
            setList(snacks);
        }

        if (itemType === 'drinks') {
            setList(drinks);
        }
    }, [itemType, snacks, drinks]);

    return (
        <section className="col-md-4">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        Menu
                    </CardTitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </CardText>
                    {itemType === 'snacks' || itemType === 'drinks' ?
                        <ListGroup>
                            {list.map(item => (
                                <Link to={`/${itemType}/${item.id}`} key={item.id}>
                                    <ListGroupItem>{item.name}</ListGroupItem>
                                </Link>
                            ))}
                        </ListGroup>
                        : <AddItemForm />
                    }
                </CardBody>
            </Card>
        </section>
    );
}

export default Menu;
