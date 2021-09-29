import React from "react";
import EditRow from "./editRow";
import "./edit.css";

const Edit = ({ items, onAdd, onChange, onRemove }) => {
  return (
    <article className="edit">
      <div>Edit</div>
      {items.map((item, index) => (
        <div key={item.id} className="edit-row edit__new-item">
          <EditRow item={item} onChange={onChange} onRemove={onRemove} />
          {index === items.length - 1 && (
            <button onClick={() => onAdd()}>Add</button>
          )}
        </div>
      ))}
    </article>
  );
};

export default Edit;
