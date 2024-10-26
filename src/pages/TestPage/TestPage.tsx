import React, { useEffect } from 'react';
import { testStore } from '../../store';
import { Box, Button, Step, StepButton, Stepper } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Question } from './Question/Question.tsx';
import { useEntityFallback } from '../../utils/useEntityFallback.ts';
import { CompletedTest } from './CompletedTest/CompletedTest.tsx';
import { CountdownTimer } from './CountdownTimer/CountdownTimer.tsx';

export const TestPage: React.FC = observer(() => {
	const { currentStep, questions, isEmpty, setStep, isFinishedTest, remainingTime } = testStore;
	const question = questions[currentStep];

	useEffect(() => {
		testStore.getTest();
	}, []);

	const { hasActiveFallback, activeFallback } = useEntityFallback([
		{
			condition: isEmpty,
			component: null
		},
		{
			condition: isFinishedTest,
			component: <CompletedTest/>
		}
	]);

	return (
		<>
			{hasActiveFallback ?
				(activeFallback?.component) : (
					<Box>
						{!!remainingTime && <CountdownTimer />}
						<Stepper nonLinear={true} activeStep={currentStep}>
							{questions.map((questionItem, index) => (
								<Step key={index} completed={questionItem.completed}>
									<StepButton color="inherit" onClick={() => setStep(index)}>
										Вопрос {index + 1}
									</StepButton>
								</Step>
							))}
						</Stepper>
						<Box>
							<Question question={question}/>

							<Box mt={2}>
								<Button
									disabled={!question.canAnswered}
									onClick={question.markAsCompleted}
								>
									Ответить
								</Button>
							</Box>
						</Box>
					</Box>
				)}
		</>
	);
});