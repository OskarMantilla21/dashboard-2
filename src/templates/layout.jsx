import Grid from '@mui/material/Unstable_Grid2';
import {Box, CssBaseline} from '@mui/material';


function Layout() {
    return (
        <Box style={{display: "flex", height: "100vh"}}>
            <CssBaseline />
            <Grid container sx={{flexGrow: 1}}>
                <Grid item flexBasis={70}>
                    MENU
                </Grid>
                <Grid item flex={1}>
                    <Grid xs={12}>HEADER</Grid>
                    <Grid xs={12}>BRANDING</Grid>
                    <Grid container spacing={3}>
                        <Grid xs={3}>PKI</Grid>
                        <Grid xs={3}>PKI</Grid>
                        <Grid xs={3}>PKI</Grid>
                        <Grid xs={3}>PKI</Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid xs={4}>CONTAINER 1</Grid>
                        <Grid xs={4}>CONTAINER 2</Grid>
                        <Grid xs={4}>CONTAINER 3</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Layout;