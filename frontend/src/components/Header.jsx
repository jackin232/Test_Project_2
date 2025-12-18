function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">My Game List</h1>

        <nav className="nav">
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="#contact_email">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
