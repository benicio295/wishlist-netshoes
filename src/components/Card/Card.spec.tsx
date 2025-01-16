import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Card } from '.';

describe('Card', () => {
	vi.mock('next/image', () => ({
		__esModule: true,
		default: ({ src, alt, ...props }: { src: string; alt: string }) => (
			// eslint-disable-next-line @next/next/no-img-element
			<img src={src} alt={alt} {...props} />
		)
	}));

	function renderCard(promotionalPrice?: number) {
		return render(
			<Card
				name="Title Name"
				srcImage="lorem.jpg"
				altImage="Alt Image"
				price={100}
				promotionalPrice={promotionalPrice}>
				Lorem ipsum content
			</Card>
		);
	}

	it('should render', () => {
		const resultCardRender = renderCard(70);

		expect(resultCardRender.getByRole('heading', { name: 'Title Name' })).toBeInTheDocument();
		expect(resultCardRender.queryByAltText('Alt Image')).toBeInTheDocument();
		expect(resultCardRender.getByText('R$ 70,00')).toBeInTheDocument();
		expect(resultCardRender.getByText('R$ 100,00')).toBeInTheDocument();
		expect(resultCardRender.getByText('Lorem ipsum content')).toBeInTheDocument();
	});

	it('should render with no promotional price', () => {
		const resultCardRender = renderCard();

		expect(resultCardRender.getAllByRole('paragraph').length).toBe(2);
	});
});
