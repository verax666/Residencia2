import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ToastController } from '@ionic/angular';

var inicio:string= "slides";
var r;
(()=>{
r = localStorage.getItem('2');
if(r==null){
inicio = "slides";
localStorage.setItem("2","true");
}else{
inicio = "sitios"; 

}
})();
  const routes: Routes = [
    {
      path: '',
      redirectTo: inicio,
      pathMatch: 'full'
    },
    {
      path: 'sitios',
      loadChildren: () => import('./sitios/sitios.module').then( m => m.SitiosPageModule)
    },
  {
    path: 'slides',
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'modal-text',
    loadChildren: () => import('./modal-text/modal-text.module').then( m => m.ModalTextPageModule)
  },
   
    
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


constructor(public toastctrl: ToastController){}

ngOnInit() {
 
}
}


