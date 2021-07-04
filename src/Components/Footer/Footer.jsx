import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const onMouseOut = (e) => {
    e.target.style.color = "#cccccc";
  };

  const SocialWidget = [
    {
      SocialMediaName: "LinkedIn",
      ProfileLink: "https://www.linkedin.com/#",
      fontAwesomeIconName: "fab fa-linkedin",
      OnMouseOverColor: "#4875B4",
    },
    {
      SocialMediaName: "GitHub",
      ProfileLink: "https://github.com/prayag2301",
      fontAwesomeIconName: "fab fa-github",
      OnMouseOverColor: "#211F1F",
    },
    {
      SocialMediaName: "Medium",
      ProfileLink: "https://medium.com/#",
      fontAwesomeIconName: "fab fa-medium",
      OnMouseOverColor: "#0e1012",
    },
    {
      SocialMediaName: "StackOverFlow",
      ProfileLink:
        "https://stackoverflow.com/#",
      fontAwesomeIconName: "fab fa-stack-overflow",
      OnMouseOverColor: "#f48024",
    },
    {
      SocialMediaName: "Gmail",
      ProfileLink: "#",
      fontAwesomeIconName: "far fa-envelope",
      OnMouseOverColor: "#D44638",
      _comment: "OnMouseOverColor for yahoo mail: #720e9e",
    },
    {
      SocialMediaName: "WhatsApp",
      ProfileLink: "#",
      fontAwesomeIconName: "fab fa-whatsapp",
      OnMouseOverColor: "#25d366",
    },
    {
      SocialMediaName: "Telegram",
      ProfileLink: "#",
      fontAwesomeIconName: "fab fa-telegram",
      OnMouseOverColor: "#0088cc",
    },
    {
      SocialMediaName: "Twitter",
      ProfileLink: "#",
      fontAwesomeIconName: "fab fa-twitter",
      OnMouseOverColor: "#1da1f2",
    },
    {
      SocialMediaName: "Facebook",
      ProfileLink: "#",
      fontAwesomeIconName: "fab fa-facebook-f",
      OnMouseOverColor: "#1877f2",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 30,
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          Created by{" "}
          <a
            href="https://github.com/sabesansathananthan/covid-19-tracker"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "whitesmoke", textDecoration: "none" }}
          >
            3 MUSKETEERS
          </a>
        </h6>
      </div>
      <div className={styles.container}>
        <br />
        <br /><br />
        <ul className="list" style={{ color: "black",  listStyleType: "none" }}>
          {SocialWidget.map((data, key) => {
            return (
              <li
                key={key}
                style={{ display: "inline-block", marginRight: "17px" }}
              >
                <a
                  onMouseOver={(e) => {
                    e.target.style.color = `${data.OnMouseOverColor}`;
                  }}
                  onMouseOut={onMouseOut}
                  href={data.ProfileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#cccccc", fontSize: "40px" }}
                >
                  <i className={`${data.fontAwesomeIconName}`}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 16,
            marginTop: "20px",
            textAlign: "center",
          }}
        >
       
        </h6>
      </div>
    </React.Fragment>
  );
};

export default Footer;
