import {ImageListItem} from "@mui/material";
import styled from "styled-components";
import MenuTitle from "../MenuTitle/MenuTitle";
import {
    FullProjPadding,
    HoverDetails,
    HoverPadding,
    ProjectItem,
    Title
} from "./ProjectListCSS";

interface Project {
    image: string,
    company: string,
    companydesc: string,
    id: string
}

interface Props {
    project: Project
}

const ProjectList = ({project} : Props) => {

    return (
        <ProjectItem key={
            project.id
        }>

            <img style={
                    {borderRadius: 10}
                }
                src={
                    project.image
                }
                srcSet={
                    `${
                        project.image
                    }?w=248&fit=crop&auto=format&dpr=2 2x`
                }
                alt={
                    'img' + project.company
                }/>
            <HoverDetails>
                <HoverPadding>
                    <Title> {
                        project.company
                    } </Title>
                    {
                    project.companydesc
                } </HoverPadding>
                <FullProjPadding>
                    <MenuTitle textTitle='Full project'/>
                </FullProjPadding>
            </HoverDetails>

        </ProjectItem>
    )
}


export default ProjectList;
