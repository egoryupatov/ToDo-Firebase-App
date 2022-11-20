import React, { useEffect, useState } from "react";
import {
  TasksListStyled,
  TasksListHeaderStyled,
  TaskStyled,
  TasksTableCellStyled,
  TasksTableRowStyled,
  TasksTableStyled,
  AddTaskButtonStyled,
} from "./TasksList.styled";
import { FinishedTasks } from "../FinishedTasks/FinishedTasks";
import { AddTaskField } from "../AddTaskField/AddTaskField";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export interface Task {
  title: string;
  description: string;
  date: string;
  attachedFile: string;
}

export const TasksList: React.FC = () => {
  const todosCollectionRef = collection(db, "todos");
  const [todos, setTodos] = useState<Task[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(todosCollectionRef);
      setTodos(data.docs.map((doc: any) => doc.data()));
    };

    getTodos();
  }, [todos]);

  const [areFinishedTasksDisplayed, setAreFinishedTasksDisplayed] =
    useState<boolean>(false);
  const [isAddPostWindowOpened, setIsAddPostWindowOpened] =
    useState<boolean>(false);

  const onFinishedTasksClick = () => {
    setAreFinishedTasksDisplayed(!areFinishedTasksDisplayed);
  };

  const onAddPostClick = () => {
    setIsAddPostWindowOpened(!isAddPostWindowOpened);
  };

  return (
    <TasksListStyled>
      <TasksListHeaderStyled>
        <h1>Current tasks</h1>
      </TasksListHeaderStyled>

      <TasksTableStyled>
        <TasksTableRowStyled>
          <TasksTableCellStyled>State</TasksTableCellStyled>
          <TasksTableCellStyled>Task</TasksTableCellStyled>
          <TasksTableCellStyled>Description</TasksTableCellStyled>
          <TasksTableCellStyled>Due date</TasksTableCellStyled>
          <TasksTableCellStyled>Attached file</TasksTableCellStyled>
        </TasksTableRowStyled>
        {todos.map((task: Task) => (
          <TasksTableRowStyled>
            <TasksTableCellStyled>
              <input type="checkbox" />
            </TasksTableCellStyled>
            <TasksTableCellStyled>{task.title}</TasksTableCellStyled>
            <TasksTableCellStyled>{task.description}</TasksTableCellStyled>
            <TasksTableCellStyled>{task.date}</TasksTableCellStyled>
            <TasksTableCellStyled>{task.attachedFile}</TasksTableCellStyled>
          </TasksTableRowStyled>
        ))}
      </TasksTableStyled>

      {isAddPostWindowOpened ? (
        <AddTaskField onAddPostClick={onAddPostClick} />
      ) : (
        <AddTaskButtonStyled onClick={onAddPostClick}>
          <div style={{ fontFamily: "inherit", textAlign: "center" }}>
            Add task
          </div>
        </AddTaskButtonStyled>
      )}

      <TasksListHeaderStyled
        onClick={onFinishedTasksClick}
        style={{ cursor: "pointer" }}
      >
        <h1>Finished tasks</h1>
        <span className="material-symbols-outlined">arrow_drop_down</span>
      </TasksListHeaderStyled>

      {areFinishedTasksDisplayed ? <FinishedTasks /> : ""}
    </TasksListStyled>
  );
};
