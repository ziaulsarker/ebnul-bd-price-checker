"use client";
import { useEffect, useState } from "react";
import "./nav.css";
import Link from "next/link";
import { useParams } from "next/navigation";

function Nav(props) {
  const { toggleMobileNav, isOpen} = props;
  const {search} = useParams()
  console.log(search)
  return (
    <nav className={`nav nav-${search}`}>
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
        <div className="dc">
        <Link href="#">Discover</Link>
        <Link href="#">Travelling</Link>
        <Link href="#">Electronics</Link>
        <Link href="#">Clothing</Link>
        <Link href="#">Support</Link>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
