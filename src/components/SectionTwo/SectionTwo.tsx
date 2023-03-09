import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { primaryColour } from '../common/contants';
import { Headline, HeadlineGrey, LeftSection, LeftSectionText } from '../common/styles';
import MenuTitleStatic from '../MenuTitle/MenuTitleStatic';
import Process from '../ProcessButton/ProcessButton';
import ProcessMenu from '../ProcessMenu/ProcessMenu';
import { Background, RightSection } from './SectionTwo.styles';

const SectionTwo = () => {

    return (
        <Background>
            <Grid container

                rowSpacing={0}
                columnSpacing={0}
                columns={12}>

                <Box item
                    component={Grid}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}>
                    <LeftSection>
                        <LeftSectionText>
                            <p>
                                <Headline>
                                    What are
                                </Headline>
                                <HeadlineGrey>
                                    we capable of
                                </HeadlineGrey>
                            </p>
                            <p>
                                By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.
                            </p>
                            <p>
                                <MenuTitleStatic underlined={true}
                                    textColour='black'
                                    underlineColour={primaryColour}
                                    textTitle='Our process' />
                            </p>
                        </LeftSectionText>
                    </LeftSection>
                </Box>

                <Box item
                    component={Grid}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}>

                    <RightSection container
                        rowSpacing={0}
                        columnSpacing={0}
                        columns={6}>

                        <ProcessMenu title='BRAND'>
                            <Process text='Brand Strategy' />
                            <Process text='Logo & Name' />
                            <Process text='Identity & Collateral' />
                        </ProcessMenu>


                        <ProcessMenu title='DEVELOPMENT'>
                            <Process text='Web Development' />
                            <Process text='Mobile Apps' />
                        </ProcessMenu>


                        <ProcessMenu title='MARKETING'>
                            <Process text='Digital' />
                            <Process text='Market Research' />
                        </ProcessMenu>
                    </RightSection>

                </Box>
            </Grid>
        </Background>


    )
}


export default SectionTwo;
