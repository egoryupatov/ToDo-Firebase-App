import React, { useState } from "react";
import {
  TasksTableCellStyled,
  TasksTableRowStyled,
} from "../TasksList/TasksList.styled";
import { EditTaskField } from "../EditTaskField/EditTaskField";
import { ITask } from "../TasksList/Task.types";
import { FinishedTasksTableCellStyled } from "../FinishedTasks/FinishedTasks.styled";

export const Task: React.FC<{
  task: ITask;
  onDeleteTaskClick: (id: string) => void;
  onTaskComplete: (id: string, active: boolean) => void;
  onEditTask: (
    id: string,
    title: string,
    description: string,
    date: string
  ) => void;
}> = ({ task, onDeleteTaskClick, onTaskComplete, onEditTask }) => {
  const [isEditTaskWindowOpened, setIsEditTaskWindowOpened] =
    useState<boolean>(false);

  const onEditTaskClick = () => {
    setIsEditTaskWindowOpened(!isEditTaskWindowOpened);
  };

  return (
    <>
      <TasksTableRowStyled key={task.id}>
        <TasksTableCellStyled>
          {task.active ? (
            <>
              <input
                type="checkbox"
                onClick={() => onTaskComplete(task.id, false)}
              />
            </>
          ) : (
            <>
              <input type="checkbox" checked />
            </>
          )}
        </TasksTableCellStyled>

        {task.active ? (
          <>
            <TasksTableCellStyled>{task.title}</TasksTableCellStyled>
            <TasksTableCellStyled>{task.description}</TasksTableCellStyled>
            <TasksTableCellStyled>{task.date}</TasksTableCellStyled>
            <TasksTableCellStyled>
              <a
                target="_blank"
                href={task.attachedFile}
                download
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Link
              </a>
            </TasksTableCellStyled>
          </>
        ) : (
          <>
            <FinishedTasksTableCellStyled>
              {task.title}
            </FinishedTasksTableCellStyled>
            <FinishedTasksTableCellStyled>
              {task.description}
            </FinishedTasksTableCellStyled>
            <FinishedTasksTableCellStyled>
              {task.date}
            </FinishedTasksTableCellStyled>
            <FinishedTasksTableCellStyled>
              <a
                target="_blank"
                href={task.attachedFile}
                download
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Link
              </a>
            </FinishedTasksTableCellStyled>
          </>
        )}

        {task.active ? (
          <>
            <TasksTableCellStyled
              onClick={() => setIsEditTaskWindowOpened(!isEditTaskWindowOpened)}
            >
              <span
                onClick={onEditTaskClick}
                style={{ cursor: "pointer" }}
                className="material-symbols-outlined"
              >
                edit
              </span>
            </TasksTableCellStyled>
            <TasksTableCellStyled
              style={{ cursor: "pointer" }}
              onClick={() => onDeleteTaskClick(task.id)}
            >
              <span className="material-symbols-outlined">delete</span>
            </TasksTableCellStyled>
          </>
        ) : (
          ""
        )}
      </TasksTableRowStyled>
      {isEditTaskWindowOpened ? (
        <EditTaskField
          onEditTaskClick={onEditTaskClick}
          onEditTask={onEditTask}
          task={task}
        />
      ) : (
        ""
      )}
    </>
  );
};
