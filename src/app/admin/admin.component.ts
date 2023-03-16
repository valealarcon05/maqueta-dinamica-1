import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Presentacion', cols: 1, rows: 1 },
          { title: 'Experiencia', cols: 1, rows: 1 },
          { title: 'Educacion', cols: 1, rows: 1 },
          { title: 'Habilidades', cols: 1, rows: 1 },
          { title: 'Proyectos', cols:1, rows:1 }
        ];
      }

      return [
        { title: 'Presentacion', cols: 1, rows: 1 },
        { title: 'Experiencia', cols: 1, rows: 1 },
        { title: 'Educacion', cols: 1, rows: 2 },
        { title: 'Habilidades', cols: 1, rows: 1 },
        { title: 'Proyectos', cols: 1, rows: 1}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
