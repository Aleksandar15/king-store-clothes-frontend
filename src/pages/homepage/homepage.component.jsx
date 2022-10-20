import React from 'react';

import Directory from '../../components/directory/directory.component';


import { HomePageContainer } from './homepage.styles';

const HomePage = () =>(
    <HomePageContainer >
      <h1 style={{color: "gold"}}>KING Store's Clothes</h1>
        <Directory/>
    </HomePageContainer>
)

export default HomePage;