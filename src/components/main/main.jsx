import React, { Component } from "react";
import Display from "../display/display";
import Edit from "../edit/edit";
import "./main.css";

class Main extends Component {
  state = {
    employees: [{ id: 1, firstName: "", lastName: "" }],
    idCount: 2,
  };

  handleAdd = () => {
    const { employees: oldEmployees, idCount } = this.state;

    const newEmployee = { id: idCount, firstName: "", lastName: "" };
    const employees = [...oldEmployees, newEmployee];

    this.setState({ employees, idCount: idCount + 1 });
  };

  handleChange = (e, id) => {
    const { name, value } = e.currentTarget;
    let employees = [...this.state.employees];

    employees = employees.map((e) =>
      e.id === id ? { ...e, [name]: value } : e
    );
    this.setState({ employees });
  };

  handleRemove = (id) => {
    let employees = [...this.state.employees];

    employees = employees.filter((e) => e.id !== id);
    console.log(employees);
    this.setState({ employees });
  };

  render() {
    const { employees } = this.state;

    return (
      <section className="main">
        Main
        <Display items={employees} />
        <Edit
          items={employees}
          onAdd={this.handleAdd}
          onChange={this.handleChange}
          onRemove={this.handleRemove}
        />
      </section>
    );
  }
}

export default Main;
