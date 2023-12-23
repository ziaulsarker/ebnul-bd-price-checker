"use client";
import { useEffect, useState } from "react";
import "./nav.css";
import Link from "next/link";

function Nav(props) {
  const { toggleMobileNav, isOpen } = props;

  return (
    <nav className="nav">
      <div
        className={`mobile-toggle ${isOpen && "mobile-toggle-open"}`}
        onClick={() => toggleMobileNav(!isOpen)}
      >
        <span className="first"></span>
        <span className="middle"></span>
        <span className="last"></span>
      </div>

      <div className={`mobile ${isOpen ? "show-mobile" : ""}`}>
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
