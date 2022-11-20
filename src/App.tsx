import React from "react";
import "./index.css";
import { ContainerStyled, WrapperStyled } from "./styles/main.styled";
import { TasksList } from "./components/TasksList/TasksList";

export const App: React.FC = () => {
  return (
    <ContainerStyled>
      <WrapperStyled>
        <TasksList />
      </WrapperStyled>
    </ContainerStyled>
  );
};
