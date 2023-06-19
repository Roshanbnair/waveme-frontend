import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(hindiSongs:any[],searchKey:string,propertyName:string): any[] {
    const result: any = [];
    if (!hindiSongs || searchKey == "" || propertyName == "") {
      return hindiSongs
    }
    hindiSongs.forEach((item: any) => {
      if (item[propertyName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())) {
        result.push(item);
      }
    })
    return result;
  }

}
