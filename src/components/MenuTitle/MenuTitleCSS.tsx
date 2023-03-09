import styled from "styled-components";

export const TitleBox = styled.div `
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

export const Underline = styled.hr `
    border-top: 2px solid;
    visibility:hidden;
`
export const TitleBoxBasic = styled.div `
    cursor: pointer;
    &:hover ${Underline}{
        visibility:visible;
    }
`