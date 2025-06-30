import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExportComponent } from './export/export.component';
import { CompanyProfileComponent } from './about/company-profile/company-profile.component';
import { InfrastructureComponent } from './about/infrastructure/infrastructure.component';
import { CertificatesComponent } from './about/certificates/certificates.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ContactComponent } from './contact/contact.component';
import { FeederComponent } from './feeder/feeder.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled' 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
