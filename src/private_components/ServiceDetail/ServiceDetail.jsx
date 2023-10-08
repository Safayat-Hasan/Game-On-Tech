import { useLoaderData, useParams } from "react-router-dom";



const ServiceDetail = () => {

    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find(det => det.id === idInt);

    return (
        <div className="mt-12 mb-24">
            <h2 className="mb-10 text-center text-7xl text-blue-800">{detail.name}</h2>
            <img className="w-full" src={detail.image} alt="" />
            <p className="mt-10 text-2xl md:text-3xl font-bold">{detail.big_description}</p>
            <p className="mt-10 text-blue-600 text-2xl md:text-3xl font-bold">Start the service only at {detail.price}</p>
            <div className="items-center mt-10">
                <button className="btn btn-primary text-2xl bg-blue-400 text-blue-950">Begin now</button>
            </div>
        </div>
    );
};

export default ServiceDetail;