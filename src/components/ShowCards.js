import React from "react";
import RenderCard from "./renderCard";



const ShowCards = (props) => {
    const menu = props.products.map((product) => {
        return (
            <div key={product.id} className="col-12 col-md-5 m-1">
                <RenderCard product={product} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}


export default ShowCards;