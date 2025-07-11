export default function Head() {
  return (
    <>
      <title>Vivek Khedkar – Full Stack Web Developer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Hi, I’m Vivek Khedkar. This is my official portfolio showcasing my web development projects, skills, and achievements." />
      <meta name="keywords" content="Vivek Khedkar, Portfolio, Full Stack Developer, Web Developer, React, Next.js, Freelance Developer, Mumbai Developer" />
      <meta name="author" content="Vivek Khedkar" />

      {/* Open Graph */}
      <meta property="og:title" content="Vivek Khedkar – Web Developer & Tech Enthusiast" />
      <meta property="og:description" content="Explore the portfolio of Vivek Khedkar, showcasing innovative web projects and skills." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vivekkhedkar.vercel.app/" />
      <meta property="og:image" content="https://vivekkhedkar.vercel.app/images/hero-image.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vivek Khedkar – Web Developer" />
      <meta name="twitter:description" content="Explore the portfolio of Vivek Khedkar, a passionate frontend & full stack developer." />
      <meta name="twitter:image" content="https://vivekkhedkar.vercel.app/images/hero-image.png" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.png" />

      {/* Canonical */}
      <link rel="canonical" href="https://vivekkhedkar.vercel.app/" />

      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Vivek Khedkar",
            url: "https://vivekkhedkar.vercel.app",
            jobTitle: "Full Stack Web Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance / Open Source"
            },
            description:
              "Vivek Khedkar is a full stack web developer skilled in React, Next.js, and modern web technologies. Explore his personal portfolio.",
          }),
        }}
      />
    </>
  );
}
