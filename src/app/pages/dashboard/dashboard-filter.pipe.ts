import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'dashboardFilter'
})
export class DashboardFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return _.filter(array, (row:any) => (row.longName && row.longName.toLowerCase().indexOf(query.toLowerCase()) > -1)
      || (row.symbol && row.symbol.toLowerCase().indexOf(query.toLowerCase()) > -1)
      );
    }
    return array;
  }

}
