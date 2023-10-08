import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => console.log('logged out'))
            .catch(error => console.log(error))
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        {/* <li><NavLink to="/services">Services</NavLink></li> */}
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
    </>

    return (
        <div className="mt-4 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-2xl text-blue-400 font-extrabold">GameOnTech</Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?                
                    <a onClick={handleLogout} className="btn btn-sm">Sign out</a>:
                    <Link to="/login"><button className="btn btn-sm">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;