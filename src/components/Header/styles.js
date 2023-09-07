import styled from "styled-components";
import { Link } from "react-router-dom";

export const Conteiner = styled.header`

    grid-area: header;
    height: 105px;
    width:100%;
    border-bottom:1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    display: flex;
    justify-content: space-between;
    padding:0 80px;
`

export const Profile = styled(Link)`

    display: flex;
    gap: 16px;
    align-items: center;
    text-decoration: none;
    
    >img{
        width: 70px;
        height:70px;
        border-radius: 50%;
    }

    >div{
        display: flex;
        flex-direction: column;
        line-height: 24px;


        span{
            font-size: 14px;
            color:${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong{
            font-size: 18px;
            color:${({ theme }) => theme.COLORS.WHITE};
        }
    }
`

export const Logout =  styled.button`

    border:none;
    background: none;

    >svg{
        color:${({theme}) => theme.COLORS.GRAY_100};
        font-size: 30px;
    }
    
`