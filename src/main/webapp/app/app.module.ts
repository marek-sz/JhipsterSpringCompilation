import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSpringCompilationSharedModule } from 'app/shared/shared.module';
import { JhipsterSpringCompilationCoreModule } from 'app/core/core.module';
import { JhipsterSpringCompilationAppRoutingModule } from './app-routing.module';
import { JhipsterSpringCompilationHomeModule } from './home/home.module';
import { JhipsterSpringCompilationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSpringCompilationSharedModule,
    JhipsterSpringCompilationCoreModule,
    JhipsterSpringCompilationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSpringCompilationEntityModule,
    JhipsterSpringCompilationAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterSpringCompilationAppModule {}
