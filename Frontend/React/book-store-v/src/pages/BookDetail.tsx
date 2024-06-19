import { useParams } from "react-router-dom";
import styled from "styled-components";

function BookDetail() {
  const { bookId } = useParams();
  return (
    <div>
      <h1>BookDetail</h1>
    </div>
  );
}

const BookDetailSTyle = styled.div``;

export default BookDetail;
