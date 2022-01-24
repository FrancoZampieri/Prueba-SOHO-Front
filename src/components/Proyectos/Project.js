import React from "react";
import Button from "../Button/Button";
import TagsContainer from "../Tags/TagsContainer";
import "./Project.scss";

const Project = ({
  title,
  logourl,
  text,
  tags,
  image,
  bgColor,
  buttonColor,
  rightSide,
  textColor
}) => {
  return (
    <div
      className={`project-container d-flex ${
        rightSide ? "right-side" : "left-side"
      }`}
      style={{ backgroundColor: `${bgColor ? bgColor : "none"}` }}
    >
      <img
          className="logo"
          src={`http://${image}`}
        ></img>
      <div className="detail-container d-flex flex-column">
        <img
          className="logo"
          src={`http://${logourl}`}
        ></img>
        <span
          style={{
            borderBottom: `4px solid ${textColor}`,
          }}
        ></span>
        <h2
          className="title"
          style={{
            color: `${textColor}`,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            color: `${textColor}`,
          }}
        >
          {text}
        </p>
        <TagsContainer tags={tags}></TagsContainer>
        <Button
          text={"VER DETALLES"}
          textColor={bgColor}
          backgroundColor={`${buttonColor}`}
        ></Button>
      </div>
    </div>
  );
};

export default Project;
