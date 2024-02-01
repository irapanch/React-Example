import React, { Component } from "react";
import { styled } from "styled-components";
import EmployeeList from "./EmployeeList";
import { EmployeesFilter } from "./EmployeesFilter";
import userData from "./../../assets/users.json";
import { getFilteredData } from "../../helpers/getFilteredData";

export class Employee extends Component {
  state = {
    users: userData,
    filterStr: "",
  };

  handleDeleteUser = (id) => {
    // const newUsers = this.state.users.filter((user) => user.id !== id);
    // this.setState({ users: newUsers });

    this.setState((prev) => ({
      users: prev.users.filter((user) => user.id !== id),
    }));
  };
  handleChangeFilter = (filterStr) => {
    this.setState({ filterStr });
  };
  render() {
    const { users, filterStr } = this.state;
    const filteredData = getFilteredData(users, filterStr);
    return (
      <Wrapper>
        <EmployeesFilter
          filterStr={filterStr}
          setFilter={this.handleChangeFilter}
        />
        <EmployeeList
          users={filteredData}
          onDeleteUser={this.handleDeleteUser}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: lightgray;
`;
