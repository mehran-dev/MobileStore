import React, { useContext } from 'react';
import css from './Logout.module.css';
import ctx from '../../Context/mobile-context';
import { Redirect } from 'react-router';





const Logout = (props) => {
    const context = useContext(ctx);



    const logoutHandler = (e) => {
        e.preventDefault();

        context.logout();

        props.history.push("/");

    }

    return (
        <div className={css.Logout}>
            <h4>
                از این که در کنارتان بودیم خرسندیم .
            </h4>
            <form>

                <button onClick={logoutHandler}> logout</button>
            </form>
        </div>
    );
};

export default Logout;