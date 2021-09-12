import React from 'react'
import styled from "styled-components";
import AddIcon from '@material-ui/icons/Add';
const Compose = () => {
    return (
        <Wrapper>
            <AddIcon fontSize="large"/>
            <h4>Compose</h4>
        </Wrapper>
    )
}

export default Compose
const Wrapper = styled.div`
    display:grid;
    grid-template-columns:35% auto;
    width:auto;
    align-items:center;
    padding:6px 32px 6px 8px;
    border-radius:50px;
    box-shadow:0 1px 2px rgba(60,64,67,0.302) , 0 1px 3px 1px rgba(60,64,67,0.149);
    cursor:pointer;
    :hover{
        box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);
    }

`;

