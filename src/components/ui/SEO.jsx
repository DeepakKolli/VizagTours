import { useEffect } from 'react';

const SITE_URL = 'https://www.vizagtours.in';

const SEO = ({ title, description }) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector, attributes) => {
      let meta = document.head.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        document.head.appendChild(meta);
      }
      Object.entries(attributes).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
    };

    const setLink = (rel, href) => {
      let link = document.head.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    const canonicalUrl =
      SITE_URL + (window.location.pathname === '/' ? '/' : window.location.pathname);

    setMeta('meta[name="description"]', {
      name: 'description',
      content: description
    });
    setMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow'
    });
    setMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title
    });
    setMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description
    });
    setMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website'
    });
    setMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl
    });
    setMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'Vizag Tours & Cabs'
    });
    setMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: `${SITE_URL}/og-image.jpg`
    });
    setMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image'
    });
    setMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title
    });
    setMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description
    });
    setMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: `${SITE_URL}/og-image.jpg`
    });

    setLink('canonical', canonicalUrl);
  }, [title, description]);

  return null;
};

export default SEO;

