import { Card } from "react-bootstrap";

const SingleBook = ({ book, selectedAsin, changeSelectedAsin }) => {
  return (
    <Card
      onClick={() => changeSelectedAsin(book.asin)}
      style={{
        border:
          selectedAsin === book.asin ? "3px solid red" : "1px solid lightgray",
        cursor: "pointer",
        marginBottom: "15px",
      }}
    >
      <Card.Img
      className="mx-auto my-2"
        variant="top"
        src={book.img}
        style={{
          width: "clamp(150px, 40%, 200px)",
          height: "250px",
          objectFit: "cover",
        }}
      />
      <Card.Body>
        <Card.Title className="text-dark text-truncate">
          {book.title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
