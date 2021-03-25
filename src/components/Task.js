import React from "react";
import { FaTimes } from "react-icons/fa";
import "../css/custom.css";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <>
      <div className={`text-left card`} onDoubleClick={() => onToggle(task.id)}>
        <div className={`m-1 ${task.reminder ? "bleft" : ""}`}>
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
      </div>
    </>
  );
};
export default Task;
