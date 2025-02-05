import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AchatComponent } from './components/achat/achat.component';
import { VenteComponent } from './components/vente/vente.component';
import { StockComponent } from './components/stock/stock.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "achat", component: AchatComponent },
    { path: "vente", component: VenteComponent },
    { path: "stock", component: StockComponent },
    { path: "**", redirectTo: "", pathMatch: "full" }
];