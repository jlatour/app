import { Injectable } from '@angular/core';
import { Vinyl } from '../models/vinyl.interface';

@Injectable()
export class VinylService {

  constructor() {
    console.log('Construct VinylService instance');
   }

   private vinyls: Vinyl[] = [
    {
      id: 0,
      artist: 'Bob marley',
      title: 'Uprising',
      releaseDate: new Date().setFullYear(1958,3,6),
      imageUrl: 'http://viva-vinyl.com/wp-content/uploads/2014/07/bob_marley_the_wailers_uprising-1024x996.jpg'
    },
    {
      id: 1,
      title: 'Bad',
      artist: 'Michael Jackson',
      imageUrl: 'https://cvrvrsns.files.wordpress.com/2015/03/1518134-bad-michael-jackson-orig-1.jpg',
      releaseDate: new Date().setFullYear(1968,3,6)
    }
  ];

  getAll(): Vinyl[] {
    return this.vinyls.slice();
  }

  getOne(id: number): Vinyl {
    if (!id) {throw Error('Needs a valid ID !'); }
    return this.vinyls.find((a) => a.id === id);
  }

  addOne(vinyl: Vinyl): Vinyl{
    this.vinyls.push(vinyl);
    return vinyl;
  }

  updateOne(id: number, vinyl: Vinyl): Vinyl {
    this.vinyls = this.vinyls.map( (v) => v.id === +id ? vinyl : v );
    return vinyl;
  }

  deleteOne(id: number): any {
    this.vinyls = this.vinyls.filter( (v) => v.id !== id);
  }


}
