import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const ServiceCard = ({ services }) => {

    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);

    const { id, name, image, description, price } = services;

    return (
        <div data-aos="flip-up" data-aos-duration="1000" className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-extrabold">{name}</h2>
                <p>{description}</p>
                <p className="text-blue-800 font-bold">{price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary bg-blue-400 text-blue-950"><Link
                        to={`/services/${id}`}>Get it</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;