import { Breadcrumb } from '@/components/Breadcrumb';
import { ClientSection } from './ClientSection';

export default function Wishlist() {
	return (
		<>
			<Breadcrumb
				paths={[
					{ name: 'Home', href: '/' },
					{ name: 'Wishlist', href: '/wishlist' }
				]}
			/>
			<ClientSection />
		</>
	);
}
