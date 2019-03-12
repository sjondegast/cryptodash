import React from 'react';
import highchartsConfig from './HighchartsConfig';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../AppProvider';
import ReactHighcharts from 'react-highcharts';
import ChartSelect from './ChartSelect';
import HighchartsTheme from './HighchartsTheme';


ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default () => {
	return (
		<AppContext.Consumer>
			{({ historical, changeChartSelect }) => (
				<Tile>
					<ChartSelect 
						defaultValue='months'
						onChange={e => changeChartSelect(e.target.value)}
					>
						<option value='days'>Days</option>
						<option value='weeks'>Weeks</option>
						<option value='months'>Months</option>
					</ChartSelect>
					{historical ? 
                        <ReactHighcharts config={highchartsConfig(historical)} />
                        : <div> Loading Chart... </div>
                    }
				</Tile>
			)}
		</AppContext.Consumer>
	);
};
