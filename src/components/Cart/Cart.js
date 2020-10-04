import React, { useContext } from 'react';
import css from './Cart.module.css';


import Ctx from '../../Context/mobile-context';




const Cart = (props) => {

    const context = useContext(Ctx)
    let inCartClass = props.inCart && css.inCart;
    return (
        <div className={[css.prod, "items"].join(" ")} >
            <img className={[css.image, 'flyto-item'].join(" ")} alt="img Of Mobile" src={props.img} alt="3r" />
            <div className={css.name}>name : <span className="properties">{props.name}</span></div>
            <div className={css.price}>price : <span className="properties">{props.price}</span></div>
            <div className={css.colors}>colors : <span className="properties">{props.colors}</span></div>
            <div className={css.garantee}>garantee : <span className="properties">{props.garantee}</span></div>
            <div className={[css.basket, inCartClass, 'flyto-btn', 'my-btn'].join(" ")} onClick={() => props.toggleCart(props.id)}>
                <span  >{props.inCart ? "Remove" : "Add"} </span>
                <i className="fas fa-shopping-basket"></i>
            </div>
        </div>
    );
};

export default Cart;