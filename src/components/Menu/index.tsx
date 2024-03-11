import Link from 'next/link';
import { NetshoesLogoSVG } from '../SVGs/NetshoesLogoSVG';
import { HeartSVG } from '../SVGs/HeartSVG';
import { ProfileSVG } from '../SVGs/ProfileSVG';
import { TriangleDecorationSubMenuSVG } from '../SVGs/TriangleDecorationSubMenuSVG';
import { TNavigation } from '@/type';
import { MenuMobile } from './MenuMobile';

// eslint-disable-next-line no-undef
export function Menu({ navigationSubMenu }: { navigationSubMenu: TNavigation[] }) {
	return (
		<nav className="fixed left-0 right-0 top-0 z-50 bg-purple">
			<div className="page_margin flex justify-between">
				<Link className="pb-6 pt-6" href="/">
					<NetshoesLogoSVG className="h-6 w-auto" />
				</Link>
				<MenuMobile className="pb-6 pt-6 desktop:hidden tabletLarge:hidden tablet:hidden">
					<ul>
						{navigationSubMenu.map((navigation, index) => (
							<Link href={navigation.href} key={index}>
								<li className="pb-3 pt-3 hover:bg-purple hover:text-white">
									{navigation.name}
								</li>
							</Link>
						))}
						<Link href="/wishlist">
							<li className="pb-3 pt-3 hover:bg-purple hover:text-white">Wishlist</li>
						</Link>
					</ul>
				</MenuMobile>
				<div className="relative flex items-center gap-20 mobile:hidden">
					<Link href="/wishlist" className="flex items-center gap-2">
						<HeartSVG className="h-6 w-auto" />
						<p className="text-white">Wishlist</p>
					</Link>
					<div className="group relative pb-6 pl-2 pt-6">
						<ProfileSVG className="h-6 w-auto" />
						<TriangleDecorationSubMenuSVG className="absolute right-0 top-[3.2rem] hidden h-5 w-auto group-hover:block" />
						<div className="absolute -right-4 top-16 hidden rounded-lg bg-white p-3 shadow-md group-hover:block">
							<ul className="whitespace-nowrap">
								{navigationSubMenu.map((navigation, index) => (
									<li key={index}>
										<Link href={navigation.href}>{navigation.name}</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
