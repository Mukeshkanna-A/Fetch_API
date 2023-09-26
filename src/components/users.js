import React from "react";
import Accordion from 'react-bootstrap/Accordion';

function Users({name,email,city,phone}) {
  return (
    <div>
      <Accordion >
        <Accordion.Item eventKey="0" style={{background: "rgba(0, 0, 0, 0.3)"}}>
          <Accordion.Header>{name}</Accordion.Header>
          <Accordion.Body>
            {email}
            <br />
            {city}
            <br />
            {phone}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Users;
