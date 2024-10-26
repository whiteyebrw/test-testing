import { types } from 'mobx-state-tree';
import { SingleChoiceQuestionModel } from './SingleChoiceQuestionModel.ts';
import { MultipleChoiceQuestionModel } from './MultipleChoiceQuestionModel.ts';
import { ShortAnswerQuestionModel } from './ShortAnswerQuestionModel.ts';
import { LongAnswerQuestionModel } from './LongAnswerQuestionModel.ts';

export const QuestionModel = types.union(
	SingleChoiceQuestionModel,
	MultipleChoiceQuestionModel,
	ShortAnswerQuestionModel,
	LongAnswerQuestionModel
);