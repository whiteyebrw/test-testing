import React from 'react';
import { Box, FormControlLabel, Checkbox } from '@mui/material';

interface Props {
	questionText: string;
	options: string[];
	answers?: string[];
	onChange: (answer: string[]) => void;
}

export const MultipleChoiceQuestion: React.FC<Props> = ({ questionText, options, answers = [], onChange }) => {
	const handleAnswerChange = (checked: boolean, option: string) => {
		const updatedAnswer = checked
			? [...answers, option]
			: answers.filter((answer) => answer !== option);

		onChange(updatedAnswer);
	};

	return (
		<Box>
			<p>{questionText}</p>
			{options.map((option) => (
				<FormControlLabel
					key={option}
					control={
						<Checkbox
							checked={answers.includes(option)}
							onChange={(e) => handleAnswerChange(e.target.checked, option)}
						/>
					}
					label={option}
				/>
			))}
		</Box>
	);
};

