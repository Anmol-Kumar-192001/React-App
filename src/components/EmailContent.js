import React from 'react'
import { Box, Toolbar, Typography } from '@mui/material'

const drawerWidth = 240;
const EmailContent = () => {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },marginTop:-12 }}
        >
            <Toolbar />
            <Typography paragraph>
                The aim of this project is to produce age - appropriate non - fiction books for children from birth to age 12. These books are richly illustrated with photographs, diagrams, sketches, and original drawings.Wikijunior books are produced by a worldwide community of writers, teachers, students, and young people all working together.The books present factual information that is verifiable.You are invited to join in and write, edit, and rewrite each book and chapter to improve its content.Our books are distributed free of charge under the terms of the Creative Commons Attribution - ShareAlike License.

            </Typography>
            <Typography paragraph>
                Pesto is a sauce that originates in the city of Genoa in the Liguria region of northern Italy(pesto alla genovese).It can be used as a sauce for pasta or meat, or can be used as an ingredient in a variety of dishes.One classic use is to spread the pesto onto slices of bread which are then toasted.
            </Typography>
        </Box>
    )
}

export default EmailContent


