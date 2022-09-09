import './Navbar.css';


const Navbar = (props) => {
  return (
    <nav>
      <a href="#" role="button" className="nav-logo" onClick={() => { props.returnToHome(); return false; }}>
        <p>FTNFormule</p>
        <p className="nav-logo-by-zoks">by Zoks</p>
      </a>
      <ul>
        <li><a href="#" role="button" onClick={() => { props.setIsFormulas(false); return false; }}>Kviz</a></li>
        <li><a href="#" role="button" onClick={() => { props.setIsFormulas(true); return false; }}>Formule</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;