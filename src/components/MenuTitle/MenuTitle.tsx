import { TitleBox } from "./MenuTitle.styles";

interface Props {
    textTitle: string
}

const MenuTitle = ({ textTitle }: Props) => {

    return (
        <TitleBox> {textTitle} </TitleBox>
    )
}


export default MenuTitle;