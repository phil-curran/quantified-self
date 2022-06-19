const LoginPage = () => {
  return (
    <div className="loginContainer">
      <div className="loginWindow">
        <div className="ui compact segment">
          <div className="ui center aligned text container">
            <h2>Login</h2>
          </div>
          <form className="ui form">
            <div className="field">
              <label>Username:</label>
              <input type="text" name="username" placeholder="" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" name="password" placeholder="" />
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" tabindex="0" className="hidden" />
                <label>Remember Me</label>
              </div>
            </div>
            <div class="ui grid">
              <div class="eight wide column">
                <button className="fluid ui grey button" type="submit">
                  Register
                </button>
              </div>
              <div class="eight wide column">
                <button className="fluid ui green button" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
