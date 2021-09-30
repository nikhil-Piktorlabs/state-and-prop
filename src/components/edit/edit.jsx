import React from "react";
import EditRow from "./editRow";
import "./edit.css";

const Edit = ({ item, items, onAdd, onChange, onNewChange, onRemove }) => {
  return (
    <article className="edit">
      <div>Edit</div>
      <div className="edit__box">
        {items.map((item) => (
          <EditRow
            key={item.id}
            item={item}
            onChange={onChange}
            onClick={onRemove}
            buttonLabel="Remove"
          />
        ))}
        <EditRow
          item={item}
          onChange={onNewChange}
          onClick={onAdd}
          buttonLabel="Add"
        />
      </div>
    </article>
  );
};

export default Edit;
