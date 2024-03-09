import React from 'react'
import {Container} from '../styles/Container';
import { Header, MainHeader } from '../Header/Header.Styled';

const Home = () => {
  return (
  <Container>
    <Header>
      <MainHeader>
        <h1>Video Upload</h1>
      </MainHeader>
    </Header>
  </Container>
  )
}

export default Home;