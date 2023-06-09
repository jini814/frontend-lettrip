import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkIfLoggedIn } from "../Service/AuthService";

import { AiOutlineUser, AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import logo_image from "../../image/logo.png";
import "./Top.css";

function Navbar() {
  const navigate = useNavigate();

  const [showSubMenu, setShowSubMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleClickOutside(e) {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowSubMenu(false);
    }
  }
  function handleEscape(e) {
    if (e.key === "Escape") {
      setShowSubMenu(false);
    }
  }
  function handleTravel() {
    setShowSubMenu(!showSubMenu);
  }

  function handleLogoClick() {
    navigate("/");
  }

  const handlemypage = (e) => {
    e.preventDefault();
    if (!checkIfLoggedIn()) {
      navigate("/login");
      return;
    } else {
      navigate("/mypage");
    }
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <img
          onClick={handleLogoClick}
          className='logo-image'
          src={logo_image}
          alt='Logo'
        ></img>
      </Link>

      <div className='navbar-container'>
        <div className='navbar-menu'>
          <div className='navbar-dropdown' ref={menuRef}>
            <span className='navbar-travel' onClick={handleTravel}>
              여행코스
            </span>
            {showSubMenu && (
              <div className='navbar-travel-content'>
                <Link to='/travel/search' className='navbar-travel-item'>
                  여행코스 검색
                </Link>
                <Link to='/travel/course/create' className='navbar-travel-item'>
                  여행코스 계획 등록
                </Link>
                <Link to='/travel/review/create' className='navbar-travel-item'>
                  여행코스 후기 등록
                </Link>
              </div>
            )}
          </div>
          <Link to='/friend' className='navbar-friend'>
            친구매칭
          </Link>
          <Link to='/mission' className='navbar-mission'>
            미션
          </Link>
          <Link to='/articles' className='navbar-community'>
            커뮤니티
          </Link>
        </div>
        <div className='navbar-icons'>
          <div className='navbar-icon' onClick={handlemypage}>
            <AiOutlineUser />
          </div>
          <Link to='/place' className='navbar-icon'>
            <AiOutlineSearch />
          </Link>
          <AiFillHeart className='navbar-icon' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
