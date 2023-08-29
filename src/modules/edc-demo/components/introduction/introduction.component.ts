import { Component } from '@angular/core';
import { ThemeService } from '../../../../theme.service'; 
import { Theme } from '@mui/material/styles'; 

@Component({
  selector: 'edc-demo-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})

export class IntroductionComponent {
  constructor(private themeService: ThemeService) {}


  get theme(): Theme {
    return this.themeService.getTheme();
  }
}