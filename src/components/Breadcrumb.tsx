import { TNavigation } from '@/type';
import Link from 'next/link';

export function Breadcrumb({ paths }: { paths: TNavigation[] }) {
	return (
		<>
			<nav className="page_margin pb-7 pt-7">
				<ul className="flex gap-1 text-xl text-purple">
					{paths.map((path, index) => (
						<div className="flex gap-1" key={index}>
							{index + 1 === paths.length ? (
								<li>
									<p className="font-bold">{path.name}</p>
								</li>
							) : (
								<li>
									<Link href={path.href}>{path.name}</Link>
								</li>
							)}
							{paths.length !== index + 1 && <div className="after:content-['/']" />}
						</div>
					))}
				</ul>
			</nav>
			<div className="page_margin h-[2px] w-full bg-black/10" />
		</>
	);
}
