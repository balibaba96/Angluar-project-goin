import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { TextMaskModule } from 'angular2-text-mask';
import 'hammerjs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpModule } from '@angular/http'; //service
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

//import
import { PartnersComponent } from './partners.component';
import { PartnerComponent } from './partner/partner.component';
import { PartnerDetaisComponent } from './partner/partner-detais/partner-detais.component';
import { PartnerClientsComponent } from './partner/partner-clients/partner-clients.component';
import { PartnerReportsComponent } from './partner/partner-reports/partner-reports.component';
import { OnboardingPartnerComponent } from './onboarding-partner/onboarding-partner.component';
import { OnboardingPartnerDetailsComponent } from './onboarding-partner/onboarding-partner-details/onboarding-partner-details.component';
import { OnboardingPartnerClientsComponent } from './onboarding-partner/onboarding-partner-clients/onboarding-partner-clients.component';
import { OnboardingPartnerReportsComponent } from './onboarding-partner/onboarding-partner-reports/onboarding-partner-reports.component';
import { OnboardingPartnerMerchantComponent } from './onboarding-partner/onboarding-partner-merchant/onboarding-partner-merchant.component';
import { PartnerActivityComponent } from './partner/partner-activity/partner-activity.component';


//routes
const innerPartner: Routes = [
    { path: 'details', component: PartnerDetaisComponent },
    { path: 'clients', component: PartnerClientsComponent },
    { path: 'reports', component: PartnerReportsComponent },
    { path: 'activity', component: PartnerActivityComponent }
  ];
const innerOnboardingPartner: Routes = [
    { path: 'details', component: OnboardingPartnerDetailsComponent },
    { path: 'clients', component: OnboardingPartnerClientsComponent },
    { path: 'reports', component: OnboardingPartnerReportsComponent },
    { path: 'merchant', component: OnboardingPartnerMerchantComponent }
  ];  
const partnerCustomRoutes: Routes = [
    { path: 'partners', component: PartnersComponent },
    { path: 'partner', component: PartnerComponent, children: innerPartner },
    { path: 'onboarding-partner', component: OnboardingPartnerComponent, children: innerOnboardingPartner },
  ];

  @NgModule({
    declarations: [
        PartnersComponent,
        PartnerComponent,
        PartnerDetaisComponent,
        PartnerClientsComponent,
        PartnerReportsComponent,
        OnboardingPartnerComponent,
        OnboardingPartnerDetailsComponent,
        OnboardingPartnerClientsComponent,
        OnboardingPartnerReportsComponent,
        OnboardingPartnerMerchantComponent,
        PartnerActivityComponent
    ],
    imports: [  
      BrowserModule,  
      RouterModule.forRoot(partnerCustomRoutes)  
    ] 
  
  })
export class PartnersModule{}