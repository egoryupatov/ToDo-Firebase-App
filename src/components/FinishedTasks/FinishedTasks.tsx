import React from "react";

import {
  FinishedTasksTableCellStyled,
  FinishedTasksTableRowStyled,
  FinishedTasksTableStyled,
  FinishedTasksTableHeaderStyled,
  FinishedTasksTableHeaderCellStyled,
} from "./FinishedTasks.styled";
import { Task } from "../TasksList/TasksList";

export const FinishedTasks: React.FC = () => {
  const finishedTasksList = [
    {
      title: "Wash dishes",
      description: "Do it great",
      date: "20 Nov",
      attachedFile: "file",
    },
    {
      title: "Pet a cat",
      description: "Cat should be satisfied",
      date: "21 Nov",
      attachedFile: "file",
    },
  ];

  return (
    <FinishedTasksTableStyled>
      <FinishedTasksTableHeaderStyled>
        <FinishedTasksTableHeaderCellStyled>
          State
        </FinishedTasksTableHeaderCellStyled>
        <FinishedTasksTableHeaderCellStyled>
          Task
        </FinishedTasksTableHeaderCellStyled>
        <FinishedTasksTableHeaderCellStyled>
          Description
        </FinishedTasksTableHeaderCellStyled>
        <FinishedTasksTableHeaderCellStyled>
          Due date
        </FinishedTasksTableHeaderCellStyled>
        <FinishedTasksTableHeaderCellStyled>
          Attached file
        </FinishedTasksTableHeaderCellStyled>
      </FinishedTasksTableHeaderStyled>
      {finishedTasksList.map((task: Task) => (
        <FinishedTasksTableRowStyled>
          <FinishedTasksTableCellStyled>
            <input type="checkbox" checked />
          </FinishedTasksTableCellStyled>
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
            {task.attachedFile}
          </FinishedTasksTableCellStyled>
        </FinishedTasksTableRowStyled>
      ))}
    </FinishedTasksTableStyled>
  );
};
