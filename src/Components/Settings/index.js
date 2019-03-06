import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButtom from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';

export default () => {
	return (
		<Page name="Settings">
			<WelcomeMessage />
			<ConfirmButtom />
			<CoinGrid />
		</Page>
	);
};
