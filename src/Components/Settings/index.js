import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButtom from './ConfirmButton';
import Page from '../Shared/Page';

export default () => {
	return (
		<Page name="Settings">
			<WelcomeMessage />
			<ConfirmButtom />
		</Page>
	);
};
