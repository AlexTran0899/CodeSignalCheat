import './comp.css';
import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import ReactPlayer from "react-player";

const Container = styled.div`
    background: #2B3D52;
    background-attachment: fixed;
    background-size: cover;
    padding: .01%;
    height: 100vh;
`

const intialData = ['John', 'David', 'Mike', 'Sam', 'Carol', 'Bob', 'Francis', 'Kyle', 'Roman', 'Ben', 'Luiza', 'Mariana', 'Conney']
const Homepage = (props) => {
    const [value, setValue] = useState("")
    const [predict, setPredict] = useState("")
    const [data, setData] = useState(intialData)
    const [link, setLink] = useState(false)

    const handleKeyDown = async (e) => {
        if (e.key === 'Tab') {
            e.preventDefault()
            setValue({ text: predict })
        }
        if (e.key === 'Enter'){
            e.preventDefault()
            await setLink("https://www.youtube.com/watch?v=Rq5SEhs9lws")
            window.scrollTo(0,1000)
        }
    }

    const change = e => {
        setValue({ text: e.target.value })
        let itemname = data.filter((oneatatime) => {
            if (oneatatime.toLocaleLowerCase().includes(value.text?.toLocaleLowerCase())) {
                return oneatatime
            }
        })
        setPredict(itemname[0])
    }

    const getHighlightedText = () => {
        if (!predict && !value) {
            return <span>Press <b>tab</b> to autoselect</span>
        }
        if (!predict) {
            return <span><b>404</b> 😢</span>
        }
        if (value.text?.toLocaleLowerCase() === predict.toLocaleLowerCase()) {
            return <span>Press <b>enter</b> to continue</span>
        }
        const parts = predict?.split(new RegExp(`(${value.text})`, 'gi'));
        return (<span>{parts?.map(part => part.toLowerCase() === value.text?.toLowerCase() ? <b>{part}</b> : part)}</span>);
    }

    return (
        <Container >
            <div className="outside">
                {getHighlightedText()}
                <input spellcheck="false"
                    onChange={change}
                    value={value.text}
                    placeholder="Search"
                    onKeyDown={handleKeyDown} />
            </div>
            {link ? <ReactPlayer
                url={link}
                className="react-player"
                playing
                width="100%"
                height="100%"
                controls={false}
            /> : null}
        </Container>

    )
}

export default Homepage;