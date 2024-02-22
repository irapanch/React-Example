import { StyledButton } from "../Counter/Counter.styled";
import { StyledInput, StyledTodo, StyledTodoList } from "./TodoList.styled";
import todosData from "./../../assets/todos.json";
import { Flex } from "../../styles/GlobalStyles";
import React, { useEffect, useState } from "react";
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

export const TodoList = () => {
const [todos, setTodos] = useState(todosData)
const [currentText, setCurrentText] = useState("")
const [isOpen, setIsOpen] = useState(false)
const [isOpenSecondModal, setIsOpenSecondModal] = useState(false)
const [limit, setLimit] = useState(3)


useEffect(()=>{
  const fetchTodos = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/todos", {
        // деструктуризація з res
        params: {
          limit: limit,
        },
      });
      setTodos( data.todos );
    } catch (error) {
      alert(error.message);
    }
  }
  fetchTodos()

}, [limit])

const handleChangeLimit = (limit) => {
  setLimit(limit );
};

const handleDelete = (id) => {
  setTodos((prev) => prev.filter((item) => item.id !== id))
};

const handleAdd = () => {
  const item = {
    id: crypto.randomUUID(),
    todo: currentText,
    completed: false,
  };

  setTodos(prev => [...prev, item])
  setCurrentText('')
  
};
const handleChangeInput = (e) => {
  setCurrentText(e.target.value)
 
};

const handleToggleTodo = (id) => {
  setTodos((prev) =>  prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item
    )))

};
const handleClearTodo = () => {
  setTodos([]);
};
const handleClearComplitedTodos = () => {
  setTodos((prev) =>  prev.filter((item) => !item.completed));
};
const toggleModal = () => {
  setIsOpen(prev => !prev)
  
};
const toggleModalSecond = () => {
  setIsOpenSecondModal(prev => !prev);
};
const fetchRandom = () => {
  axios
    .get("https://dummyjson.com/todos/random")
    .then((res) => setTodos( [res.data] ));
};

  return (
    <>
      {isOpen && (
        <Modal close={toggleModal}>
          <button onClick={toggleModalSecond}>Open modal 2</button>
          {isOpenSecondModal && (
            <Modal close={toggleModalSecond}>
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
            
            type="text"
            value={currentText}
            onChange={handleChangeInput}
          />
          <StyledButton onClick={handleAdd}>Add</StyledButton>
          <StyledButton onClick={toggleModal}>Open Modal</StyledButton>
        </Flex>
        <select
          value={limit}
          onChange={(e) => handleChangeLimit(e.target.value)}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        <button onClick={fetchRandom}>Get random TODO</button>
        <AnimatePresence    mode="sync">
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
                onChange={() => handleToggleTodo(item.id)}
              />
              <span>{item.todo}</span>
              <StyledButton
                onClick={() => handleDelete(item.id)}
                size="18px"
              >
                Delete
              </StyledButton>
            </StyledTodo>
          ))}
        </AnimatePresence >
        <StyledButton $border={4} onClick={handleClearComplitedTodos}>
          Clear selected todos
        </StyledButton>
        <StyledButton $border={4} onClick={handleClearTodo}>
          Clear all todos
        </StyledButton>
      </StyledTodoList>
    </>
  );
}
// export class TodoList extends React.Component {
//   state = {
//     todos: todosData,
//     currentText: "",
//     isOpen: false,
//     isOpenSecondModal: false,
//     limit: 3,
//   };

//   inputRef = React.createRef(null); //шлях до компонента

//   async componentDidMount() {
//     // axios
//     //   .get("https://dummyjson.com/todos")
//     //   .then((res) => this.setState({ todos: res.data.todos }));

    // try {
    //   const { data } = await axios.get("https://dummyjson.com/todos", {
    //     // деструктуризація з res
    //     params: {
    //       limit: this.state.limit,
    //     },
    //   });
    //   this.setState({ todos: data.todos });
    // } catch (error) {
    //   alert(error.message);
    // }

//     // const items = JSON.parse(window.localStorage.getItem("Todos"));
//     // if (items.length) {
//     //   this.setState({ todos: items });
//     // }
//     // this.inputRef.current.focus(); // фокус на компонент
//   }
//   async componentDidUpdate(_, prevState) {
//     const { limit } = this.state;
//     if (prevState.limit !== limit) {
//       try {
//         const { data } = await axios.get("https://dummyjson.com/todos", {
//           // деструктуризація з res
//           params: {
//             limit: this.state.limit,
//           },
//         });
//         this.setState({ todos: data.todos });
//       } catch (error) {
//         alert(error.message);
//       }
//     }

//     // const { todos } = this.state;
//     // if (prevState.todos.length !== todos.length) {
//     //   window.localStorage.setItem("Todos", JSON.stringify(todos));
//     // }
//   }

  // handleChangeLimit = (limit) => {
  //   this.setState({ limit });
  // };

  // handleDelete = (id) => {
  //   // const newTodos = this.state.todos.filter((item) => item.id !== id);
  //   // this.setState((prev) => ({ todos: newTodos }));
  //   this.setState((prev) => ({
  //     todos: prev.todos.filter((item) => item.id !== id),
  //   }));
  // };

  // handleAdd = () => {
  //   const item = {
  //     id: crypto.randomUUID(),
  //     todo: this.state.currentText,
  //     completed: false,
  //   };
  //   this.setState((prev) => ({
  //     todos: [...prev.todos, item],
  //     currentText: "",
  //   }));
  // };
  // handleChangeInput = (e) => {
  //   this.setState({ currentText: e.target.value });
  // };

  // handleToggleTodo = (id) => {
  //   this.setState((prev) => ({
  //     todos: prev.todos.map((item) =>
  //       item.id === id ? { ...item, completed: !item.completed } : item
  //     ),
  //   }));
  // };
  // handleClearTodo = () => {
  //   this.setState({ todos: [] });
  // };
  // handleClearComplitedTodos = () => {
  //   this.setState((prev) => ({
  //     todos: prev.todos.filter((item) => !item.completed),
  //   }));
  // };
  // toggleModal = () => {
  //   this.setState({ isOpen: !this.state.isOpen });
  // };
  // toggleModalSecond = () => {
  //   this.setState({ isOpenSecondModal: !this.state.isOpenSecondModal });
  // };
  // fetchRandom = () => {
  //   axios
  //     .get("https://dummyjson.com/todos/random")
  //     .then((res) => this.setState({ todos: [res.data] }));
  // };

//   render() {
//     const { todos, currentText, isOpen, isOpenSecondModal } = this.state;
//     return (
//       <>
//         {isOpen && (
//           <Modal close={this.toggleModal}>
//             <button onClick={this.toggleModalSecond}>Open modal 2</button>
//             {isOpenSecondModal && (
//               <Modal close={this.toggleModalSecond}>
//                 Modal Second{" "}
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Assumenda perspiciatis consequuntur modi voluptas, repellendus
//                   eum vero cupiditate commodi quia vitae, ipsum, architecto
//                   distinctio possimus omnis? Possimus odit magni minus eveniet.
//                 </p>
//               </Modal>
//             )}
//           </Modal>
//         )}
//         <StyledTodoList>
//           <Flex $height="auto">
//             <StyledInput
//               ref={this.inputRef} // передача  на імпут рефа для встановлення фокуса
//               type="text"
//               value={currentText}
//               onChange={this.handleChangeInput}
//             />
//             <StyledButton onClick={this.handleAdd}>Add</StyledButton>
//             <StyledButton onClick={this.toggleModal}>Open Modal</StyledButton>
//           </Flex>
//           <select
//             value={this.state.limit}
//             onChange={(e) => this.handleChangeLimit(e.target.value)}
//           >
//             <option value="3">3</option>
//             <option value="5">5</option>
//             <option value="10">10</option>
//           </select>
//           <button onClick={this.fetchRandom}>Get random TODO</button>
//           <AnimatePresence    mode="sync">
//             {todos.map((item, idx) => (
//               <StyledTodo
//                 initial="hidden"
//                 whileInView="isVisible"
//                 custom={idx % 2 === 0 ? "-100%" : "100%"}
//                 variants={textAnimateFromLeft}
//                 whileHover={{ rotate: 3 }}
//                 exit="exit"
//                 viewport={{ once: true }}
//                 key={item.id}
//               >
//                 <input
//                   type="checkbox"
//                   checked={item.completed}
//                   onChange={() => this.handleToggleTodo(item.id)}
//                 />
//                 <span>{item.todo}</span>
//                 <StyledButton
//                   onClick={() => this.handleDelete(item.id)}
//                   size="18px"
//                 >
//                   Delete
//                 </StyledButton>
//               </StyledTodo>
//             ))}
//           </AnimatePresence >
//           <StyledButton $border={4} onClick={this.handleClearComplitedTodos}>
//             Clear selected todos
//           </StyledButton>
//           <StyledButton $border={4} onClick={this.handleClearTodo}>
//             Clear all todos
//           </StyledButton>
//         </StyledTodoList>
//       </>
//     );
//   }
// }
