import styled from "styled-components";

export const StyledSpinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #16d47b;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2000ms cubic-bezier(0.4, 0.3, 0.85, 1) infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(270deg);
    }
    50% {
      transform: rotate(540deg);
    }
    75% {
      transform: rotate(810deg);
    }
    100% {
      transform: rotate(1080deg);
    }
  }
`;
