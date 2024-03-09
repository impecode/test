import React from 'react'
import {Container} from '../styles/Container';
import { Header, MainHeader } from '../Header/Header.Styled';

const VideoEditor = () => {
  return (
    <Container>
    <Header>
      <MainHeader>
        <h1>비디오 편집</h1>
      </MainHeader>
    </Header>
  </Container>
  )
}

export default VideoEditor;