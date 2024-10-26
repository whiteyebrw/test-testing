import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { testStore } from '../../../store';

export const CompletedTest: React.FC = observer(() => {
	return (
		<Box>
			<Typography>
				Тест завершен
			</Typography>
			<Button onClick={testStore.resetTest}>Сбросить</Button>
		</Box>
	);
});