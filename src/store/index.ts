import { TestStore } from './testStore';
import { onSnapshot } from 'mobx-state-tree';
import { saveTestStoreToLocalStorage } from './testStore/helpers.ts';

export const testStore = TestStore.create({
	currentStep: 0,
	questions: []
});

onSnapshot(testStore, (snapshot) => {
	saveTestStoreToLocalStorage(snapshot);
});