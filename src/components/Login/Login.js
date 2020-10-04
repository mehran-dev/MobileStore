import React, { useState, useContext } from 'react';
import ctx from '../../Context/mobile-context';
import css from './Login.module.css';
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const context = useContext(ctx);


    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        context.login();
        // setLoading(false)


    }


    const myStyle = makeStyles({
        root: {
            color: "red",
            '&>*': {
                color: 'red',
            }
        }
    })

    const cls = myStyle()

    console.log("context.isAuthenticated", context);
    return (
        <React.Fragment>


            {context.isAuthenticated && <Redirect to="/" />}

            <div className={css.Login}>
                <form className={[css.Form, css.dar00ker].join(" ")}>
                    <div className={css.inputPair}>
                        <label htmlFor="username">USERNAME
                        </label>
                        <input id="username" type="text" placeholder="USERNAME" />
                    </div>

                    <div className={css.inputPair}>
                        <label htmlFor="password">
                            PASSWORD
                 </label>
                        <input id="password" type="text" placeholder="PASSWORD" />
                    </div>
                    <button onClick={(e) => submitHandler(e)} className={css.Button}>
                        <span>
                            LOG IN
                            </span>
                        {loading &&

                            <div className={cls.root}>

                                <CircularProgress />
                            </div>
                        }
                    </button>
                </form>
            </div>
        </React.Fragment>
    )

}



export default Login;