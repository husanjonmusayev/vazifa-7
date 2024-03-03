import "./Header.css";
function Header() {
  return (
    <header>
      <div className="logo">
        <a href="#">
          <img src="/icon1.png" alt="logo_icon" />
          <span>Pomofocus</span>
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <button>
              <img src="icon3.png" alt="" />
              <span>Report</span>
            </button>
          </li>
          <li>
            <button>
              <img src="icon2.png" alt="" />
              <span>Setting</span>
            </button>
          </li>
          <li>
            <button>
              <img src="icon4.png" alt="" />
              <span>Login</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
