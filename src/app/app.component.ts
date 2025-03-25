import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
//  ngOnInit(): void {
//    AOS.init({
//      durration: 500,
//      easing: 'ease-in-out-single',
//      once: false,
//      mirror: false,
//      offset: 0,
//      delay: 0
//     });
//   }
ngOnInit(): void {
  AOS.init();
  setTimeout(() => {
    AOS.refresh(); // Refresh AOS to check for new elements
  }, 500);
}

}
