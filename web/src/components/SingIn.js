import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const SingIn = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // events

    const handleEmail = ev => {
        setEmail(ev.target.value);
    };

    const handlePassword = ev => {
        setPassword(ev.target.value);
    };

    const handleForm = ev => {
        ev.preventDefault();
        // Enviamos los datos a App y este al API
        props.sendSingUpToApi({
            email: email,
            password: password
        });
    }
    const renderErrorMessage = () => {
        // Si el API ha devuelto un error, APP lo guarda en el estado y nos lo pasa
        if (props.signUpErrorMessage !== '') {
            return (
                <p className="border--medium border--warning mt-1">
                    Error en el registro: <span className="text--bold">{props.signUpErrorMessage}</span>
                </p>
            );
        }
    };

    return (<main className='main-sing'>
        <section className="section1"></section>
        <section className="section-sign">
            <Link to='/' className='home'>Home</Link>
            <form className="form-sign" onSubmit={handleForm}>
                <h3 className="title-sign">Join us and create your own food planning!</h3>
                <label>User</label>
                <input type='text' className="input-sign"></input>
                <label>Email</label>
                <input type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleEmail} className="input-sign"></input>
                <label>Password</label>
                <input type="text"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePassword} className="input-sign"></input>
                <button type='submit' className="button-sign">Sign In</button>
                {renderErrorMessage()}
            </form>

        </section>
    </main>)

}


export default SingIn;