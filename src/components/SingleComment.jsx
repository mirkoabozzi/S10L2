import { Badge, ListGroup } from "react-bootstrap";

const SingleComment = (props) => (
  <ListGroup.Item title={props.author}>
    <span>{props.author} - </span> {props.comment} - <Badge>{props.rate}</Badge>
  </ListGroup.Item>
);

export default SingleComment;
