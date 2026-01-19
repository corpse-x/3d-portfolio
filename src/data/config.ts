const config = {
  title: "Arnav | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Arnav, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Naresh, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Arnav",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Arnav",
  email: "arnav.offsec@gmail.com",
  site: "https://instagram.com/corpsealone",

  // for github stars button
  githubUsername: "corpse-x",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/corpsealone",
    linkedin: "https://www.linkedin.com/in/none/",
    instagram: "https://www.instagram.com/corpsealone",
    facebook: "https://www.facebook.com/corpsealone/",
    github: "https://github.com/corpse-x",
  },
};
export { config };
