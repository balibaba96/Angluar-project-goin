import { Component, OnInit, Inject } from '@angular/core';
import { IndicatorsService } from '../../../../services/indicators.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OnboardingPartnerComponent } from '../../../partners/onboarding-partner/onboarding-partner.component';
import { createInjectable } from '@angular/compiler/src/core';
import { RadioListItemsComponent } from '../../../../dialogs/radio-list-items/radio-list-items.component';

@Component({
  selector: 'app-onboarding-partner-merchant',
  templateUrl: './onboarding-partner-merchant.component.html',
  styleUrls: ['./onboarding-partner-merchant.component.scss']
})
export class OnboardingPartnerMerchantComponent implements OnInit {
 
  clientsList = [];
  merchantsList = [];
  dataArray = [];
  dialogName: string;

  constructor(
    public dialog: MatDialog,
    private indicatorsService: IndicatorsService,

    //including parent class or object
    @Inject(OnboardingPartnerComponent) private cascadingHandle: OnboardingPartnerComponent
  ) {

    this.jsonCommModule(data => {
      this.clientsList = data;
      this.openDialog(this.dialog);
    });
  }
  
  ngOnInit() {
  }

  jsonCommModule(cb) {
    const req = new XMLHttpRequest();
    
    //open(method: string, url: string)
    req.open('GET', `assets/data/companyList.json`);
    req.onload = () => {
      const rows = JSON.parse(req.response);
      cb(rows);
    };
    req.send();
  }

  openDialog(dialog): void {
    this.indicatorsService.setClientsIndicator('true');
    this.dataArray = this.clientsList;
    this.dialogName = this.cascadingHandle.partnerInnerMenu[3].name;
    const dialogRef = this.dialog.open(RadioListItemsComponent, {
      data: {
        dataArray: this.dataArray,
        dialogName: this.dialogName
      },
      autoFocus: false
    });
   
    dialogRef.afterClosed().subscribe(result => {
      //add component dynamically
      if (result){
        this.cascadingHandle.partnerInnerMenu.push({'path':"add", 'name':result, 'indicator':""});
      }

    });
  }
}