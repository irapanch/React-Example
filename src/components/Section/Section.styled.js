import { styled } from "styled-components";
export const StyledList = styled.ul`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.$color || "black"};
  box-shadow: ${({ theme }) => theme.shadows.default};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
`;

export const StyledItem = styled.li`
  width: 150px;
  background-color: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.$color || "black"};
  box-shadow: ${({ theme }) => theme.shadows.default};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
`;
