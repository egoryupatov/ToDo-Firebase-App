import React, { useState } from "react";
import { AddTaskFieldStyled, AddTaskTextStyled } from "./AddTaskField.styled";
import {
  AddTaskButtonStyled,
  AddTaskInputStyled,
} from "../TasksList/TasksList.styled";
import { Task } from "../TasksList/TasksList";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

interface AddTaskFieldInterface {
  onAddPostClick: () => void;
}

export const AddTaskField: React.FC<AddTaskFieldInterface> = (props) => {
  const [newTask, setNewTask] = useState<Task>({
    title: "",
    description: "",
    date: "Today",
    attachedFile: "File.jpg",
  });

  const todosCollectionRef = collection(db, "todos");

  const onAddPostClick = async () => {
    await addDoc(todosCollectionRef, newTask);
  };

  const onCancelClick = () => {
    props.onAddPostClick();
  };

  const onTitleChange = (e: any) => {
    setNewTask({ ...newTask, title: e.target.value });
  };

  const onDescriptionChange = (e: any) => {
    setNewTask({ ...newTask, description: e.target.value });
  };

  return (
    <AddTaskFieldStyled>
      <form>
        <AddTaskTextStyled>
          <textarea
            onChange={onTitleChange}
            maxLength={25}
            style={{ minHeight: "20px" }}
            placeholder="Task name"
          />
          <textarea
            onChange={onDescriptionChange}
            maxLength={50}
            style={{ minHeight: "40px" }}
            placeholder="Description"
          />
        </AddTaskTextStyled>
        <div style={{ display: "flex", gap: "10px" }}>
          {/*<AddTaskButtonStyled onClick={onAddPostClick}>
            Add post
          </AddTaskButtonStyled>*/}
          <AddTaskInputStyled>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "normal",
              }}
            >
              Attach a file
            </span>
            <input type="file" />
          </AddTaskInputStyled>
          <AddTaskButtonStyled>Set date</AddTaskButtonStyled>
          <AddTaskButtonStyled onClick={onCancelClick}>
            Cancel
          </AddTaskButtonStyled>
        </div>
      </form>
      <AddTaskButtonStyled onClick={onAddPostClick}>
        Add post
      </AddTaskButtonStyled>
    </AddTaskFieldStyled>
  );
};
