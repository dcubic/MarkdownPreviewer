import React from "react";

export class OutputField extends React.Component {
  render() {
    const inputText = this.props.input;
    const marked = require("marked");
    const htmlString = marked(inputText);
    console.log(htmlString);
    return (
      <div
        className="width-limited"
        dangerouslySetInnerHTML={{ __html: htmlString }}
      ></div>
    );
  }
}
