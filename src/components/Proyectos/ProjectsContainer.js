import React, { useEffect, useState } from "react";
import "./ProjectsContainer.scss";
import axios from "axios";
import Project from "./Project";

const ProjectsContainer = (props) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    
    const data = await axios.get('http://localhost:4500/api/projects').then(response => {
      setData(response.data)
    }).catch(error=>{console.log(error);})
  };

  useEffect(() => {
    getData();
  }, []);

  let rightSided = false

  return (
    <div className="projects-container d-flex flex-column flex-nowrap justify-content-center align-items-center pt-4">
      <div className="projects-header d-flex flex-nowrap justify-content-center align-items-center col-md-6 my-4">
        <h2 className="mt-4 mb-2">Proyectos destacados</h2>
        <span
          className="m-2"
          style={{
            borderBottom: "3px solid green",
            width: "5rem",
            display: "block",
          }}
        ></span>
        <p className="m-2 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      {data.length
        ? data.map((project) => {
          rightSided = !rightSided;
          return  (<Project
              title={project.title}
              text={project.text}
              logourl={project.logo}
              tags={project.tags}
              image={project.image}
              rightSide={rightSided}
              bgColor={project.bgColor}
              buttonColor={project.buttonColor}
              textColor={project.textColor}
            ></Project>)
        })
        : null}
    </div>
  );
};

export default ProjectsContainer;
