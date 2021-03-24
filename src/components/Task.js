import React from "react";
import { FaTimes } from "react-icons/fa";
import "../css/custom.css";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`text-left card pt-2 ${task.reminder ? "border-info" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h5 className="pl-2">
        {task.text}{" "}
        <span className="float-right pr-2">
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
        </span>
      </h5>
      <p className="pl-2">{task.day}</p>
    </div>
  );
};

const Brl = {
  borderLeft: "2px solid blue",
};
export default Task;
