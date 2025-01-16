import { formatNumber } from '@/helpers/formatNumber';
import Image from 'next/image';
import { StarsSVG } from '../SVGs/StarsSVG';

export function Card({
	altImage,
	srcImage,
	name,
	price,
	promotionalPrice,
	children
}: {
	srcImage: string;
	altImage: string;
	name: string;
	price: number;
	promotionalPrice?: number;
	// eslint-disable-next-line no-undef
	children: React.ReactNode;
}) {
	return (
		<div className="relative w-72 p-5 shadow-lg">
			{children}
			<Image className="mb-2" alt={altImage} src={srcImage} width={270} height={270} />
			<h2 className="text-xl">{name}</h2>
			<div className="flex items-center gap-2">
				<StarsSVG className="h-4 w-auto" />
				<p className="text-lg">5.0</p>
			</div>
			{promotionalPrice && (
				<p className="text-base text-black/40 line-through">R$ {formatNumber(price)}</p>
			)}
			<p className="text-2xl font-bold text-purple">
				R$ {promotionalPrice ? formatNumber(promotionalPrice) : formatNumber(price)}
			</p>
		</div>
	);
}
