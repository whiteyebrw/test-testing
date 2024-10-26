import React from 'react';
import { TextField, Box } from '@mui/material';

interface Props {
	questionText: string;
	answer?: string;
	onChange: (answer: string) => void;
}

export const LongAnswerQuestion: React.FC<Props> = ({ questionText, answer, onChange }) => {
	const handleAnswerChange = (answer: string) => {
		onChange(answer);
	};

	return (
		<Box>
			<p>{questionText}</p>
			<TextField
				fullWidth
				multiline
				rows={4}
				value={answer}
				onChange={(e) => handleAnswerChange(e.target.value)}
			/>
		</Box>
	);
};