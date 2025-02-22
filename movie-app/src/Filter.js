import React from "react";

const Filter = ({ onTitleChange, onRateChange }) => {
  return (
    <div style={styles.filter}>
      <input
        type="text"
        placeholder="Search by title"
        onChange={onTitleChange}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Search by rating"
        onChange={onRateChange}
        style={styles.input}
        min="0"
        max="10"
      />
    </div>
  );
};

const styles = {
  filter: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  },
  input: {
    margin: "0 10px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
};

export default Filter;
