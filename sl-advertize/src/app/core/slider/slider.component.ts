import { Component } from '@angular/core';
import {NgbCarousel, NgbSlide, NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  standalone: true,
    imports: [
        NgbCarousel,
        NgbSlide,
        NgbCarouselModule
    ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

}
