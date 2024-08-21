import { Box, Grid } from "@mui/material";

export default function Sales () {
    return (
        <Box sx={{
            
            backgroundColor: 'white',
            borderRadius: '15px',
            '@media (max-width:900px)': {
                padding: '10px',
                alignItems: 'center',
                margin: '10px auto',
                width: '90%'
            },

            '@media (min-width:900px)': {
                width: '600px',
                height: '250px'
            },
        }}>
            <Box
                component='header'
                sx={{
                    textAlign: 'left',
                    margin: '5px 0 10px 15px'
                }}
                >
                    <h3>Today’s Sales</h3>
                    <p>Sales Summery</p>
            </Box>
            <Grid  sx={{padding: '5px', textAlign: 'center'}} container spacing={1}>
                <Grid item xs={6} md={3}>
                    <Box
                        component="img"
                        src="../src/assets/sales_1.png"
                        sx={{
                            '@media (max-width:900px)': {
                                width: '140px'
                            },
                            '@media (min-width:900px)': {
                                width: '130px'
                            },
                        }} >
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box
                        component="img"
                        src="../src/assets/sales_2.png"
                        sx={{
                            '@media (max-width:900px)': {
                                width: '140px'
                            },
                            '@media (min-width:900px)': {
                                width: '130px'
                            },
                        }} >
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box
                        component="img"
                        src="../src/assets/sales_3.png"
                        sx={{
                            '@media (max-width:900px)': {
                                width: '140px'
                            },
                            '@media (min-width:900px)': {
                                width: '130px'
                            },
                        }} >
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box
                        component="img"
                        src="../src/assets/sales_4.png"
                        sx={{
                            '@media (max-width:900px)': {
                                width: '140px'
                            },
                            '@media (min-width:900px)': {
                                width: '130px'
                            },
                        }} >
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}