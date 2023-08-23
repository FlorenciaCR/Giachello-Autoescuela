import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Inicio 🚗',
    url: '/inicio',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Información',
    url: '/informacion',
    iconComponent: { name: 'cil-description' }
  },
  {
    name: 'Sobre nosotros',
    url: '/sobreNosotros',
    iconComponent: { name: 'cil-user' }
  },
];
