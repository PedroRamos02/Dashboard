import { Box, TextField } from "@mui/material";
import MobileAppBar from "../components/appBar/MobileAppBar";
import Sales from "../components/sections/Sales";
import { ButtonPages } from "../components/buttonPages/ButtonPages";

export default function Home () {
    return (
        <Box sx={{
            display: 'flex',
            width: 'auto',
            background: '#ECECEC',
            '@media (max-width:900px)': {
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                height: '1500px'
            },

            '@media (min-width:900px)': {
                display: 'flex',
                flexDirection:'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            },
        }}>
            <Box sx={{
                display: { xs: 'none', md: 'block' },
                backgroundColor: 'white',
                height: '100vh',
                width: '15%',
                flexDirection: 'column',
                paddingTop: '20px',
                textAlign: 'center',
                alignItems: 'center'
            }}
            >   
                <img style={{
                    background: '#1976D2',
                    width: '150px',
                    padding: '8px',
                    borderRadius: '7px',
                    marginBottom: '30px'
                }} src="../src/assets/logo.svg"></img>
                <ButtonPages 
                    iconPage="../src/assets/Graph.png"
                    namePage="Dashboard"
                />
                <ButtonPages 
                    iconPage="../src/assets/shop.png"
                    namePage="Order"
                />
                <ButtonPages 
                    iconPage="../src/assets/mensage.png"
                    namePage="Messages"
                />
                <ButtonPages 
                    iconPage="../src/assets/config_icon.png"
                    namePage="Settings"
                />
                <ButtonPages 
                    iconPage="../src/assets/logout.png"
                    namePage="Sign Out"
                />
            </Box>
            <Box sx={{
                height:'100vh',
                '@media (max-width:900px)': {
                    width: '100%'
                },
    
                '@media (min-width:900px)': {
                    width: '85%',
                },
            }}>
                <Box
                component='header'
                sx={{
                    height: '64px',
                    width: '100%',
                    display: 'flex',
                    
                    '@media (max-width:900px)': {
                        backgroundColor: '#0f2d3d',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1px 15px'
                },

                    '@media (min-width:900px)':{
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1px 15px'
            },
                }}
                >
                    <Box
                        component='h1'
                        sx={{
                            '@media (max-width:900px)':{
                                color: 'white'
                            },
                            '@media (min-width:900px)':{
                                color: 'black'
                            }
                        }}>
                            Dashboard
                    </Box>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '80%',
                            display: { xs: 'none', sm: 'block'}
                          }}
                        >
                          <TextField fullWidth label="Search" id="Search" />
                    </Box>
                    <img style={{borderRadius: '100px', width: '40px', height: '40px', backgroundColor: 'white'}} src="../src/assets/user.svg" />
                </Box>
                <Box sx={{
                    '@media (max-width:900px)':{
                        height: '1350px',
                    },
                    '@media (min-width:900px)':{
                        margin: '30px',
                        flexWrap: 'wrap',
                        display: 'flex',
                        alignItems: 'initial'
                    }
                }}>
                    <Sales />
                    <Box
                        component='img'
                        src="../src/assets/graph2.svg"
                        sx={{
                            '@media (max-width:900px)':{
                                width: '90%'
                            },
                            '@media (min-width:900px)':{
                                width: '40%',
                                marginLeft: '30px',
                                height: '254px'
                            }
                        }}
                    >
                    </Box>
                    <Box
                        component='img'
                        src="../src/assets/graph3.svg"
                        sx={{
                            '@media (max-width:900px)':{
                                width: '90%'
                            },
                            '@media (min-width:900px)':{
                                width: '25%',
                                height: '300px'
                            }
                        }}
                    >
                    </Box>
                    <Box
                        component='img'
                        src="../src/assets/graph4.svg"
                        sx={{
                            '@media (max-width:900px)':{
                                width: '90%'
                            },
                            '@media (min-width:900px)':{
                                width: '25%',
                                height: '300px',
                                marginLeft: '30px'
                            }
                        }}
                    >
                    </Box>
                </Box>
                    <Box sx={{
                        display: { xs: 'block', md: 'none' }
                        }}>
                        <MobileAppBar />
                    </Box>
            </Box>
        </Box>
    )
}