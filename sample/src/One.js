//for css
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>This is first react </h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{color:"aqua",
            backgroundColor:"green",
            borderRadius:'10px'
            }}>
                new blog</a>
            </div>
        </nav>
        
    );
}
 
export default Navbar;