import { useState } from "react";
import { Container, IconCircle } from "./ProcessButton.styles";

interface Props {
    text: string
}

const Process = ({ text }: Props) => {
    const [hovering, setHovering] = useState(false)

    return (
        <Container onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}>
            {text}
            <IconCircle style={{ opacity: hovering ? 1 : 0 }}>
                {'>'} </IconCircle>
        </Container>
    )
}


export default Process;
