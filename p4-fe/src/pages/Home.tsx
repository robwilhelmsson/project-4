
import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography, Button } from '@mui/material';



const homeStyles = {
    title: {
        color: '#e4f4f2',
        fontFamily: 'Bitter',
        fontWeight: '600',
        fontSize: '50px',
        letterSpacing: '4px',
        lineHeight: '50px'
    },
    author: {
        fontFamily: 'Bitter',
        fontWeight: '500',
        fontSize: '25px',
        color: '#2c4e48',
        paddingBottom: '45px'
    },
    text: {
        fontFamily: 'Bitter',
        fontWeight: '400',
        color: '#2c4e48',
        paddingBottom: '45px'
    },
    card: {
        backgroundColor: '#e6c764',
        padding: '50px',
        minHeight: '350px',
        borderRadius: '20px',
        boxShadow: '3px 5px 15px #000000',
        marginTop: '40px'
    },
    btn: {
        fontFamily: 'Raleway',
        fontWeight: '300',
        color: '#e4f4f2',
        borderRadius: 0
    }
}



function Home() {
    const [quote, setQuote] = React.useState({
        content: '',
        author: '',
    })


    async function fetchQuote() {
        const res = await fetch("https://api.quotable.io/random")
        const data = await res.json()
        setQuote(data)
    }
    React.useEffect(() => {
        fetchQuote()
    }, [])
    const handleClick = () => {
        fetchQuote()
    }

    return (
        <Container maxWidth='xs'>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography style={homeStyles.title}>
                    one time
                </Typography>
                <Typography style={homeStyles.title}>
                    thort
                </Typography>
            </Box>
            <Box style={homeStyles.card} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ flexGrow: 5 }}>
                    <Typography style={homeStyles.author}>
                        {quote.author}
                    </Typography>
                    <Typography style={homeStyles.text}>
                        {quote.content}
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Button onClick={handleClick} variant='contained' style={homeStyles.btn} disableElevation>
                        ANOTHER THORT
                    </Button>
                </Box>
            </Box>
        </Container>
    );

}
export default Home