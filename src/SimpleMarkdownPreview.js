import React from "react";
import { InputField } from "./InputField.js";
import { OutputField } from "./OutputField.js";

const inputInitial =
  "# Header 1\r" +
  "## Header 2\r" +
  "[Link to my Quote Machine](https://dcubic.github.io/RandomQuoteMachine/)\r\r" +
  "`In-line code`\r" +
  "```\r" +
  "codeBlock() {\r" +
  "  return 0;\r" +
  "}\r" +
  "```\r" +
  "![Gorilla](https://etherscan.io/token/images/gorilladatatoken_128.png)\r" +
  "- List of **text**\r" +
  "- _text_\r" +
  "- **_both_**";

export class SimpleMarkdownPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: inputInitial
    };

    this.changeInputText = this.changeInputText.bind(this);
  }

  changeInputText(inputNew) {
    this.setState({
      input: inputNew
    });
  }

  render() {
    const inputText = this.state.input;
    return (
      <div>
        <InputField input={inputText} onInputChange={this.changeInputText} />
        <OutputField input={inputText} />
      </div>
    );
  }
}
