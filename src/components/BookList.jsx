import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    userBook: "",
    selected: false,
    asin: "",
  };

  changeAsin = (newAsin) => {
    this.setState({ asin: newAsin });
  };

  render() {
    // console.log(this.state.asin);
    return (
      <Row>
        <Col sm={12} md={6}>
          <Container>
            <InputGroup className="my-3">
              <Form.Control type="text" placeholder="Cerca un libro" aria-describedby="basic-addon2" value={this.state.userBook} onChange={(e) => this.setState({ userBook: e.target.value })} />
            </InputGroup>
            <Row>
              {this.props.books
                .filter((book) => book.title.toLowerCase().includes(this.state.userBook))
                .map((book) => (
                  <SingleBook key={book.asin} book={book} changeAsin={this.changeAsin} asin={this.state.asin} />
                ))}
            </Row>
          </Container>
        </Col>
        <Col sm={12} md={6}>
          <CommentArea asin={this.state.asin} />
        </Col>
      </Row>
    );
  }
}
export default BookList;
