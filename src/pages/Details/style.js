import styled from "styled-components";

export const Container = styled.div`

    height: 100%;
    width:100%;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header" 
    "content";

    >main{
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0;
    } 
`

export const Content = styled.div`

    max-width: 550px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    > button:first-child{
        align-self: end;
    }

    >h1{
        font-weight: 500;
        font-size: 36px;
        padding-top: 64px;
    }

    >p{
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
    }


`
