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
    isAvailable: false, // ----------1 створили стан
    activeSkill: "all",
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
  handleChangeAvailable = () => {
    this.setState((prev) => ({ isAvailable: !prev.isAvailable })); // ==== 1 cтворили функцію перемикання
  };
  handleChangeSkill = (activeSkill) => {
    this.setState({ activeSkill });
  };
  render() {
    const { users, filterStr, isAvailable, activeSkill } = this.state; //------2 підготували стан для передачі
    const filteredData = getFilteredData(
      users,
      filterStr,
      isAvailable,
      activeSkill
    );
    return (
      <Wrapper>
        <EmployeesFilter
          activeSkill={activeSkill}
          setActiveSkill={this.handleChangeSkill}
          isAvailable={isAvailable} //-------2 передали стан
          toggleIsAvailable={this.handleChangeAvailable} //======== 2 передали функцію
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
