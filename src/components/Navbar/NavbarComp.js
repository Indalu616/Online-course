import React, { useRef, useState } from "react";
import "./NavbarComp.css";
import LoginModal from "../Login/LoginModal";
function NavbarComp() {
  const [isOpen, setIsOpen] = useState(false);
  const menu = useRef(null);
  const menu_btn=useRef(null)
  const toggleMenu = () => {
    menu.current.classList.toggle("show_menu");
  };

  return (
    <div className="navbar-comp">
      <div className="container">
        <div className="nav-header">
          <div className="brand-logo">ADUDC</div>
          <div className="nav-header-links" ref={menu}>
            <div className="links">
              <p className="link">Home</p>
              <p className="link">Courses</p>
              <p className="link">Features</p>
              <p className="link">Join</p>
              <p className="link">Contact</p>
            </div>
            <div className="buttons">
              {/* <button>Sign In</button> */}
              <LoginModal/>
              <button>Membership</button>
            </div>
          </div>
          <div
            className="mobile-menu" ref={menu_btn}
            onClick={() => {
              setIsOpen(!isOpen);
              toggleMenu();
            }}
          >
            {isOpen ? (
              <i class="fa-solid fa-x"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComp;
