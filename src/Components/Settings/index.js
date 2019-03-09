import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButtom from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Search from './Search';

export default () => {
	return (
		<Page name="Settings">
			<WelcomeMessage />
			<CoinGrid topSection/>
			<ConfirmButtom />
			<Search />
			<CoinGrid />
		</Page>
	);
};
