import React from "react";
import Slide from "../Components/RevealComponents/Slide";
import "./newslide.css";
function NewSlide({ excrept }) {
  console.log();
  return (
    <Slide id="parent">
      <h3>{excrept.title}</h3>
      <i style={{ marginLeft: "5px", fontSize: "24px" }}>
        {excrept.shortDescription}
      </i>
      <div id="lol">
        <p id="child" class="scrollable">
          {excrept.body}
        </p>
        <div className="containers">
          <span className="diff">
            Book :<b style={{ marginLeft: "5px" }}>{excrept.book} </b>
          </span>
          <span className="diff">
            Author:<b style={{ marginLeft: "5px" }}>{excrept.author}</b>
          </span>
        </div>

        <div className="containers">
          <div className="centered">
            Keywords:
            {excrept.keywords.map(keyword => (
              <span className="diff">
                <b style={{ marginLeft: "5px" }}>{keyword}</b>
              </span>
            ))}
          </div>
        </div>
        <br />
        <div id="keywords"></div>
      </div>
    </Slide>
  );
}
export default NewSlide;
