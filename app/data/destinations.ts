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
      "The Maldives, a tropical paradise nestled in the Indian Ocean, offers an idyllic escape for those seeking pristine beaches, crystal-clear waters, and vibrant marine life. With its luxurious resorts, world-class diving and snorkeling spots, and breathtaking sunsets, the Maldives is a dream destination for honeymooners, adventurers, and relaxation seekers alike. The archipelago's secluded islands and overwater bungalows provide a sense of tranquility and exclusivity, while its vibrant coral reefs and diverse marine ecosystems offer unforgettable underwater experiences.",
    region: "Islands",
    attractions: ["Snorkeling", "Luxury Resorts", "Underwater Restaurants"],
  },
  {
    id: 2,
    name: "Paris",
    image:
      "https://media.cntraveller.com/photos/657c27aca8b734e5b67133f4/16:9/w_1920%2Cc_limit/Paris_GettyImages-601762971.jpg",
    description:
      "Paris, a timeless city steeped in history and culture, is a dream destination for many. Its iconic landmarks, such as the Eiffel Tower and the Louvre Museum, are instantly recognizable around the world. Beyond the tourist attractions, Paris offers a charming blend of old and new, with cobblestone streets, elegant boulevards, and modern architecture. The city's vibrant atmosphere, delicious cuisine, and world-class shopping make it an unforgettable destination for travelers of all ages.",
    region: "Europe",
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
  },
  {
    id: 3,
    name: "Tokyo",
    image:
      "https://images.goway.com/production/featured_images/japan_tokyo_akihabara_AdobeStock_295310062_Editorial_Use_Only.jpg",
    description:
      "Tokyo, a vibrant metropolis teeming with ancient traditions and modern marvels, offers an unforgettable travel experience. From the serene beauty of its traditional gardens to the bustling neon-lit streets of Shibuya, Tokyo caters to every traveler's taste. Immerse yourself in the rich cultural heritage of the city by visiting iconic landmarks like the Imperial Palace and Senso-ji Temple. Explore the cutting-edge technology and fashion scene in districts like Akihabara and Harajuku. With its delicious cuisine, world-class shopping, and friendly locals, Tokyo is a destination that promises to leave a lasting impression.",
    region: "Asia",
    attractions: ["Shibuya Crossing", "Tokyo Tower", "Meiji Shrine"],
  },
];
