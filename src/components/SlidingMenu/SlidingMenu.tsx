import MenuTitle from "../MenuTitle/MenuTitle";
import {CloseButton, Header, ImageTitlesColumn} from "./SlidingMenu.styles";

interface Props {
    close: (value : boolean) => void
}

const SlidingMenu = ({close: open} : Props) => {

    return (
        <ImageTitlesColumn>
            <Header>
                <CloseButton onClick={
                    () => open(false)
                }>
                    X
                </CloseButton>
            </Header>
            <MenuTitle textTitle='Services'/>
            <MenuTitle textTitle='Work'/>
            <MenuTitle textTitle='About'/>
            <MenuTitle textTitle='Blog'/>
            <MenuTitle textTitle='Contact'/>
        </ImageTitlesColumn>
    )
}


export default SlidingMenu;
