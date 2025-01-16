import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Breadcrumb } from '.';
import { mockPaths } from './mocks';

describe('Breadcrumb', () => {
	it('should render', () => {
		const breadcrumbResultRender = render(<Breadcrumb paths={mockPaths} />);
		// const { container } = render(<Breadcrumb paths={mockPaths} />);
		// logRoles(container);

		mockPaths.forEach((path, index) => {
			const element = breadcrumbResultRender.getByText(path.name);
			if (index + 1 === mockPaths.length) {
				expect(element).not.toHaveAttribute('href', path.href);
			} else {
				expect(element).toHaveAttribute('href', path.href);
			}
		});

		const separators = breadcrumbResultRender.getAllByRole('separator');
		expect(separators).toHaveLength(2);
	});
});
