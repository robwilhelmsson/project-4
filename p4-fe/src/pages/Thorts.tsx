import * as React from 'react';
import axios from 'axios';
import { Box, Paper, Container, TextField, InputAdornment, useMediaQuery, Typography, Divider } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { Search } from '@mui/icons-material';
import { styled, createTheme } from '@mui/material/styles';
import '@mui/lab/themeAugmentation';

import { CSSProperties } from 'react';

import { IQuote } from '../interface/quote';
import { display, fontFamily } from '@mui/system';


// const theme = createTheme({
//     components: {
//         MuiTimeline: {
//             styleOverrides: {
//                 root: {
//                     backgroundColor: 'red',
//                 },
//             },
//         },
//     },
// });


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(0.5),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

function randomNum() {
    return Math.floor(Math.random() * 103)
}

function Thorts() {
    const [quotes, setQuotes] = React.useState<Array<IQuote>>([])
    const [searchQuery, setSearchQuery] = React.useState('');
    const [quotesByAuth, setQuotesByAuth] = React.useState<Array<IQuote>>([])

    const mobile = useMediaQuery('(max-width:750px)')
    const mobileLimit = mobile ? 10 : 20

    React.useEffect(() => {
        async function fetchRandomQuotes() {
            const res = await fetch(`https://api.quotable.io/quotes?page=${randomNum()}&limit=${mobileLimit}`)
            const data = await res.json()
            setQuotes(data.results)
        }
        fetchRandomQuotes()
    }, [])

    const handleSearch = async (event: any) => {
        event.preventDefault();
        const response = await axios.get(`https://api.quotable.io/search/authors?query=${searchQuery}`);
        const author = response.data.results[0];
        const quotesResponse = await axios.get(`https://api.quotable.io/quotes?author=${author.slug}&limit=${mobileLimit}`);
        setQuotesByAuth(quotesResponse.data.results);
    };

    const ThortStyles = {
        search: {
            marginBottom: '20px',
        },
        formStyle: {
            display: 'flex',
            flexDirection: 'column' as 'column',
            alignItems: 'center',
        } as CSSProperties,
        box: {
            backgroundColor: '#e6c764',
            borderRadius: '3px',
            padding: '5px'
        },
        content: {
            fontSize: '12px'
        },
        author: {
            fontSize: '10px'
        }
    }
    return (
        <Container maxWidth='xl'>
            <form onSubmit={handleSearch} style={ThortStyles.formStyle}>
                <TextField
                    label="Search Authors"
                    variant="outlined"
                    size="small"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    InputProps={{
                    }}
                    sx={{ ...ThortStyles.search }}
                />
                {quotesByAuth.length > 0 && (
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Masonry columns={{ lg: 4 }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                            {quotesByAuth.map((quote) => (
                                <Box key={quote._id} sx={{ ...ThortStyles.box }}>
                                    <Typography sx={{ ...ThortStyles.content }}>{quote.content}</Typography>
                                    <Divider variant="middle" sx={{ color: 'black', m: '4px' }} />
                                    <Typography sx={{ ...ThortStyles.author }}>{quote.author}</Typography>
                                </Box>
                            ))}
                        </Masonry>
                    </Box>
                )}
                {quotesByAuth.length === 0 && (
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Masonry columns={{ xs: 1, sm: 3, md: 4 }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                            {quotes.map((quote) => (
                                <Box key={quote._id} sx={{ ...ThortStyles.box }}>
                                    <Typography sx={{ ...ThortStyles.content }}>{quote.content}</Typography>
                                    <Divider variant="middle" sx={{ color: 'black', m: '4px' }} />
                                    <Typography sx={{ ...ThortStyles.author }}>{quote.author}</Typography>
                                </Box>
                            ))}
                        </Masonry>
                    </Box>
                )}
            </form>
        </Container >
    )



}
export default Thorts