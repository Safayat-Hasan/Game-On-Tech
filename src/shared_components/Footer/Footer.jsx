

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <p className="text-2xl font-extrabold"><span className="text-blue-400 text-3xl">GameOnTech</span><br />Providing reliable tech since 2012</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Event Registration</a>
                    <a className="link link-hover">Live Streaming</a>
                    <a className="link link-hover">Event Promotion</a>
                    <a className="link link-hover">Community Forums</a>
                    <a className="link link-hover">Content Creation</a>
                    <a className="link link-hover">Gaming Tournaments</a>
                </nav>
                <nav>
                    <header className="footer-title">The Site</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Login</a>
                    <a className="link link-hover">Register</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">Profile</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;