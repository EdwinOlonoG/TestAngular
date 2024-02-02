import { Component } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trigger',
  standalone: true,
  imports: [LoaderComponent, CommonModule, FormsModule],
  templateUrl: './trigger.component.html',
  styleUrl: './trigger.component.css'
})
export class TriggerComponent {

  showImage: boolean = false;
  timeLapse: number = 0;
  timeLoader: number = 0;
  public activateLoader() {
    this.showImage = !this.showImage;
  }
}
