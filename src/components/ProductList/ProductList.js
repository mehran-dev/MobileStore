import React, { Component } from 'react'
import './ProductList.css';
import ProductsContext from '../../Context/mobile-context';
import img1 from '../../images/prod/1.jpg';
import img2 from '../../images/prod/2.jpg';
import img3 from '../../images/prod/3.jpg';
import img4 from '../../images/prod/4.jpg';
import img5 from '../../images/prod/5.jpg';
import img6 from '../../images/prod/6.jpg';
import img7 from '../../images/prod/7.jpg';


import Fly from './FlyAnimation';



import Cart from '../Cart/Cart';



export default class ProductList extends Component {
    static contextType = ProductsContext;

    toggleCart = (id) => {
        this.context.toggleCart(id)
    }


    render() {
        let imgs = [img1, img2, img3, img4, img5, img6, img7]

        const prods = this.context.data.productList.map((p, i) => {
            return (


                <Cart
                    key={Math.random() + Math.random() ** Math.random()}
                    img={imgs[i++]}
                    name={p.name}
                    price={p.price}
                    colors={p.colors}
                    garantee={p.garantee}
                    id={p.id}
                    inCart={p.inCart}
                    toggleCart={this.toggleCart}
                />

            )
        })


        return (
            <React.Fragment>

                <h2>products</h2>
                <div className="prodContainer">

                    {prods}
                    <Fly />
                </div>

            </React.Fragment >
        )
    }
}
