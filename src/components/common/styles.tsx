import styled from "styled-components"
import { device } from "../utils/breakpoints"

export const Headline = styled.h1`
font-size: 48px;
margin:0px;
padding:0px;

`
export const HeadlineGrey = styled.h1`
margin:0px;
padding:0px;
font-size: 48px;
color: #506473;
`

export const LeftSection = styled.div`
    
    // margin-bottom:12%;
    width:100%;
    height:100%;
    justify-content:center;
    display:flex;
    flex-direction:column;

`
export const LeftSectionText = styled.div`
    @media only screen and ${device.tn}{
        margin-left:10%;
        margin-right:10%;
    }
    @media only screen and ${device.lg}{
        margin-left:20%;
        margin-right:30%;
    }
    // height:100%;
    flex-direction:column;

    // margin-top:15%;
    // margin-bottom:35%;
    justify-content:center;
    align-items:start;
    display:flex;
`

export const TitleSectionText = styled.div`
    width:50%;
    margin-top:5%;
    display:flex;
    flex-direction:column;
    @media only screen and ${device.tn}{
        margin-left:10%;
    }
    @media only screen and ${device.lg}{
        margin-left:10%;
    }
    justify-content:center;
    align-items:start;
`