import { ImageListItem } from "@mui/material";
import styled from "styled-components";


export const HoverPadding = styled.div`
    padding:20px;
`
export const Title = styled.h4`
    margin-bottom:5px;
`
export const FullProjPadding = styled.div`
    padding-bottom:20px;
`
export const HoverDetails = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    color:white;
    position:absolute;
    z-index: 10;
    bottom:0px;
    cursor: pointer;
    opacity:0;
    transition: opacity 500ms;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
`
export  const ProjectItem = styled(ImageListItem)`
    display:flex;
    &:hover ${HoverDetails} {
        opacity:1;
    }
`