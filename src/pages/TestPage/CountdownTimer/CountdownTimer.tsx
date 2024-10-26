import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { formatTime } from '../../../store/testStore/helpers.ts';
import { observer } from 'mobx-react-lite';
import { testStore } from '../../../store';

export const CountdownTimer: React.FC = observer(() => {
	const { remainingTime } = testStore;

	useEffect(() => {
		const intervalId = setInterval(() => {
			testStore.decrementRemainingTime();
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<Typography variant="h3">{formatTime(remainingTime)}</Typography>
	);
});