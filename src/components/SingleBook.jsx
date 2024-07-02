import { Button, Card, Col } from "react-bootstrap";

const SingleBook = () => {
  return (
    <Col key={this.props.book.asin} sm="12" md="6" lg="4" xxl="3" className="my-3">
      <Card
        className="my-3 shadow"
        onClick={() => {
          this.props.changeAsin(this.props.book.asin);
        }}
        style={{ border: this.props.book.asin === this.props.asin ? "3px solid blue" : "3px solid transparent" }}
      >
        <Card.Img variant="top" style={{ aspectRatio: 3 / 4 }} src={this.props.book.img} />
        <Card.Body>
          <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.price} €</Card.Text>

          <Button variant={this.props.book.asin === this.props.asin ? "secondary" : "primary"}>Compra ora</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
