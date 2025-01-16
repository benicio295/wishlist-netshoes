/* eslint-disable prettier/prettier */
import { describe, expect, it } from 'vitest';
import {
    getDataWishlistLocalStorage,
    removeItemWishlistLocalStorage,
    saveWishlistToLocalStorage
} from './localStorage';
import { removeItemWishlistLocalStorageSpy, saveWishlistToLocalStorageSpy } from './mocks';

describe('localStorage', () => {
	it('get wishlist from localStorage', () => {
		const data = getDataWishlistLocalStorage();
		expect(data).toBeNull();
	});

	it('save wishlist to localStorage', () => {
		saveWishlistToLocalStorage(JSON.stringify('lorem ipsum'));
		expect(saveWishlistToLocalStorageSpy).toHaveBeenCalled();
	});

	it('remove wishlist to localStorage', () => {
		removeItemWishlistLocalStorage();
		expect(removeItemWishlistLocalStorageSpy).toHaveBeenCalled();
	});
});
