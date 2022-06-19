import styled from "styled-components";
import Responsive from "./Responsive";
import "./header.css";

const HeaderBlock = styled.header`
  position: fixed;
  z-index: 99;
  width: 100%;
  background: #181818;
  color: white;
`;

const Wrapper = styled(Responsive)`
  font-family: "Noto Sans KR", sans-serif;

  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 3.2rem;
    letter-spacing: -3px;

    .logof {
      font-weight: 900;
      text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
        1px 1px 0 #fff;
    }

    .logob {
      font-weight: 600;
      font-style: italic;
    }
  }
  .right {
    display: flex;
    align-items: right;
  }
`;

const Spacer85 = styled.div`
  height: 130px;
`;

const Header = () => {
  return (
    <>
      {/* <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            <span className="logof">OKRA</span>
            <span className="logob">SEOUL</span>
          </Link>
        </Wrapper>
      </HeaderBlock> */}
      <header>
        <nav className="nav">
          <div className="nav-links">
            <a href="https://okraseoul.com" class="logo">
              <img width="30rem" src="./mainlogo.png" alt="OKRA SEOUL" />
            </a>

            <div className="sub-selector">
              <div className="main-menu mm-0">
                <a href="#">We Are OKRA</a>
              </div>
              <div className="sub-menu-4">
                <a href="https://okraseoul.com/okra.html">OKRA</a>
                <a href="https://okraseoul.com/business.html">Business</a>
                <a href="https://okraseoul.com/partner.html">Partners</a>
                <a href="https://okraseoul.com?section=contact">Contact Us</a>
              </div>
            </div>

            <div className="sub-selector">
              <div className="main-menu mm-1">
                <a href="/">EVENTS</a>
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
                <a
                  target="_blank"
                  href="https://www.instagram.com/mycherryclub/?igshid=YmMyMTA2M2Y="
                >
                  MyCherryClub
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <>
        <Spacer85 />
      </>
    </>
  );
};

export default Header;
