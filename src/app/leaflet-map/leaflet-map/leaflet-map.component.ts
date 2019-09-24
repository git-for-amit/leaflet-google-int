import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements OnInit, AfterViewInit {

  leafletMap: L.Map;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.leafletMap = L.map("leaflet-map").setView([37.0902, -95.7129], 13);
    let googleRoadMap = L.gridLayer.googleMutant({
      type: 'roadmap'
    }).addTo(this.leafletMap);
    
  }

}
