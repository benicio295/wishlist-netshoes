import { TNavigation } from '@/type';
import Link from 'next/link';
// ! TESTAR ButtonSaveToWishlist e ButtonRemoveItemWishlist
export function Breadcrumb({ paths }: { paths: TNavigation[] }) {
	return (
		<>
			<nav className="page_margin pb-7 pt-7">
				<ul className="flex gap-1 text-xl text-purple">
					{paths.map((path, index) => (
						<div className="flex gap-1" key={index}>
							<li>
								{index + 1 === paths.length ? (
									<p className="font-bold">{path.name}</p>
								) : (
									<Link href={path.href}>{path.name}</Link>
								)}
							</li>
							{paths.length !== index + 1 && (
								<div role="separator" className="after:content-['/']" />
							)}
						</div>
					))}
				</ul>
			</nav>
			<div className="page_margin h-[2px] w-full bg-black/10" />
		</>
	);
}
