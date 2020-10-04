import React from 'react';
import ProductsConsumer from '../../Context/mobile-context';
const match = () => {
    let d = "Conguratulations!";
    return (
        <div>
            <h4>MATCH</h4>
            <ProductsConsumer.Consumer>
                {(context) => {
                    console.log("context", context);
                    context.data.productList.map(p => <h1>{p.name}</h1>)
                }}
            </ProductsConsumer.Consumer>
            {d}
        </div>
    );
};

export default match;