import {useState} from 'react';


const HomePage = () => {
   const [name,setName] = useState('Favas');
   const [boolValue,change] = useState(false);

    // const  handClick = ()=> {
    //     console.log("Wlocme");
    // }
    // const ClickAgain = (name) => {
    //     console.log("welcome" + name);
    // }
    const changeName = () => {
       if(boolValue === false){
        setName('Favas.T');
        change(true);

       }
       else{
        setName('Favas');
        change(false);
       }

    }
    return ( 
        <div className="home">
            <h1>This is home page</h1>
            {/* <button onClick={handClick}>Click</button><br /> <br />
            <button onClick={() => ClickAgain}>Click Again</button> */}
            <br />
            <br />
            <button onClick={changeName}>Name</button>
            
            <h1>{name}</h1>
        </div>
     );
}
 
export default HomePage;