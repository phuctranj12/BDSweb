import '../../styles/login.css';
function Login() {
    return (
        <div class="bds-login-container">
            <div class="container" id="container">
                <div class="form-container register-container">
                    <form action="" method="POST">
                        <h1>Refgister</h1>
                        <input type="text" placeholder="UserName" id="username" name="username" required />
                        <input type="email" placeholder="Email" id="email" name="email" required />
                        <input type="password" placeholder="Password" id="password" name="password" required />
                        <button type="submit" name="submitRegister">Register</button>
                        <span>or use your account</span>
                        <div class="social-container">
                            <a href="#" class="social"><i class="lni lni-facebook-fill"></i></a>
                            <a href="#" class="social"><i class="lni lni-google"></i></a>
                            <a href="#" class="social"><i class="lni lni-linkedin-original"></i></a>
                        </div>
                    </form>
                </div>

                <div class="form-container login-container">
                    <form action="index.jsp" method="POST">
                        <h1>Login</h1>
                        <input type="text" placeholder="UserName" id="username" name="username" required />
                        <input type="password" placeholder="Password" id="password" name="password" required />
                        <div class="content">
                            <div class="checkbox">
                                <input type="checkbox" name="checkbox" id="checkbox" />
                                <label for="Remember me">Remember me</label>
                            </div>
                            <div class="pass-link">
                                <a href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button name="submitLogin" type="submit">Login</button>
                        <span>or use your acount</span>
                        <div class="social-container">
                            <a href="#" class="social"><i class="lni lni-facebook-fill"></i></a>
                            <a href="#" class="social"><i class="lni lni-google"></i></a>
                            <a href="#" class="social"><i class="lni lni-linkedin-original"></i></a>
                        </div>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1 class="title">Hello<br />customers</h1>
                            <p>if you have an acount , login here and have fun</p>
                            <button class="ghost" id="login">Login
                                <i class="lni lni-arrow-left login"></i>
                            </button>
                        </div>
                        <div class="overlay-panel overlay-right">

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Login;