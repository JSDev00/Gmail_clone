import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";

function Header() {
    return (
        <Wrapper>
            <LogoWrapper>
                <Menu>
                    <MenuIcon />
                    {/* Icons */}
                </Menu>
                <Logo>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png"
                    alt=""
                />
                </Logo>
            </LogoWrapper>
            <SearchWrapper>
                <SearchBarWrapper>
                    <SearchIcon />
                    <input type="text" placeholder="Search mail" />
                    <IconButton>
                    <ExpandMoreIcon />

                    </IconButton>
                </SearchBarWrapper>
            </SearchWrapper>
            <IconWrapper>
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>

                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>

            </IconWrapper>
        </Wrapper>
    );
}

export default Header;
const Wrapper = styled.div`
    display:grid;
    align-items:center;
    grid-template-columns:270px auto 270px;
    border-bottom:1px solid lightgray;
    height:70px
`;
const LogoWrapper = styled.div`
height:45px;
display:grid;
grid-template-columns:25% auto 
`;
const Logo = styled.div`
display:flex;
    height:45px
`;
const Menu = styled.div`
    display:grid;
    place-items:center
`;
const SearchWrapper = styled.div``;
const SearchBarWrapper = styled.div`
    display:grid;
    background-color:#f1f3f4;
    max-width:750px;
    width:100%;
    grid-template-columns:10% auto 7%;
    place-items:center;
    height:45px;
    border-radius:6px;
    input {
        width:100%;
        height:30px;
        background:none;
        outline:0;
        border:none;
        font-size:16px;
    }

`;
const IconWrapper = styled.div``;
