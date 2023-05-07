import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2023 by CodeUchay | All Rights Reserved. </p>
      </div>
      <div className="footer-iconTop">
        <a Link href="#home">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}
