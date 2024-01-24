'use client'
import React from 'react';
import { Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemText, CardMedia, Divider } from '@mui/material';
import data from '@/data/DevOpsMaturityAssessmentContents';


const Homepage = () => {

  return (
    <Container class="bg-indigo-50">
      <Typography variant="h4" align="left" gutterBottom> {data.intro} </Typography>
      
      <Card elevation={3} style={{ marginBottom: '20px' }} class="bg-indigo-200">

        <CardContent>
          <Typography variant="h5" gutterBottom> {data.objective.title} </Typography>
          <Divider orientation='horizontal' />
          <Typography variant="body1">{data.objective.detailTwo}</Typography>
          <List>
            {data.objective.mainFocuses.map((focus) => {
              return (
                <ListItem>
                  <ListItemText primary={focus} />
                </ListItem>
              )

            })
            }
          </List>
          <CardMedia component="img"
            alt="Level Image"
            height="200"
            image="/levelChart.png"
            class='float-right'
            style={{ maxWidth: '500px'}}
          />
        </CardContent>
      </Card>
      <Card elevation={3} style={{ marginBottom: '20px' }} class="bg-indigo-200">
        <CardContent>
          <Typography variant="h5" gutterBottom>{data.background.title}</Typography>
          <Divider orientation='horizontal'/>
          <Typography variant="body1">{data.background.detail}</Typography>
          <List>
            {data.background.options.map((option) => {
              return (
                <ListItem>
                  <ListItemText primary={option} />
                </ListItem>
              )

            })
            }
          </List>
        </CardContent>
      </Card>

      <Card elevation={3} class="bg-indigo-200"> 
      <CardContent>
        <Typography variant="h5" gutterBottom> {data.aspects.title} </Typography>
        <Divider orientation='horizontal' />
        <Typography variant="body1">{data.aspects.intro}</Typography>
        <Grid container spacing={2}>
          {
            Object.keys(data.aspects).map((aspectKey) => {
              if (aspectKey !== 'title' && aspectKey !== 'intro') {
                const individualAspect = data.aspects[aspectKey];
                return (
                  <Grid item xs={12} md={6} key={aspectKey}>
                    <Card elevation={2} style={{ height: '100%' }} class="bg-indigo-300 hover:bg-indigo-400 hover:scale-105 duration-500">
                      <CardContent>
                        <Typography variant="h5" gutterBottom> {individualAspect.title} </Typography>
                        <ul> {individualAspect.options.map((option) => (
                          <Typography key={option} component="li" variant="body2"> {option} </Typography>
                        )
                        )
                        }
                        </ul>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              }
              return null;
            })}
        </Grid>
      </CardContent>
      </Card>
    </Container>
  );
}; 

export default Homepage;
