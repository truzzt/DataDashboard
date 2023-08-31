import { Injectable } from '@angular/core';
import { Theme } from '@mui/material/styles';
import theme from './truzztTheme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  getTheme(): Theme {
    return theme;
  }
}
