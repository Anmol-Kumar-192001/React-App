import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useScreenSize } from '../customHooks/screenSize/index';


const Item = styled(Typography)(({ theme,screen }) => ({
    fontSize: (screen === 'xs') ? '12px' : '15px',
  }));

export default function SubComment({ comment, level, reply, setReply }) {

    console.log('subcomments are', comment?.[level]);
    const [replyNo, setReplyNo] = useState(-1);
    const screen = useScreenSize();

    const showOnlyReply = (level) => {
        setReply(true)
        console.log('clicked');
        setReplyNo(level);
    }

    const backToComments = () => {
        setReply(false)
    }

    const ReplyComponent = ({ val, index }) => {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container >
                    <Grid item xs={12} md={12} sm={12} xl={12}>
                        <Card sx={{ marginLeft: 5 * (index + 1), marginRight: 2, borderLeft: '2px solid #502a74',overflow:'auto' }}>
                            {reply && (index === 0) && (level === replyNo) ? <Item screen={screen} sx={{ ml: '5px', fontWeight: 'bold', color: '#502a74', cursor: 'pointer' }} gutterBottom
                                onClick={backToComments}
                            >
                                {'<<'} Back
                            </Item> : null}
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Avatar sx={{ bgcolor: '#502a74', marginRight: '6px', marginLeft: '10px', mt: '5px' }}>SG</Avatar>
                                <CardContent>
                                    <Item screen={screen} color="text.secondary" gutterBottom>
                                        {val?.comment_id}
                                    </Item>
                                    <Button sx={{ bgcolor: '#D3D3D3', color: 'black', borderRadius: '20px', mr: '8px', fontSize: '10px' }} >
                                        CPA
                                    </Button>
                                    <Button sx={{ bgcolor: '#D3D3D3', color: 'black', borderRadius: '20px', fontSize: '10px' }}>
                                        Loan-Details
                                    </Button>
                                    <Item screen={screen} sx={{ mb: 1.5, mt: '5px' }} color="text.secondary">
                                        Assigned to {val?.assigned_to}
                                    </Item>
                                    <Item screen={screen} variant="body2">
                                        test
                                    </Item>
                                    <Item screen={screen} variant="body2">
                                        {val?.timestamp}
                                    </Item>
                                    {index === 1 && !reply && <CardActions sx={{ ml: '-15px' }}>
                                        <Button size="small" onClick={() => showOnlyReply(level)}>Show all replies</Button>
                                    </CardActions>}
                                </CardContent>

                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        )
    }

    return (
        <>
            {
                !reply ? (comment?.[level].slice(0, 2).map((val, index) => (
                    <ReplyComponent val={val} index={index} />
                ))) :
                    (comment?.[level].map((val, index) => (
                        <ReplyComponent val={val} index={index} />
                    )))
            }

        </>
    );
}
