import React from "react";
import { Helmet } from "react-helmet";


function getMetaTags(fullSeo) {
  const tags = [];

  if (fullSeo.metaTitle) {
    tags.push(
      {
        property: "og:title",
        content: fullSeo.metaTitle,
      },
      {
        name: "twitter:title",
        content: fullSeo.metaTitle,
      }
    );
  }
  if (fullSeo.metaDescription) {
    tags.push(
      {
        name: "description",
        content: fullSeo.metaDescription,
      },
      {
        property: "og:description",
        content: fullSeo.metaDescription,
      },
      {
        name: "twitter:description",
        content: fullSeo.metaDescription,
      }
    );
  }
  if (fullSeo.shareImage) {
    const imageUrl =
      (process.env.GATSBY_ROOT_URL || "http://localhost:8000") +
      fullSeo.shareImage.publicURL;
    tags.push(
      {
        name: "image",
        content: imageUrl,
      },
      {
        property: "og:image",
        content: imageUrl,
      },
      {
        name: "twitter:image",
        content: imageUrl,
      }
    );
  }
  if (fullSeo.article) {
    tags.push({
      property: "og:type",
      content: "article",
    });
  }
  tags.push({ name: "twitter:card", content: "summary_large_image" });

  return tags;
}

export default function SEO(global, seo) {
  const metaTags = getMetaTags();

  return (
    <Helmet
      title={seo.metaTitle}
      titleTemplate={`%s | ${global.siteName}`}
      link={[
        {
          rel: "icon",
          href: global.favicon.publicURL,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Staatliches",
        },
        {
          rel: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css",
        },
      ]}
      script={[
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js",
        },
        {
          src:
            "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js",
        },
      ]}
      meta={metaTags}
    />
  );
}
