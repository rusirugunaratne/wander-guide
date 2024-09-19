// data/destinations.ts

export interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  region: string;
  attractions: string[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Maldives",
    image:
      "https://www.andbeyond.com/wp-content/uploads/sites/5/maldives-six-senses-laamu4.jpg",
    description:
      "A tropical paradise known for its crystal-clear waters and luxury resorts.",
    region: "Islands",
    attractions: ["Snorkeling", "Luxury Resorts", "Underwater Restaurants"],
  },
  {
    id: 2,
    name: "Paris",
    image:
      "https://media.cntraveller.com/photos/657c27aca8b734e5b67133f4/16:9/w_1920%2Cc_limit/Paris_GettyImages-601762971.jpg",
    description:
      "The capital of France, known for its art, history, and the Eiffel Tower.",
    region: "Europe",
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
  },
  {
    id: 3,
    name: "Tokyo",
    image:
      "https://images.goway.com/production/featured_images/japan_tokyo_akihabara_AdobeStock_295310062_Editorial_Use_Only.jpg",
    description:
      "A bustling city combining ultramodern skyscrapers with traditional temples.",
    region: "Asia",
    attractions: ["Shibuya Crossing", "Tokyo Tower", "Meiji Shrine"],
  },
];
