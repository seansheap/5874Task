import { fetchProjectInfo } from '../../features/projects/projects'
import { useAppDispatch } from '../../redux/hooks';
import Header from '../Header/Header';
import SectionOne from '../SectionOne/SectionOne';
import SectionThree from '../SectionThree/SectionThree';
import SectionTwo from '../SectionTwo/SectionTwo';

const Main = () => {

    const dispatch = useAppDispatch()
    dispatch(fetchProjectInfo())

    return (
        <div style={
            { paddingBottom: 500 }
        }>
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </div>
    )
}


export default Main;
