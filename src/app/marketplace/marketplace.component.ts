import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Pipe, PipeTransform} from '@angular/core';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})

export class MarketplaceComponent implements OnInit {
  albums;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.getAlbums().subscribe(dataLastEmittedFromObserver => {
      this.albums = dataLastEmittedFromObserver;
      console.log(this.albums);
    })
  }

  goToDetailPage(clickedAlbum) {
    this.router.navigate(['albums', clickedAlbum.$key]);
  }

  priceFilter: string = "allAlbums";

  onChange(optionFromMenu) {
    this.priceFilter = optionFromMenu;
  }

}
