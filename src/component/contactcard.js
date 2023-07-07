import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Concard() {
  let { Id } = useParams();
  const [selcontact, setSelcontact] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/contacts/${Id}`)
      .then((data) => {
        return data.json();
      })
      .then((cont) => {
        setSelcontact(cont);
        console.log(cont);
      });
  }, []);
  return (
    <>
      {selcontact ? (
        <Card>
          <Card.Header>{selcontact.id}</Card.Header>
          <Card.Body>
            <Card.Title>{selcontact.id}</Card.Title>

            <Card.Title>{selcontact.name}</Card.Title>
            <Card.Title>{selcontact.email}</Card.Title>
          </Card.Body>
        </Card>
      ) : (
        "no data"
      )}
    </>
  );
}

export default Concard;
