import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Zap, Rocket, Users, Search, Mail, Code, BarChart2, Podcast, Menu, X  } from 'lucide-react';
import SEO from '@/components/SEO';

const categories = [
    { title: 'Content Marketing', slug: 'content-marketing', description: 'Strategies and resources for effective content marketing in the developer space.', icon: <Code className="w-6 h-6" /> },
    { title: 'Social Media Marketing', slug: 'social-media-marketing', description: 'Platforms and tools for reaching developers through social media.', icon: <Users className="w-6 h-6" /> },
    { title: 'Email Marketing', slug: 'email-marketing', description: 'Best practices for email campaigns targeting developers.', icon: <Mail className="w-6 h-6" /> },
    { title: 'SEO for Developers', slug: 'seo-for-developers', description: 'Techniques to improve search visibility for developer tools.', icon: <Search className="w-6 h-6" /> },
    { title: 'Community Building', slug: 'community-building', description: 'Strategies for creating and nurturing developer communities.', icon: <Users className="w-6 h-6" /> },
    { title: 'Analytics and Metrics', slug: 'analytics-and-metrics', description: 'Tools and practices for measuring developer engagement and product success.', icon: <BarChart2 className="w-6 h-6" /> },
    { title: 'Product Hunt Launch Strategies', slug: 'product-hunt-launch-strategies', description: 'Tips for successful Product Hunt launches of developer tools.', icon: <Rocket className="w-6 h-6" /> },
    { title: 'Developer Relations (DevRel)', slug: 'developer-relations', description: 'Best practices in developer relations and advocacy.', icon: <Users className="w-6 h-6" /> },
    { title: 'Technical Writing', slug: 'technical-writing', description: 'Resources for creating effective technical documentation and content.', icon: <Code className="w-6 h-6" /> },
    { title: 'API Documentation', slug: 'api-documentation', description: 'Tools and best practices for creating clear and useful API docs.', icon: <Code className="w-6 h-6" /> },
    { title: 'Open Source Marketing', slug: 'open-source-marketing', description: 'Strategies for marketing open source projects and tools.', icon: <Code className="w-6 h-6" /> },
    { title: 'Podcast Marketing', slug: 'podcast-marketing', description: 'Tips for creating and promoting developer-focused podcasts.', icon: <Podcast className="w-6 h-6" /> },
];

export default function Home() {

    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [logoError, setLogoError] = useState(false);
    const clickCodeAtoms = () => {
        router.push('https://www.codeatoms.org');
    };

    const handleCategoryClick = (slug: string) => {
        router.push(`/category/${slug}`);
        setIsMenuOpen(false);
    };

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marketing.codeatoms.org';
    const canonicalUrl = `${siteUrl}${router.asPath}`;

    return (
        <>
            <SEO
                title="Developer Tools Marketing Resources"
                description="A curated list of awesome resources for marketing developer tools. Find strategies, tools, and insights to effectively reach and engage with developers."
                canonical={canonicalUrl}
                noSuffix={true}
            />
            <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-600 to-indigo-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="py-4 sm:py-6">
  <nav className="flex items-center justify-between">
    
    {/* Logo */}
    <Link
      href="/"
      className="text-2xl sm:text-3xl font-bold tracking-wide text-white flex items-center"
    >
      <Zap className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
      DevToolsMarketing
      <span className="ml-2 text-sm hidden md:block text-white/70">by CodeAtoms</span>
    </Link>

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center space-x-6">
      
      

      {/* Contribute */}
      <button
        onClick={clickCodeAtoms}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
      >
        Visit CodeAtoms →
      </button>
    </div>

    {/* Mobile Hamburger */}
    <button
      className="md:hidden text-white"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>

  </nav>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden mt-4 bg-white/10 rounded-lg p-4 space-y-3">
      
      

      <button
        onClick={clickCodeAtoms}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
      >
        Visit CodeAtoms →
      </button>
    </div>
  )}
</header>


                <main className="py-8 sm:py-16 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div>
  <h1 className="text-3xl sm:text-5xl font-extrabold text-white slg:text-5xl leading-tight">
    Developer Tool SEO & Marketing Resources
  </h1>

  <p className="mt-4 text-lg sm:text-xl text-white/90 sm:mt-6 max-w-xl">
    A curated collection of proven SEO, content, and growth resources used by successful developer tools.
  </p>

  <div className="flex items-center mt-8 sm:mt-10 space-x-8">
    <div className="animate-pulse">
      <p className="text-3xl sm:text-4xl font-medium text-white">100+</p>
      <p className="mt-1 text-xs sm:text-sm text-white/70">
        Curated DevTool Resources
      </p>
    </div>
  </div>
</div>



                        <div className="space-y-6">
                            <Tabs defaultValue="featured" className="w-full">
                                <TabsList className="grid w-full grid-cols-2 bg-white/10">
                                    <TabsTrigger value="featured" className="text-white">Featured</TabsTrigger>
                                    <TabsTrigger value="trending" className="text-white">Trending</TabsTrigger>
                                </TabsList>
                                <TabsContent value="featured">
                                    <ScrollArea
                                        className="h-[300px] sm:h-[400px] w-full rounded-md border border-white/20 p-4">
                                        {categories.slice(0, 6).map((category, index) => (
                                            <React.Fragment key={category.slug}>
                                                <div
                                                    className="flex items-center space-x-4 py-4 cursor-pointer hover:bg-white/5 rounded-md transition-colors"
                                                    onClick={() => handleCategoryClick(category.slug)}
                                                >
                                                    <div className="bg-white/10 p-3 rounded-full">{category.icon}</div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                                                        <p className="text-sm text-white/70">{category.description}</p>
                                                    </div>
                                                    <ChevronRight className="ml-auto flex-shrink-0 w-5 h-5"/>
                                                </div>
                                                {index < 5 && <Separator className="bg-white/20"/>}
                                            </React.Fragment>
                                        ))}
                                    </ScrollArea>
                                </TabsContent>
                                <TabsContent value="trending">
                                    <ScrollArea
                                        className="h-[300px] sm:h-[400px] w-full rounded-md border border-white/20 p-4">
                                        {categories.slice(6).map((category, index) => (
                                            <React.Fragment key={category.slug}>
                                                <div
                                                    className="flex items-center space-x-4 py-4 cursor-pointer hover:bg-white/5 rounded-md transition-colors"
                                                    onClick={() => handleCategoryClick(category.slug)}
                                                >
                                                    <div className="bg-white/10 p-3 rounded-full">{category.icon}</div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold">{category.title}</h3>
                                                        <p className="text-sm text-white/70">{category.description}</p>
                                                    </div>
                                                    <ChevronRight className="ml-auto flex-shrink-0 w-5 h-5"/>
                                                </div>
                                                {index < 5 && <Separator className="bg-white/20"/>}
                                            </React.Fragment>
                                        ))}
                                    </ScrollArea>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </main>

                <section className="py-8 sm:py-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Explore All Categories</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {categories.map((category) => (
                            <Card key={category.slug}
                                  className="bg-white/10 shadow hover:shadow-lg transition-shadow border-white/20">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
                                        {category.icon}
                                        <span>{category.title}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-white/80 mb-4 text-sm sm:text-base">{category.description}</p>
                                    <Button
                                        variant="secondary"
                                        className="w-full"
                                        onClick={() => handleCategoryClick(category.slug)}
                                    >
                                        Explore <ChevronRight className="ml-2 w-4 h-4"/>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>

            <footer className="bg-gray-900 mt-8 sm:mt-16 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">CodeAtoms</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="https://www.codeatoms.org/" className="hover:text-yellow-300 transition-colors">
                                        Visit CodeAtoms
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.codeatoms.org/explore" className="hover:text-yellow-300 transition-colors">
                                        Explore
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.codeatoms.org/opensource" className="hover:text-yellow-300 transition-colors">
                                        OpenSource
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start md:items-end">
                            <div className="flex items-center gap-3 mb-3">
                                {/* {!logoError ? (
                                    <img 
                                        src="/codeatoms-logo.png" 
                                        alt="CodeAtoms Logo" 
                                        className="h-8 w-auto"
                                        onError={() => setLogoError(true)}
                                    />
                                ) : (
                                    <span className="text-2xl font-bold text-yellow-300">CodeAtoms</span>
                                )} */}
                            </div>
                            <p className="text-gray-300 text-sm max-w-md text-left md:text-right">
                                CodeAtoms - The developer tools marketplace.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} CodeAtoms. All rights reserved.</p>
                    </div>
                </div>
            </footer>
            </div>
        </>
    );
}