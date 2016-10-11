import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import Sparkline from 'react-sparkline-canvas';

function average(data){
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
	return(
		<div className="image-size">
			<Sparklines data={props.data}>
				<SparklinesLine color={props.color}/>
				<SparklinesReferenceLine type="avg"/>
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	);
}