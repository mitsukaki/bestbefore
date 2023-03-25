import { Helmet } from 'react-helmet';

interface SEOProps {
  prefix: string;
  path: string;
  description?: string;
}

const SEO = ({
  prefix,
  path,
  description = 'Your all-in-one refrigerator manager',
}: SEOProps) => {
  const seo = {
    description: description,
    url: `${window.location.origin}${path}`,
    title: `${prefix} | BestBefore`,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </Helmet>
  );
};

export default SEO;
