import { Box } from "@mui/material";
import { Input } from "../components/input/Input";
import ButtonLogin from "../components/button/ButtonLogin";


export default function Login() {
    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
            width: 'auto',
            '@media (max-width:900px)': {
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                paddingTop: '3em',
                background: 'linear-gradient(45deg, rgb(2, 106, 162) 0%, rgb(17, 17, 17) 98%);'
            },

            '@media (min-width:900px)': {
                backgroundColor: '#0f2d3d',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            },
        }}>
            <Box sx={{
                '@media (min-width:900px)': {
                display: 'flex',
                flexDirection:'column',
                width: '50%',
                padding: '50px 150px ',
                justifyContent: 'center',
                alignItems: 'center'
            },
            }}>
                <Box
                    component="img"
                    src="../src/assets/logo-vertical.svg"
                    sx={{  width: '200px', margin:'10px auto 50px auto', display: { xs: 'block', md: 'none' },}} >
                </Box>
                <Box
                    component="label"
                    sx={{  
                        display: { xs: 'none', sm: 'block' },
                        color: 'white',
                        position: 'relative', right: '150px'
                        }} >
                    Email
                </Box>
                <Input
                    labelType=""
                    inputType="text"
                    placeholderText="  Email"
                    largura="330"
                    spaceBottom="10"
                />
                <Box
                    component="label"
                    sx={{  
                        display: { xs: 'none', sm: 'block' },
                        color: 'white',
                        marginTop: '10px',
                        position: 'relative', right: '135px'
                        }} >
                    Password
                </Box>
                <Input
                    labelType=""
                    inputType="password"
                    placeholderText="   Password"
                    largura="330"
                    spaceBottom="75"
                />
                <ButtonLogin />
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    alignItems: 'center',
                    width: '100%',
                    margin: '50px 0 30px 0'
                }} >
                    <div style={{ borderBottom: '0.1px solid #ffffff', }}></div>
                    <span style={{
                        padding: '0 10px',
                        color: '#ffffff'
                    }}>or</span>
                    <div style={{ borderBottom: '0.1px solid #ffffff', }}></div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '35%',
                    margin: '1px auto 35px auto'
                }}>
                    <div style={{ alignContent: 'center', textAlign: 'center', width: '50px', height: '50px', border: 'solid 2px white', borderRadius: '100%' }}><img style={{ width: '35px', marginTop: '3px' }} src="../src/assets/gmail_icon.png" /></div>
                    <div style={{ alignContent: 'center', textAlign: 'center', width: '50px', height: '50px', border: 'solid 2px white', borderRadius: '100%' }}><img style={{ width: '35px', marginTop: '3px' }} src="../src/assets/fc_icon.png" /></div>
                </div>
                <p style={{ color: '#ffffff' }}>Don't have an account? <a style={{ fontWeight: 'bold' }}>Sign up</a></p>
            </Box>
            <Box sx={{
                display: { xs: 'none', sm: 'block' },
                width: '50%',
                height: '100vh',
                background: 'linear-gradient(45deg, rgb(2, 106, 162) 0%, rgb(17, 17, 17) 98%);',
                borderRadius: '0 0 0 80px',
                alignContent: 'center',
                textAlign: 'center',
                paddingBottom: '100px'
            }}>
                <img style={{ width: '300px', marginBottom: '65px' }} src="../src/assets/logo.svg" />
                <h1 style={{fontSize: '38px', color: 'white', position: 'relative', right: '25px' }}>Work</h1>
                <h1 style={{fontSize: '38px', color: 'white', margin: '8px 0 60px 0'  }}>Smartly.</h1>
                <p style={{fontSize: '20px', color: 'white'}}>Explore global importers, exporters and market trends</p>
            </Box>
        </Box>
    )
}