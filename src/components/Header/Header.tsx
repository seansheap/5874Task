import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { useScrollDirection } from "../../redux/hooks";
import MenuTitle from "../MenuTitle/MenuTitle";
import SlidingMenu from "../SlidingMenu/SlidingMenu";
import { device } from '../utils/breakpoints';


const Header = () => {
    const scrollDirection = useScrollDirection();
    const [open, setOpen] = useState(false)
    const openHandler = (isOpen:boolean) =>{
        setOpen(isOpen)

    }
    return (

        <HeaderContainer
            style={{
                top: scrollDirection === "down" ? -100 : 0,
                background: scrollDirection === "top" ? 'transparent' : 'white',
            }}
            color={{sm:'black', lg:scrollDirection === "top" ? 'white' : 'black'}}>

            <LogoImage src={require('../../images/Digital Spaniel logo01-01.png')} alt='logoImg' />

            <ImageTitlesRow >
                <MenuTitle textTitle='Services' />
                <MenuTitle textTitle='Work' />
                <MenuTitle textTitle='About' />
                <MenuTitle textTitle='Blog' />
                <MenuTitle textTitle='Contact' />
            </ImageTitlesRow>
            <MenuButton onClick={() => { setOpen(!open) }}>
                <h3>Menu</h3>
            </MenuButton>

            <Drawer
            anchor="right"
            open={open}>
                <SlidingMenu close={openHandler}/>
            </Drawer>

        </HeaderContainer>
    )
}
const LogoImage = styled.img`
    max-height: 100px;
    padding-left:7%;
    objectFit: contain;
    z-index:0;
`

const ImageTitlesRow = styled(Box)`
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
const MenuButton = styled(Box)`
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
const HeaderContainer = styled(Box)`
    z-index:10;
    
    display: flex;
    flex-direction: row;
    position:sticky;

    height: 6rem;
    width:100%;
    justify-content: space-between;
    transition-duration: 500ms;

`

export default Header;