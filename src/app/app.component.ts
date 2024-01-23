import { ChangeDetectorRef, Component, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_MAP, RouteType, TYPE_TITLE_MAP } from './public/route/route.domain';
import { ThemeService } from './public/theme/service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private themeService: ThemeService) {
    let themeType = this.themeService.getCurrentThemeType();
    this.themeService.setThemeByThemeType(themeType);
  }
}
