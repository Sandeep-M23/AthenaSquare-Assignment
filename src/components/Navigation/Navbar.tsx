import type { FC } from "react";
import classes from "../../styles/Navigation.module.css";
import Logo from "../Logo/Logo";
import {CgChevronDown} from 'react-icons/cg';
import {RxHamburgerMenu} from 'react-icons/rx';

const Navigation: FC = () => {
  return (
    <div className={classes.navigation}>
      <div className={classes.navSection}>
        <Logo />
        <nav className={classes.navLinks}>
          <a href="#product">
            <span>Product</span>
            <CgChevronDown />
          </a>
          <a href="#our-story">Our Story</a>
          <a href="#resources">
            <span>Resources</span>
            <CgChevronDown />
          </a>
        </nav>
      </div>
      <div className={classes.navBtnSection}>
        <a href="#book-now" className={classes.bookNowBtn}>
          Book a demo
        </a>
        <button className={classes.hamburgerBtn}>
          <RxHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
