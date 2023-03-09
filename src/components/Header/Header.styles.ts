import { Box } from "@mui/system"
import styled from "styled-components"
import { device } from "../utils/breakpoints"

export const LogoImage = styled.img`
    max-height: 100px;
    padding-left:7%;
    objectFit: contain;
    z-index:0;
`

export const ImageTitlesRow = styled(Box)`
    @media only screen and ${device.xs}{
        display: none;
    }
    @media only screen and ${device.sm}{
        display: flex;
    }
    @media only screen and ${device.lg}{
        display: flex;
    }
    
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width:50%;
`
export const MenuButton = styled(Box)`
    cursor: pointer;

    @media only screen and ${device.xs}{
        display: flex;
    }
    @media only screen and ${device.sm}{
        display: none;
    }
    justify-content: center;
    align-items: center;
    width:100px;
    height:100px;
`
export const HeaderContainer = styled(Box)`
    z-index:10;
    
    display: flex;
    flex-direction: row;
    position:sticky;

    height: 6rem;
    width:100%;
    justify-content: space-between;
    transition-duration: 500ms;

`