import React from "react";
import { LongAnswerQuestion } from './LongAnswerQuestion.tsx';
import { SingleChoiceQuestion } from './SingleChoiceQuestion.tsx';
import { MultipleChoiceQuestion } from './MultipleChoiceQuestion.tsx';
import { ShortAnswerQuestion } from './ShortAnswerQuestion.tsx';
import { observer } from 'mobx-react-lite';
import { Instance } from 'mobx-state-tree';
import { QuestionModel } from '../../../store/testStore/models/QuestionModel.ts';

export interface Props {
	question: Instance<typeof QuestionModel>
}

export const Question: React.FC<Props> = observer(({ question }) => {
	switch (question.type) {
		case "single":
			return (
				<SingleChoiceQuestion
					answer={question.answer}
					questionText={question.questionText}
					options={question.options}
					onChange={question.setAnswer}
				/>
			);
		case "multiple":
			return (
				<MultipleChoiceQuestion
					questionText={question.questionText}
					options={question.options}
					answers={question.answer}
					onChange={question.setAnswer}
					key={question.answer.toString()}
				/>
			);
		case "short":
			return (
				<ShortAnswerQuestion
					answer={question.answer}
					questionText={question.questionText}
					onChange={question.setAnswer}
				/>
			);
		case "long":
			return (
				<LongAnswerQuestion
					answer={question.answer}
					questionText={question.questionText}
					onChange={question.setAnswer}
				/>
			);
		default:
			return null;
	}
});