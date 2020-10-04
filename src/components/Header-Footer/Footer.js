import React from 'react';
import css from './Footer.module.css';


const Footer = () => {
    return (
        <footer className={css.Footer}>
            <div className={css.Bomb}>

                <i className="fas fa-bomb" aria-hidden="true"></i>
                <i className="fas fa-bomb" aria-hidden="true"></i>
                <i className="fas fa-bomb" aria-hidden="true"></i>
            </div>
            All Rights is charity for your helping //
            use and joy
            <div className={css.Fire}>

                <i className="fas fa-fire" aria-hidden="true"></i>
                <i className="fas fa-fire" aria-hidden="true"></i>
                <i className="fas fa-fire" aria-hidden="true"></i>
            </div>
        </footer>
    );
};

export default Footer;