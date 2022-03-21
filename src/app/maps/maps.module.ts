import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';


@NgModule({
  declarations: [
    MapComponent,
    MapViewComponent,
    LoadingComponent,
    AngularLogoComponent,
    BtnMyLocationComponent,
    SearchBarComponent,
    SearchResultsComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MapComponent,
    
  ]
})
export class MapsModule { }
