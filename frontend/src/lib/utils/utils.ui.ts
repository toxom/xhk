// utils.ui.ts
import { writable } from 'svelte/store';

interface TooltipPosition {
  x: number;
  y: number;
}

interface SidebarState {
  isOpen: boolean;
  isPinned: boolean;
  tooltip: string;
  tooltipVisible: boolean;
  tooltipPosition: TooltipPosition;
}

export const sidebarState = writable<SidebarState>({
  isOpen: false,
  isPinned: false,
  tooltip: '',
  tooltipVisible: false,
  tooltipPosition: { x: 0, y: 0 }
});

export function handleMouseEnter() {
  sidebarState.update(state => ({
    ...state,
    isOpen: !state.isPinned ? true : state.isOpen
  }));
}

export function handleMouseLeave() {
  sidebarState.update(state => ({
    ...state,
    isOpen: !state.isPinned ? false : state.isOpen,
    tooltipVisible: false
  }));
}

export function handleNavClick(event: MouseEvent) {
  if ((event.target as HTMLElement).tagName === 'NAV') {
    sidebarState.update(state => {
      const newPinned = !state.isPinned;
      return {
        ...state,
        isPinned: newPinned,
        isOpen: newPinned,
        tooltip: newPinned ? 'Sidebar on' : 'Sidebar off',
        tooltipVisible: true,
        tooltipPosition: {
          x: event.clientX,
          y: event.clientY
        }
      };
    });

    setTimeout(() => {
      sidebarState.update(state => ({
        ...state,
        tooltipVisible: false
      }));
    }, 1500);
  }
}