import { ImageList, Tab, Tabs, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useAppSelector } from '../../redux/hooks';
import { primaryColour } from '../common/contants';
import { Headline, HeadlineGrey, TitleSectionText as SectionText } from '../common/styles';
import MenuTitleStatic from '../MenuTitle/MenuTitleStatic';
import ProjectList from '../ProjectList/ProjectList';
import {
    Background,
    CarousalContainer,
    CarousalNav,
    CarousalNavContainer,
    FootContainer,
    TabTheme
} from './SectionThree.styles';


const SectionThree = () => {
    const projects = useAppSelector((state) => state.companies.projects)
    const [imagePosition, setImagePosition] = useState(0)
    const [tabSelect, setTabSelect] = useState(0)
    const visibleProject = projects.slice(imagePosition, imagePosition + 6)

    const handleChange = (eventItem: any, val: number) => {
        setTabSelect(val)
    }
    const handleSelctionIncrease = () => {
        imagePosition + 6 < projects.length ? setImagePosition(imagePosition + 6) : setImagePosition(0)
    }
    const handleSelctionDecrease = () => {
        imagePosition !== 0 ? setImagePosition(imagePosition - 6) : setImagePosition(projects.length - 6)
    }


    return (
        <Background>
            <SectionText>
                <p>
                    <Headline>
                        Some of our
                    </Headline>
                    <HeadlineGrey>
                        recent projects
                    </HeadlineGrey>
                </p>
                <ThemeProvider theme={TabTheme}>
                    <Box sx={
                        {
                            borderBottom: 1,
                            borderColor: '#506473'
                        }
                    }>
                        <Tabs value={tabSelect}
                            onChange={handleChange}
                            textColor='secondary'
                            indicatorColor='primary'>
                            <Tab label="All" />
                            <Tab label="Branding" />
                            <Tab label="Web Design" />
                            <Tab label="Digital Marketing" />
                        </Tabs>
                    </Box>
                </ThemeProvider>
            </SectionText>

            <CarousalContainer>
                <Carousel autoPlay={false}
                    animation='slide'
                    next={handleSelctionIncrease}
                    prev={handleSelctionDecrease}>
                    <ImageList variant="quilted"
                        cols={3}
                        rowHeight={300}>
                        {
                            visibleProject.map((project) => (
                                <ProjectList project={project} />
                            ))
                        } </ImageList>
                </Carousel>

            </CarousalContainer>

            <FootContainer>
                <SectionText>
                    <MenuTitleStatic underlined={true}
                        textColour='black'
                        underlineColour={primaryColour}
                        textTitle="See all work" />
                </SectionText>
                <CarousalNavContainer>
                    <CarousalNav onClick={handleSelctionDecrease}>
                        {'<'} </CarousalNav>
                    <CarousalNav onClick={handleSelctionIncrease}>
                        {'>'} </CarousalNav>
                </CarousalNavContainer>

            </FootContainer>

        </Background>
    )
}

export default SectionThree;
