import { Box, Button } from "@mui/material";

interface ButtonConfig {
    iconPage: string;
    namePage: string
}

export const ButtonPages: React.FC<ButtonConfig> = ({iconPage, namePage}) => {
    return (
        <Button
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 20px',
                borderRadius: '10px',
                backgroundColor: 'white',
                margin:'5px',
                marginBottom:'15px',
                color: '#737791',
                '&:hover': {
                    backgroundColor: '#5D5FEF',
                    color:'white'
                },
            }}
        >
            <Box
                component="img"
                src={iconPage}
                alt=""
                sx={{
                    width: '20px',
                    height: '20px',
                    marginRight: '10px',
                    color: '#737791',
                }}
            />
            {namePage}
        </Button>
    )
}