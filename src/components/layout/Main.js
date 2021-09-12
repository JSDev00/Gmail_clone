import React from 'react'
import styled from "styled-components";
import Sidebar from './Sidebar';
import Emails from './Emails';
import SidebarIcons from './SidebarIcons';
function Main() {
    return (
       <Wrapper>
            <Sidebar/>
            <Emails/>
            <SidebarIcons/>
       </Wrapper>
    )
}

export default Main
const Wrapper = styled.div`
    display:grid;
    grid-template-columns:270px auto 50px
`;
