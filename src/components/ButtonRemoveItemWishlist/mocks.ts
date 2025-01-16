import { TItemWishlist } from '@/type';

export const mockWishlistData: TItemWishlist[] = [
	{
		altImage: 'Mock Alt Image',
		name: 'Mock Name',
		price: 100,
		productID: 'Mock Product ID',
		promotionalPrice: 90,
		srcImage: 'Mock Src Image'
	},
	{
		altImage: 'Mock Alt Image 2',
		name: 'Mock Name 2',
		price: 200,
		productID: 'Mock Product ID 2',
		promotionalPrice: 100,
		srcImage: 'Mock Src Image 2'
	}
];

export const itemToRemoveMock: TItemWishlist = {
	altImage: 'Mock Alt Image',
	name: 'Mock Name',
	price: 100,
	productID: 'Mock Product ID',
	promotionalPrice: 90,
	srcImage: 'Mock Src Image'
};
