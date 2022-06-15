import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <div className="nav-logo">
          <p>FTNFormule</p>
          <p className="nav-logo-by-zoks">by Zoks</p>
        </div>
        <ul>
          <li><a href="#">Kviz</a></li>
          <li><a href="#">Formule</a></li>
        </ul>
      </nav>
  )
}

export default Navbar;