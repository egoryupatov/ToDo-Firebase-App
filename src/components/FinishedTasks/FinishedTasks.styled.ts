import styled from "styled-components";
import {
  TasksTableCellStyled,
  TasksTableRowStyled,
  TasksTableStyled,
} from "../TasksList/TasksList.styled";

export const FinishedTasksTableStyled = styled(TasksTableStyled)`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
`;

export const FinishedTasksTableRowStyled = styled(TasksTableRowStyled)`
  display: flex;
  gap: 10px;
  border-bottom: 1px rgba(149, 157, 165, 0.2) solid;

  &:first-child {
    background-color: #db4c3f;
    color: white;
    font-weight: bold;
    border-bottom: none;
    text-decoration: none;
  }
`;

export const FinishedTasksTableHeaderStyled = styled(TasksTableRowStyled)`
  display: flex;
  gap: 10px;
  border-bottom: 1px rgba(149, 157, 165, 0.2) solid;
  background-color: #db4c3f;
  color: white;
  font-weight: bold;
  border-bottom: none;
  text-decoration: none;
`;

export const FinishedTasksTableHeaderCellStyled = styled(TasksTableCellStyled)`
  display: flex;
  padding: 10px;
  justify-content: start;
  align-items: center;
  width: 100%;

  &:first-child {
    max-width: 50px;
    margin-left: 5px;
    justify-content: center;
  }

  &:nth-child(4) {
    max-width: 100px;
    margin-right: 5px;
  }

  &:last-child {
    max-width: 125px;
    margin-right: 5px;
    justify-content: center;
    text-decoration-line: none;
  }
`;

export const FinishedTasksTableCellStyled = styled(TasksTableCellStyled)`
  display: flex;
  padding: 10px;
  justify-content: start;
  align-items: center;
  width: 100%;
  text-decoration-line: line-through;

  &:first-child {
    max-width: 50px;
    margin-left: 5px;
    justify-content: center;
  }

  &:nth-child(4) {
    max-width: 100px;
    margin-right: 5px;
  }

  &:last-child {
    max-width: 125px;
    margin-right: 5px;
    justify-content: center;
    text-decoration-line: none;
  }
`;
