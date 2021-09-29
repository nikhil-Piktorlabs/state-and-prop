import React from "react";
import "./display.css";

const Display = ({ items }) => {
  return (
    <article className="display">
      Display
      {items.length === 0 ? (
        <div>Empty!!</div>
      ) : (
        <div className="display__table">
          <table>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </article>
  );
};

export default Display;
