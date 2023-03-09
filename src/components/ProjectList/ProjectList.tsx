import { imagePathConfig } from "../common/contants";
import MenuTitle from "../MenuTitle/MenuTitle";
import {
    FullProjPadding,
    HoverDetails,
    HoverPadding,
    ProjectImage,
    ProjectItem,
    Title
} from "./ProjectList.styles";

interface Project {
    image: string,
    company: string,
    companydesc: string,
    id: string
}

interface Props {
    project: Project
}

const ProjectList = ({ project }: Props) => {

    return (
        <ProjectItem key={project.id}>
            <ProjectImage src={project.image}
                srcSet={`${project.image}${imagePathConfig}`}
                alt={'img' + project.company} />
            <HoverDetails>
                <HoverPadding>
                    <Title> {project.company} </Title>
                    {project.companydesc}
                </HoverPadding>
                <FullProjPadding>
                    <MenuTitle textTitle='Full project' />
                </FullProjPadding>
            </HoverDetails>
        </ProjectItem>
    )
}


export default ProjectList;
