import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedUiRoutingModule } from './shared-ui-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { AlertComponent } from './alert';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule, BsDropdownModule, BsDatepickerModule, TimepickerModule} from 'ngx-bootstrap';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { CharacterOnlyDirective } from './directive/onlycharacter.directive';
import { NumberOnlyDirective } from './directive/onlynumber.directive';
import { GrdFilterPipe } from './pipe/grd-filter.pipe';
import { NgxEditorModule } from 'ngx-editor';

const SHARED_COMPONENTS = [
  LoadingComponent,
  AlertComponent,
  CharacterOnlyDirective,
  NumberOnlyDirective,
  GrdFilterPipe,
];

@NgModule({
  imports: [
    RouterModule,
    SharedUiRoutingModule,
    CommonModule,
    NgxEditorModule,
    PDFExportModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: 'toast-bottom-right'
    }),
    NgxPaginationModule,
    OrderModule,
    NgxSpinnerModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  declarations: SHARED_COMPONENTS,
  exports: SHARED_COMPONENTS,
  entryComponents: []
})
export class SharedUiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedUiModule,
      providers: []
    };
  }
}
