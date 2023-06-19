import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div></div>
      <div style={{display: "flex", justifyContent: "center", margin: "10px"}}>
        <a href="https://www.facebook.com" style={{margin: "10px"}}>
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com" style={{margin: "10px"}}>
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com" style={{margin: "10px"}}>
          <i className="fa fa-instagram"></i>
        </a>
      </div>
      <p style={{textAlign: "center"}}>The content of this website is copyright protected and belongs to Branded Products</p>
    </footer>
  );
};

export default Footer;
