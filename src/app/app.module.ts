import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { Reducers } from './reducers/index';
import { AppRoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './page/page-home/page-home.component';
import { LaunchService } from './service/launch/launch.service';
import { AppService } from './service/app.service';

@NgModule({
    declarations: [
        AppComponent,
        PageHomeComponent
    ],
    imports: [
        StoreModule.forRoot(Reducers),
        BrowserModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatCardModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [
        AppService,
        LaunchService
    ],
    bootstrap: [AppComponent],
    exports: [PageHomeComponent]
})
export class AppModule { }
