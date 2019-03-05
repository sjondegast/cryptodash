import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';

const ConfrimButtonStyled = styled.div`
	margin: 20px;
    color: green;
    cursor: pointer;
`;

const CenterDiv = styled.div`
	display: grid;
	justify-content: center;
`;

export default () => {
	return (
		<AppContext.Consumer>
			{({ confirmFavorites }) => (
				<CenterDiv>
					<ConfrimButtonStyled onClick={confirmFavorites}>
						confirmFavorites
					</ConfrimButtonStyled>
				</CenterDiv>
			)}
		</AppContext.Consumer>
	);
};
