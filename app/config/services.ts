export type Service = {
  title: string;
  description: string;
  icon: string;
  link: string;
  linkText: string;
}

export const services: Service[] = [
  {
    title: 'Agile team builder',
    description: 'Our flagship programme for accelerating your delivery and upskilling your team.',
    icon: '/icons/teambuilder.png',
    link: '/resources',
    linkText: 'Agile team builder',
  },
  {
    title: 'Resources',
    description: 'Free resources for you to download.',
    icon: '/icons/resources.png',
    link: '/resources',
    linkText: 'Resources',
  },
  {
    title: 'Help',
    description: 'Reach out to us if you need help with one of your projects.',
    icon: '/icons/help.png',
    link: 'mailto:info@radicalit.co.uk',
    linkText: 'Help',
  },
  {
    title: 'Report a problem',
    description: 'Login for support with one of our Live Services',
    icon: '/icons/report.png',
    link: 'https://radicalit-team.atlassian.net/servicedesk/customer/portal/1',
    linkText: 'Report a problem',
  }
]