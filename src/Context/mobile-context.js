import React, { Component } from 'react';


const ProductsContext = React.createContext();


class ProductsProvider extends Component {

    state = {
        productList: [
            {
                id: 12312,
                name: "Galexy",
                year: 2015,
                price: 2000,
                img: "1.jpg",
                garantee: 3,
                colors: ["red", "blue", "black", "white", "thises"],
                inCart: false
            },
            {
                id: 1264442312,
                name: "N98",
                year: 2013,
                price: 2500,
                img: "7.jpg",
                garantee: 3,
                colors: ["red", "blue", "black", "white", "thises"],
                inCart: false
            },
            {
                id: 123434234,
                name: "KG 1650",
                year: 2001,
                price: 3020,
                img: "6.jpg",
                garantee: 6,
                colors: ["red", "blue", "black", "white", "thises"],
                inCart: false
            },
            {
                id: 12348564634234,
                name: "LG 650",
                year: 2001,
                price: 3020,
                img: "5.jpg",
                garantee: 6,
                colors: ["red", "blue", "black", "white", "thises"],
                inCart: false
            },

        ],
        productDetailes: [6, 6, 6, 5],
        productInCart: [],
        username: '',
        password: '',
        isAuthenticated: false
    }


    setProduct = (newProdID) => {
        /*    console.log("setProduct");
           this.setState({
               newProduct: "Prod From SET PROD"
           });
    */
        /*   this.setState(prevState => {
              console.log("prevState.productInCart", prevState.productInCart);
              const PL = [...prevState.productInCart, { "Id": newProdID }]
              return {
                  prevState,
                  productInCart: PL
              }
          })
          console.log(this.state); */
    }

    login = (username, password) => {
        setTimeout(() => {

            this.setState({
                isAuthenticated: true,
                username: username,
                password
            })
        }, 3000);
    }
    logout = () => {
        this.setState({
            isAuthenticated: false,
            username: '',
            password: ''
        })
    }


    toggleCart = (id) => {
        console.log("DELETE ID", id);
        const oldProdLst = [...this.state.productList]

        const newProdList = oldProdLst.map(p => {
            if (p.id == id) {
                p.inCart = !p.inCart
            }
            return (p)
        });

        this.setState(prevState => {
            return {
                ...prevState,
                productList: newProdList

            }
        })

    }



    render() {
        const { children } = this.props;
        const data = this.state;
        const setProduct = this.setProduct;


        return (
            <ProductsContext.Provider
                value={{
                    ...this.state,
                    data: data,
                    setProduct: setProduct,
                    MyD: { "sdf": "werrweqwrwerwefwesfwe" },
                    isAuthenticated: this.state.isAuthenticated,
                    logout: this.logout,
                    login: this.login,
                    toggleCart: this.toggleCart
                }}
            >
                {children}
            </ProductsContext.Provider>
        );
    }



}


export { ProductsProvider };
//export const ProductsConsumer = ProductsContext.Consumer;



export default ProductsContext;