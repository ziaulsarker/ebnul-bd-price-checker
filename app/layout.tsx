"use client";
// import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav/nav";
import Hero from "./components/hero/hero";

import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  return (
    <html lang="en">
      <body>
        <Nav isOpen={isMobileOpen} toggleMobileNav={setIsMobileOpen}></Nav>
        <div onClick={() => isMobileOpen && setIsMobileOpen(false)}>
          <Hero></Hero>
          {children}
        </div>
      </body>
    </html>
  );
}
