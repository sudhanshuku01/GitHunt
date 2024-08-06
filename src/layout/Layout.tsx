import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "GitHunt - The Premier Tool for Advanced GitHub Account Search and Discovery",
  description = "GitHunt is an advanced search platform designed to help you find GitHub accounts with precision and ease. Our tool allows you to search for GitHub users by various criteria, including username, full name, location, and email address. Whether you're a developer looking to connect with peers, a recruiter searching for talent, or a tech enthusiast exploring profiles, GitHunt delivers fast, reliable, and accurate search results. With intuitive filters and a user-friendly interface, GitHunt makes it simple to discover and connect with professionals across the GitHub community.",
  keywords = "GitHub account search, advanced GitHub search tool, GitHub user finder, find GitHub users by username, search GitHub profiles by full name, GitHub account search by location, GitHub email search, developer profile search, connect with GitHub users, tech professionals directory, GitHub user lookup, GitHub profile discovery, tech industry connections, GitHub search engine",
  author = "Sudhanshu",
}: LayoutProps) => {
  return (
    <div>
      <Helmet>
        <meta name="robots" content="index, follow" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="githunt" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sudhanshu" />
        <meta name="twitter:creator" content={author} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <Header />
      <main className="maincont">
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
