import {TitleBoxBasic, Underline} from "./MenuTitleCSS";

interface Props {
    textColour: string,
    underlineColour: string,
    textTitle: string,
    underlined?: boolean
}

const MenuTitleStatic = ({textTitle, underlined, textColour, underlineColour} : Props) => {

    return (
        <TitleBoxBasic style={
            {
                color: textColour,
                fontWeight: 600
            }
        }>
            {textTitle}
            <Underline style={
                {
                    color: underlineColour,
                    visibility: underlined === true ? 'visible' : 'hidden'
                }
            }/>
        </TitleBoxBasic>
    )
}


export default MenuTitleStatic;
