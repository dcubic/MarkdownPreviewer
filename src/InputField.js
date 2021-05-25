import "./styles.css";
import React from "react";
import { Form, Row } from "react-bootstrap";

export class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.onInputChange(event.target.value);
  }

  render() {
    const inputText = this.props.input;
    return (
      <div>
        <Form>
          <Form.Group controlId="editor">
            <Row>
              <Form.Label>Input - Write your markdown here</Form.Label>
            </Row>
            <Row>
              <Form.Control
                as="textarea"
                rows={20}
                cols={35}
                value={inputText}
                onChange={this.handleInputChange}
              ></Form.Control>
            </Row>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
