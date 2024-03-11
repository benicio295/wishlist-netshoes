export type TNavigation = {
	name: string;
	href: string;
};

export type TItemWishlist = {
	productID: string;
	srcImage: string;
	altImage: string;
	name: string;
	price: number;
	promotionalPrice?: number;
};

export type TDataAPI = {
	total: number;
	pageSize: number;
	totalPages: number;
	products: {
		selectedProduct: string;
		department: {
			id: number;
			name: string;
		};
		brand: {
			id: number;
			name: string;
		};
		productType: {
			id: number;
			name: string;
		};
		name: string;
		product: {
			code: string;
			available: boolean;
			visible: boolean;
			details: {
				name: string;
				description: string;
				available: boolean;
				visible: boolean;
				size: {
					code: number;
					label: string;
				};
				sku: string;
			};
			image: string;
		};
		stockAvailable: boolean;
	}[];
};
