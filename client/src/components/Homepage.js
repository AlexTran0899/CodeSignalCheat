import './comp.css';
import React from "react";
import styled from 'styled-components'
import disableScroll from 'disable-scroll'
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from "@material-ui/core";

disableScroll.on()
const Container = styled.div`
    background: #2B3D52;
    background-attachment: fixed;
    background-size: cover;
    padding: 1%;
    height: 100vh;
`

const Homepage = (props) => {
    return (
        <Container >
            <div>
            <input spellcheck="false">
            </input>
            </div>
            
        </Container>
    )
}

export default Homepage;