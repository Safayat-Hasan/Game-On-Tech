import { useLoaderData } from "react-router-dom";
import Banner from "../../shared_components/Banner/Banner";
import ServiceCard from "./ServiceCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Home = () => {
    const services = useLoaderData();

    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    
    return (
        <div>
            <Banner></Banner>
            <h2 className="mt-16 text-center text-3xl md:text-5xl text-blue-400 font-extrabold">Our Services</h2>
            <div className="mt-10 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <ServiceCard key={service.id} services={service}></ServiceCard>)
                }
            </div>
            <div className="mt-16 mb-24 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div data-aos="zoom-in-right" data-aos-duration="1000" className="col-span-1 md:col-span-2">
                    <h3 className="text-4xl text-center text-blue-400 font-bold mb-4">Most Popular</h3>
                    <div className="card card-side bg-base-100 shadow-xl mb-4">
                        <figure><img src="https://i.ibb.co/SvsY2Kf/popular-1.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">Epic Gaming Tournaments</h2>
                            <p>Immerse yourself in the world of competitive gaming with our highly acclaimed gaming tournaments. Join thousands of players and spectators in heart-pounding battles across various gaming platforms. From eSports classics to the latest releases, experience gaming at its finest.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl mb-4">
                        <figure><img src="https://i.ibb.co/WcRvvKn/popular-2.png" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">Tech Innovations Unveiled</h2>
                            <p>Get an exclusive sneak peek at the future of technology with our most popular tech events. Witness groundbreaking product launches, tech showcases, and expert discussions. Stay ahead of the curve and explore the cutting-edge innovations shaping our world.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl mb-4">
                        <figure><img src="https://i.ibb.co/tZQjLQQ/popular-3.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">Gamer's Paradise</h2>
                            <p>Dive into the ultimate gamer's paradise with our most sought-after events. Whether you're a casual gamer or a hardcore enthusiast, discover a treasure trove of gaming experiences. Explore immersive virtual worlds, meet your favorite gaming icons, and participate in epic battles that will leave you breathless.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="1000" className="col-span-1 md:col-span-2">
                    <h3 className="text-4xl text-center text-blue-400 font-bold mb-4">Latest Technologies</h3>
                    <div className="card card-side bg-base-100 shadow-xl mb-4">
                        <figure><img src="https://i.ibb.co/X5RP7yt/latest-1.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">Discover Tomorrow's Tech Today</h2>
                            <p>Stay ahead of the curve with our curated selection of the latest technological breakthroughs. Explore innovations that are shaping the world, from AI-driven solutions to cutting-edge hardware. Embrace the future of tech with our up-to-the-minute insights.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl mb-4">
                        <figure><img src="https://i.ibb.co/TtYbjwS/latest-2.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">Gaming Tech Unleashed</h2>
                            <p>Dive into the world of gaming like never before. Get the lowdown on the newest gaming technology, from powerful GPUs to immersive VR experiences. Stay in the know about the tools and gadgets that are redefining the gaming landscape.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl mb-4">
                        <figure><img src="https://i.ibb.co/x7T3bYg/latest-3.png" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">Startups Changing the Game</h2>
                            <p>Meet the disruptors. Our "Startup Showcase" introduces you to the freshest faces in tech. Discover how innovative startups are revolutionizing industries and creating the next big thing. Join us on the journey of exploration and innovation.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    );
};

export default Home;