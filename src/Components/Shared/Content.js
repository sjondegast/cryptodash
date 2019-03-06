import React from 'react';
import { AppContext } from '../AppProvider';

export default ({coinList, children}) => {
	return (
		<AppContext.Consumer>
			{(coinList) => {
				if (!coinList) {
					return <div> Loading Coins </div>;
				}
				return <div> {children} </div>;
			}}
		</AppContext.Consumer>
	);
};
