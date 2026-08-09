import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { aboutPageStyles as s } from "../../../public/dummyStyles";
import Link from "next/link";

const interests = [
  "FULL-STACK DEV",
  "WEBFLOW",
  "WEB DESIGN",
  "SAAS",
  "AUTOMATION",
  "SYSTEM DESIGN",
  "PROBLEM SOLVING",
  "FOOTBALL",
  "LEARNING",
];

const techStack = [
  "Webflow",
  "React",
  "Next.js",
  "NestJS",
  "TypeScript",
  "JavaScript",
  "Figma",
  "Zapier",
  "MongoDB",
  "PostgreSQL",
];

const email = "nazmulhasan677441@gmail.com";

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  email,
)}`;

export default function About() {
  return (
    <div className={s.pageContainer}>
      <div className={s.contentContainer}>
        <div className={s.backgroundContainer}>
          <div className={s.backgroundEffect}>
            <BackgroundBeamsWithCollision />
          </div>

          <div className={s.contentWrapper}>
            {/* Hero */}
            <h1 className={s.mainHeading}>MD. Nazmul Hasan</h1>

            <div className={s.interestsContainer}>
              {interests.map((interest, idx) => (
                <span key={interest} className={s.interestItem}>
                  {interest}
                  {idx < interests.length - 1 && (
                    <span className={s.interestSeparator}>.</span>
                  )}
                </span>
              ))}
            </div>

            <div className={s.techStackContainer}>
              {techStack.map((tech) => (
                <span key={tech} className={s.techPill}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className={s.sectionsContainer}>
              {/* Who I Am */}
              <section>
                <h2 className={s.sectionHeading}>Who I Am</h2>

                <p className={s.paragraph}>
                  Hello! I&apos;m <strong>MD. Nazmul Hasan</strong>, a Full
                  Stack Developer and <strong>Webflow Expert</strong> from
                  Bangladesh. I specialize in building modern, responsive, and
                  production-ready websites and web applications using Webflow,
                  React.js, Next.js, NestJS, TypeScript, and modern JavaScript
                  technologies.
                  <br />
                  <br />I have hands-on experience working on{" "}
                  <strong>60+ real client projects</strong>, helping businesses
                  turn ideas and designs into polished digital experiences. I
                  enjoy combining strong development skills with visual design,
                  animations, reusable components, and smart automation.
                </p>
              </section>

              {/* What I Do */}
              <section>
                <h2 className={s.sectionHeading}>What I Do</h2>

                <p className={s.paragraph}>
                  I build responsive and high-quality websites with{" "}
                  <strong>Webflow</strong>, including CMS-driven websites,
                  landing pages, reusable components, e-commerce experiences,
                  custom interactions, and advanced animations. I also work with
                  Figma to turn designs into accurate, responsive Webflow
                  builds.
                  <br />
                  <br />
                  Alongside Webflow development, I build full-stack applications
                  using React, Next.js, NestJS, TypeScript, MongoDB, and
                  PostgreSQL. I also create business workflows and integrations
                  using <strong>Zapier automation</strong>.
                </p>
              </section>

              {/* My Journey */}
              <section>
                <h2 className={s.sectionHeading}>My Journey</h2>

                <p className={s.paragraph}>
                  My journey started with frontend development and gradually
                  grew into both full-stack engineering and visual web
                  development. Over the past 1.5+ years, I have worked on{" "}
                  <strong>60+ real client projects</strong>, primarily building
                  websites and digital experiences with Webflow.
                  <br />
                  <br />
                  Throughout these projects, I have worked with Webflow CMS,
                  e-commerce, responsive layouts, reusable components, custom
                  CSS and JavaScript, animations, interactions, and third-party
                  integrations. Alongside Webflow, I expanded my skills into
                  React, Next.js, NestJS, databases, REST APIs, and SaaS
                  development.
                </p>
              </section>

              {/* Vision */}
              <section>
                <h2 className={s.sectionHeading}>Vision</h2>

                <p className={s.paragraph}>
                  My goal is to become a well-rounded software engineer who can
                  handle everything from visual design and Webflow development
                  to scalable full-stack applications and business automation. I
                  want to continue learning, work on meaningful products, and
                  create digital experiences that are not only visually polished
                  but also functional, scalable, and easy to maintain.
                </p>
              </section>

              {/* Beyond Code */}
              <section>
                <h2 className={s.sectionHeading}>Beyond Code</h2>

                <p className={s.paragraph}>
                  Beyond programming, I enjoy playing football, exploring new
                  technologies, experimenting with Webflow interactions and
                  animations, building personal projects, and learning new
                  tools. I&apos;m always interested in discovering better ways
                  to turn ideas into useful and engaging digital products.
                </p>
              </section>
            </div>

            {/* CTA */}
            <div className={s.ctaContainer}>
              <Link
                href="/contact"
                className={s.primaryButton}
                aria-label="Get in touch"
              >
                Get in Touch
              </Link>

              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={s.secondaryButton}
                aria-label={`Compose email to ${email}`}
              >
                <svg
                  className={s.emailIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                E-Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
