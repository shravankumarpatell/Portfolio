import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Shravan Kumar Patel</h1>
        <div className={styles.subtitle}>Software Developer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a B.Tech student at The LNM Institute of Information Technology, Jaipur, with a strong passion for software development and problem-solving. I enjoy building impactful projects that merge innovation with practicality — such as Swift, an AI-powered web development platform that drastically reduces developer time-to-prototype, and FinTrack, a multi-workplace personal finance management app designed for efficiency and real-time insights.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on Java, JavaScript, TypeScript, React.js, Tailwind CSS, Node.js, Express.js, MongoDB, MySQL, and Firebase, along with hands-on experience in full-stack development, AI integrations, real-time systems, and database management. I love working on products that improve user experience, optimize workflows, and solve real-world challenges.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Apart from academics, I’ve actively contributed to my college community. As the Events & PR Head for Vivacity 2023, I successfully organized and promoted over 15 events, boosting participation by 50%. I was also part of the Coverage Team for Plinth & Vivacity, where my photography and content creation enhanced event visibility by 40%.
            </p>
            <p className={styles.paragraph}>
              I see myself as a curious learner and builder, always exploring new technologies and striving to create software solutions that are scalable, efficient, and user-friendly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
