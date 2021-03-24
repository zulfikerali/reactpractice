import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appoinment",
      day: "Feb 5th at 2.30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting School",
      day: "Feb 6th at 1.30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 7th at 3.30pm",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="text-center col-sm-6 offset-sm-3">
      <Header onShow={() => setShowTask(!showTask)} show={showTask} />
      {showTask && <AddTask onAdd={addTask} />}
      <br />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task To Show!"
      )}
    </div>
  );
}
export default App;
