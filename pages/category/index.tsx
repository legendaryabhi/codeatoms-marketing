import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { resourcesData } from '@/lib/resourcesData';
import SEO from '@/components/SEO';

export default function CategoriesListPage(): React.JSX.Element {
    const router = useRouter();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marketing.codeatoms.org';
    const canonicalUrl = `${siteUrl}${router.asPath}`;
    
    return (
        <>
            <SEO
                title="All Categories"
                description="Explore all categories of developer marketing resources including content marketing, social media marketing, email marketing, SEO, community building, and more."
                keywords="developer marketing categories, content marketing, social media marketing, email marketing, SEO for developers, community building, developer relations, devrel, analytics, product hunt, technical writing"
                canonical={canonicalUrl}
            />
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-8 text-center">Explore All Categories</h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {resourcesData.map((category) => (
                        <Card key={category.slug} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                                <Button variant="outline" asChild>
                                    <Link href={`/category/${category.slug}`}>
                                        Explore
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            </div>
        </>
    );
}