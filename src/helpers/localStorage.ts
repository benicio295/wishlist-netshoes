export function getDataWishlistLocalStorage() {
	return localStorage.getItem('wishlist');
}

export function saveWishlistToLocalStorage<T>(data: T) {
	const dataString = JSON.stringify(data);
	localStorage.setItem('wishlist', dataString);
}

export function removeItemWishlistLocalStorage() {
	localStorage.removeItem('wishlist');
}
