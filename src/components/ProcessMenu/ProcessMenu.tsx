import { Box, Grid } from "@mui/material";

interface Props {
    title: string;
    children: any[];

}

const ProcessMenu = ({ title, children }: Props) => {

    return (
        <Box
            item
            component={Grid}
            xs={6}
            sm={6}
            md={6}
            lg={3}
            xl={3}>

            <h3>
                {title}
            </h3>

            {children}
        </Box>
    )
}

export default ProcessMenu;