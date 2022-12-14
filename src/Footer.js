import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small className="footer">
        <p className="mt-5">
          <a
            href="https://github.com/anastasiia-bilova/weather-react"
            target="_blank"
            rel="noopener noreferrer"
            className="signature-link"
          >
            Open-source code
          </a>
          by Anastasiia Bilova
        </p>
      </small>
    </div>
  );
}
