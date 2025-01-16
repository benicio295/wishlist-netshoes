import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MenuMobile } from './MenuMobile';

describe('MenuMobile', () => {
	function renderMenuMobile() {
		return render(<MenuMobile>list items</MenuMobile>);
	}

	it('should button Open Menu icon rendered and div menu not opened', () => {
		const menuRendered = renderMenuMobile();

		expect(menuRendered.getAllByRole('menu-icon')).toHaveLength(1);
		expect(menuRendered.getByRole('menu-div')).toHaveClass('h-0');
	});

	it('should open menu (clicked button)', () => {
		const menuRendered = renderMenuMobile();

		const button = menuRendered.getByRole('button');
		fireEvent.click(button);

		expect(menuRendered.getByRole('menu-icon').getAttribute('aria-label')).toBe('close-menu');
		expect(menuRendered.getByRole('menu-div')).not.toHaveClass('h-0');
	});

	it('should close menu (clicked button)', () => {
		const menuRendered = renderMenuMobile();

		const button = menuRendered.getByRole('button');
		fireEvent.click(button);
		fireEvent.click(button);
		expect(menuRendered.getByRole('menu-icon').getAttribute('aria-label')).toBe('open-menu');
		expect(menuRendered.getByRole('menu-div')).toHaveClass('h-0');
	});

	it('should open menu (div button)', () => {
		const menuRendered = renderMenuMobile();

		const div = menuRendered.getByRole('menu-div');
		fireEvent.click(div);

		expect(menuRendered.getByRole('menu-icon').getAttribute('aria-label')).toBe('close-menu');
		expect(menuRendered.getByRole('menu-div')).not.toHaveClass('h-0');
	});

	it('should close menu (div button)', () => {
		const menuRendered = renderMenuMobile();

		const div = menuRendered.getByRole('menu-div');
		fireEvent.click(div);
		fireEvent.click(div);
		expect(menuRendered.getByRole('menu-icon').getAttribute('aria-label')).toBe('open-menu');
		expect(menuRendered.getByRole('menu-div')).toHaveClass('h-0');
	});
});
