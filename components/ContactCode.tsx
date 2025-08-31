import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'nitinranganath.com',
    href: 'https://nitinranganath.com',
  },
  {
    social: 'email',
    link: 'shravankumarpatelofficial@gmail.com',
    href: 'shravankumarpatelofficial@gmail.com',
  },
  {
    social: 'github',
    link: 'shravankumarpatell',
    href: 'https://github.com/shravankumarpatell',
  },
  {
    social: 'linkedin',
    link: 'shravankumarpatel',
    href: 'https://www.linkedin.com/in/shravan-kumar-patel-38b42a261/',
  },
  {
    social: 'twitter',
    link: 'Shravanpatell',
    href: 'https://x.com/Shravanpatell',
  },
  {
    social: 'telegram',
    link: 'Shravan patel',
    href: 'https://t.me/Shravanpatel47',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
