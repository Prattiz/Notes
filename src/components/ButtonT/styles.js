import styled from "styled-components";

export const Conteiner = styled.button`

    background: none;
    color:${({theme, $active}) => $active? theme.COLORS.ORANGE: theme.COLORS.GRAY_100 };
    border: none;
    font-size:16px;

`
