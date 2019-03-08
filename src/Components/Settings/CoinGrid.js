import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
// import { SelectableTile } from '../Shared/Tile';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 15px;
    margin-top: 40px;
`;

const getCoinsToDisplay = (coinList, topSection, favorites) => {
	return topSection ? favorites : Object.keys(coinList).slice(10, 100);
};

const CoinGrid = ({ topSection }) => {
	return (
		<AppContext.Consumer>
			{({ coinList, favorites }) => (
				<CoinGridStyled>
					{getCoinsToDisplay(coinList, topSection, favorites).map(coinKey => (
						<CoinTile topSection={topSection} coinKey={coinKey} key={coinKey}/>
					))}
				</CoinGridStyled>
			)}
		</AppContext.Consumer>
	);
};

export default CoinGrid;
