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

const Item = styled(Typography)(({ theme, screen }) => ({
  fontSize: (screen === 'xs') ? '12px' : '15px',
}));

export default function CommonComment() {

  const [showReply, setShowReply] = useState(-1);
  const [showAllReplies, setShowAllReplies] = useState(false)

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

  const showAllReplyFunction = (level) => {
    setShowAllReplies(true)
  }

  const backToComments = () => {
    setShowAllReplies(false)
  }

  const Comment = ({ comments, ml, level, child = false }) => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
          <Grid item xs={12} md={12} sm={12} xl={12}>
            <Card sx={{ marginLeft: 5 * (ml + 1), borderLeft: ml && '2px solid #502a74', marginRight: 2, overflow: 'auto' }}>
              {showAllReplies && level===0 && <Item screen={screen} sx={{ ml: '5px', fontWeight: 'bold', color: '#502a74', cursor: 'pointer' }} gutterBottom
                onClick={backToComments}
              >
                {'<<'} Back
              </Item>}
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Avatar sx={{ bgcolor: '#502a74', marginRight: '6px', marginLeft: '10px', mt: '5px' }}>SG</Avatar>
                <CardContent>
                  <Item screen={screen} color="text.secondary" gutterBottom>
                    {comments?.comment_id}
                  </Item>

                  <Button sx={{ bgcolor: '#D3D3D3', color: 'black', borderRadius: '20px', fontSize: '10px', mr: '6px' }} >
                    CPA
                  </Button>

                  <Button sx={{ bgcolor: '#D3D3D3', color: 'black', borderRadius: '20px', fontSize: '10px' }}>
                    Loan-Details
                  </Button>

                  <Item screen={screen} sx={{ mb: 1.5, mt: '5px' }} color="text.secondary">
                    Assigned to {comments?.assigned_to}
                  </Item>
                  <Item screen={screen} variant="body2">
                    test
                  </Item>
                  <Item screen={screen} variant="body2">
                    {comments?.timestamp}
                  </Item>
                  <CardActions sx={{ ml: '-15px' }}>
                    {showReply === level && !child && <Button size="small" onClick={hideReplyFunction}>Hide Replies</Button>}
                    {showReply !== level && levelComments[level].length > 1 && !child && <Button size="small" onClick={() => showReplyFunction(level)}>Show Replies</Button>}
                    {child && level === 1 && !showAllReplies && <Button size="small" onClick={() => showAllReplyFunction(level)}>Show All Replies</Button>}
                  </CardActions>
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
      {levelComments.map((comments, level) => (
        <>
          {!showAllReplies && <Comment comments={comments[0]} ml={0} level={level} />}
          {(showAllReplies) ?
            (showReply === level && levelComments?.[level].slice(1, levelComments.length + 1).map((comments, level) => (
              <Comment comments={comments} ml={level + 1} level={level} child={true} />
            ))) :
            showReply === level && levelComments?.[level].slice(1, 3).map((comments, level) => (
              <Comment comments={comments} ml={level + 1} level={level} child={true} />
            ))
          }
        </>
      ))}
    </>
  );
}
