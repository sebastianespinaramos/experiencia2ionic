import { Component, OnInit } from '@angular/core';
import { BreedsService } from 'src/app/services/breeds.service';
import { Any } from '../../interfaces/interfaces';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.page.html',
  styleUrls: ['./breeds.page.scss'],
})
export class BreedsPage implements OnInit {

  breeds: Any[] = []

  constructor(private breedsService:BreedsService) { }

  ngOnInit() {
    this.breedsService.getTopHeadLines().subscribe(resp=>
      {
        console.log('breeds', resp);

        this.breeds.push(...resp.breeds);

      })
  }

}
