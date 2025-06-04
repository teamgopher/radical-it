export type Quote = {
  imageUrl: string;
  quote: string;
  name: string;
  title: string;
};

export const quotes: { [key: string]: Quote } = {
  vikki: {
    imageUrl: '/people/vikki.png',
    quote: 'Radical go an extra mile in solving problems. If you work with this team, expect agility, tailored solutions and a team that truly cares about your success.',
    name: 'Vikki Williams',
    title: 'Director, Arup',
  },
  guy: {
    imageUrl: '/people/guy.png',
    quote: 'Radical IT live and breathe the Agile ethos: every Sprint is delivered at lightning speed and no stone left unturned in the pursuit of done.',
    name: 'Guy Thompson',
    title: 'Managing Director, EnTrade',
  },
};