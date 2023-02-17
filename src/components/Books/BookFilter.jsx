import "./BookFilter.css";

export default function BookFilter({ setFilteredValue }) {
  // Here i pass the value from the input to the setState functiion of the parent
  const filteredBooks = (e) => {
    setFilteredValue(e.target.value);
  };
  return (
    <div className="book-filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={filteredBooks}
      />
    </div>
  );
}
