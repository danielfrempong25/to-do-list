import React from "react";

const TodoItems = ({ entries, deleteItem }) => {
  const createTasks = (item) => (
    <li onClick={() => deleteItem(item.key)} key={item.key}>
      {item.text}
    </li>
  );

  const listItems = entries.map(createTasks);

  return <ul className="theList">{listItems}</ul>;
};

export default TodoItems;
