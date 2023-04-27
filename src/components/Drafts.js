import React from 'react'
import { Box, Toolbar, Typography } from '@mui/material'

const drawerWidth = 240;

const Drafts = () => {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`,marginTop:-12 } }}
        >
            <Toolbar />
            <Typography paragraph>
                A concern in times of strife shared among many Americans is the reinstatement of the draft. The general Selective Service draft could draft, in normal active operation, men between the ages of 18 and 25, starting at age 20 (up to 25, then down to 18). An additional healthcare draft could draft healthcare workers into military service from ages 20 to 44 normally, possibly up to 55. While both drafts currently only apply to men, if reinstated, the healthcare draft would very likely include women due to the major role women now play in the modern healthcare industry. Congressional action has the potential to also modify the general draft to select women as well.
            </Typography>
            <Typography paragraph>
                Many people, due to varying reasons of conviction, would find their participation in a particular military action, or any military action, to be immoral, yet have registered with the Selective Service System. Conscientious objection has long been recognized by the government, but seldom respected. Conscientious objectors have been ostracized, fined, jailed, pressed into service, denied any clothing in response to refusal to wear a uniform, and even used as human guinea pigs for alternative service (WWII). While the system has slowly become more tolerant, the burden of evidence and standards for conscientious objection are still extremely high. Hardship deferments are not treated as harshly, but the standards tend to still be quite strict. Various other types of claims can be made as well, from essentiality of occupation to ministerial deferments.
            </Typography>
        </Box>
    )
}

export default Drafts