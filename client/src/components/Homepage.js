import './comp.css';
import React from "react";
import styled from 'styled-components'
import disableScroll from 'disable-scroll'
import InputPredict from 'react-inline-predict'

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
                <InputPredict spellcheck="false"
                     value="text" placeholder="Search"
                    dictionary={["kiwi", "oranges", "watermelon", "pineapple"]} />
                    
            </div>

        </Container>
    )
}

export default Homepage;