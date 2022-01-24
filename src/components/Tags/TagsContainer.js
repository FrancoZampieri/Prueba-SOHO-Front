import React from "react";
import "./TagsContainer.scss";
import Tag from "./Tag";

const TagsContainer = ({tags}) => {
  return (
    <div className="tags-container d-flex flex-row flex-nowrap justify-content-left align-items-center">
      <i className="fas fa-tag" style={{color: tags.textColor}}></i>
      {tags.tags.length
        ? tags.tags.map((tag) => {
          return  (<Tag
              text={tag}
              textColor={tags.textColor}
            ></Tag>)
        })
        : null}
    </div>
  );
};

export default TagsContainer;
