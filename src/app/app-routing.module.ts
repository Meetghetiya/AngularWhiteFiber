import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExportComponent } from './export/export.component';
import { NapkinTissueComponent } from './Product/napkin-tissue/napkin-tissue.component';
import { FacialTissuePaperComponent } from './Product/facial-tissue-paper/facial-tissue-paper.component';
import { ToiletTissuePaperComponent } from './Product/toilet-tissue-paper/toilet-tissue-paper.component';
import { KitchenTissueComponent } from './Product/kitchen-tissue/kitchen-tissue.component';
import { CompanyProfileComponent } from './about/company-profile/company-profile.component';
import { InfrastructureComponent } from './about/infrastructure/infrastructure.component';
import { CertificatesComponent } from './about/certificates/certificates.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Export', component: ExportComponent },
  { path: 'product/napkin-tissue', component: NapkinTissueComponent },
  { path: 'product/facial-tissue-paper', component: FacialTissuePaperComponent },
  { path: 'product/toilet-tissue-paper', component: ToiletTissuePaperComponent },
  { path: 'product/kitchen-tissue', component: KitchenTissueComponent },
  { path: 'company', component: CompanyProfileComponent },
  { path: 'infrastructure', component: InfrastructureComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled' 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
