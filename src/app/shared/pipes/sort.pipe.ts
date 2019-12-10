import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<object>, key: string, order: 'ASC' |'DESC' = 'DESC'): Array<object> {
    return value.sort((a, b) => {
      if(order === 'ASC'){
        return a[key] > b[key] ? -1 : 1;
      } else {
        return a[key] > b[key] ? 1 : -1;
      }

    });
  }

}
