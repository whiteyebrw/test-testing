import { useMemo } from 'react';

interface Fallback {
	condition: boolean;
	component: React.ReactNode;
}

export const useEntityFallback = (fallbacks: Fallback[]) => {
	const hasActiveFallback = useMemo(() => {
		return fallbacks.some((fallback) => fallback.condition);
	}, [fallbacks]);

	const activeFallback = useMemo(() => {
		return fallbacks.find((fallback) => fallback.condition);
	}, [fallbacks]);

	return { hasActiveFallback, activeFallback };
};