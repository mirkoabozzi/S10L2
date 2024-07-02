import { Component } from "react";
import fantasyBooks from "../data/fantasy.json";
import historyBooks from "../data/history.json";
import horrorBooks from "../data/horror.json";
import romanceBooks from "../data/romance.json";
import scifiBookss from "../data/scifi.json";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";

class AllTheBooks extends Component {
  state = {
    categorySelected: null,
  };
  render() {
    return (
      <Container>
        <h3>Premi un bottone sottostante per scegliere la tua categoria preferita</h3>
        <Button className="m-2 px-4" onClick={() => this.setState({ categorySelected: fantasyBooks })}>
          Fantasy
        </Button>
        <Button className="m-2 px-4" onClick={() => this.setState({ categorySelected: historyBooks })}>
          History
        </Button>
        <Button className="m-2 px-4" onClick={() => this.setState({ categorySelected: horrorBooks })}>
          Horror
        </Button>
        <Button className="m-2 px-4" onClick={() => this.setState({ categorySelected: romanceBooks })}>
          Romance
        </Button>
        <Button className="m-2 px-4" onClick={() => this.setState({ categorySelected: scifiBookss })}>
          Scifi
        </Button>

        {this.state.categorySelected ? (
          <Row>
            {this.state.categorySelected.map((book) => {
              return (
                <Col key={book.asin} sm="12" md="6" lg="4" xxl="3">
                  <Card className="my-3 shadow">
                    <Card.Img variant="top" style={{ aspectRatio: 3 / 4 }} src={book.img} />
                    <Card.Body>
                      <Card.Title className="text-truncate">{book.title}</Card.Title>
                      <Card.Text>{book.price} €</Card.Text>
                      <Button variant="primary">Compra ora</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        ) : (
          <>
            <Alert className="mt-3">Seleziona un bottone!</Alert>
            <Row>
              <Col sm="12" md="6" lg="4">
                <Card className="my-3 shadow">
                  <Card.Img variant="top" src="https://placehold.co/600x400" />
                  <Card.Body>
                    <Card.Title>Titolo</Card.Title>
                    <Card.Text>Prezzo €</Card.Text>
                    <Button variant="primary">Compra ora</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12" md="6" lg="4">
                <Card className="my-3 shadow">
                  <Card.Img variant="top" src="https://placehold.co/600x400" />
                  <Card.Body>
                    <Card.Title>Titolo</Card.Title>
                    <Card.Text>Prezzo €</Card.Text>
                    <Button variant="primary">Compra ora</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12" md="6" lg="4">
                <Card className="my-3 shadow">
                  <Card.Img variant="top" src="https://placehold.co/600x400" />
                  <Card.Body>
                    <Card.Title>Titolo</Card.Title>
                    <Card.Text>Prezzo €</Card.Text>
                    <Button variant="primary">Compra ora</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>
    );
  }
}

export default AllTheBooks;
