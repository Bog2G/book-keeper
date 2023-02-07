import "./BookForm.css";

export default function BookForm() {
  return (
    <form>
      <div className="new-book-inputs">
        <div className="new-book-input">
          <label for="title">Book Title</label>
          <br />
          <input type="text" name="title" id="title" />
        </div>
        <div className="new-book-input">
          <label for="description">Book Description</label>
          <br />
          <input type="text" name="description" id="description" />
        </div>
        <div className="new-book-input">
          <label for="author">Author</label>
          <br />
          <input type="text" name="author" id="author" />
        </div>
        <div className="new-book-input">
          <label for="pages">Pages</label>
          <br />
          <input type="number" name="pages" id="pages" />
        </div>
        <div className="new-book-input">
          <label for="price">Price</label>
          <br />
          <input type="number" name="price" id="price" step="0.01" />
        </div>
      </div>
      <div className="newBook-action">
        <button type="submit">Add Book</button>
      </div>
    </form>
  );
}
