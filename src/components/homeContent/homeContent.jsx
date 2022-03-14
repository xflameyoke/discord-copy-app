import React from 'react';
import { Container, HeroBg } from './homeContent.styled';
import HomePhoto1 from '../../assets/photos/home1';
import { Grid } from '@material-ui/core';
import { HomeText } from '../homeText/';

const HomeContent = () => (
  <>
    <HeroBg />
    <Container>
      <Grid container spacing={4} justify="center">
        <Grid item container md={6}>
          <HomePhoto1 item md={4} />
        </Grid>
        <Grid item container md={4}>
          <HomeText
            item
            header={'Create an invite-only place where you belong'}
            text={
              'Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.'
            }
          />
        </Grid>
      </Grid>
    </Container>
  </>
);

export default HomeContent;
