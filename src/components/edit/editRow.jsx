import React from "react";
import "./edit.css";

const EditRow = ({ item, onChange, onClick, buttonLabel }) => {
  return (
    <div className="edit-row">
      <input
        className="edit-row__item"
        type="text"
        placeholder="Enter First Name"
        value={item.firstName}
        name="firstName"
        onChange={(e) => onChange(e, item)}
      />
      <input
        className="edit-row__item"
        type="text"
        placeholder="Enter Last Name"
        value={item.lastName}
        name="lastName"
        onChange={(e) => onChange(e, item)}
      />
      <button className="edit-row__item" onClick={() => onClick(item)}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default EditRow;
