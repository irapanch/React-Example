import { StyledButton } from "../Counter/Counter.styled";
import { StyledInput, StyledTodo, StyledTodoList } from "./TodoList.styled";
import todosData from "./../../assets/todos.json";
import { Flex } from "../../styles/GlobalStyles";
import React from "react";
import Modal from "../Modal/Modal";
import { AnimatePresence } from "framer-motion";
import axios from "axios";

const textAnimateFromLeft = {
  //   framer-motion
  hidden: (custom) => ({
    // opacity: 0,
    x: custom,
  }),
  isVisible: {
    // opasity: 1,
    x: 0,
    transition: {
      duration: 0.1,
    },
  },
  exit: {
    x: "-500%",
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export class TodoList extends React.Component {
  state = {
    todos: todosData,
    currentText: "",
    isOpen: false,
    isOpenSecondModal: false,
  };

  inputRef = React.createRef(null); //шлях до компонента

  componentDidMount() {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => this.setState({ todos: res.data.todos }));

    const items = JSON.parse(window.localStorage.getItem("Todos"));
    if (items.length) {
      this.setState({ todos: items });
    }
    this.inputRef.current.focus(); // фокус на компонент
  }
  componentDidUpdate(_, prevState) {
    const { todos } = this.state;
    if (prevState.todos.length !== todos.length) {
      window.localStorage.setItem("Todos", JSON.stringify(todos));
    }
  }

  handleDelete = (id) => {
    // const newTodos = this.state.todos.filter((item) => item.id !== id);
    // this.setState((prev) => ({ todos: newTodos }));
    this.setState((prev) => ({
      todos: prev.todos.filter((item) => item.id !== id),
    }));
  };

  handleAdd = () => {
    const item = {
      id: crypto.randomUUID(),
      todo: this.state.currentText,
      completed: false,
    };
    this.setState((prev) => ({
      todos: [...prev.todos, item],
      currentText: "",
    }));
  };
  handleChangeInput = (e) => {
    this.setState({ currentText: e.target.value });
  };

  handleToggleTodo = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    }));
  };
  handleClearTodo = () => {
    this.setState({ todos: [] });
  };
  handleClearComplitedTodos = () => {
    this.setState((prev) => ({
      todos: prev.todos.filter((item) => !item.completed),
    }));
  };
  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  toggleModalSecond = () => {
    this.setState({ isOpenSecondModal: !this.state.isOpenSecondModal });
  };

  render() {
    const { todos, currentText, isOpen, isOpenSecondModal } = this.state;
    return (
      <>
        {isOpen && (
          <Modal close={this.toggleModal}>
            <button onClick={this.toggleModalSecond}>Open modal 2</button>
            {isOpenSecondModal && (
              <Modal close={this.toggleModalSecond}>
                Modal Second{" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Assumenda perspiciatis consequuntur modi voluptas, repellendus
                  eum vero cupiditate commodi quia vitae, ipsum, architecto
                  distinctio possimus omnis? Possimus odit magni minus eveniet.
                </p>
              </Modal>
            )}
          </Modal>
        )}
        <StyledTodoList>
          <Flex $height="auto">
            <StyledInput
              ref={this.inputRef} // передача  на імпут рефа для встановлення фокуса
              type="text"
              value={currentText}
              onChange={this.handleChangeInput}
            />
            <StyledButton onClick={this.handleAdd}>Add</StyledButton>
            <StyledButton onClick={this.toggleModal}>Open Modal</StyledButton>
          </Flex>
          <AnimatePresence mode="sync">
            {todos.map((item, idx) => (
              <StyledTodo
                initial="hidden"
                whileInView="isVisible"
                custom={idx % 2 === 0 ? "-100%" : "100%"}
                variants={textAnimateFromLeft}
                whileHover={{ rotate: 3 }}
                exit="exit"
                viewport={{ once: true }}
                key={item.id}
              >
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => this.handleToggleTodo(item.id)}
                />
                <span>{item.todo}</span>
                <StyledButton
                  onClick={() => this.handleDelete(item.id)}
                  size="18px"
                >
                  Delete
                </StyledButton>
              </StyledTodo>
            ))}
          </AnimatePresence>
          <StyledButton $border={4} onClick={this.handleClearComplitedTodos}>
            Clear selected todos
          </StyledButton>
          <StyledButton $border={4} onClick={this.handleClearTodo}>
            Clear all todos
          </StyledButton>
        </StyledTodoList>
      </>
    );
  }
}
