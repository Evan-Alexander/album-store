import {Pipe, PipeTransform} from '@angular/core';
import { Album } from './album.model';
import { AlbumService } from './album.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Pipe({
  name: 'filter',
  pure: false
})


export class FilterPipe implements PipeTransform {
  // Album: [];

  transform(input: Album[], priceFilter) {
    if (input) {
      var output: Album[] = [];
      if (priceFilter === "underTen") {
        for(var i = 0; i < input.length; i++) {
          if (parseFloat(input[i].price) < 10) {
            output.push(input[i]);
          }
        }
        return output;
      } else if (priceFilter === "overTen") {
        for (var i = 0; i < input.length; i++) {
          if (parseFloat(input[i].price) > 10) {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }
  }
}
