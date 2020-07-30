import React from 'react';
import styled from 'styled-components';
import dadosIniciais from '../../data/dados_iniciais.json';
import Menu from "../../components/Menu";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";

const AppWrapper = styled.div`
  background: var(--grayDark);
`;

function Home() {
  return (
    <AppWrapper>
      <Menu/>

      <BannerMain
        videoTitle={ dadosIniciais.categorias[0].videos[0].titulo }
        url={ dadosIniciais.categorias[0].videos[0].url }
        videoDescription={ "O que é Front-end?" } 
      />

      <Carousel
        ignoreFirstVideo
        category={ dadosIniciais.categorias[0] }
      />

    </AppWrapper>
  );
}

export default Home;
