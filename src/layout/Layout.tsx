import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'GitHunt',
  description = 'Search Any GitHub account by just hand movement',
  keywords = 'Github, Github Account',
  author = 'sudhanshu',
}: LayoutProps) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
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
