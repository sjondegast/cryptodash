import React from 'react';
import styled from 'styled-components';
import { Tile } from '../Shared/Tile';
import CoinImage from '../Shared/CoinImage';
import { AppContext } from '../AppProvider';

const SpotLightName = styled.h2`
    text-align: center;
`;

export default () => {
   return (
        <AppContext.Consumer>
            {({currentFavorite, coinList}) => 
                <Tile>
                    <SpotLightName>{coinList[currentFavorite].CoinName}</SpotLightName>
                    <CoinImage spotlight coin={coinList[currentFavorite]}/>
                </Tile>
            }
        </AppContext.Consumer>
    );
}