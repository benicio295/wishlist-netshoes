'use client';

import { useState } from 'react';
import { HamburguerMenuSVG } from '../SVGs/HamburguerMenuSVG';
import { CloseSVG } from '../SVGs/CloseSVG';

// eslint-disable-next-line no-undef
export function MenuMobile({ className, children }: { className: string; children: React.ReactNode }) {
	const [changeVisibleMenu, setChangeVisibleMenu] = useState<boolean>(false);

	return (
		<div className={className}>
			<button className="text-white" onClick={() => setChangeVisibleMenu(enabled => !enabled)}>
				{changeVisibleMenu ? <CloseSVG className="size-6" /> : <HamburguerMenuSVG className="size-6" />}
			</button>
			<div
				onClick={() => setChangeVisibleMenu(enabled => !enabled)}
				className={`${!changeVisibleMenu && 'h-0'} absolute left-0 right-0 top-20 overflow-hidden border-b-[1px] border-gray/25 bg-white text-center text-xl`}>
				{children}
			</div>
		</div>
	);
}
