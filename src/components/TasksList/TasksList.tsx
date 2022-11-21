import React, { useEffect, useState } from "react";
import {
  TaskButtonStyled,
  TasksListHeaderStyled,
  TasksListStyled,
  TasksTableCellStyled,
  TasksTableRowStyled,
  TasksTableStyled,
} from "./TasksList.styled";
import { FinishedTasks } from "../FinishedTasks/FinishedTasks";
import { AddTaskField } from "../AddTaskField/AddTaskField";
import { db } from "../../firebase-config";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { Task } from "../Task/Task";
import { ITask } from "./Task.types";

export const TasksList: React.FC = () => {
  const tasksCollectionRef = collection(db, "todos");
  const [tasks, setTasks] = useState<any>([]);

  const getTasks = async () => {
    const data = await getDocs(tasksCollectionRef);
    setTasks(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleAddNewTask = (newTask: ITask) => {
    getTasks();
  };

  const [areFinishedTasksDisplayed, setAreFinishedTasksDisplayed] =
    useState<boolean>(false);
  const [isAddTaskWindowOpened, setIsAddTaskWindowOpened] =
    useState<boolean>(false);

  const onAddTaskClick = () => {
    setIsAddTaskWindowOpened(!isAddTaskWindowOpened);
  };

  const onFinishedTasksClick = () => {
    setAreFinishedTasksDisplayed(!areFinishedTasksDisplayed);
  };

  const onTaskComplete = async (id: string, active: boolean) => {
    const task = doc(db, "todos", id);
    const editedField = { active: false };
    await updateDoc(task, editedField);
    setTasks((prevState: ITask[]) =>
      prevState.map((task) =>
        task.id === id ? { ...task, active: false } : task
      )
    );
  };

  const onEditTaskClick = async (
    id: string,
    title: string,
    description: string,
    date: string
  ) => {
    const editedTask = doc(db, "todos", id);
    const editedFields = { title: title, description: description, date: date };
    await updateDoc(editedTask, editedFields);
    setTasks((prevState: ITask[]) =>
      prevState.map((task) =>
        task.id === id
          ? { ...task, title: title, description: description, date: date }
          : task
      )
    );
  };

  const onDeleteTaskClick = async (id: string) => {
    const task = doc(db, "todos", id);
    await deleteDoc(task);
    setTasks((prevstate: ITask[]) => prevstate.filter((e) => e.id != id));
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
          <TasksTableCellStyled></TasksTableCellStyled>
          <TasksTableCellStyled></TasksTableCellStyled>
        </TasksTableRowStyled>

        {tasks
          .filter((task: ITask) => task.active === true)
          .map((task: ITask) => (
            <Task
              task={task}
              onDeleteTaskClick={onDeleteTaskClick}
              key={task.id}
              onTaskComplete={onTaskComplete}
              onEditTask={onEditTaskClick}
            />
          ))}
      </TasksTableStyled>

      {isAddTaskWindowOpened ? (
        <AddTaskField
          onAddTaskClick={onAddTaskClick}
          onAddNewTask={handleAddNewTask}
        />
      ) : (
        <TaskButtonStyled onClick={onAddTaskClick}>
          <div style={{ fontFamily: "inherit", textAlign: "center" }}>
            Add task
          </div>
        </TaskButtonStyled>
      )}

      <TasksListHeaderStyled
        onClick={onFinishedTasksClick}
        style={{ cursor: "pointer" }}
      >
        <h1>Finished tasks</h1>
        <span className="material-symbols-outlined">arrow_drop_down</span>
      </TasksListHeaderStyled>

      {areFinishedTasksDisplayed ? (
        <FinishedTasks
          tasks={tasks}
          onDeleteTaskClick={onDeleteTaskClick}
          onTaskComplete={onTaskComplete}
          onEditTaskClick={onEditTaskClick}
        />
      ) : (
        ""
      )}
    </TasksListStyled>
  );
};
