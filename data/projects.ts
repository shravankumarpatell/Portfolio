export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Swift',
    description:
      'AI-powered web development platform that drastically reduces developer time-to-prototype.',
    logo: '/logos/swiftlogo.png',
    link: 'https://github.com/shravankumarpatell/swift',
    slug: 'Swift',
  },
  {
    title: 'FinTrack',
    description:
      'A multi-workplace personal finance management app designed for efficiency and real-time insights.',
    logo: '/logos/fintrackLogo.svg',
    link: 'https://github.com/shravankumarpatell/FinTrack',
    slug: 'FinTrack',
  },
  {
    title: 'Audify',
    description:
      'A web-based AI tool that enhances noisy audio into clear speech in real time using TensorFlow and Flask.',
    logo: '/logos/audifyLogo.png',
    link: 'https://github.com/shravankumarpatell/audify',
    slug: 'Audify',
  },
];
