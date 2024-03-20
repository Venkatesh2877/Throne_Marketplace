import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buytickets',
  templateUrl: './buytickets.component.html',
  styleUrls: ['./buytickets.component.scss']
})
export class BuyticketsComponent implements OnInit {

  constructor() { }

  ticketsData = [{ image: 'https://dev1-uploads.arevea.com/banner/1659966102739.webp', price: '5.0', name: 'Erc 20 integration' }]

  ngOnInit() {
  }

}
