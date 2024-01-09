import { createGlobalStyle, styled } from "styled-components";

export const GlobalSyles = createGlobalStyle`
body{
    background-color: ${({ theme }) => theme.colors.bgMain};
    .title{
        color: darkblue;
    }
}
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$direction || "row"};
  justify-content: ${(props) => props.$justify || "stretch"};
  align-items: ${(props) => props.$align || "stretch"};
  min-height: ${(props) => props.$minHeight || "auto"};
  gap: ${(props) => props.$gap || "10px"};
`;
