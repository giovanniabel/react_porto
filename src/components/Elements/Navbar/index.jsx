const Navbar = (props) => {
    return(
      <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top"
    >
      <div className="container">
        <i className="navbar-brand" style={{ pointerEvents: 'none', fontStyle: 'normal' }}
          >Giovanni Abel Christian</i
        >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/react_porto#home"
                >Home</a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/react_porto#aboutme">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/react_porto#projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  };

export default Navbar;