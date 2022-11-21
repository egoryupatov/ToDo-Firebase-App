import React from "react";

import {
  FinishedTasksTableStyled,
  FinishedTasksTableHeaderStyled,
  FinishedTasksTableHeaderCellStyled,
} from "./FinishedTasks.styled";
import { ITask } from "../TasksList/Task.types";
import { Task } from "../Task/Task";

interface FinishedTasksProps {
  tasks: ITask[];
  onDeleteTaskClick: (id: string) => void;
  onTaskComplete: (id: string, status: boolean) => void;
  onEditTaskClick: (
    id: string,
    title: string,
    description: string,
    date: string
  ) => void;
}

export const FinishedTasks: React.FC<FinishedTasksProps> = (props) => {
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

      {props.tasks
        .filter((task) => task.active === false)
        .map((task: ITask) => (
          <Task
            task={task}
            onDeleteTaskClick={props.onDeleteTaskClick}
            key={task.id}
            onTaskComplete={props.onTaskComplete}
            onEditTask={props.onEditTaskClick}
          />
        ))}
    </FinishedTasksTableStyled>
  );
};
