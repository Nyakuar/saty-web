const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="navbar-brand" href="#"></div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="#id-features">
                  Features
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Components
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      GSM
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Arduino
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Breadboard
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      GPS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Arduino buzzer
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      LED
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#id-best">
                  Best Collections
                </a>
              </li>
              <li class="nav-item">
                {/* <!-- <a class="nav-link" href="#">Our</a> --> */}
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#id-works">
                  How it works
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#id-meetus">
                  Our Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#id-infor">
                  Contact
                </a>
              </li>
            </ul>
            <div class="d-flex">
              <div class="navButtons">
                <a href="./"></a>
              </div>
              <a href="./">
                <div class="navB1">
                  <i class="fas fa-shopping-cart"></i>
                  <p class="cartNum">0</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
