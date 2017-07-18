var React = require("react");

var Navbar = React.createClass({
  render: function() {
    return (

      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <buttonclassNameclass="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="#">Home</a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <a className="nav-link" href="#">Something<span className="sr-only">(current)</span></a>
            </li>

            <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
            </li>

            <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
                </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>

            </li>
          </ul>
        </div>
      </nav>

    )
  }
})