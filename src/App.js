import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar.js";
import Accordion from 'react-bootstrap/Accordion';

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
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>{user.name}</Accordion.Header>
                      <Accordion.Body>
                            {user.email}<br />{user.address.city}<br />{user.phone}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  // <h3>{user.name}</h3>
                  // <p>{user.email}</p>
                  // <p>{user.address.city}</p>
                  // <p>{user.phone}</p> */}
                )
             }) : (<h3>Loading...</h3>)
          }
      </div>
      
    </div>
  );
}

export default App;
