import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = (props) => {
  const [userBook, setUserBook] = useState("");
  const [asin, setAsin] = useState("");

  const changeAsin = (newAsin) => {
    setAsin(newAsin);
  };

  // console.log(this.state.asin);
  return (
    <Row>
      <Col sm={12} md={6}>
        <Container>
          <InputGroup className="my-3">
            <Form.Control type="text" placeholder="Cerca un libro" aria-describedby="basic-addon2" value={userBook} onChange={(e) => setUserBook(e.target.value)} />
          </InputGroup>
          <Row>
            {props.books
              .filter((book) => book.title.toLowerCase().includes(userBook))
              .map((book) => (
                <SingleBook key={book.asin} book={book} changeAsin={changeAsin} asin={asin} />
              ))}
          </Row>
        </Container>
      </Col>
      <Col sm={12} md={6}>
        <CommentArea asin={asin} />
      </Col>
    </Row>
  );
};
export default BookList;
