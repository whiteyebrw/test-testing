import React from 'react';
import { Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface Props {
	questionText: string;
	options: string[];
	answer?: string;
	onChange: (answer: string) => void;
}

export const SingleChoiceQuestion: React.FC<Props> = ({ questionText, options, answer = '', onChange }) => {
	const handleAnswerChange = (answer: string) => {
		onChange(answer);
	};

	return (
		<Box>
			<p>{questionText}</p>
			<RadioGroup onChange={(e) => handleAnswerChange(e.target.value)}>
				{options.map((option) => (
					<FormControlLabel checked={answer === option} key={option} value={option} control={<Radio/>}
														label={option}/>
				))}
			</RadioGroup>
		</Box>
	);
};