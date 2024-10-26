import React from 'react';
import { TextField, Box } from '@mui/material';

interface Props {
	questionText: string;
	answer?: string;
	onChange: (answer: string) => void;
}

export const ShortAnswerQuestion: React.FC<Props> = ({ questionText, answer, onChange }) => {
	const handleAnswerChange = (answer: string) => {
		onChange(answer);
	};

	return (
		<Box>
			<p>{questionText}</p>
			<TextField
				fullWidth
				value={answer}
				onChange={(e) => handleAnswerChange(e.target.value)}
			/>
		</Box>
	);
};

