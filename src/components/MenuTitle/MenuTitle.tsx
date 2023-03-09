import styled from "styled-components";
import {TitleBox} from "./MenuTitleCSS";

interface Props {
    textTitle: string
}

const MenuTitle = ({textTitle} : Props) => {

    return (
        <TitleBox> {textTitle} </TitleBox>
    )
}


export default MenuTitle;
