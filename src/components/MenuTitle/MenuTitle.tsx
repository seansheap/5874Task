import styled from "styled-components";

interface Props {
    textTitle: string,
}

const MenuTitle = ({ textTitle,   }: Props) => {

    return (
        <TitleBox >
            {textTitle}
        </TitleBox>
    )
}

const TitleBox = styled.div`
    cursor: pointer;
    display: inline-block;
    position: relative;
    padding: 10px;
    margin: 0 10px;
    font-weight: 600;
    border-bottom: 2px solid rgba(0, 0, 0, 0);

    &:hover:after {
        width: 100%;
        left: 0;
    }
     &:after {
     content: '';
     position: absolute;
     width: 0; 
     height: 2px;
     display: block;
     margin-top: 10px;
     right: 0;
     background: white;
     transition: width .5s ease;
    }

}
`





export default MenuTitle;