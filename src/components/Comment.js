import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import SubComment from './SubComment';
import { data } from './CommentData'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useScreenSize } from '../customHooks/screenSize/index';

const Item = styled(Typography)(({ theme,screen }) => ({
  fontSize: (screen === 'xs') ? '12px' : '15px',
}));

export default function Comment() {

  const [reply, setReply] = useState(false);
  const [showReply, setShowReply] = useState(-1);

  const screen = useScreenSize();

  const levelComments = [];

  const stack = [...data.map((comment) => ({ comment, level: 0 }))];

  while (stack.length > 0) {
    const { comment, level } = stack.pop();

    if (!levelComments[level]) {
      levelComments[level] = [];
    }


    levelComments[level].push(comment);


    if (comment.sub_comments && comment.sub_comments.length > 0) {
      stack.push(
        ...comment.sub_comments.map((subComment) => ({
          comment: subComment,
          level: level + 1,
        }))
      );
    }
  }

  console.log('flatten comments are', levelComments);

  const showReplyFunction = (level) => {
    setShowReply(level)
  }

  const hideReplyFunction = () => {
    setShowReply(-1)
  }

  return (
    <>
      {levelComments.map((comments, level) => (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container >
              <Grid item xs={12} md={12} sm={12} xl={12}>
                <Card sx={{ marginLeft: 2, marginRight: 2,overflow:'auto' }}>
                  {!reply ?
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                      <Avatar sx={{ bgcolor: '#502a74', marginRight: '6px', marginLeft: '10px', mt: '5px' }}>SG</Avatar>
                      <CardContent>
                        <Item screen={screen} color="text.secondary" gutterBottom>
                          {comments[comments?.length - 1]?.comment_id}
                        </Item>
                      
                        <Button sx={{ bgcolor: '#D3D3D3', color: 'black', borderRadius: '20px', fontSize: '10px',mr:'6px' }} >
                          CPA
                        </Button>
                       
                        <Button sx={{ bgcolor: '#D3D3D3', color: 'black', borderRadius: '20px', fontSize: '10px' }}>
                          Loan-Details
                        </Button>
                      
                        <Item screen={screen} sx={{ mb: 1.5, mt: '5px' }} color="text.secondary">
                          Assigned to {comments[comments?.length - 1]?.assigned_to}
                        </Item>
                        <Item screen={screen} variant="body2">
                          test
                        </Item>
                        <Item screen={screen} variant="body2">
                          {comments[comments?.length - 1]?.timestamp}
                        </Item>
                        <CardActions sx={{ ml: '-15px' }}>
                          {showReply === level && <Button size="small" onClick={hideReplyFunction}>Hide Replies</Button>}
                          {showReply !== level && <Button size="small" onClick={() => showReplyFunction(level)}>Show Replies</Button>}
                        </CardActions>
                      </CardContent>
                    </Box> : null}
                  {showReply === level &&
                    <SubComment comment={levelComments} level={level} reply={reply} setReply={setReply} />
                  }
                </Card>
              </Grid>
            </Grid>
          </Box>
        </>
      ))}
    </>
  );
}
