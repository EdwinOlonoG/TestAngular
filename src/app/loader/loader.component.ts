import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {

  constructor (private router: Router) {}

  @Input() show: boolean = false;
  @Input() timeLoader: number = 0;
  @Input() timeLapse: number = 0;
  index: number = 0;
  currentImage: string = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/1e/latest/20221013194849/Artwork_Snorlax_UNITE.png/640px-Artwork_Snorlax_UNITE.png";
  dataImages: string[] = [
    "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/1e/latest/20221013194849/Artwork_Snorlax_UNITE.png/640px-Artwork_Snorlax_UNITE.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    "https://images.gameinfo.io/pokemon/256/p143f157.png",
    
  ];
  ngOnInit() {
    this.show = true;
    this.setNextImage();
    setTimeout(() => {
      this.show = false;
      this.index = 0;
      this.router.navigate(['otro-componente']);
    }, this.timeLoader);
  }

  public setNextImage() {
    setTimeout(() => {
      this.index = (this.index < this.dataImages.length -1) ? (this.index + 1) : 0;
      this.currentImage = this.dataImages[this.index];
      if(this.show){
        this.setNextImage();
      }
    }, this.timeLapse);
  }
}
