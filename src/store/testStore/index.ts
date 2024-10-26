import { applySnapshot, types } from 'mobx-state-tree';
import { QuestionModel } from './models/QuestionModel.ts';
import { mockTest } from './mocks.ts';

export const TestStore = types
	.model('TestStore', {
		questions: types.array(QuestionModel),
		currentStep: types.number,
		timeLimit: types.maybe(types.number),
		remainingTime: types.optional(types.number, 0),
		isExpired: types.optional(types.boolean, false),
	}).views((self) => ({
		get isEmpty() {
			return self.questions.length === 0;
		},

		get isAllQuestionsCompleted() {
			return self.questions.every((question) => question.completed);
		},

		get isFinishedTest() {
			return this.isAllQuestionsCompleted || self.isExpired;
		}
	}))
	.actions((self) => ({
		setStep(newStep: number) {
			self.currentStep = newStep;
		},

		getTest() {
			const savedTest =  localStorage.getItem('test');

			if (savedTest) {
				applySnapshot(self, JSON.parse(savedTest));
			} else {
				applySnapshot(self.questions, mockTest.questions);
				self.timeLimit = mockTest.timeLimit;
				self.remainingTime = mockTest.timeLimit ?? 0;
			}
		},

		resetTest() {
			self.currentStep = 0;
			applySnapshot(self.questions, mockTest.questions);
			self.timeLimit = mockTest.timeLimit;
			self.remainingTime = mockTest.timeLimit ?? 0;
			self.isExpired = false;
		},

		expiredTime() {
			self.isExpired = true;
		},

		decrementRemainingTime() {
			self.remainingTime--;

			if (!self.remainingTime) {
				this.expiredTime();
			}
		},
	}));