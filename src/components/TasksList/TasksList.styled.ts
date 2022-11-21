import styled from "styled-components";

export const TasksListStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 20px;
  padding: 20px;
  gap: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 20px;
  border: 1px rgba(149, 157, 165, 0.2) solid;
`;

export const TasksListHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const TaskStyled = styled.div`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px gray solid;
  gap: 20px;
  width: 100%;
`;

export const TasksTableStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
`;

export const TasksTableRowStyled = styled.div`
  display: flex;
  gap: 10px;
  border-bottom: 1px rgba(149, 157, 165, 0.2) solid;

  &:first-child {
    background-color: #db4c3f;
    color: white;
    font-weight: bold;
    border-bottom: none;
  }
`;

export const TasksTableCellStyled = styled.div`
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
    max-width: 130px;
    margin-right: 5px;
    justify-content: center;
  }

  &:nth-child(5) {
    max-width: 130px;
    margin-right: 5px;
    justify-content: center;
  }

  &:nth-child(6) {
    max-width: 30px;
    margin-right: 5px;
    justify-content: center;
  }

  &:last-child {
    max-width: 30px;
    margin-right: 5px;
    justify-content: center;
  }
`;

export const TaskButtonStyled = styled.button`
  width: 100px;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292e;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;

  &:hover {
    background-color: #f3f4f6;
    text-decoration: none;
    transition-duration: 0.1s;
  }
`;

export const AddTaskDateInputStyled = styled.input`
  text-align: center;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;

  ::-webkit-calendar-picker-indicator {
    background-color: #ffffff;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 3px;
  }
`;

export const AddTaskInputStyled = styled.label`
  text-align: center;
  width: 100px;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292e;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;

  input {
    display: none;
  }

  &:hover {
    background-color: #f3f4f6;
    text-decoration: none;
    transition-duration: 0.1s;
  }
`;
