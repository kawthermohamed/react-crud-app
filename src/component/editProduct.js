import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditProduct() {
  let { Id } = useParams();
  const [con, setCon] = useState({});
  fetch(`http://localhost:3000/contacts/${Id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setCon(data);
    });

  const [proid, setProid] = useState();
  const [proname, setProname] = useState("");
  const [proemail, setProemail] = useState("");
  const navigate = useNavigate();

  const submitfun = (e) => {
    e.preventDefault();
    console.log(proid, proname, proemail);
    fetch(`http://localhost:3000/contacts/${Id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: proid, name: proname, email: proemail })
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        navigate("/contacts");
      });
  };
  return (
    <form className="addpro" onSubmit={submitfun}>
      <div className="mb-3 ">
        <label htmlFor="contact-id" className="form-label">
          contact Id
        </label>
        <input
          type="number"
          className="form-control"
          id="contact-id"
          defaultValue={con.id}
          onChange={(e) => {
            setProid(e.target.value);
          }}
          aria-describedby="idHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contact-name" className="form-label">
          contact Name
        </label>
        <input
          type="text"
          defaultValue={con.name}
          className="form-control"
          id="contact-name"
          aria-describedby="nameHelp"
          onChange={(e) => {
            setProname(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contact-email" className="form-label">
          Contact Email
        </label>
        <input
          type="text"
          defaultValue={con.email}
          className="form-control"
          id="contact-email"
          aria-describedby="categoryHelp"
          onChange={(e) => {
            setProemail(e.target.value);
          }}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Edit contact
      </button>
    </form>
  );
}
export default EditProduct;
