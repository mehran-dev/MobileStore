import React, { useContext } from 'react';
import css from './Header.module.css';
import { Link } from 'react-router-dom'

import ctx from '../../Context/mobile-context';




const Header = () => {
    const context = useContext(ctx)

    //console.log(context);
    return (
        <header className={css.Header}>

            <nav className={css.Menu}>
                <ul>
                    <li>
                        {!context.isAuthenticated ?
                            <Link to="/login">   Login <i className="fas fa-user"></i></Link> :
                            <Link to="/logout">   Logout <i className="fas fa-sign-out-alt"></i> </Link>
                        }

                    </li>
                    <li><Link to="/products">   Products <i className="fas fa-globe-americas"></i> </Link></li>
                    <li><Link to="/shopping-cart">   Shopping Cart <i className="fas fa-shopping-basket flyto-target cart"></i></Link></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;