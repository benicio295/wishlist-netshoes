'use client';

import { TItemWishlist } from '@/type';
import { CloseSVG } from './SVGs/CloseSVG';
import { Dispatch, SetStateAction } from 'react';
import { removeItemWishlistLocalStorage, saveWishlistToLocalStorage } from '@/helpers/localStorage';

export function ButtonRemoveItemWishlist({
	wishlistData,
	setWishlistData,
	itemToRemove
}: {
	wishlistData: TItemWishlist[];
	setWishlistData: Dispatch<SetStateAction<TItemWishlist[]>>;
	itemToRemove: TItemWishlist;
}) {
	function handleClickRemoveItemWishlist() {
		const updatedWishlistData = wishlistData.filter(
			productInfo => productInfo.productID !== itemToRemove.productID
		);
		removeItemWishlistLocalStorage();
		saveWishlistToLocalStorage(updatedWishlistData);
		setWishlistData(updatedWishlistData);
	}

	return (
		<button
			className="absolute right-3 top-5 flex items-center justify-center"
			onClick={handleClickRemoveItemWishlist}>
			<CloseSVG className="h-5 w-auto text-gray hover:text-red" />
		</button>
	);
}
