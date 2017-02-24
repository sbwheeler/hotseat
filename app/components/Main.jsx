import React, {Component} from 'react';
import Questions from './Questions';
import Timer from './Timer';
import Airhorn from './Airhorn';
import UserContainer from './users'

export default () => (
	<div className="clearfix">
		<div className="col-12">
			<Timer />
		</div>
		<div className="col-12">
			<UserContainer />
		</div>
		<div className="col-12">
			<Questions />
		</div>
			<Airhorn />
	</div>
)