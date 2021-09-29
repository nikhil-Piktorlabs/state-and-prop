import React from "react";
import "./edit.css";

const EditRow = ({ item, onChange, onRemove }) => {
  return (
    <React.Fragment>
      <input
        className="edit-row__item"
        type="text"
        placeholder="Enter First Name"
        value={item.firstName}
        name="firstName"
        onChange={(e) => onChange(e, item.id)}
      />
      <input
        className="edit-row__item"
        type="text"
        placeholder="Enter Last Name"
        value={item.lastName}
        name="lastName"
        onChange={(e) => onChange(e, item.id)}
      />
      <button className="edit-row__item" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </React.Fragment>
  );
};

export default EditRow;
