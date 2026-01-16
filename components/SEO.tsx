import Head from 'next/head';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    noindex?: boolean;
    noSuffix?: boolean;
}

const defaultTitle = 'Developer Tool SEO & Marketing Resources';
const defaultDescription = 'A curated list of awesome resources for marketing developer tools. Find strategies, tools, and insights to effectively reach and engage with developers.';
const defaultKeywords = 'developer marketing, dev tools marketing, developer relations, devrel, developer advocacy, technical marketing, B2D marketing, developer tools, SaaS marketing';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marketing.codeatoms.org';

export default function SEO({
    title,
    description = defaultDescription,
    keywords = defaultKeywords,
    canonical,
    ogImage = `${siteUrl}/og-image.png`,
    ogType = 'website',
    noindex = false,
    noSuffix = false,
}: SEOProps) {
    const pageTitle = title 
        ? (noSuffix ? title : `${title}`)
        : defaultTitle;
    const canonicalUrl = canonical || siteUrl;

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{pageTitle}</title>
            <meta name="title" content={pageTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            {noindex && <meta name="robots" content="noindex, nofollow" />}
            {!noindex && <meta name="robots" content="index, follow" />}
            <meta name="author" content="Awesome Developer Tools Marketing" />
            <meta name="language" content="English" />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="Awesome Developer Tools Marketing" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Additional Meta Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
    );
}
