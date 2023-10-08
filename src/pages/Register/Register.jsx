import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";


const Register = () => {

    const { makeUser } = useContext(AuthContext)

    const handleRegister = e => {

        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const image = form.get('image');
        const email = form.get('email');
        const password = e.target.password.value;
        console.log(name, image, email, password);


        if (password.length < 6) {
            toastMsg('Your Password should be at least 6 characters or more');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toastMsg('Your password should have at least one uppercase letter');
            return;
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/.test(password)) {
            toastMsg("Your password should have at least one special character");
            return;
        }


        // create user
        makeUser(email, password)
            .then(result => {
                console.log(result.user)
                toastMsg("Your account is created successfully")
                updateProfile(result.user, {
                    displayName: {name},
                    photoURL: {image}
                })
            })
            .catch(error => {
                console.error(error)
            })
    }

    const toastMsg = (input) => {
        toast(input);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Register now and become the member of the most diversified community across the world.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your ImageURL</span>
                            </label>
                            <input type="text" name="image" placeholder="imageURL" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account? <NavLink className="text-blue-600 font-bold" to='/login'> Login</NavLink></p>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                />
        </div>
    );
};

export default Register;