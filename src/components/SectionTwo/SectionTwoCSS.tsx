import { Grid } from "@mui/material"
import styled from "styled-components"
import { backgroundSecondaryColour } from "../common/contants"

export const Background = styled.div `
    background-color:${backgroundSecondaryColour};
    display:flex;
    height:100%;
    padding-top:100px;
    padding-bottom:100px;

`
export  const RightSection = styled(Grid)`
    width:100%;
    align-items:space-around;
    height:100%;
    padding-left:10%;
    
`