import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reveal from "../Animation/Reveal";

import "./index.css"
const ContactForm = () => {
  return (
    <>
      <div className="contact">
      <Reveal>

        <div className="contect">
          <h2>Contact Us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          
        </div>
        </Reveal>

        <div className="contactContainer">
          <div className="contactInfo">
            <Reveal>
              <div className="Contactbox">
                <div className="icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p>
                    502671 Surge Camp Road, <br /> Owatonne,Minnesota,
                    <br />
                    5502560
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="Contactbox">
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="text">
                  <h3>Phone</h3>
                  <p>000-000-000-000</p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="Contactbox">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <p>info@thinkbigtechnology.com</p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="txt">Contact With us</h2>
            </Reveal>

            <ul className="sci">
              <Reveal>
                <li>
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
              </Reveal>

              <Reveal>
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
              </Reveal>

              <Reveal>
                <li>
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
              </Reveal>

              <Reveal>
                <li>
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
              </Reveal>
            </ul>
          </div>

          <div className="contactForm">
            <Reveal>
              <h2>Send Massage</h2>
            </Reveal>

            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="reaquired"></textarea>
              <span>Type Your Message...</span>
            </div>
            <Reveal>

            <div className="inputBox">
              <input type="submit" value="send" />
            </div>
            </Reveal>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
