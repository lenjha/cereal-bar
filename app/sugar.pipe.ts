import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "sugarLevel",
  pure: false
})


export class SugarContentPipe implements PipeTransform {

  transform(input:Keg[], diabeticFriendly) {
    var output: Keg[] = [];
    if(diabeticFriendly === "allKegs") {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);

      }
      return output;
    } else if (diabeticFriendly === "diabeticFriendly") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].sugarContent < 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
