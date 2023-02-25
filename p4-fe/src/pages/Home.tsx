
import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography, Button } from '@mui/material';

import { HomeStyles } from './HomeStyles';


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
                <Typography style={HomeStyles.title}>
                    one time
                </Typography>
                <Typography style={HomeStyles.title}>
                    thort
                </Typography>
            </Box>
            <Box style={HomeStyles.card} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ flexGrow: 5 }}>
                    <Typography style={HomeStyles.author}>
                        {quote.author}
                    </Typography>
                    <Typography style={HomeStyles.text}>
                        {quote.content}
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Button onClick={handleClick} variant='contained' style={HomeStyles.btn} disableElevation>
                        ANOTHER THORT
                    </Button>
                </Box>
            </Box>
        </Container>
    );

}
export default Home