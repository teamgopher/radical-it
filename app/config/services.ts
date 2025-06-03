export type Service = {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const services: Service[] = [
  {
    title: 'Agile team builder',
    description: 'Our flagship programme for accelerating your delivery and upskilling your team.',
    icon: '/icons/teambuilder.png',
    link: '/',
  },
  {
    title: 'Resources',
    description: 'Free resources for you to download.',
    icon: '/icons/resources.png',
    link: '/',
  },
  {
    title: 'Help',
    description: 'Reach out to us if you need help with one of your projects.',
    icon: '/icons/help.png',
    link: '/',
  },
  {
    title: 'Report a problem',
    description: 'Login for support with one of our Live Services',
    icon: '/icons/report.png',
    link: '/',
  }
]