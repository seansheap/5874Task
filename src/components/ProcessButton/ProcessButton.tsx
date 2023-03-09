import { useState } from "react";
import styled from "styled-components";

interface Props {
    text:string
}

const Process = ({text}:Props) => {
    const [hovering, setHovering] = useState(false)

    return (
        <Container
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}>
            {text}  
            <IconCircle style={{opacity: hovering === true?1:0}}>
                {'>'}
            </IconCircle>
        </Container>
    )
}

const IconCircle = styled.div`
    transition: opacity 500ms;
    font-size:15px;
    color:white;
    background:#506473;
    border-radius:12px;
    width:24px;
    height:24px;
    justify-content:center;
    align-items:center;
    text-align: center;
    margin-left:10px;
    margin-top:10px;
`
const Container = styled.div`
    color:#506473;
    cursor: pointer;
    display:flex;
    font-size:21px;
    justify-content:start;
    align-items:center;
    text-align: center;
    padding-bottom:15px;
`

export default Process ;