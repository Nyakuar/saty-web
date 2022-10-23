import Navbar from './navbar';

const Header = () => {
  return (
    <div>
      <div class="navbarFirst">
        <a class="navbar-title" href="/">
          <h1>
            <img src="/logo.png" alt="" width="70px" />
          </h1>
        </a>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
