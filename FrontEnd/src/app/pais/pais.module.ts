import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { RegionInputComponent } from './components/region-input/region-input.component';
import { CapitalInputComponent } from './components/capital-input/capital-input.component';
import { CapitalTablaComponent } from './capital-tabla/capital-tabla.component';
import { RegionTablaComponent } from './region-tabla/region-tabla.component';


@NgModule({
  declarations: [PorCapitalComponent, PorPaisComponent, PorRegionComponent, VerPaisComponent, PaisTablaComponent, PaisInputComponent, RegionInputComponent, CapitalInputComponent, CapitalTablaComponent, RegionTablaComponent],
  exports:[PorCapitalComponent, PorPaisComponent, PorRegionComponent, VerPaisComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class PaisModule { }
