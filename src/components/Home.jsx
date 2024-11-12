import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div className="container">
      <div className="home-portfolio">
        <div className="resimkismi">
          <h4>Ozan Akgön</h4>
          <div className="kepliresim">
            <img id="kepliresim" src="kepss.jpg" alt="Ozan Akgön" />
          </div>
        </div>
        <div className="resimkismi">
          <h4>Kısaca Ben</h4>
          <div className="info">
            <div>
              <strong>Ad: </strong>
              <p>Ozan</p>
            </div>
            <div>
              <strong>Soyad: </strong>
              <p>AKGÖN</p>
            </div>
            <div>
              <strong>Doğum Tarihi: </strong>
              <p>14.12.2001</p>
            </div>
            <div>
              <strong>Memleket: </strong>
              <p>Samsun</p>
            </div>
            <div>
              <strong>Öğrenim: </strong>
              <p>Lisans</p>
            </div>
            <div>
              <strong>Üniversite: </strong>
              <p>Bolu Abant İzzet Baysal Üniversitesi</p>
            </div>
            <div>
              <strong>Bölüm: </strong>
              <p>Bilgisayar Mühendisliği</p>
            </div>
            <div>
              <strong>Ortalama (GANO): </strong>
              <p>3.34</p>
            </div>
          </div>
          <br /> <br />
          <div className="icons">
            <a target="_blank" href="https://www.instagram.com/ozanakgno/">
              <FaInstagram id={"icon1"} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/ozan-akg%C3%B6n-9abb4b329/">
              <FaLinkedin id={"icon2"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
