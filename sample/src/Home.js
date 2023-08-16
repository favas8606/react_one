const HomePage = () => {
    const  handClick = ()=> {
        console.log("Wlocme");
    }
    return ( 
        <div className="home">
            <h1>This is home page</h1>
            ,<button onClick={handClick()}>Click</button>
        </div>
     );
}
 
export default HomePage;