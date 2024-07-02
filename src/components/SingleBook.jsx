import { Button, Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Col key={props.book.asin} sm="12" md="6" lg="4" xxl="3" className="my-3">
      <Card
        className="my-3 shadow"
        onClick={() => {
          props.changeAsin(props.book.asin);
        }}
        style={{ border: props.book.asin === props.asin ? "3px solid blue" : "3px solid transparent" }}
      >
        <Card.Img variant="top" style={{ aspectRatio: 3 / 4 }} src={props.book.img} />
        <Card.Body>
          <Card.Title className="text-truncate">{props.book.title}</Card.Title>
          <Card.Text>{props.book.price} €</Card.Text>

          <Button variant={props.book.asin === props.asin ? "secondary" : "primary"}>Compra ora</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
