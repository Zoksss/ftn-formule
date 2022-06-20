import './Navbar.css';


const Navbar = (props) => {
  return (
    <nav>
        <div className="nav-logo">
          <p>FTNFormule</p>
          <p className="nav-logo-by-zoks">by Zoks</p>
        </div>
        <ul>
          <li><a href="#" onClick={() => props.setIsFormulas(false)}>Kviz</a></li>
          <li><a href="#" onClick={() => props.setIsFormulas(true)}>Formule</a></li>
        </ul>
      </nav>
  )
}

export default Navbar;