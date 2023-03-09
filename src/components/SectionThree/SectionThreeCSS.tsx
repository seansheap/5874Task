import { createTheme } from "@mui/material"
import styled from "styled-components"
import { primaryColour } from "../common/contants"

export const Background = styled.div`
    background-color:white;
`
export const CarousalContainer = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    padding-top:30px;
`
export const FootContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    
`
export const CarousalNavContainer = styled.div`
    display:flex;
    margin-right: 10%;
`
export const CarousalNav = styled.button`
    cursor:pointer;
    border-width:0px;
    background:#19293A;
    color:white;
    height:50px;
    width:50px;
    margin:20px;
`

export const TabTheme = createTheme({
    palette: {
        primary: {
            main: primaryColour
        },
        secondary: {
            light: '#0066ff',
            main: '#000000',
            contrastText: '#ffcc00',
        },
    }
})
