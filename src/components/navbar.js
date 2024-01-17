import '../App.css';
function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href='/'>A1C Coffee Shop</a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <a className="btn btn-outline-success" href='/login'>Login</a>
      </div>
    </nav>  
  );
}

export default Navbar;

