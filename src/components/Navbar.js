import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark mb-4"
      style={{ padding: "0.75rem 2rem" }}
    >
      <Link className="navbar-brand" href="/">Crypto Dashboard</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/highlight">Highlights</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
