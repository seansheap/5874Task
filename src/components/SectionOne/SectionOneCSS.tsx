import { Box } from "@mui/material"
import styled from "styled-components"
import { primaryColour } from "../common/contants"
import { device } from "../utils/breakpoints"


export const HideableRightSection = styled(Box)`
    @media only screen and ${device.tn}{
        display: none;
    }
    @media only screen and ${device.sm}{
        display: none;
    }
    @media only screen and ${device.lg}{
        display: flex;
    }
    width:50%;
    

`
export const MainImage = styled.img`
    layout: fill;
    object-fit: contain;
    display:flex;
    width: 100%;
    overflow:visible;

`


export const Background = styled.div`
    background-color:white;
    display:flex;
    height:100%;
    min-height:600px;

`
export const RightSection = styled.div`
    padding-top:60px;
    background:teal;

`
export const Tagline = styled.h5`
    font-size: 16px;
    color: ${primaryColour};
    margin:0px;
    padding:0px;
`
