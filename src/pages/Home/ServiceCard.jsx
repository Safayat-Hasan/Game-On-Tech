import { Link } from "react-router-dom";


const ServiceCard = ({ services }) => {

    const { id, name, image, description, price } = services;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
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