import React from 'react'
import styled from "styled-components";
import Compose from '../buttons/Compose'
import { SidebarButtonsItems } from '../data/SidebarButtonsItems';
const Sidebar = () => {
    return (
        <Wrapper>
            <ComponentWrapper>
                <Compose />
            </ComponentWrapper>
            <SideButtonsWrapper>
                {
                    SidebarButtonsItems.map(item=>(
                        <SidebarButtonsItem>
                            {item.icon} {item.text}
                        </SidebarButtonsItem>
                    ))
                }
            </SideButtonsWrapper>
            <MeetWrapper>
{/* meet icons */}
            </MeetWrapper>
{/* Hangouts Wrapper */}
        <HangoutsWrapper>

        </HangoutsWrapper>
{/* Bottom Wrapper */}
            <BottomIconsWrapper>
                
            </BottomIconsWrapper>
        </Wrapper>
    )
}

export default Sidebar
const Wrapper = styled.div`
border-right:1px solid lightgrey;
height:100vh
`;
const ComponentWrapper = styled.div`
display:grid;
place-items:start;
padding:10px 20px
`;
const SideButtonsWrapper = styled.div`
`;
const MeetWrapper = styled.div`
`;
const HangoutsWrapper = styled.div`
`;
const BottomIconsWrapper = styled.div`
`;
const SidebarButtonsItem = styled.div`
    display:grid;
    grid-template-columns:14% auto;
    color:gray;
    padding:5px 26px;
    transition: all .02s ease-in-out;
    :hover{
        color:black;
        cursor:pointer;
        background-color:#f5f7f7
    }
`;
