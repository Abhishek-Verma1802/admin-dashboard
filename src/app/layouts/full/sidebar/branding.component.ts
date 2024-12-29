import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="branding">
      <h2>Admin</h2>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
