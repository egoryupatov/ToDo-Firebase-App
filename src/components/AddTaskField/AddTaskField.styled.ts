import styled from "styled-components";

export const AddTaskFieldStyled = styled.div`
  form {
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 100%;
    min-height: 125px;
    background-color: white;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    padding: 10px 10px;
    cursor: text;
  }

  textarea {
    font-family: inherit;
    max-height: 20px;
    border: none;
    font-weight: bold;
    resize: none;

    &:last-child {
      min-height: 90px;
      font-weight: normal;
    }
  }
`;

export const AddTaskTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
