import { ThemeVariant } from '.';

export type ButtonVariant = ThemeVariant | 'outlined';
export type InputVariant = Omit<ThemeVariant, 'secondary'>;