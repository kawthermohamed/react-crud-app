import Navb from "./navbar";
import Sidebar from "./sidebar";
import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Contacts() {
  const url = "http://localhost:3000/contacts";
  const [contacts, setContacts] = useState([]);
  const Allcontacts = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setContacts(data);
      });
  };
  useEffect(() => {
    Allcontacts();
  }, []);
  const deletePro = (cont) => {
    Swal.fire({
      title: `Do you want to delete this contact ${cont.id}?`,
      showCancelButton: true
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`http://localhost:3000/contacts/${cont.id}`, {
          method: "DELETE"
        })
          .then((data) => {
            return data.json();
          })
          .then((res) => {
            console.log(res);
            Allcontacts();
          });
        Swal.fire("Deleted!", "", "success");
      }
    });
  };

  return (
    <div className="contacts">
      <Navb />
      <div className="row  ">
        <div className="col-2 ">
          <Sidebar />
        </div>
        <div className="col-1"></div>
        <div className="col-9">
          <div className="d-flex align-items-center justify-content-around my-5">
            <h2 className="">contacts page</h2>
            <Link to="/contacts/add" className="btn btn-success fw-bold">
              Add New Contact
            </Link>{" "}
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((ele) => {
                return (
                  <tr>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td colSpan={3}>
                      <Link
                        to={`/contacts/${ele.id}`}
                        className="btn btn-warning"
                      >
                        view
                      </Link>{" "}
                      <Button
                        variant="danger"
                        onClick={() => {
                          deletePro(ele);
                        }}
                      >
                        delete
                      </Button>{" "}
                      <Link
                        to={`/contacts/editproduct/${ele.id}`}
                        className="btn btn-warning"
                        variant="info"
                      >
                        edit
                      </Link>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
