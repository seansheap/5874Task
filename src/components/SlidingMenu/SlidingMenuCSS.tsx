import { Button } from "@mui/material"
import { Box } from "@mui/system"
import styled from "styled-components"

export const Header = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
    align-items:center;

`
export const CloseButton = styled(Button)`
    background:red;
    cursor: pointer;

`
export const ImageTitlesColumn = styled(Box)`
    display:flex;
    min-width:400px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width:100%;
`