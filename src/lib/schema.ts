import { areas } from "../data/areas";
import { company, fullAddress } from "../data/company";
import { services } from "../data/services";
import type { Faq } from "../data/services";

export function abs(site: URL | undefined, path: string): string {
  if (!site) return path;
  return new URL(path, site).href;
}

export function businessId(site: URL | undefined): string {
  return abs(site, "/#business");
}

export function businessSchema(site: URL | undefined) {
  return {
    "@type": "Electrician",
    "@id": businessId(site),
    name: company.name,
    alternateName: company.legalName,
    description:
      "Electrotech is an electrician at 5 Miller Road, Bedford, MK42 9FS. Home, shop, and farm electrics, including rewires, checks, and home control.",
    url: abs(site, "/"),
    telephone: company.phoneTel,
    image: abs(site, "/brand/logo.png"),
    logo: abs(site, "/brand/logo.png"),
    hasMap: company.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.street,
      addressLocality: company.locality,
      addressRegion: company.region,
      postalCode: company.postcode,
      addressCountry: company.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.lat,
      longitude: company.lng,
    },
    areaServed: areas.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
    knowsAbout: services.map((service) => service.title),
    currenciesAccepted: "GBP",
    slogan: "Electrician in Bedford",
  };
}

export function breadcrumbSchema(
  site: URL | undefined,
  items: { name: string; path: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: abs(site, item.path),
    })),
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function graph(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export const businessSummary = `${company.legalName}, ${fullAddress()}. Telephone ${company.phoneDisplay}.`;
