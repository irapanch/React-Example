import { styled } from "styled-components";
export const StyledList = styled.ul`
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.$color || "black"};
  box-shadow: ${({ theme }) => theme.shadows.default};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
`;

export const StyledItem = styled.li`
  background-color: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.$color || "black"};
  box-shadow: ${({ theme }) => theme.shadows.default};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
`;
