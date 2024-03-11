import type { Metadata } from 'next';
import './globals.css';
import { Source_Sans_3 } from 'next/font/google';
import { Menu } from '@/components/Menu';

const sourceSans3 = Source_Sans_3({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-source-sans-3'
});

export const metadata: Metadata = {
	title: 'Loja de Artigos Esportivos Online | Netshoes'
};

export default function RootLayout({
	children
}: Readonly<{
	// eslint-disable-next-line no-undef
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${sourceSans3.variable}`}>
				<Menu
					navigationSubMenu={[
						{ name: 'Entrar', href: '/login' },
						{ name: 'Minha Conta', href: '/login' },
						{ name: 'Endereços', href: '/login' },
						{ name: 'Minha Netshoes', href: '/login' }
					]}
				/>
				<div className="mt-[4.4rem]" />
				{children}
			</body>
		</html>
	);
}
