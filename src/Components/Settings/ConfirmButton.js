import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
import { fontSize1, greenBoxShadow, color3 } from '../Shared/Styles';

const ConfrimButtonStyled = styled.div`
	margin: 20px;
	color: ${color3}
	${fontSize1}
	padding: 5px;
	cursor: pointer;
	&:hover {
		${greenBoxShadow}
	}
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
