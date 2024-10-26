import { types } from 'mobx-state-tree';
import { BaseQuestionModel } from './BaseQuestionModel.ts';

export const MultipleChoiceQuestionModel = types
	.compose(
		BaseQuestionModel,
		types.model({
			options: types.array(types.string),
			answer: types.array(types.string),
			type: types.literal('multiple')
		})
	)
	.views((self) => ({
		get hasAnswer() {
			return self.answer?.length !== 0;
		},

		get canAnswered() {
			return this.hasAnswer && !self.completed;
		}
	}))
	.actions((self) => ({
		setAnswer(answers: string[]) {
			self.answer.replace(answers);
		},
	}));