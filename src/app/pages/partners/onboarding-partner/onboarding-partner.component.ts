import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { IndicatorsService } from '../../../services/indicators.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CheckListItemsComponent } from '../../../dialogs/check-list-items/check-list-items.component';

@Component({
  selector: 'app-onboarding-partner',
  templateUrl: './onboarding-partner.component.html',
  styleUrls: ['./onboarding-partner.component.scss'],
  providers: [IndicatorsService]
})

export class OnboardingPartnerComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  activateButton = true;
  activePage = false;
  partnerInnerMenu = [
    {
      path: 'details',
      name: 'Details',
      indicator: ''
    },
    {
      path: 'clients',
      name: 'Clients',
      indicator: ''
    },
    {
      path: 'reports',
      name: 'Reports',
      indicator: ''
    },
    {
      path: 'merchant',
      name: 'Merchant',
      indicator: ''
    }
  ];
  pageSettings = ['Inactive', 'Option 2', 'Option 3', 'Option 4'];

  indicators = {
    detailsIndicator: '',
    clientsIndicator: '',
    reportsIndicator: '',
    merchantIndicator: ''
  };

  dataArray = [];
  dialogName: string;
  dialog: MatDialog;
  clientsList = [
    {
      name: 'Orca Nutra Inc.',
      included: false,
      active: false,
      merchantsList: [
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        }
      ]
    },
    {
      name: 'Agile Tech Solutions',
      included: false,
      active: false,
      merchantsList: [
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        }
      ]
    },
    {
      name: 'AK Technologies',
      included: false,
      active: false,
      merchantsList: [
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        }
      ]
    },
    {
      name: 'Areva Technologies',
      included: false,
      active: false,
      merchantsList: [
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        }
      ]
    },
    {
      name: 'Bruk Holdings',
      included: false,
      active: false,
      merchantsList: [
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        }
      ]
    },
    {
      name: 'Central Business Funding LLC',
      included: false,
      active: false,
      merchantsList: [
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        }
      ]
    },
    {
      name: 'CGI INTERNATIONAL LIMITED',
      included: false,
      active: false,
      merchantsList: [
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        }
      ]
    },
    {
      name: 'Commonhealth Equity Group LLC DBA Key Credit Repair',
      included: false,
      active: false,
      merchantsList: [
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        }
      ]
    },
    {
      name: 'Cosmique Global',
      included: false,
      active: false,
      merchantsList: [
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        }
      ]
    },
    {
      name: 'D3D LLC',
      included: false,
      active: false,
      merchantsList: [
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        },
        {
          name: 'Merchant Name',
          included: false,
          active: false,
          midsList: [
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            },
            {
              name: 'MID Alias',
              included: false
            }
          ]
        }
      ]
    }
  ];
  merchantsList = [];
  clientsListIndex: number;
  merchantsListIndex: number;


  constructor(private indicatorsService: IndicatorsService) {
    indicatorsService.indicator$.subscribe(indicator => {
      this.indicators = indicator;
      this.partnerInnerMenu[0].indicator = this.indicators.detailsIndicator;
      this.partnerInnerMenu[1].indicator = this.indicators.clientsIndicator;
      this.partnerInnerMenu[2].indicator = this.indicators.reportsIndicator;
      this.partnerInnerMenu[3].indicator = this.indicators.merchantIndicator;
      this.activateButton = true;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  titleVal = val => console.log(val);

  inactive = val => {
    this.activePage = val;
  };

  selectPageSettings = val => {
    switch (val) {
      case 'Inactive':
        this.activePage = false;
        break;  
      default:
        break;
    }
  };
}
