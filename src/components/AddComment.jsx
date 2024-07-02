import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    newComment: {
      comment: "",
      rate: "1",
      elementId: this.props.asin,
    },
  };

  fetchAddComment = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(this.state.newComment),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjk3OTdjMjM5YzAwMTUyZjRiM2IiLCJpYXQiOjE3MTk0ODcxNTcsImV4cCI6MTcyMDY5Njc1N30.cnWiTJ8Skk8km6KUyP5pIXFi42u-vAP3LJVqlx_JKd8",
        },
      });
      if (response.ok) {
        console.log(response);
      } else {
        throw new Error("Errore nell'invio dei commenti");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <h2 className="mt-2">Aggiungi un commento</h2>
        <Form onSubmit={this.fetchAddComment}>
          <Form.Group className="mb-3" controlId="formBasicComment">
            <Form.Control
              type="text"
              placeholder="Commento"
              value={this.state.newComment.comment}
              onChange={(e) => this.setState({ newComment: { ...this.state.newComment, comment: e.target.value } })}
            />
          </Form.Group>
          <Form.Select aria-label="Default select example" value={this.state.newComment.rate} onChange={(e) => this.setState({ newComment: { ...this.state.newComment, rate: e.target.value } })}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>

          <Button variant="primary" type="submit" className="mt-3">
            Invia
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
