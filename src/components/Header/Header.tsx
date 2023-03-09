import { Drawer } from "@mui/material";
import { useState } from "react";
import { useScrollDirection } from "../../redux/hooks";
import MenuTitle from "../MenuTitle/MenuTitle";
import SlidingMenu from "../SlidingMenu/SlidingMenu";
import { HeaderContainer, ImageTitlesRow, LogoImage, MenuButton } from "./Header.styles";


const Header = () => {
    const scrollDirection = useScrollDirection();
    const [open, setOpen] = useState(false)
    const openHandler = (isOpen: boolean) => {
        setOpen(isOpen)

    }
    return (

        <HeaderContainer style={{
            top: scrollDirection === "down" ? -100 : 0,
            background: scrollDirection === "top" ? 'transparent' : 'white'
        }}
            color={{
                sm: 'black',
                lg: scrollDirection === "top" ? 'white' : 'black'
            }}>
            <LogoImage src='/Digital Spaniel logo01-01.png' alt='logoImg' />
            <ImageTitlesRow>
                <MenuTitle textTitle='Services' />
                <MenuTitle textTitle='Work' />
                <MenuTitle textTitle='About' />
                <MenuTitle textTitle='Blog' />
                <MenuTitle textTitle='Contact' />
            </ImageTitlesRow>
            <MenuButton onClick={() => { setOpen(!open) }}>
                <h3>Menu</h3>
            </MenuButton>
            <Drawer anchor="right" open={open}>
                <SlidingMenu close={openHandler} />
            </Drawer>
        </HeaderContainer>
    )
}


export default Header;
