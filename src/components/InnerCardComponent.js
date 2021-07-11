import React,{Component} from "react";
import {Container, Row} from "reactstrap";
import ShowCards from "./ShowCards";

const Products = [
    {
        id: 1,
        name: "Laptop",
        company: "Dell",
        description: "Easy-to-use and thoughtfully designed, the new Inspiron keeps you connected to what matters most.",
        image: "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/vostro_notebooks/15_7510_non-touch/pdp/410-v7510-images-notebook-vostro-15-7510nt-800x620.png?qlt=95&fit=constrain,1&hei=620&wid=800&fmt=png-alpha"
    },
    {
        id: 2,
        name: "Mobile",
        company: "Huawei",
        description: "See beyond the horizon, explore the unknown, and leap boldly into the future, with unprecedented power, speed and imagination.",
        image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/mate40-pro/images/intro/kv/2-n@2x.webp"
    },
    {
        id: 3,
        name: "Car",
        company: "Toyota",
        description: "'Urban Toughness’ forms the Corolla Cross’ overall design theme, combining the core concepts of ‘Imposing Toughness’ and ‘Urban Refinement’. The Corolla Cross stands out with its stylish and sporty appearance yet offers a sense of luxury in combination with toughness.",
        image: "https://www.toyota-indus.com/wp-content/themes/toyotaindus/page-templates/img/corolla-cross/gallery/thumb-7.png"
    },
    {
        id: 4,
        name: "Bike",
        company: "Honda",
        description: "Add stars to your adventurous journey.",
        image: "https://www.atlashonda.com.pk/wp-content/uploads/2021/06/Pop-up.png"
    },
]

class INNERCARD extends Component{
    constructor(props) {
        super(props);
        this.state={
            products:Products
        }
    }


    render() {
        return (
                    <ShowCards products={this.state.products}/>
        );
    }
}

export default INNERCARD;