import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/Card';
import { ButtonSaveToWishlist } from '@/components/ButtonSaveToWishlist';
import { TDataAPI } from '@/type';

export default async function Home() {
	let dataAPI: TDataAPI | null = null;
	const response = await fetch(process.env.URL_API as string);
	if (response.status === 200) dataAPI = await response.json();
	else throw new Error('Failed fetch data');

	return (
		<>
			<Breadcrumb paths={[{ name: 'Home', href: '/' }]} />
			<section>
				{dataAPI ? (
					dataAPI.products.map(productInfo => (
						<Card
							key={productInfo.selectedProduct}
							name={productInfo.name}
							srcImage={productInfo.product.image}
							altImage={productInfo.name}
							price={299.99}
							promotionalPrice={150}>
							<ButtonSaveToWishlist
								dataToSaveWishlist={{
									altImage: productInfo.name,
									name: productInfo.name,
									productID: productInfo.selectedProduct,
									srcImage: productInfo.product.image,
									price: 299.99,
									promotionalPrice: 150
								}}
							/>
						</Card>
					))
				) : (
					<p>Sem items</p>
				)}
			</section>
		</>
	);
}
