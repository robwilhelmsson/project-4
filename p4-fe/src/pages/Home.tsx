import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled, createTheme } from '@mui/material/styles';
import '@mui/lab/themeAugmentation';

// import backgroundImage from '../images/backgroundImage.png'
import { IQuote } from '../interface/quote';


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


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Home() {
    const [quotes, setQuotes] = React.useState<Array<IQuote>>([])

    React.useEffect(() => {
        async function fetchQuotes() {
            const res = await fetch("https://api.quotable.io/quotes?minLength=80&maxLength=120")
            const data = await res.json()
            setQuotes(data.results)
        }
        fetchQuotes()
    }, [])

    return (
        <Box sx={{ width: 800, minHeight: 377 }}>
            <Masonry columns={4} spacing={{ xs: 1, sm: 2, md: 3 }}>
                {quotes.map((quote) => (
                    <Item key={quote._id} sx={{ height: quote.length + 10}}>
                        {quote.content}
                        {quote.author}
                    </Item>
                ))}
            </Masonry>
        </Box>
    );

}
export default Home