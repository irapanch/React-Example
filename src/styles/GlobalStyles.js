import { createGlobalStyle } from "styled-components";

export const GlobalSyles = createGlobalStyle`
body{
    background-color: ${({ theme }) => theme.colors.bgMain};
    .title{
        color: darkblue;
    }
}
`;
