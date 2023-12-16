"use client";
import { useEffect } from "react";
import "./nav.css";
import Link from "next/link";


function Nav() {

  useEffect(function() {
    const body = document.body
    const bodyClickHandler = (e) => {
      const targetElement = e.target
      const mobileNav = document.querySelector(".mobile");
      if (targetElement != mobileNav ) {
        mobileNav?.classList.toggle("show-mobile");
      }
    }
    body.addEventListener("click", bodyClickHandler)
  }) 

 
  
 
  return (
    <nav className="nav">
      <div className="mobile-toggle transition">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="mobile">
        <button className="cross">X</button>
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
