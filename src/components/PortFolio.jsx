"use client";

import { ExternalLink, Github } from "lucide-react";
import Image1 from "../../public/study-material-website-dashboard-with-books-and-no.jpg";
import Image2 from "../../public/real-time-chat-application-interface-with-messages.jpg";
import Image3 from "../../public/modern-blog-website-with-articles-and-categories.jpg";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "RGPV Study Material Website",
      description:
        "A comprehensive study material platform for RGPV students with organized resources, notes, and exam preparation materials.",
      technologies: ["React","Express", "Node.js", "MongoDB"],
      videoLink: "https://rgpvpathsalaapp.vercel.app/",
      sourceLink: "https://github.com/AlphaHyphen-123/RGPV",
      image: Image1,
    },
    {
      id: 2,
      name: "Chat Application",
      description:
        "Real-time messaging application with user authentication, group chats, and instant notifications for seamless communication.",
      technologies: ["React", "Express", "Socket.io", "MongoDB"],
      videoLink: "https://chatapp-yt-vu7b.onrender.com/signup",
      sourceLink: "https://github.com/AlphaHyphen-123/ChatApp-yt",
      image: Image2,
    },
    {
      id: 3,
      name: "Blog Website",
      description:
        "A modern blogging platform with rich text editor, user authentication, comments, and category-based content organization.",
      technologies: ["React", "Express", "Node.js", "MongoDB"],
      videoLink: "https://github.com/AlphaHyphen-123/ChatWebApp",
      sourceLink: "https://github.com/AlphaHyphen-123/ChatWebApp",
      image: Image3,
    },
  ];

  return (
    <section name="Portfolio" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore my recent work showcasing full-stack development expertise and creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, name, description, technologies, videoLink, sourceLink, image }) => (
            <div
              key={id}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-8 flex flex-col h-full">
                  <div className="flex-grow mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>

                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-6 border-t border-border">
                    <a
                      href={videoLink}
                      className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 hover:shadow-lg"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live</span>
                    </a>
                    <a
                      href={sourceLink}
                      className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 hover:shadow-lg"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
