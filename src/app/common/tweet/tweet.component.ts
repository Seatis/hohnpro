import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'hohn-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  public ddMock: ddSelectItem[] = [
    {label: 'Gyömrő', value: 'gyomro', desc: '1111'},
    {label: 'Kiskunlacháza', value: 'kiskunlachaza', desc: '2222'},
    {label: 'Velence', value: 'velence', desc: '3333'}
  ];

  public selectedMock: ddSelectItem;

  constructor() { }

  public ngOnInit(): void {
    // var doc = new jspdf();
    // doc.text('Hello world!', 10, 10);
    // doc.save('a4.pdf');

    var head = [["ID", "Country", "Rank", "Capital"]];
        var body = [
            [1, "Denmark", 7.526, "Copenhagen"],
            [2, "Switzerland", 	7.509, "Bern"],
            [3, "Iceland", 7.501, "Reykjavík"],
            [4, "Norway", 7.498, "Oslo"],
            [5, "Finland", 7.413, "Helsinki"]
        ];
        var doc = new jspdf();
        doc.autoTable({head: head, body: body});
        // doc.autoTable({html: '#table', startY: 100});
        // doc.output("dataurlnewwindow");
        doc.save('ttt.pdf');
    
  }

  public change(): void {
    console.log(this.selectedMock);
  }

  public test(event): string {
    console.log(event);
    return 'hello';
  }

}

export interface ddSelectItem {
  label: string;
  value: string;
  desc: string;
}