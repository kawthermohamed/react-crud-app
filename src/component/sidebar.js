function Sidebar() {
  return (
    <div className="sidebar bg-light pt-5 text-center">
      <ul className="list-unstyled ">
        <li className="mb-2">
          <a className="text-dark  text-decoration-none" href="/contacts">
            Get All Products{" "}
          </a>
        </li>
        <li>
          <a className="text-dark text-decoration-none" href="/#">
            Get All Category{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
