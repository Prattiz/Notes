import styled from "styled-components";

export const Conteiner = styled.header`

    grid-area: header;
    height: 105px;
    width:100%;
    border-bottom:1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    display: flex;
    justify-content: space-between;
    padding:0 80px;


`

export const Profile = styled.div`

    display: flex;
    gap: 16px;
    align-items: center;

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