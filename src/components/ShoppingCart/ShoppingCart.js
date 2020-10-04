import React, { Component } from 'react'
import Cart from '../Cart/Cart';
import Ctx from '../../Context/mobile-context';





import css from './ShoppingCart.module.css';


import img1 from '../../images/prod/1.jpg';
import img2 from '../../images/prod/2.jpg';
import img3 from '../../images/prod/3.jpg';
import img4 from '../../images/prod/4.jpg';
import img5 from '../../images/prod/5.jpg';
import img6 from '../../images/prod/6.jpg';
import img7 from '../../images/prod/7.jpg';




export default class ShoppingCart extends Component {

    static contextType = Ctx;
    imgs = [img1, img2, img3, img4, img5, img6, img7]


    toggleCart = id => {
        this.context.toggleCart(id)
    }

    render() {


        console.log("p.inCart");
        let carts = this.context.productList.map((p, i) => {
            if (p.inCart) {
                return (
                    <Cart
                        img={this.imgs[i]}
                        name={p.name}
                        garantee={p.garantee}
                        id={p.id}
                        price={p.price}
                        color={p.colors}
                        inCart={p.inCart}
                        toggleCart={this.toggleCart}

                    />
                )
            }


        }).filter(el => el !== undefined)
        console.log(carts);
        if (!carts || carts.length == 0) {
            carts = <div className={css.Empty}>
                <h4> no product selected!</h4>
                <button
                    onClick={
                        () => this.props.history.push("/products")
                    }
                >return to shop?</button>
            </div >
        }

        return (
            <div className={css.shoppingContainer}>
                <h4 className={css.shoppingTitle}>
                    Your Products
                    </h4>
                {carts}
            </div>
        )
    }
}
