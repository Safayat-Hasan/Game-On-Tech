import { Outlet } from "react-router-dom";
import NavBar from "../../shared_components/NavBar/NavBar";
import Footer from "../../shared_components/Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-[1350px] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;