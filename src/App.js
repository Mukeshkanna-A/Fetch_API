import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar.js";
import Loading from "./components/Loading";
import Users from "./components/users";

function App() {
  const [users,setUsers] = useState(null);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(data => data.json())
    .then(data => {
      setUsers(data);
    });
  },[]);
  return (
    <div className="App">
      <NavBar />
      <div className="container">
         { (users) ?
             users.map(user =>{
                return (
                  <Users key={user.id} name={user.name} email={user.email} city={user.address.city} phone={user.phone}/>
                  // <h3>{user.name}</h3>
                  // <p>{user.email}</p>
                  // <p>{user.address.city}</p>
                  // <p>{user.phone}</p> */}
                )
             }) : (<Loading />)
          }
      </div>
      
    </div>
  );
}

export default App;
