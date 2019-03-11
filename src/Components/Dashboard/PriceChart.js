import React from 'react';
import highchartsConfig from './HighchartsConfig';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../AppProvider';
import ReactHighcharts from 'react-highcharts';

export default () => {
    return (
        <AppContext.Consumer>
            {({}) => 
            <Tile>
                <ReactHighcharts config={highchartsConfig()}/>
            </Tile>
            }
        </AppContext.Consumer>
    );
}
