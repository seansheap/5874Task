import styled from "styled-components";

interface Props {
    textColour: string,
    underlineColour: string,
    textTitle: string,
    underlined?: boolean
}

const MenuTitleStatic = ({ textTitle, underlined, textColour, underlineColour }: Props) => {

    return (
        <TitleBox style={{ color: textColour, fontWeight:600 }}>
            {textTitle}
            <Underline style={{ color: underlineColour, visibility:underlined===true?'visible':'hidden'}} />
        </TitleBox>
    )
}

const Underline = styled.hr`
    border-top: 2px solid;
    visibility:hidden;
`
const TitleBox = styled.div`
    cursor: pointer;
    &:hover ${Underline}{
        visibility:visible;
    }
`



export default MenuTitleStatic;