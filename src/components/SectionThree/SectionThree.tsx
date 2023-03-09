
import { createTheme, ImageList, Tab, Tabs, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';
import { primaryColour } from '../common/contants';
import { Headline, HeadlineGrey, TitleSectionText as SectionText } from '../common/styles';
import MenuTitleStatic from '../MenuTitle/MenuTitleStatic';
import ProjectList from '../ProjectList/ProjectList';



const SectionThree = () => {
    const projects = useAppSelector((state) => state.companies.projects).slice(0, 15)
    const { scrollRef } = useSnapCarousel();
    const [tabSelect, setTabSelect] = useState(0)
    const handleChange = (eventItem: any, val: number) => {
        setTabSelect(val)
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: primaryColour
            },
            secondary: {
                light: '#0066ff',
                main: '#000000',
                // dark: will be calculated from palette.secondary.main,
                contrastText: '#ffcc00',
            },
        }
    })

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
                <ThemeProvider theme={theme}>
                    <Box sx={{ borderBottom: 1, borderColor: 'grey' }}>
                        <Tabs value={tabSelect} onChange={handleChange}
                            textColor='secondary'
                            indicatorColor='primary'
                        // TabIndicatorProps={{
                        //     style: {
                        //         accentColor:'black',
                        //         backgroundColor: primaryColour,
                        //         textEmphasisColor:'black'

                        //     }
                        // }} 
                        >
                            <Tab label="All" />
                            <Tab label="Branding" />
                            <Tab label="Web Design" />
                            <Tab label="Digital Marketing" />
                        </Tabs>
                    </Box>
                </ThemeProvider>
            </SectionText>


            <ImageList
                ref={scrollRef}
                style={{ margin: '10%', display: 'flex', flexDirection: "row" }}

                variant="quilted"
                cols={4}
                rowHeight={300}

            >
                {projects.map((project) => (
                    <ProjectList project={project} />
                ))}

            </ImageList>



            <SectionText>
                <MenuTitleStatic underlined={true} textColour='black' underlineColour={primaryColour} textTitle="See all work" />
            </SectionText>

        </Background >


    )
}
const Background = styled.div`
    background-color:white;
`


export default SectionThree;