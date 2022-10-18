function Login(props) {

    return (<main className='main'>
        <div className="login">
            <form className="form-login">
                <h3 className="title">Login</h3>
                <label>Email</label>
                <input type='text' className="input-login"></input>
                <label>Password</label>
                <input type='text' className="input-login"></input>
                <button type='submit' className="button-login">Log in</button>
            </form>

        </div>
    </main>)

}

export default Login;