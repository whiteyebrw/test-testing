import { SnapshotOut } from 'mobx-state-tree';
import { TestStore } from './index.ts';

export const formatTime = (seconds: number) => {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

export const saveTestStoreToLocalStorage = (store: SnapshotOut<typeof TestStore>) => {
	localStorage.setItem('test', JSON.stringify(store));
};