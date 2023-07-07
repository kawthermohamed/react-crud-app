import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navb from "./component/navbar";
import Sidebar from "./component/sidebar";

import { Button } from "react-bootstrap";
export default function App() {
  return (
    <div className="App">
      <Navb />
      <div className="row  ">
        <div className="col-2 ">
          <Sidebar />
        </div>
        <div className="col-10">home</div>
      </div>
    </div>
  );
}
