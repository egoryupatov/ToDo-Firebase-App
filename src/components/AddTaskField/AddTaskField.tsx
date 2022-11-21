import React, { useEffect, useState } from "react";
import { AddTaskFieldStyled, AddTaskTextStyled } from "./AddTaskField.styled";
import {
  TaskButtonStyled,
  AddTaskDateInputStyled,
  AddTaskInputStyled,
} from "../TasksList/TasksList.styled";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { ITask } from "../TasksList/Task.types";
import { storage } from "../../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface AddTaskFieldInterface {
  onAddTaskClick: () => void;
  onAddNewTask: (task: ITask) => void;
}

export const AddTaskField: React.FC<AddTaskFieldInterface> = (props) => {
  // @ts-ignore
  const [newTask, setNewTask] = useState<ITask>({
    title: "",
    description: "",
    date: null,
    attachedFile: "",
    id: "",
    active: true,
  });

  const [taskAttachedFile, setTaskAttachedFile] = useState<File>();

  const tasksCollectionRef = collection(db, "todos");

  const onAddTaskClick = async () => {
    const attachedFileRef = ref(
      storage,
      `files/${
        taskAttachedFile?.name + String(Math.floor(Math.random() * 1000))
      }`
    );
    // @ts-ignore

    const snapshot = await uploadBytes(attachedFileRef, taskAttachedFile);
    const attachedFileUrl = await getDownloadURL(snapshot.ref);

    const doc = await addDoc(tasksCollectionRef, {
      ...newTask,
      attachedFile: attachedFileUrl,
    });
    const newTaskWithId = { ...newTask, id: doc.id };
    props.onAddNewTask(newTaskWithId);
    props.onAddTaskClick();
  };

  const onCancelClick = () => {
    props.onAddTaskClick();
  };

  const onTitleChange = (e: any) => {
    setNewTask({ ...newTask, title: e.target.value });
  };

  const onDescriptionChange = (e: any) => {
    setNewTask({ ...newTask, description: e.target.value });
  };

  const onFileAttach = (e: any) => {
    setTaskAttachedFile(e.target.files[0]);
  };

  const onSetDate = (e: any) => {
    setNewTask({ ...newTask, date: e.target.value });
  };

  return (
    <AddTaskFieldStyled>
      <form method="dialog">
        <AddTaskTextStyled>
          <textarea
            onChange={onTitleChange}
            maxLength={35}
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
          <TaskButtonStyled onClick={onAddTaskClick}>Add task</TaskButtonStyled>

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
            <input onChange={onFileAttach} type="file" />
          </AddTaskInputStyled>

          <AddTaskDateInputStyled
            type="date"
            min={new Date().getDate()}
            onChange={onSetDate}
          ></AddTaskDateInputStyled>

          <TaskButtonStyled onClick={onCancelClick}>Cancel</TaskButtonStyled>
        </div>
      </form>
    </AddTaskFieldStyled>
  );
};
