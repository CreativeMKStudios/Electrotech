export const company = {
  name: "Electrotech",
  legalName: "Electrotech Electrical Services",
  phoneDisplay: "01234 325435",
  phoneTel: "+441234325435",
  street: "5 Miller Road",
  locality: "Bedford",
  region: "Bedfordshire",
  postcode: "MK42 9FS",
  country: "GB",
  lat: 52.1239765,
  lng: -0.4668128,
  plusCode: "4GFM+H7",
  mapsUrl: "https://maps.app.goo.gl/2bwg1u64MmmpH95QA",
  mapsEmbed:
    "https://maps.google.com/maps?q=5%20Miller%20Road%2C%20Bedford%20MK42%209FS&z=16&output=embed",
  googleRating: 5,
  googleReviewCount: 1,
  googleReviewDate: "29 March 2013",
  checkedOn: "6 October 2026",
  earlierStreet: "15 Sunderland Place",
  earlierLocality: "Shortstown",
  earlierPostcode: "MK42 0FE",
} as const;

export const nap = `${company.street}, ${company.locality}, ${company.postcode}`;

export function fullAddress(): string {
  return `${company.street}, ${company.locality}, ${company.region}, ${company.postcode}`;
}
