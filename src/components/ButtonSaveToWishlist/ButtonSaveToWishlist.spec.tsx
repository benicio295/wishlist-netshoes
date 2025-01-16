import { getDataWishlistLocalStorageSpy } from '@/helpers/mocks';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ButtonSaveToWishlist } from '.';
import { mockDataWishlist } from './mocks';

describe('ButtonSaveToWishlist', () => {
	function renderButtonSaveToWishlist() {
		const resultButtonRender = render(<ButtonSaveToWishlist dataToSaveWishlist={mockDataWishlist} />);
		return resultButtonRender.getByRole('button');
	}

	it('should render with localStorage data', () => {
		getDataWishlistLocalStorageSpy.mockReturnValue(JSON.stringify([mockDataWishlist]));
		const button = renderButtonSaveToWishlist();
		expect(button).toHaveClass('bg-red');
	});

	it('should render with no localStorage data', () => {
		getDataWishlistLocalStorageSpy.mockReturnValue(null);
		const button = renderButtonSaveToWishlist();
		expect(button).not.toHaveClass('bg-red');
	});

	it('should check the wishlist is saved for the first time', () => {
		getDataWishlistLocalStorageSpy.mockReturnValue(null);
		const button = renderButtonSaveToWishlist();
		fireEvent.click(button);

		expect(button).toHaveClass('bg-red');
	});

	it('should check if the wishlist is removed in the localStorage', () => {
		getDataWishlistLocalStorageSpy.mockReturnValue(JSON.stringify([mockDataWishlist]));
		const button = renderButtonSaveToWishlist();
		fireEvent.click(button);

		expect(button).not.toHaveClass('bg-red');
	});

	it('should check if the wishlist is saved localStorage', () => {
		getDataWishlistLocalStorageSpy.mockReturnValue(JSON.stringify([{}]));

		const button = renderButtonSaveToWishlist();
		fireEvent.click(button);

		expect(button).toHaveClass('bg-red');
	});
});
