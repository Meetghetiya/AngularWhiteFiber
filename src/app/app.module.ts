import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ExportComponent } from './export/export.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';
import { HeadingComponent } from './heading/heading.component';
import { WhyWhiteFiberComponent } from './why-white-fiber/why-white-fiber.component';
import { SliderComponent } from './slider/slider.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { StatSectionComponent } from './stat-section/stat-section.component';
import { Slider2Component } from './slider2/slider2.component';
import Swiper from 'swiper';
import { CountrySliderComponent } from './country-slider/country-slider.component';
import { HeadingImageComponent } from './heading-image/heading-image.component';
import { NapkinTissueComponent } from './Product/napkin-tissue/napkin-tissue.component';
import { FacialTissuePaperComponent } from './Product/facial-tissue-paper/facial-tissue-paper.component';
import { ToiletTissuePaperComponent } from './Product/toilet-tissue-paper/toilet-tissue-paper.component';
import { KitchenTissueComponent } from './Product/kitchen-tissue/kitchen-tissue.component';
import { ProductshowComponent } from './Product/productshow/productshow.component';
import { SelectionCardComponent } from './Product/selection-card/selection-card.component';
import { CompanyProfileComponent } from './about/company-profile/company-profile.component';
import { InfrastructureComponent } from './about/infrastructure/infrastructure.component';
import { CertificatesComponent } from './about/certificates/certificates.component';
import { FSCCertificateComponent } from './about/fsccertificate/fsccertificate.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ContactComponent } from './contact/contact.component';
import { QualityComponent } from './quality/quality.component';
import { MainproductComponent } from './mainproduct/mainproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ExportComponent,
    MissionVisionComponent,
    HeadingComponent,
    WhyWhiteFiberComponent,
    SliderComponent,
    FooterComponent,
    ManufactureComponent,
    StatSectionComponent,
    Slider2Component,
    CountrySliderComponent,
    HeadingImageComponent,
    NapkinTissueComponent,
    FacialTissuePaperComponent,
    ToiletTissuePaperComponent,
    KitchenTissueComponent,
    ProductshowComponent,
    SelectionCardComponent,
    CompanyProfileComponent,
    InfrastructureComponent,
    CertificatesComponent,
    FSCCertificateComponent,
    CatalogueComponent,
    ContactComponent,
    QualityComponent,
    MainproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
