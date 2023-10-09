import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="mb-10">
                <img className="mb-6 w-full" src={user.photoURL} alt="" />
                <button className="bg-blue-200 p-3 rounded-xl font-bold">Change Photo</button>
            </div>
            <div className="mb-10">
                <h2 className="mb-4 text-xl md:text-3xl text-blue-800 font-extrabold"><span className="text-black font-bold">User Name:</span> {user.displayName}</h2>
                <button className="bg-blue-200 p-3 rounded-xl font-bold">Change User Name</button>
            </div>
            <div className="mb-24">
                <h2 className="mb-4 text-xl md:text-3xl text-blue-800 font-extrabold"><span className="text-black font-bold">Email Address:</span> {user.email}</h2>
                <button className="bg-blue-200 p-3 rounded-xl font-bold">Change Email Address</button>
            </div>
        </div>
    );
};

export default Profile;