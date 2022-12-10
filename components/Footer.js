import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    
    return(
  <div className="tfooter">
    <div className="yFooter"  >
        <a href="https://twitter.com/geekbota/" className="twitter">
        <FontAwesomeIcon icon={faTwitter} size="2x" color= "#808080	"  />
      </a>
      <a href="https://www.instagram.com/nikanplomashvili/"
        className="instagram">
        <FontAwesomeIcon icon={faInstagram} size="2x" color="#808080" />
      </a>
      <a href="https://www.facebook.com/nika.lomashvili/"
        className="facebook">
        <FontAwesomeIcon icon={faFacebook} size="2x"  color="#808080" />
        </a>
        <a href="https://github.com/nikaloamashvili"
        className="github">
        <FontAwesomeIcon icon={faGithub} size="2x" color="#808080"  />
        </a>
        </div>
  </div>
    )
}



