"use client";
import "./nav.css";
import Link from "next/link";


function Nav() {
  const toggleMobileNav = (event) => {
    
    event.preventDefault();

    const mobileNav = document.querySelector(".mobile");
    mobileNav?.classList.toggle("show-mobile");
    console.log(mobileNav);
  };

  return (
    <nav className="nav">
      <div className="mobile-toggle transition" onClick={toggleMobileNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="mobile">
        <Link href="#">Discover</Link>
        <Link href="#">Travelling</Link>
        <Link href="#">Electronics</Link>
        <Link href="#">Clothing</Link>
        <Link href="#">Support</Link>
      </div>

      <div className="desktop">
        <Link href="#">Discover</Link>
        <Link href="#">Travelling</Link>
        <Link href="#">Electronics</Link>
        <Link href="#">Clothing</Link>
        <Link href="#">Support</Link>
      </div>
    </nav>
  );
}
export default Nav;
