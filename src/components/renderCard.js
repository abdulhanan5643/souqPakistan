import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const RenderCard = (props) => {
    return (
        <Card>
            <CardImg top width="100%" src={props.product.image} height="300" width="200" alt="Card image cap"/>
            <CardBody>
                <CardTitle tag="h5">{props.product.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.product.company}</CardSubtitle>
                <CardText>{props.product.description}</CardText>
                <Button>See Product Details</Button>
            </CardBody>
        </Card>
    );
}

export default RenderCard;