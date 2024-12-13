const Navigation = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img
            src="/images/brandLogo.png"
            alt="logo"
            style={{ width: "75px", height: "auto" }}
          />
        </div>
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
