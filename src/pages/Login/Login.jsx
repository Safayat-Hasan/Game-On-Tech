import { useContext, useState } from "react";
import {  NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import { AiFillGoogleCircle } from 'react-icons/ai';


const Login = () => {

    const { logIn, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [logError, setLogError] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setLogError('');

        logIn(email, password)
            .then(result => {
                console.log(result.user);
                toastMsg("Login Successful")
                navigate(location?.state ? location.state : '/');
                // navigate after login
                // navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                setLogError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const toastMsg = (input) => {
        toast(input);
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Login now and dive into the world of awesome gaming experience</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {logError &&
                                <p className="text-red-700">{logError}</p>
                            }
                            <div className="flex items-center">
                                <AiFillGoogleCircle className="text-xl"></AiFillGoogleCircle>
                                <p><button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p>
                            </div>
                            <p>New here? <NavLink className="text-blue-600 font-bold" to='/register'>Register</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
            />
        </div>
    );
};

export default Login;