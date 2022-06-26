import "./css/style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <img
          className="footer-logo"
          src="./assets/mainLogo.png"
          alt="OKRA SEOUL"
        />
        <div className="sns">
          <img src="./assets/youtube.png" alt="youtube" />
          <img src="./assets/fb.png" alt="Facebook" />
          <img src="./assets/insta.png" alt="Instagram" />
        </div>
        <div className="footer-content">
          (주)오크라서울 / 156-81-52372 노영신
        </div>
        <div className="footer-content-p">
          서울특별시 송파구 충민로 66, 8층 엘-8149호(문정동, 가든파이브라이프) /
          info@okraseoul.com
        </div>
        <div className="footer-content-m">
          서울특별시 송파구 충민로 66, 8층 엘-8149호(문정동, 가든파이브라이프){" "}
          <br />
          info@okraseoul.com
        </div>
        <div className="copyright">
          copyright 2022. OKRASEOUL all right reserve
        </div>
      </footer>
    </>
  );
};

export default Footer;
