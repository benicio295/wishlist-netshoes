import { TItemWishlist } from '@/type';
import { fireEvent, render } from '@testing-library/react';
import { Dispatch, SetStateAction } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ButtonRemoveItemWishlist } from '.';
import { itemToRemoveMock, mockWishlistData } from './mocks';

describe('ButtonRemoveItemWishlist', () => {
	it('should click button and remove wishlist data to localStorage', () => {
		const mockSetWishlistData: Dispatch<SetStateAction<TItemWishlist[]>> = vi.fn();
		const resultButtonRender = render(
			<ButtonRemoveItemWishlist
				itemToRemove={itemToRemoveMock}
				setWishlistData={mockSetWishlistData}
				wishlistData={mockWishlistData}
			/>
		);

		fireEvent.click(resultButtonRender.getByRole('button'));
		expect(mockSetWishlistData).toHaveBeenCalled();
	});
});
