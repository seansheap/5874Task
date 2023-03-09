import Grid from '@mui/material/Grid';
import {Box} from '@mui/system';
import {primaryColour} from '../common/contants';
import {Headline, HeadlineGrey, LeftSection, LeftSectionText} from '../common/styles';
import MenuTitleStatic from '../MenuTitle/MenuTitleStatic';
import {
    Background,
    HideableRightSection,
    MainImage,
    RightSection,
    Tagline
} from './SectionOneCSS';


const SectionOne = () => {

    return (
        <Background>

            <Grid container

                rowSpacing={20}
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
                                <Tagline>
                                    BRAND, DEV, ECOM, MARKETING
                                </Tagline>
                            </p>
                            <p>
                                <Headline>
                                    We unleash
                                </Headline>
                                <HeadlineGrey>
                                    buisiness potential
                                </HeadlineGrey>
                            </p>
                            <p>
                                We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.
                            </p>

                            <p>
                                <MenuTitleStatic underlined={true}
                                    textColour='black'
                                    underlineColour={primaryColour}
                                    textTitle="Let's talk"/>
                            </p>
                        </LeftSectionText>

                    </LeftSection>
                </Box>

                <HideableRightSection component={Grid}>
                    <RightSection>
                        <MainImage src={
                                require('../../images/Spaniel01_gradient@2x.png')
                            }
                            alt='mainImg'/>
                    </RightSection>
                </HideableRightSection>

            </Grid>

        </Background>


    )
}


export default SectionOne;
