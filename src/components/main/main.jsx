import React, { Component } from "react";
import Display from "../display/display";
import Edit from "../edit/edit";
import "./main.css";

class Main extends Component {
  state = {
    employees: [],
    newEmployee: { firstName: "", lastName: "" },
    idCount: 1,
  };

  handleAdd = () => {
    const { employees: oldEmployees, newEmployee, idCount } = this.state;

    if (newEmployee.firstName === "" || newEmployee.lastName === "") {
      alert("Input fields cannot be left empty!!");
      return;
    }
    const employees = [...oldEmployees, { ...newEmployee, id: idCount }];

    this.setState({
      employees,
      newEmployee: { firstName: "", lastName: "" },
      idCount: idCount + 1,
    });
  };

  handleChange = (e, employee) => {
    e.preventDefault();

    const { name, value } = e.currentTarget;
    let employees = [...this.state.employees];
    employees = employees.map((e) =>
      e.id === employee.id ? { ...e, [name]: value } : e
    );

    this.setState({ employees });
  };

  handleChangeNewEmployee = (e, employee) => {
    e.preventDefault();

    const { name, value } = e.currentTarget;

    this.setState({ newEmployee: { ...employee, [name]: value } });
  };

  handleRemove = (employee) => {
    let employees = [...this.state.employees];

    employees = employees.filter((e) => e.id !== employee.id);
    this.setState({ employees });
  };

  render() {
    const { employees, newEmployee } = this.state;

    return (
      <section className="main">
        Main
        <Display items={employees} />
        <Edit
          item={newEmployee}
          items={employees}
          onAdd={this.handleAdd}
          onChange={this.handleChange}
          onNewChange={this.handleChangeNewEmployee}
          onRemove={this.handleRemove}
        />
      </section>
    );
  }
}

export default Main;
