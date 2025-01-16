'use client';

import { ButtonRemoveItemWishlist } from '@/components/ButtonRemoveItemWishlist';
import { Card } from '@/components/Card';
import { getDataWishlistLocalStorage } from '@/helpers/localStorage';
import { TItemWishlist } from '@/type';
import { useEffect, useState } from 'react';

export function ClientSection() {
	const [wishlistData, setWishlistData] = useState<TItemWishlist[]>([]);
	useEffect(() => {
		const localStorageData = getDataWishlistLocalStorage();
		if (localStorageData) setWishlistData(JSON.parse(localStorageData));
	}, []);

	return (
		<section>
			{wishlistData.length > 0 ? (
				wishlistData.map(productInfo => (
					<Card
						key={productInfo.productID}
						name={productInfo.name}
						srcImage={productInfo.srcImage}
						altImage={productInfo.altImage}
						price={productInfo.price}
						promotionalPrice={productInfo.promotionalPrice}>
						<ButtonRemoveItemWishlist
							itemToRemove={productInfo}
							wishlistData={wishlistData}
							setWishlistData={setWishlistData}
						/>
					</Card>
				))
			) : (
				<p>Sem items</p>
			)}
		</section>
	);
}
