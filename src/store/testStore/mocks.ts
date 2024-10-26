import { SnapshotIn } from 'mobx-state-tree';
import { QuestionModel } from './models/QuestionModel.ts';

export interface TestDto {
	questions: SnapshotIn<typeof QuestionModel>[];
	timeLimit?: number;
}

export const mockTest: TestDto = {
	questions: [
		{
			id: '1',
			type: 'single',
			questionText: 'What is 2 + 2?',
			options: ['3', '4', '5'],
			answer: '',
		},
		{
			id: '2',
			type: 'multiple',
			questionText: 'Choose prime numbers',
			options: ['2', '3', '4'],
			answer: [],
		},
		{
			id: '3',
			type: 'short',
			questionText: 'What is the capital of France?',
			answer: '',
		},
		{
			id: '4',
			type: 'long',
			questionText: 'What is the capital of France?',
			answer: '',
		},
	],
	timeLimit: 600,
};