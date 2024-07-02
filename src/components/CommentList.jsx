import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = (props) => {
  return (
    <ListGroup>
      {props.comments.map((commento, index) => {
        // console.log("commento", commento);
        return <SingleComment key={index} comment={commento.comment} author={commento.author} rate={commento.rate} id={commento._id} fetchComments={props.fetchComments} />;
      })}
    </ListGroup>
  );
};

export default CommentList;
