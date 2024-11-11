import { HeaderType } from '@/types/global';
import { createContext } from 'react';

export const HeaderContext = createContext<HeaderType | null>(null);
