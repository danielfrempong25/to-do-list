import React from "react";
import TodoList from "./Components/TodoList";

const App = () => (
  <div className="flex items-center justify-center min-h-screen bg-red-600">
    <div className="container mx-auto text-center">
      <h1 className="text-6xl font-semibold mb-4 text-white">To-Do List</h1>
      <TodoList />
    </div>
  </div>
);

export default App;
