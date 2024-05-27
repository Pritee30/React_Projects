import React, { useState } from "react"; // usestate state is hookstate

export default function TextForm(props) {
  const [text, setText] = useState(""); // hooks
  {
    // text = "new text";  //Wrong way to change the state
    // setText("new text"); //correct way to change the text
  }

  // Fun  for  Upper Case
  const handleUpClick = () => {
    //  console.log("Uppercase was clicked..." + text);
    let newText = text.toUpperCase();
    setText(newText); // setting new text
  };

  //Fun  for lower case
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText); // setting new text
  };

  // fun for clear text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  }; 

  // removing extra spaces
  const removeExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText); // setting new text
};

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }; 

  


  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#0b0a14" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="MyBox"
            rows="8"
          ></textarea>
        </div>

        <button
          className="btn btn-primary rounded-pill mx-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          className="btn btn-primary rounded-pill mx-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>

        <button
          className="btn btn-primary rounded-pill mx-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button> 

        <button
          className="btn btn-primary rounded-pill mx-2"
          onClick={removeExtraSpaces}
        >
         Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your Text Summary </h3>
        <p>
          {text.split(" ").length} words and {text.length} charaters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  );
}
//#141129