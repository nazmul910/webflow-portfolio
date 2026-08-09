"use client";

import { Award, Briefcase, Code2, Rocket, Users } from "lucide-react";

import { timelineStyles as s } from "../../../public/dummyStyles";
import { Timeline } from "@/components/ui/timeline";

export default function TimeLineDemo() {
  const data = [
    {
      title: "Mar 2025 - Present",
      content: (
        <div>
          <div>
            <h3 className={s.contentTitle}>Webflow Expert · Softvence</h3>

            <p className={s.contentSubtitle}>Dhaka, Bangladesh • On-site</p>

            <p className={s.contentSubtitle}>
              Building high-quality, responsive, and production-ready Webflow
              websites for real-world clients.
            </p>
          </div>

          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Built and delivered <strong>60+ real client projects</strong> in
              Webflow across different industries, business types, and design
              styles.
            </li>

            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Developed responsive websites, landing pages, reusable components,
              CMS-based websites, dynamic collections, and custom templates.
            </li>

            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Specialized in Webflow animations, interactions, scroll effects,
              custom transitions, and polished micro-interactions to create
              engaging user experiences.
            </li>

            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Implemented complex website functionalities using custom HTML,
              CSS, JavaScript, Webflow CMS, Forms, and third-party integrations.
            </li>

            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Built and managed e-commerce websites including product
              collections, dynamic content, layouts, and essential e-commerce
              functionality.
            </li>

            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Created automated workflows using <strong>Zapier</strong> to
              connect Webflow with external tools, forms, CRM systems, email
              platforms, and other business applications.
            </li>

            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Converted Figma designs and creative references into
              pixel-accurate, responsive Webflow websites optimized for desktop,
              tablet, and mobile.
            </li>

            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Worked directly with clients to understand requirements, suggest
              solutions, implement revisions, and deliver production-ready
              websites.
            </li>

            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Handled complete project workflows from initial design and
              development to CMS setup, responsiveness, animations, testing,
              optimization, and final deployment.
            </li>
          </ul>

          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>Webflow</span>
            <span className={s.techBadge}>Webflow CMS</span>
            <span className={s.techBadge}>Webflow E-commerce</span>
            <span className={s.techBadge}>Figma</span>
            <span className={s.techBadge}>HTML</span>
            <span className={s.techBadge}>CSS</span>
            <span className={s.techBadge}>JavaScript</span>
            <span className={s.techBadge}>GSAP</span>
            <span className={s.techBadge}>Animations</span>
            <span className={s.techBadge}>Interactions</span>
            <span className={s.techBadge}>Responsive Design</span>
            <span className={s.techBadge}>Zapier</span>
            <span className={s.techBadge}>Automation</span>
            <span className={s.techBadge}>CMS</span>
          </div>
        </div>
      ),
    },

    {
      title: "May 2024 - Sep 2025",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerPurple}>
              <Rocket className={s.iconPurple} />
            </div>

            <div>
              <h3 className={s.contentTitle}>
                Full Stack Developer · ReturnHex
              </h3>

              <p className={s.contentSubtitle}>Remote • Product Development</p>

              <p className={s.contentSubtitle}>
                Building SaaS platforms & modern business applications.
              </p>
            </div>
          </div>

          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Developed a Multi-Tenant SaaS E-Commerce Platform with tenant
              isolation, JWT authentication, RBAC, and SSLCommerz integration.
            </li>

            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Built a role-based Real Estate Platform with Admin, Agent, and
              Client dashboards alongside Stripe payment integration.
            </li>

            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Developed high-performance marketing websites using Next.js, GSAP,
              Tailwind CSS, and modern frontend best practices.
            </li>
          </ul>

          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>Next.js</span>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>NestJS</span>
            <span className={s.techBadge}>Prisma</span>
            <span className={s.techBadge}>PostgreSQL</span>
            <span className={s.techBadge}>Stripe</span>
            <span className={s.techBadge}>JWT</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className="mb-8">
            <div className={s.timelineBadge}>
              <span className={s.timelineBadge}>Career Timeliner</span>
            </div>
            <h1 className={s.mainTitle}>Career Timeline</h1>
            <p className={s.mainParagraph}>
              My professional journey as a Full Stack Developer, building
              scalable SaaS platforms, business applications, and modern web
              solutions.
            </p>
            <div className={s.legendContainer}>
              <div className={s.legendItem}>
                <div className={`${s.legendDot} bg-blue-500`}></div>
                <span className={s.legendText}>Current Position</span>
              </div>
              <div className={s.legendItem}>
                <div className={`${s.legendDot} bg-purple-500`}></div>
                <span className={s.legendText}>Professional Experience</span>
              </div>
              {/* <div className={s.legendItem}>
                <div className={`${s.legendDot} bg-green-500`}></div>
                <span className={s.legendText}>Growth Startup</span>
              </div> */}
              <div className={s.legendItem}>
                <div className={`${s.legendDot} bg-amber-500`}></div>
                <span className={s.legendText}>Early career</span>
              </div>
            </div>
          </div>
          <Timeline data={data} />
          <div className={s.techSectionContainer}>
            <div className={s.techSectionHeader}>
              <div className={s.techSectionIconContainer}>
                <Code2 className={s.techSectionIcon} />
              </div>
              <div>
                <h3 className={s.techSectionTitle}>Technologies Mastered</h3>
                <p className={s.techSectionSubtitle}>
                  Full-Stack experties across modern tech stack
                </p>
              </div>
            </div>
            <div className={s.techGrid}>
              <div className={s.techCard}>
                <div className={`${s.techCardTitle} ${s.textBlue}`}>
                  Frontend
                </div>
                <div className={s.techCardContent}>
                  React, TypeScript, Tailwind, Next.js
                </div>
              </div>
              <div className={s.techCard}>
                <div className={`${s.techCardTitle} ${s.textAmber}`}>
                  Backend
                </div>
                <div className={s.techCardContent}>
                  Node.js, Express.js, Nest.js
                </div>
              </div>
              <div className={s.techCard}>
                <div className={`${s.techCardTitle} ${s.textRose}`}>
                  Databases
                </div>
                <div className={s.techCardContent}>
                  MongoDB, PostgreSQL, MySQL
                </div>
              </div>
              <div className={s.techCard}>
                <div className={`${s.techCardTitle} ${s.textCyan}`}>Tools</div>
                <div className={s.techCardContent}>
                  Git, Github, Vercel, Render, Postmen,
                </div>
              </div>
              <div className={s.techCard}>
                <div className={`${s.techCardTitle} ${s.textCyan}`}>
                  Webflow
                </div>

                <div className={s.techCardContent}>
                  CMS,Animations, Interactions, Zapier Automation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
