import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { data } from './CommentData'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useScreenSize } from '../customHooks/screenSize/index';

const Item = styled(Typography)(({ screen }) => ({
  fontSize: (screen === 'xs') ? '12px' : '15px',
}));

let isReply=false;

export default function Comment({ subcomment, level, child,allReplies }) {

  const [reply, setReply] = useState(false);
  const [showReply, setShowReply] = useState(-1);
  const [showAllReplies, setShowAllReplies] = useState(false);

  const screen = useScreenSize();

  const showAllReply = (level) => {
    setShowAllReplies(true)
    isReply=true;
  }

  const backToComments = () => {
    setReply(false)
  }

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
      {((subcomment?.[level]) ?? (levelComments)).map((comments, level) => {
        if ((child && level > 1 && !showAllReplies)) return null;
        // else if(!child && isReply) return null;
        return (
          <>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container >
                <Grid item xs={12} md={12} sm={12} xl={12}>
                  <Card sx={{ marginLeft: (child ? (5 * (level + 1)) : 5), borderLeft: child && '2px solid #502a74', marginRight: 2, overflow: 'auto' }}>
                    {!reply ?
                      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Avatar sx={{ bgcolor: '#502a74', marginRight: '6px', marginLeft: '10px', mt: '5px' }}>SG</Avatar>
                        <CardContent>
                          <Item screen={screen} color="text.secondary" gutterBottom>
                            {child ? (comments?.comment_id) : (comments[comments?.length - 1]?.comment_id)}
                          </Item>

                          <Button sx={{ bgcolor: '#D3D3D3', color: 'black', borderRadius: '20px', fontSize: '10px', mr: '6px' }} >
                            CPA
                          </Button>

                          <Button sx={{ bgcolor: '#D3D3D3', color: 'black', borderRadius: '20px', fontSize: '10px' }}>
                            Loan-Details
                          </Button>

                          <Item screen={screen} sx={{ mb: 1.5, mt: '5px' }} color="text.secondary">
                            Assigned to {child ? (comments?.assigned_to) : comments[comments?.length - 1]?.assigned_to}
                          </Item>
                          <Item screen={screen} variant="body2">
                            test
                          </Item>
                          <Item screen={screen} variant="body2">
                            {child ? (comments?.timestamp) : comments[comments?.length - 1]?.timestamp}
                          </Item>
                          <CardActions sx={{ ml: '-15px' }}>
                            {!child && showReply === level && <Button size="small" onClick={hideReplyFunction}>Hide Replies</Button>}
                            {!child && showReply !== level && <Button size="small" onClick={() => showReplyFunction(level)}>Show Replies</Button>}
                            {child && level === 1 && !showAllReplies && <Button size="small" onClick={() => showAllReply(level)}>Show all replies</Button>}
                          </CardActions>
                        </CardContent>
                      </Box> : null}
                    {showReply === level &&
                      <Comment subcomment={levelComments} level={level} child={true} allReplies={showAllReplies}/>}
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </>
        )
      })}
    </>
  );
}
