'use client';

import {
	getDataWishlistLocalStorage,
	removeItemWishlistLocalStorage,
	saveWishlistToLocalStorage
} from '@/helpers/localStorage';
import { TItemWishlist } from '@/type';
import { useEffect, useState } from 'react';
import { HeartSVG } from '../SVGs/HeartSVG';

export function ButtonSaveToWishlist({ dataToSaveWishlist }: { dataToSaveWishlist: TItemWishlist }) {
	const [isSavedItemWishlistLocalstorage, setIsSavedItemWishlistLocalstorage] = useState<boolean>(false);

	useEffect(() => {
		const localStorageData = getDataWishlistLocalStorage();
		if (localStorageData) {
			const wishlistData: TItemWishlist[] = JSON.parse(localStorageData);
			const foundElementWishlistData = wishlistData.find(
				itemWishlist => itemWishlist.productID === dataToSaveWishlist.productID
			);
			if (foundElementWishlistData) setIsSavedItemWishlistLocalstorage(true);
		}
	}, [dataToSaveWishlist.productID]);

	function handleClickToWishlist() {
		let wishlistData: TItemWishlist[] = [];
		const localStorageData = getDataWishlistLocalStorage();
		if (localStorageData) {
			wishlistData = JSON.parse(localStorageData);
			const foundIndexElementWishlistData = wishlistData.findIndex(
				itemWishlist => itemWishlist.productID === dataToSaveWishlist.productID
			);
			if (foundIndexElementWishlistData !== -1) {
				removeItemWishlistLocalStorage();
				wishlistData.splice(foundIndexElementWishlistData, 1);
				saveWishlistToLocalStorage(wishlistData);
				setIsSavedItemWishlistLocalstorage(false);
			} else {
				wishlistData.push(dataToSaveWishlist);
				saveWishlistToLocalStorage(wishlistData);
				setIsSavedItemWishlistLocalstorage(true);
			}
		} else {
			wishlistData.push(dataToSaveWishlist);
			saveWishlistToLocalStorage(wishlistData);
			setIsSavedItemWishlistLocalstorage(true);
		}
	}

	return (
		<button
			className={`absolute right-3 top-5 flex items-center justify-center rounded-full bg-gray p-1 ${isSavedItemWishlistLocalstorage && 'bg-red'}`}
			onClick={handleClickToWishlist}>
			<HeartSVG className="h-6 w-auto" />
		</button>
	);
}
