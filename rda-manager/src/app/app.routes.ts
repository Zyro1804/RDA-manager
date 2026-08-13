import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    children:[
      {
        path:'inicio',
        loadComponent: ()=>
          import('./pages/home/inicio/inicio.component').then((m)=>m.InicioComponent),
      },
       {
        path:'animales',
        loadComponent: ()=>
          import('./pages/home/animales/animales.component').then((m)=>m.AnimalesComponent),
      },
      {
        path:'perfil',
        loadComponent: ()=>
          import('./pages/home/perfil/perfil.component').then((m)=>m.PerfilComponent),
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }

    ]
  },
  {
    path:'home/animales/crear',
    loadComponent: ()=> import('./pages/home/animales/crear/crear.component').then((m)=>m.CrearComponent)
  },
  {
    path:'home/animales/:uuid',
    loadComponent: ()=> import('./pages/home/animales/animal-info/animal-info.component').then((m)=>m.AnimalInfoComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro.component').then((m) => m.RegistroComponent),
  },
  {
    path: 'splash',
    loadComponent: () => import('./pages/splash/splash.component').then((m)=> m.SplashComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'punto_de_venta/home',
    loadComponent:() => import('./pages/punto_de_venta/home/home.component').then((m)=> m.HomeComponent),
    children:[
      {
        path:'inicio',
        loadComponent: ()=>
          import('./pages/punto_de_venta/home/inicio/inicio.component').then((m)=>m.InicioComponent),
      },
      {
        path:'inventario',
        loadComponent: ()=>
          import('./pages/punto_de_venta/home/inventario/inventario.component').then((m)=>m.InventarioComponent),
      },
      {
        path:'caja',
        loadComponent: ()=>
          import('./pages/punto_de_venta/home/caja/caja.component').then((m)=>m.CajaComponent),
      },
      {
        path:'ventas',
        loadComponent: ()=>
          import('./pages/punto_de_venta/home/ventas/ventas.component').then((m)=>m.VentasComponent),
      },
         {
        path:'perfil',
        loadComponent: ()=>
          import('./pages/punto_de_venta/home/perfil/perfil.component').then((m)=>m.PerfilComponent),
      },
           {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }
    ]
    
  }
  
];
