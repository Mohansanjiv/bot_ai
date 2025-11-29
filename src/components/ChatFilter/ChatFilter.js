import { Box, Select, MenuItem, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

export default function ChatFilter({ allChats, filterChats }) {

    const [option, setOption] = useState('All Ratings')

    const handleChange = (e) => {
        setOption(e.target.value)
    }

    useEffect(() => {
        if (option === 'All Ratings') {
            filterChats(allChats)
        } else {
            const filtered = allChats.filter(item =>
                item.chat.some(ch => ch.rating == option)
            )
            filterChats(filtered)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [option, allChats])


    return (
        <Box mb={3}>
            <Typography fontSize={12} mb={0.5}>Filter by rating</Typography>

            <Select
                value={option}
                onChange={handleChange}
                size="small"
                sx={{ minWidth: { xs: '100%', md: 160 } }}
            >
                <MenuItem value="All Ratings">All Ratings</MenuItem>
                {[1, 2, 3, 4, 5].map(r => (
                    <MenuItem key={r} value={r}>{r} Star{r > 1 ? 's' : ''}</MenuItem>
                ))}
            </Select>
        </Box>
    )
}
