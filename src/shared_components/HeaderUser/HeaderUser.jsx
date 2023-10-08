import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const HeaderUser = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default HeaderUser;