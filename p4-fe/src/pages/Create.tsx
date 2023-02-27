
import * as React from 'react';
import { Box, Container, Typography, Button, TextField } from '@mui/material';


function Create() {

    const CreateStyles = {
        textField: {
            width: 'inherit',
            marginBottom: '10px'
        },
        titlebox: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        title: {
            color: '#e4f4f2',
            fontFamily: 'Bitter',
            fontWeight: '600',
            fontSize: '50px',
            letterSpacing: '4px',
            lineHeight: '50px'
        },
        card: {
            backgroundColor: '#e6c764',
            padding: '30px',
            borderRadius: '20px',
            boxShadow: '3px 5px 15px #254741',
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'column'
        },
        btn: {
            fontFamily: 'Raleway',
            fontWeight: '300',
            color: '#e4f4f2',
            borderRadius: '3px'
        },
    }

    return (
        <Container maxWidth='xs'>
            <Box sx={{ ...CreateStyles.titlebox }}>
                <Typography sx={{ ...CreateStyles.title }}>
                    create your
                </Typography>
                <Typography sx={{ ...CreateStyles.title }}>
                    thort
                </Typography>
            </Box>
            <Box sx={{ ...CreateStyles.card }}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Author"
                    multiline
                    maxRows={4}
                    sx={{ ...CreateStyles.textField }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Thort"
                    multiline
                    rows={4}
                    sx={{ ...CreateStyles.textField }}
                />
                <Button 
                    variant='contained' 
                    style={CreateStyles.btn} 
                    disableElevation
                    >
                    ADD TO DATABASE
                </Button>
            </Box>
        </Container>
    );

}
export default Create