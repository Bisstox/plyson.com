import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Acerca de',
      href: getPermalink('/acerca'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
  ],
  actions: [{ text: 'Contacto', href: '/contacto'}],
};

export const footerData = {
  links: [
    {
      title: 'Productos',
      links: [
        { text: 'Características', href: '#' },
        { text: 'Historias de Usuarios', href: '#' },
        { text: 'Precios', href: '#' },
      ],
    },
    {
      title: 'Plataforma',
      links: [
        { text: 'API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Desktop', href: '#' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Foro', href: '#' },
        { text: 'Servicios Profesionales', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Acerca', href: '/acerca' },
        { text: 'Blog', href: '/blog' },
        { text: 'Prensa', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Impacto Social', href: '#' },
        { text: 'Tienda', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/bisstox' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/bisstox/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/Bisstox/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Bisstox', target: '_blank' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    Made with 💜 in Ecuador - Designed by <a href='https://bisstox.com' target="_blank">Bisstox</a>.
  `,
};