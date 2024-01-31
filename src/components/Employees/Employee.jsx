import React, { Component } from "react";
import { styled } from "styled-components";
import EmployeeList from "./EmployeeList";
import { EmployeesFilter } from "./EmployeesFilter";
import userData from "./../../assets/users.json";

export class Employee extends Component {
  state = {
    users: userData,
  };
  handleDeleteUser = (id) => {
    // const newUsers = this.state.users.filter((user) => user.id !== id);
    // this.setState({ users: newUsers });

    this.setState((prev) => ({
      users: prev.users.filter((user) => user.id !== id),
    }));
  };
  render() {
    const { users } = this.state;
    return (
      <Wrapper>
        <EmployeesFilter />
        <EmployeeList users={users} onDeleteUser={this.handleDeleteUser} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: lightgray;
`;
