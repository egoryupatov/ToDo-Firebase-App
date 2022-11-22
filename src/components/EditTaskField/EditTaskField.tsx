import React, { useState } from "react";
import { EditTaskTextStyled, EditTaskFieldStyled } from "./EditTaskFieldstyled";
import {
  TaskButtonStyled,
  AddTaskDateInputStyled,
  AddTaskInputStyled,
} from "../TasksList/TasksList.styled";
import { ITask } from "../TasksList/Task.types";

interface EditTaskFieldProps {
  onEditTaskClick: () => void;
  onEditTask: (
    id: string,
    title: string,
    description: string,
    date: string
  ) => void;
  task: ITask;
}

export const EditTaskField: React.FC<EditTaskFieldProps> = (props) => {
  const [editedTask, setEditedTask] = useState({
    id: `${props.task.id}`,
    title: `${props.task.title}`,
    description: `${props.task.description}`,
    date: `${props.task.date}`,
  });

  const onTitleEdit = (e: any) => {
    setEditedTask({ ...editedTask, title: e.target.value });
  };

  const onDescriptionEdit = (e: any) => {
    setEditedTask({ ...editedTask, description: e.target.value });
  };

  const onDateEdit = (e: any) => {
    setEditedTask({ ...editedTask, date: e.target.value });
  };

  return (
    <EditTaskFieldStyled>
      <form method="dialog">
        <EditTaskTextStyled>
          <textarea
            onChange={onTitleEdit}
            maxLength={25}
            style={{ minHeight: "20px" }}
            value={editedTask.title}
          />
          <textarea
            onChange={onDescriptionEdit}
            maxLength={50}
            style={{ minHeight: "40px" }}
            value={editedTask.description}
          />
        </EditTaskTextStyled>
        <div style={{ display: "flex", gap: "10px" }}>
          <TaskButtonStyled
            onClick={() => {
              props.onEditTask(
                editedTask.id,
                editedTask.title,
                editedTask.description,
                editedTask.date
              );
              props.onEditTaskClick();
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "normal",
              }}
            >
              Update task
            </span>
          </TaskButtonStyled>

          <AddTaskDateInputStyled
            type="date"
            onChange={onDateEdit}
          ></AddTaskDateInputStyled>
          <TaskButtonStyled onClick={props.onEditTaskClick}>
            Cancel
          </TaskButtonStyled>
        </div>
      </form>
    </EditTaskFieldStyled>
  );
};
