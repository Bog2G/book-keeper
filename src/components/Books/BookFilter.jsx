import "./BookFilter.css";

export default function BookFilter({ setFilteredValue }) {
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
