// import React from "react";
// import "./Footer.css";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Left Section */}
//         <div className="footer-left">
//           <img src="/images/nexg-logo.png" alt="NexG Logo" className="footer-logo" />
//           <p className="tagline">Excellence Redefined</p>

//           <div className="social-icons">
//             <a href="#"><FaFacebookF /></a>
//             <a href="#"><FaTwitter /></a>
//             <a href="#"><FaInstagram /></a>
//             <a href="#"><FaLinkedinIn /></a>
//           </div>

//           <a href="#" className="privacy-link">Privacy Policy</a>
//         </div>

//         {/* Middle Section */}
//         <div className="footer-middle">
//           <h4>Useful Links</h4>
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Company</a></li>
//             <li><a href="#">How we do</a></li>
//             <li><a href="#">Solutions</a></li>
//             <li><a href="#">Clients</a></li>
//             <li><a href="#">Contact Us</a></li>
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div className="footer-right">
//           <h4>Contact</h4>
//           <p><strong>Phone:</strong><br />    +1 307-288-6456<br />+1 307-288-6457</p>
//           <p><strong>FAX:</strong><br />+1 307-288-6459</p>
//           <p><strong>Email:</strong><br />
//             <a href="mailto:info@nexgsolutions.com">info@nexgsolutions.com</a>
//           </p>
//           <p><strong>Address:</strong><br />
//             NexG Solutions LLC<br />
//             30 N Gould ST STE R<br />
//             Sheridan WY, 82801
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <div className="logo">
            <img src="/logo.png" alt="NexG Logo" className="footer-logo" />
            <h2>NexG Health</h2>
          </div>
          <p className="tagline">Excellence Redefined</p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>

          <p className="privacy">Privacy Policy</p>
        </div>

        {/* MIDDLE SECTION */}
        <div className="footer-middle">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">How we do</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">
          <h3>Contact</h3>

          <div className="contact-info">
            <p><strong>Phone:</strong><br />+1 307-288-6456<br />+1 307-288-6457</p>
            <p><strong>FAX:</strong><br />+1 307-288-6459</p>
            <p><strong>Email:</strong><br />info@nexgsolutions.com</p>
            <p><strong>Address:</strong><br />NexG Solutions LLC<br />30 N Gould ST STE R<br />Sheridan WY, 82801</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
