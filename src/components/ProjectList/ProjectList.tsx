import { ImageListItem } from "@mui/material";
import styled from "styled-components";
import MenuTitle from "../MenuTitle/MenuTitle";

interface Project {
    image: string,
    company: string,
    companydesc: string,
    id: string,
}

interface Props {
    project: Project
}

const ProjectList = ({ project }: Props) => {

    return (
        <ProjectItem key={project.id}>

            <img style={{borderRadius:10}} src={project.image}
                srcSet={`${project.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={'img' + project.company}
            />
            <HoverDetails>
                <HoverPadding>
                    <Title>
                        {project.company}
                    </Title>
                    {project.companydesc}
                </HoverPadding>
                <FullProjPadding>
                    <MenuTitle textTitle='Full project' />
                </FullProjPadding>
            </HoverDetails>

        </ProjectItem>
    )
}


const HoverPadding = styled.div`
    padding:20px;
`
const Title = styled.h4`
    margin-bottom:5px;
`
const FullProjPadding = styled.div`
    padding-bottom:20px;
`
const HoverDetails = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    color:white;
    position:absolute;
    z-index: 10;
    bottom:0px;
    cursor: pointer;
    opacity:0;
    transition: opacity 500ms;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
`
const ProjectItem = styled(ImageListItem)`
    display:flex;
    &:hover ${HoverDetails} {
        opacity:1;
    }
`
// const ProjectItem = styled.div`
//     display:flex;
//     &:hover ${HoverDetails} {
//         opacity:1;
//     }
// `
export default ProjectList;