import React, { useState } from 'react';

const todoItems = [
  { name: "get milk", done: false },
  { name: "complete assignment", done: false }
];

export default function TodoTask() {
  const [todoTask, setTask] = useState(todoItems);
  const [taskName, setTaskName] = useState("");

  function setNewTask() {
    if (taskName !== "") {
      const newTask = { name: taskName, done: false };
      const allTasks = [...todoTask, newTask];
      setTask(allTasks);
      setTaskName("");
    }
  }

  function completeTask(taskTodo) {
    const completeTasks = todoTask.map(function (task) {
      if (task.name === taskTodo) {
        return { name: task.name, done: !task.done };
      }
      return task;
    });
    setTask(completeTasks);
  }

  function getTaskList() {
    return todoTask.map((task, key) => (
      <div key={key}>
        <span>{task.name}</span>
        <Button onClick={() => completeTask(task.name)} task={task} />
      </div>
    ));
  }

  function Button(props) {
    function click() {
      props.onClick(props.task.name);
    }
    return (
      <button onClick={click}>
        {props.task.done ? "Done" : "Not done"}
      </button>
    );
  }

  return (
    <div>
      {getTaskList()}
      <input value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <button onClick={setNewTask}>Click me</button>
    </div>
  );
}
