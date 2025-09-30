// Type definitions for navigation and animations

export interface CardRef {
  current: HTMLDivElement | null;
}

export interface AnimationConfig {
  duration: number;
  easing: string;
  variant: AnimationVariant;
}

export type AnimationVariant = 'default' | 'portal' | 'rotate' | 'flip' | 'slide';

export interface NavigationHandler {
  (ref: CardRef, href: string, variant?: AnimationVariant): void;
}

export interface CardProps {
  ref: CardRef;
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  onClick: NavigationHandler;
}

// Animation timing constants
export const ANIMATION_DURATIONS = {
  default: 300,
  portal: 600,
  rotate: 580,
  flip: 500,
  slide: 400
} as const;

export const ANIMATION_EASING = {
  smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
} as const;
