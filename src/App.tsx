import { useState } from "react";
import InputBox from "./InputBox";
import ListGroups from "./ListGroups";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    gap: "2px",
  },
  component: {
    width: "100px",
  },
};

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleNewTask = (newTask: string) => {
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const [editableTaskIndex, setEditableTaskIndex] = useState(-1);
  const [taskName, setTaskName] = useState("");

  const handleEdit = (index: number) => {
    type PRO = string | null;
    const pro: PRO = prompt("what is the new task?");
    const updatedTasks = tasks.map((task: string, i) => {
      if (i === index) {
        if (pro) {
          task = pro;
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div style={{display: "flex", justifyContent:  "center", alignItems: "center", height: "100vh" }}>
      <div>
        <InputBox InputChange={handleNewTask} />
        <div style={{ width: "600px", marginLeft: "20px" }}>
          <ul className="list-group">
            <div>
              <li className="list-group-item active" aria-current="true">
                List of your tasks
              </li>
            </div>
            {tasks.map((task, index) => (
              <ListGroups
                DeleteClicked={() => {
                  handleDelete(index);
                }}
                EditClicked={() => {
                  handleEdit(index);
                }}
                key={index}
                item={`${index + 1}. ${task}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
// <input

//       type="text"
//       value={taskName}
//       onChange={handleTaskNameChange}
//     />
//     const updatedTasks = tasks.map((task, i) => {
//       if (i === editableTaskIndex) {
//         return (

//         );
//       }
//       return task;
//     });

// setEditableTaskIndex(index);
// setTaskName(tasks[index]); // Store the current task name in the state
