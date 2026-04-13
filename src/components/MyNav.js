import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function MyNav({ setNavHeight }) {
  const navRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [setNavHeight]);

  return (
    <Navbar ref={navRef} className="matrix-navbar" fixed="top">
      <Container fluid className="px-3 d-flex justify-content-center">
        <span className="matrix-text">[RAMAZAN_CICEKLI_COMPUTER_ENGINEER]</span>
      </Container>
    </Navbar>
  );
}