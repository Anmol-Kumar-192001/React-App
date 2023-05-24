import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function SubComment({ comment, level, reply, setReply }) {

    console.log('subcomments are', comment?.[level]);
    const [replyNo, setReplyNo] = useState(-1);


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
            <Card sx={{ minWidth: 275, marginLeft: 5 * (index + 1), marginRight: 10, borderLeft: '2px solid #502a74' }}>
                {reply && (index === 0) && (level === replyNo) ? <Typography sx={{ fontSize: 14, ml: '5px', fontWeight: 'bold', color: '#502a74', cursor: 'pointer' }} gutterBottom
                    onClick={backToComments}
                >
                    {'<<'} Back
                </Typography> : null}
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Avatar sx={{ bgcolor: '#502a74', marginRight: '6px', marginLeft: '10px', mt: '5px' }}>SG</Avatar>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {val?.comment_id}
                        </Typography>
                        <Button sx={{ bgcolor: '#D3D3D3', color: 'black', borderRadius: '20px', mr: '8px', fontSize: '10px' }} >
                            CPA
                        </Button>
                        <Button sx={{ bgcolor: '#D3D3D3', color: 'black', borderRadius: '20px', fontSize: '10px' }}>
                            Loan-Details
                        </Button>
                        <Typography sx={{ mb: 1.5, mt: '5px' }} color="text.secondary">
                            Assigned to {val?.assigned_to}
                        </Typography>
                        <Typography variant="body2">
                            test
                        </Typography>
                        <Typography variant="body2">
                            {val?.timestamp}
                        </Typography>
                        {index === 1 && !reply && <CardActions sx={{ ml: '-15px' }}>
                            <Button size="small" onClick={() => showOnlyReply(level)}>Show all replies</Button>
                        </CardActions>}
                    </CardContent>

                </Box>
            </Card>
        )
    }

    return (
        <>
            {
              !reply?  (comment?.[level].slice(0, 2).map((val, index) => (
                    <ReplyComponent val={val} index={index} />
                ))):
                (comment?.[level].map((val, index) => (
                    <ReplyComponent val={val} index={index} />
                )))
            }

        </>
    );
}
