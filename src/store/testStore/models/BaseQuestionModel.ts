import { types } from 'mobx-state-tree';

export const BaseQuestionModel = types.model('Question', {
	id: types.identifier,
	questionText: types.string,
	completed: types.optional(types.boolean, false),
})
	.actions((self) => ({
		markAsCompleted() {
			self.completed = true;
		}
	}))