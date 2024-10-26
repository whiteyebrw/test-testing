import { types } from 'mobx-state-tree';
import { BaseQuestionModel } from './BaseQuestionModel.ts';

export const ShortAnswerQuestionModel = types
	.compose(
		BaseQuestionModel,
		types.model({
			answer: types.maybe(types.string),
			type: types.literal('short')
		})
	)
	.views((self) => ({
		get hasAnswer() {
			return self.answer?.trim().length !== 0;
		},

		get canAnswered() {
			return this.hasAnswer && !self.completed;
		}
	}))
	.actions((self) => ({
		setAnswer(answer: string) {
			self.answer = answer;
		}
	}));