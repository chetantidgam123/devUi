import { Component, OnInit } from '@angular/core';
import { api_data_json } from './apidata';

@Component({
  selector: 'app-apidoc',
  templateUrl: './apidoc.component.html',
  styleUrls: ['./apidoc.component.scss']
})
export class ApidocComponent implements OnInit {
  dataFromServer: any = api_data_json
  constructor() { }

  ngOnInit(): void {
  }
  getSubTable(data: any) {
    if (data == '') {
      return 'None';
    }
    let data_string = '<table>';

    data.forEach((element: any) => {

      data_string += "<tr>"
      data_string += "<td>" + Object.keys(element)[0] + "</td>"
      data_string += "<td>" + Object.values(element)[0] + "</td>"
      data_string += "</tr>"
    });
    data_string += '</table>';

    return data_string;
  }

  getJsonBody(obj: any) {
    if (obj == '') {
      return 'None';
    }
    return JSON.stringify(obj, undefined, 2);
  }
}
