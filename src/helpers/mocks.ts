import * as localStorageHelpers from '@/helpers/localStorage';
import { vi } from 'vitest';

export const getDataWishlistLocalStorageSpy = vi.spyOn(localStorageHelpers, 'getDataWishlistLocalStorage');
export const saveWishlistToLocalStorageSpy = vi.spyOn(localStorageHelpers, 'saveWishlistToLocalStorage');
export const removeItemWishlistLocalStorageSpy = vi.spyOn(
	localStorageHelpers,
	'removeItemWishlistLocalStorage'
);
