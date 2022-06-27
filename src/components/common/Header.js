import { useEffect } from "react";
import { Link } from "../../../node_modules/react-router-dom/index";
import "./css/style.css";

const Header = () => {
  useEffect(() => {
    const hamburger = document.getElementById("hamburger-click");
    const hamburgerCheckbox = document.getElementById("burger-check");

    hamburger.addEventListener("click", () => {
      hamburgerCheckbox.click();
    });

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  });

  return (
    <>
      {/* Header */}
      <header>
        {/* Nav */}
        <nav className="nav">
          <div className="nav-links">
            <a href="https://okraseoul.com" className="logo">
              <img width="30rem" src="./assets/mainLogo.png" alt="OKRA SEOUL" />
            </a>
            <div className="sub-selector">
              <div className="main-menu mm-0">
                <a>We Are OKRA</a>
              </div>
              <div className="sub-menu-4">
                <a href="https://okraseoul.com/okra.html">OKRA</a>
                <a href="https://okraseoul.com/business.html">Business</a>
                <a href="https://okraseoul.com/partner.html">Partners</a>
                <a href="https://okraseoul.com/index.html?section=contact">Contact Us</a>
              </div>
            </div>
            <div className="sub-selector">
              <div className="main-menu mm-1">
                <a href="https://board.okraseoul.com">EVENTS</a>
              </div>
              {/* <div class="sub-menu-3">
          <a href="./board.html">Festival</a>
          <a href="./board.html">Concerts</a>
          <a href="./board.html">Party</a>
        </div> */}
            </div>
            <div className="sub-selector">
              <div className="main-menu mm-2">
                <a>BRANDS</a>
              </div>
              <div className="sub-menu-2">
                <a target="_blank" href="https://www.magicdrug.net/">
                  Magicdrug
                </a>
                <a target="_blank" href="https://www.instagram.com/mycherryclub/?igshid=YmMyMTA2M2Y=">
                  MyCherryClub
                </a>
              </div>
            </div>
            {/* Hamburger */}
            <div className="hamburger" id="hamburger">
              <div id="hamburger-click" />
              <input className="burger-check" type="checkbox" id="burger-check" />
              <label className="burger-icon" htmlFor="burger-check">
                <span className="burger-sticks" />
              </label>
              <div className="menu">
                <div style={{ width: 545 }}>
                  <div className="hamburger-button">
                    <div className="hamburger-sns">
                      <img src="./assets/youtube.png" alt="youtube" />
                      <img src="./assets/fb.png" alt="Facebook" />
                      <img src="./assets/insta.png" alt="Instagram" />
                    </div>
                  </div>
                  <ul className="hamburger-nav">
                    <li>
                      We Are OKRA
                      <ul className="hamburger-main-menu">
                        <li>
                          <a href="https://okraseoul.com/okra.html">OKRA</a>
                        </li>
                        <li>
                          <a href="https://okraseoul.com/business.html">Business</a>
                        </li>
                        <li>
                          <a href="https://okraseoul.com/partner.html">Partners</a>
                        </li>
                        <li>
                          <a href="https://okraseoul.com/contact.html">Contact Us</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://board.okraseoul.com">EVENTS</a>
                    </li>
                    <li>
                      BRANDS
                      <ul className="hamburger-main-menu">
                        <li>
                          <a target="_blank" href="https://www.magicdrug.net/">
                            Magicdrug
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="https://www.instagram.com/mycherryclub/?igshid=YmMyMTA2M2Y=">
                            MyCherryClub
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Hamburger */}
          </div>
        </nav>
      </header>
      {/* /Header */}
      <div className="header-spacer" />
    </>
  );
};

export default Header;
