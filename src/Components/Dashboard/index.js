import React from 'react';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import CoinSpotLight from './CoinSpotLight';
import styled from 'styled-components';

const ChartGrid = styled.div`
    display: grid;
    margin-top: 20px;
    grid-gap: 15px;
    grid-template-columns: 1fr 3fr;
`;

export default () => {
	return (
		<Page name="Dashboard">
            <PriceGrid />
		<ChartGrid>
			<CoinSpotLight />
			<div>Chart Goes Here</div>
		</ChartGrid>
		</Page>
	);
};