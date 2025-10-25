// Salon Information - This will be handled by the parent website
export const SALON_INFO = {
  description: "Expert hair styling services designed to enhance your natural beauty. Our skilled professionals use premium materials and proven techniques to create looks that reflect your personal style and lifestyle needs."
};

// Type definitions
export interface ServiceVariation {
  name: string;
  duration: string;
}

export interface ServiceData {
  description: string;
  variations: ServiceVariation[];
}

export interface SalonData {
  [category: string]: {
    [subcategory: string]: ServiceData;
  };
}

// Service Categories and Services Data (No Pricing)
export const SALON_DATA: SalonData = {
  "Braids": {
    "Box Braids": {
      description: "Classic box braids for all hair types",
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Medium", duration: "4-5 hours" },
        { name: "Waist Length Large", duration: "4-5 hours" },
        { name: "Thigh Length Large", duration: "5-6 hours" },
        { name: "Mid Back Length Large", duration: "4-5 hours" },
        { name: "Shoulder Length Small", duration: "5-6 hours" },
        { name: "Mid Back Length Medium", duration: "5-6 hours" },
        { name: "Mid Back Length Small", duration: "6-7 hours" },
        { name: "Waist Length Medium", duration: "6-7 hours" },
        { name: "Waist Length Small", duration: "7-8 hours" },
        { name: "Thigh Length Medium", duration: "7-8 hours" },
        { name: "Thigh Length Small", duration: "8-9 hours" }
      ]
    },
    "Bohemian Box Braids": {
      description: "Bohemian style box braids with added texture",
      variations: [
        { name: "Shoulder Length Large", duration: "4-5 hours" },
        { name: "Shoulder Length Medium", duration: "5-6 hours" },
        { name: "Mid Back Length Large", duration: "5-6 hours" },
        { name: "Shoulder Length Small", duration: "6-7 hours" },
        { name: "Mid Back Length Medium", duration: "6-7 hours" },
        { name: "Waist Length Large", duration: "6-7 hours" },
        { name: "Mid Back Length Small", duration: "7-8 hours" },
        { name: "Waist Length Medium", duration: "7-8 hours" },
        { name: "Thigh Length Large", duration: "7-8 hours" },
        { name: "Waist Length Small", duration: "8-9 hours" },
        { name: "Thigh Length Medium", duration: "8-9 hours" },
        { name: "Thigh Length Small", duration: "9-10 hours" }
      ]
    },
    "Micro Braids": {
      description: "Very small, detailed braids for long-lasting style",
      variations: [
        { name: "Shoulder Length Large", duration: "6-8 hours" },
        { name: "Mid Back Length Large", duration: "7-9 hours" },
        { name: "Shoulder Length Medium", duration: "8-10 hours" },
        { name: "Shoulder Length Small", duration: "10-12 hours" },
        { name: "Mid Back Length Medium", duration: "9-11 hours" },
        { name: "Mid Back Length Small", duration: "11-13 hours" },
        { name: "Waist Length Large", duration: "10-12 hours" },
        { name: "Waist Length Medium", duration: "12-14 hours" },
        { name: "Waist Length Small", duration: "13-15 hours" },
        { name: "Thigh Length Large", duration: "12-14 hours" },
        { name: "Thigh Length Medium", duration: "14-16 hours" },
        { name: "Thigh Length Small", duration: "15-18 hours" }
      ]
    },
    "Bob Box Braids": {
      description: "Short bob length box braids",
      variations: [
        { name: "Shoulder Length Large", duration: "2-3 hours" },
        { name: "Shoulder Length Medium", duration: "3-4 hours" },
        { name: "Shoulder Length Small", duration: "4-5 hours" }
      ]
    },
    "Jumbo Box Braids": {
      description: "Extra large box braids for quick installation",
      variations: [
        { name: "Shoulder Length Jumbo", duration: "2-3 hours" },
        { name: "Mid Back Length Jumbo", duration: "3-4 hours" },
        { name: "Thigh Length Jumbo", duration: "4-5 hours" }
      ]
    },
    "Feed In Braids": {
      description: "Feed-in braids with added hair",
      variations: [
        { name: "2 Braids", duration: "1-2 hours" },
        { name: "3 Braids", duration: "1.5-2.5 hours" },
        { name: "4 Braids", duration: "2-3 hours" },
        { name: "6 Braids", duration: "3-4 hours" },
        { name: "8 Braids", duration: "4-5 hours" },
        { name: "10 Braids", duration: "5-6 hours" }
      ]
    },
    "Fulani Braids": {
      description: "Traditional Fulani braids with decorative elements",
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Medium", duration: "4-5 hours" },
        { name: "Shoulder Length Small", duration: "5-6 hours" },
        { name: "Mid Back Length Large", duration: "4-5 hours" },
        { name: "Mid Back Length Medium", duration: "5-6 hours" },
        { name: "Mid Back Length Small", duration: "6-7 hours" },
        { name: "Waist Length Large", duration: "5-6 hours" },
        { name: "Mid Back Length Medium", duration: "6-7 hours" },
        { name: "Mid Back Length Small", duration: "7-8 hours" },
        { name: "Thigh Length Large", duration: "6-7 hours" },
        { name: "Thigh Length Medium", duration: "7-8 hours" },
        { name: "Thigh Length Large", duration: "8-9 hours" }
      ]
    },
    "Lemonade Braids": {
      description: "Side-parted braids inspired by Beyoncé's iconic look",
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Medium", duration: "3-4 hours" },
        { name: "Shoulder Length Small", duration: "3-4 hours" },
        { name: "Mid Back Length Large", duration: "3-4 hours" },
        { name: "Mid Back Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Small", duration: "3-4 hours" },
        { name: "Waist Length Large", duration: "3-4 hours" },
        { name: "Waist Length Medium", duration: "3-4 hours" },
        { name: "Thigh Length Large", duration: "3-4 hours" },
        { name: "Waist Length Small", duration: "3-4 hours" },
        { name: "Thigh Length Medium", duration: "3-4 hours" },
        { name: "Thigh Length Small", duration: "3-4 hours" }
      ]
    },
    "Bora Bora Braids": {
      description: "Bora Bora style braids with unique parting",
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Small", duration: "3-4 hours" },
        { name: "Mid Back Length Medium", duration: "3-4 hours" },
        { name: "Waist Length Large", duration: "3-4 hours" },
        { name: "Mid Back Length Small", duration: "3-4 hours" },
        { name: "Thigh Length Large", duration: "3-4 hours" },
        { name: "Waist Length Medium", duration: "3-4 hours" },
        { name: "Waist Length Small", duration: "3-4 hours" },
        { name: "Thigh Length Medium", duration: "3-4 hours" },
        { name: "Thigh Length Small", duration: "3-4 hours" }
      ]
    }
  },
  "Twists": {
    "Havana Twist": {
      description: "Chunky twists with added hair for volume",
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Medium", duration: "3-4 hours" },
        { name: "Waist Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Small", duration: "3-4 hours" },
        { name: "Mid Back Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Small", duration: "3-4 hours" },
        { name: "Waist Length Small", duration: "3-4 hours" },
        { name: "Thigh Length Large", duration: "3-4 hours" },
        { name: "Thigh Length Medium", duration: "3-4 hours" },
        { name: "Thigh Length Small", duration: "3-4 hours" },
        { name: "Waist Length Large", duration: "3-4 hours" }
      ]
    },
    "Senegalese Twists": {
      description: "Thin, elegant twists with added hair",
      variations: [
        { name: "Shoulder Length Medium", duration: "3-4 hours" },
        { name: "Shoulder Length Small", duration: "3-4 hours" },
        { name: "Mid Back Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Small", duration: "3-4 hours" },
        { name: "Waist Length Medium", duration: "3-4 hours" },
        { name: "Waist Length Small", duration: "3-4 hours" },
        { name: "Thigh Length Medium", duration: "3-4 hours" },
        { name: "Thigh Length Small", duration: "3-4 hours" }
      ]
    },
    "Passion Twist": {
      description: "Soft, curly twists with a natural look",
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Small", duration: "3-4 hours" },
        { name: "Mid Back Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Small", duration: "3-4 hours" },
        { name: "Waist Length Large", duration: "3-4 hours" },
        { name: "Waist Length Medium", duration: "3-4 hours" },
        { name: "Waist Length Small", duration: "3-4 hours" },
        { name: "Thigh Length Large", duration: "3-4 hours" },
        { name: "Thigh Length Medium", duration: "3-4 hours" },
        { name: "Thigh Length Small", duration: "3-4 hours" }
      ]
    },
    "Kinky Twists": {
      description: "Kinky textured twists for natural look",
      variations: [
        { name: "Shoulder Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Medium", duration: "3-4 hours" },
        { name: "Shoulder Length Small", duration: "3-4 hours" },
        { name: "Waist Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Small", duration: "3-4 hours" },
        { name: "Waist Length Small", duration: "3-4 hours" },
        { name: "Thigh Length Medium", duration: "3-4 hours" },
        { name: "Thigh Length Small", duration: "3-4 hours" }
      ]
    },
    "Marley Twists": {
      description: "Marley hair twists for natural texture",
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Small", duration: "3-4 hours" },
        { name: "Mid Back Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Small", duration: "3-4 hours" },
        { name: "Waist Length Large", duration: "3-4 hours" },
        { name: "Waist Length Medium", duration: "3-4 hours" },
        { name: "Waist Length Small", duration: "3-4 hours" },
        { name: "Thigh Length Large", duration: "3-4 hours" },
        { name: "Thigh Length Medium", duration: "3-4 hours" },
        { name: "Thigh Length Small", duration: "3-4 hours" }
      ]
    },
    "Nubian Twist": {
      description: "Nubian style twists with unique texture",
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Medium", duration: "3-4 hours" },
        { name: "Shoulder Length Small", duration: "3-4 hours" },
        { name: "Mid Back Length Large", duration: "3-4 hours" },
        { name: "Mid Back Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Small", duration: "3-4 hours" },
        { name: "Waist Length Large", duration: "3-4 hours" },
        { name: "Waist Length Medium", duration: "3-4 hours" },
        { name: "Waist Length Small", duration: "3-4 hours" },
        { name: "Thigh Length Large", duration: "3-4 hours" },
        { name: "Thigh Length Medium", duration: "3-4 hours" },
        { name: "Thigh Length Small", duration: "3-4 hours" }
      ]
    },
    "Comb Twist": {
      description: "Comb twist technique for natural styling",
      variations: [
        { name: "Standard", duration: "3-4 hours" }
      ]
    },
    "Two Strand Twist": {
      description: "Classic two-strand twists",
      variations: [
        { name: "Standard", duration: "3-4 hours" }
      ]
    }
  },
  "Faux Locs": {
    "Goddess Locs": {
      description: "Goddess style faux locs with added hair",
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Small", duration: "3-4 hours" },
        { name: "Mid Back Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Small", duration: "3-4 hours" },
        { name: "Waist Length Small", duration: "3-4 hours" },
        { name: "Waist Length Large", duration: "3-4 hours" },
        { name: "Waist Length Medium", duration: "3-4 hours" },
        { name: "Thigh Length Large", duration: "3-4 hours" },
        { name: "Thigh Length Medium", duration: "3-4 hours" },
        { name: "Thigh Length Small", duration: "3-4 hours" }
      ]
    },
    "Butterfly/Distressed Locs": {
      description: "Butterfly and distressed style faux locs",
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Medium", duration: "3-4 hours" },
        { name: "Shoulder Length Small", duration: "3-4 hours" },
        { name: "Mid Back Length Large", duration: "3-4 hours" },
        { name: "Mid Back Length Medium", duration: "3-4 hours" },
        { name: "Waist Length Small", duration: "3-4 hours" },
        { name: "Mid Back Length Small", duration: "3-4 hours" },
        { name: "Waist Length Large", duration: "3-4 hours" },
        { name: "Waist Length Medium", duration: "3-4 hours" },
        { name: "Thigh Length Large", duration: "3-4 hours" },
        { name: "Thigh Length Medium", duration: "3-4 hours" },
        { name: "Thigh Length Small", duration: "3-4 hours" }
      ]
    },
    "Bohemian Locs": {
      description: "Bohemian style faux locs with natural texture",
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Small", duration: "3-4 hours" },
        { name: "Mid Back Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Small", duration: "3-4 hours" },
        { name: "Waist Length Large", duration: "3-4 hours" },
        { name: "Waist Length Medium", duration: "3-4 hours" },
        { name: "Waist Length Small", duration: "3-4 hours" },
        { name: "Thigh Length Small", duration: "3-4 hours" },
        { name: "Thigh Length Large", duration: "3-4 hours" },
        { name: "Thigh Length Medium", duration: "3-4 hours" }
      ]
    }
  },
  "Crotchets": {
    "Crochet Box Braids": {
      description: "Crochet installation of box braids",
      variations: [
        { name: "Small Box Braids", duration: "2-3 hrs" },
        { name: "Medium Box Braids", duration: "3-4 hrs" },
        { name: "Large Box Braids", duration: "2.5-3.5 hrs" },
        { name: "Jumbo Box Braids", duration: "2-3 hrs" }
      ]
    },
    "Crochet Twists": {
      description: "Crochet installation of various twists",
      variations: [
        { name: "Havana Twists", duration: "3-4 hrs" },
        { name: "Senegalese Twists", duration: "3.5-4.5 hrs" },
        { name: "Marley Twists", duration: "3-4 hrs" },
        { name: "Passion Twists", duration: "3.5-4.5 hrs" }
      ]
    },
    "Crochet Faux Locs": {
      description: "Crochet installation of faux locs",
      variations: [
        { name: "Soft Locs", duration: "3-4 hrs" },
        { name: "Goddess Locs", duration: "4-5 hrs" },
        { name: "Butterfly Locs", duration: "4-5 hrs" },
        { name: "Boho Locs", duration: "3.5-4.5 hrs" }
      ]
    },
    "Crochet Curls & Waves": {
      description: "Crochet installation of curls and waves",
      variations: [
        { name: "Water Waves", duration: "2.5-3.5 hrs" },
        { name: "Deep Curls", duration: "3-4 hrs" },
        { name: "Beachy Waves", duration: "2.5-3.5 hrs" },
        { name: "Tight Ringlets", duration: "3-4 hrs" }
      ]
    },
    "Crochet Bobs & Short Styles": {
      description: "Crochet short styles and bobs",
      variations: [
        { name: "Crochet Bob", duration: "2-3 hrs" },
        { name: "Curly Pixie", duration: "2.5-3.5 hrs" },
        { name: "Textured Bob", duration: "2-3 hrs" },
        { name: "Short Curly Style", duration: "2.5-3.5 hrs" }
      ]
    },
    "Crochet Updos & Ponytails": {
      description: "Crochet updo and ponytail styles",
      variations: [
        { name: "High Ponytail", duration: "2.5-3.5 hrs" },
        { name: "Crochet Bun", duration: "2-3 hrs" },
        { name: "Half-Up Half-Down", duration: "3-4 hrs" },
        { name: "Crochet Updo", duration: "3.5-4.5 hrs" }
      ]
    },
    "Crochet Straight Styles": {
      description: "Crochet straight hair styles",
      variations: [
        { name: "Straight Crochet", duration: "2-3 hrs" },
        { name: "Silky Straight", duration: "2.5-3.5 hrs" },
        { name: "Blunt Cut Straight", duration: "2-3 hrs" },
        { name: "Layered Straight", duration: "2.5-3.5 hrs" }
      ]
    },
    "Specialty Crochet Styles": {
      description: "Specialty crochet styles with unique features",
      variations: [
        { name: "Knotless Crochet", duration: "4-5 hrs" },
        { name: "Crochet with Highlights", duration: "4-6 hrs" },
        { name: "Ombre Crochet", duration: "4-6 hrs" },
        { name: "Colorful Crochet", duration: "4-6 hrs" }
      ]
    },
    "Crochet with Pre Looped Hair": {
      description: "Crochet with pre-looped hair for faster installation",
      variations: [
        { name: "Any Length Large", duration: "3-4 hours" },
        { name: "Any Length Medium/Small", duration: "3-4 hours" }
      ]
    }
  },
  "Dreads": {
    "Starter Locs": {
      description: "Starting new dreadlocks",
      variations: [
        { name: "Standard", duration: "3-4 hours" }
      ]
    },
    "Loc Takedown": {
      description: "Removing existing dreadlocks",
      variations: [
        { name: "Standard", duration: "3-4 hours" }
      ]
    }
  },
  "Kid Styles": {
    "Kid's Box Braids": {
      description: "Box braids for children",
      variations: [
        { name: "Small Box Braids", duration: "2-3 hrs" },
        { name: "Medium Box Braids", duration: "2.5-3.5 hrs" },
        { name: "Large Box Braids", duration: "3-4 hrs" }
      ]
    },
    "Kid's Cornrows": {
      description: "Cornrows for children",
      variations: [
        { name: "Simple Straight Back", duration: "1-2 hrs" },
        { name: "Double Cornrows", duration: "1.5-2.5 hrs" },
        { name: "Creative Patterns", duration: "2-3 hrs" }
      ]
    },
    "Kid's French & Dutch Braids": {
      description: "French and Dutch braids for children",
      variations: [
        { name: "Single French Braid", duration: "30-45 min" },
        { name: "Double French Braids", duration: "45-60 min" },
        { name: "Single Dutch Braid", duration: "30-45 min" },
        { name: "Double Dutch Braids", duration: "45-60 min" }
      ]
    },
    "Kid's Ponytails & Buns": {
      description: "Ponytails and buns for children",
      variations: [
        { name: "High Ponytail", duration: "30 min" },
        { name: "Space Buns", duration: "45 min" },
        { name: "Braided Bun", duration: "1 hr" },
        { name: "Half-Up Half-Down", duration: "45 min" }
      ]
    },
    "Kid's Bantu Knots": {
      description: "Bantu knots for children",
      variations: [
        { name: "Small Knots", duration: "1.5-2 hrs" },
        { name: "Medium Knots", duration: "2-2.5 hrs" },
        { name: "Large Knots", duration: "2.5-3 hrs" }
      ]
    },
    "Kid's Twists": {
      description: "Twists for children",
      variations: [
        { name: "Simple Twists", duration: "1-1.5 hrs" },
        { name: "Two-Strand Twists", duration: "1.5-2 hrs" },
        { name: "Flat Twists", duration: "2-2.5 hrs" }
      ]
    },
    "Kid's Natural Hair Styles": {
      description: "Natural hair styles for children",
      variations: [
        { name: "Wash & Go", duration: "30-45 min" },
        { name: "Puff Styles", duration: "30-45 min" },
        { name: "Afro Styling", duration: "45-60 min" },
        { name: "Curl Definition", duration: "1 hr" }
      ]
    },
    "Kid's Special Occasion": {
      description: "Special occasion styles for children",
      variations: [
        { name: "Formal Updo", duration: "1.5-2 hrs" },
        { name: "Braided Crown", duration: "2-2.5 hrs" },
        { name: "Accessorized Style", duration: "1-1.5 hrs" },
        { name: "Waterfall Braid", duration: "1.5-2 hrs" }
      ]
    }
  },
  "Cornrows": {
    "Straight Back Cornrows": {
      description: "Traditional straight back cornrows",
      variations: [
        { name: "Basic (6-8 braids)", duration: "1-2 hrs" },
        { name: "Medium (10-12 braids)", duration: "2-3 hrs" },
        { name: "Detailed (14-16 braids)", duration: "3-4 hrs" },
        { name: "Intricate (18+ braids)", duration: "4-5 hrs" }
      ]
    },
    "Ghana Braids": {
      description: "Traditional Ghana braids",
      variations: [
        { name: "Short Length (8-10 inches)", duration: "2-3 hrs" },
        { name: "Medium Length (12-14 inches)", duration: "3-4 hrs" },
        { name: "Long Length (16-18 inches)", duration: "4-5 hrs" },
        { name: "Extra Long (20+ inches)", duration: "5-6 hrs" }
      ]
    },
    "Stitch Braids": {
      description: "Stitch braid technique",
      variations: [
        { name: "Basic Stitch (6-8 braids)", duration: "2-3 hrs" },
        { name: "Medium Stitch (10-12 braids)", duration: "3-4 hrs" },
        { name: "Detailed Stitch (14-16 braids)", duration: "4-5 hrs" },
        { name: "Precision Stitch (18+ braids)", duration: "5-6 hrs" }
      ]
    },
    "Tribal Cornrows": {
      description: "Tribal pattern cornrows",
      variations: [
        { name: "Simple Tribal Pattern", duration: "3-4 hrs" },
        { name: "Medium Tribal Design", duration: "4-5 hrs" },
        { name: "Complex Tribal Pattern", duration: "5-6 hrs" },
        { name: "Intricate Tribal Art", duration: "6-8 hrs" }
      ]
    },
    "Freestyle Cornrows": {
      description: "Creative freestyle cornrows",
      variations: [
        { name: "Basic Freestyle", duration: "2-3 hrs" },
        { name: "Creative Zigzag", duration: "3-4 hrs" },
        { name: "Complex Freestyle", duration: "4-5 hrs" },
        { name: "Artistic Freestyle", duration: "5-6 hrs" }
      ]
    },
    "Curved/Circular Cornrows": {
      description: "Curved and circular cornrow patterns",
      variations: [
        { name: "Simple Curved", duration: "3-4 hrs" },
        { name: "Circular Swirl", duration: "4-5 hrs" },
        { name: "Complex Curved Pattern", duration: "5-6 hrs" },
        { name: "Intricate Swirl Design", duration: "6-7 hrs" }
      ]
    },
    "Side-Swept Cornrows": {
      description: "Side-swept cornrow styles",
      variations: [
        { name: "Basic Side-Swept", duration: "2-3 hrs" },
        { name: "Medium Side-Swept", duration: "3-4 hrs" },
        { name: "Detailed Side-Swept", duration: "4-5 hrs" },
        { name: "Lemonade Style", duration: "5-6 hrs" }
      ]
    },
    "Criss-Cross Cornrows": {
      description: "Criss-cross pattern cornrows",
      variations: [
        { name: "Simple Criss-Cross", duration: "3-4 hrs" },
        { name: "Medium Criss-Cross", duration: "4-5 hrs" },
        { name: "Complex Criss-Cross", duration: "5-6 hrs" },
        { name: "Intricate Criss-Cross", duration: "6-7 hrs" }
      ]
    },
    "French Braids": {
      description: "French braid styles",
      variations: [
        { name: "Single French Braid", duration: "1-1.5 hrs" },
        { name: "Double French Braids", duration: "1.5-2 hrs" },
        { name: "French Braid with Extensions", duration: "2-2.5 hrs" },
        { name: "Exotic French Braids (2)", duration: "1.5-2 hrs" }
      ]
    },
    "Dutch Braids": {
      description: "Dutch braid styles",
      variations: [
        { name: "Single Dutch Braid", duration: "1-1.5 hrs" },
        { name: "Double Dutch Braids", duration: "1.5-2 hrs" },
        { name: "Dutch Braid with Extensions", duration: "2-2.5 hrs" },
        { name: "Feed-In Dutch Braids", duration: "2-3 hrs" }
      ]
    },
    "French/Dutch Combinations": {
      description: "Combination French and Dutch braids",
      variations: [
        { name: "French + Dutch Combo", duration: "2-2.5 hrs" },
        { name: "Multiple French Braids", duration: "2-3 hrs" },
        { name: "Multiple Dutch Braids", duration: "2-3 hrs" },
        { name: "Crown French Braid", duration: "1.5-2 hrs" },
        { name: "Crown Dutch Braid", duration: "1.5-2 hrs" }
      ]
    },
    "Cornrow Updo": {
      description: "Cornrow updo styles",
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours" },
        { name: "Shoulder Length Medium", duration: "3-4 hours" },
        { name: "Shoulder Length Small", duration: "3-4 hours" },
        { name: "Mid Back Length Large", duration: "3-4 hours" },
        { name: "Mid Back Length Medium", duration: "3-4 hours" },
        { name: "Mid Back Length Small", duration: "3-4 hours" },
        { name: "Waist Length Large", duration: "3-4 hours" },
        { name: "Waist Length Medium", duration: "3-4 hours" },
        { name: "Waist Length Small", duration: "3-4 hours" },
        { name: "Thigh Length Large", duration: "3-4 hours" },
        { name: "Thigh Length Medium", duration: "3-4 hours" },
        { name: "Thigh Length Small", duration: "3-4 hours" }
      ]
    }
  },
  "Bantu Knots": {
    "Classic Bantu Knots": {
      description: "Traditional Bantu knots",
      variations: [
        { name: "Small Knots (8-10)", duration: "2-3 hrs" },
        { name: "Medium Knots (12-15)", duration: "3-4 hrs" },
        { name: "Large Knots (6-8)", duration: "2.5-3.5 hrs" },
        { name: "Jumbo Knots (4-6)", duration: "2-3 hrs" }
      ]
    },
    "Bantu Knots with Extensions": {
      description: "Bantu knots with added hair",
      variations: [
        { name: "Small Knots with Weave", duration: "3-4 hrs" },
        { name: "Medium Knots with Weave", duration: "4-5 hrs" },
        { name: "Large Knots with Weave", duration: "3.5-4.5 hrs" },
        { name: "Braided Knots with Extensions", duration: "4-6 hrs" }
      ]
    },
    "Creative Bantu Knots": {
      description: "Creative Bantu knot designs",
      variations: [
        { name: "Irregular Parting Design", duration: "3-4 hrs" },
        { name: "Heart-Shaped Parting", duration: "3.5-4.5 hrs" },
        { name: "Zig-Zag Parting Pattern", duration: "4-5 hrs" },
        { name: "Geometric Parting", duration: "4-5 hrs" }
      ]
    },
    "Bantu Knots with Braids": {
      description: "Bantu knots combined with braids",
      variations: [
        { name: "Knots with Side Braids", duration: "3-4 hrs" },
        { name: "Knots with Cornrows", duration: "4-5 hrs" },
        { name: "Knots with Flat Twists", duration: "3.5-4.5 hrs" },
        { name: "Half-Up Half-Down Style", duration: "4-5 hrs" }
      ]
    },
    "Bantu Knots with Beads/Decorations": {
      description: "Bantu knots with decorative elements",
      variations: [
        { name: "Knots with Beads", duration: "3-4 hrs" },
        { name: "Knots with Golden Details", duration: "3.5-4.5 hrs" },
        { name: "Knots with Neon Accents", duration: "4-5 hrs" },
        { name: "Knots with Decorative Accessories", duration: "4-5 hrs" }
      ]
    },
    "Specialty Bantu Knots": {
      description: "Specialty Bantu knot styles",
      variations: [
        { name: "Twist Out Knots", duration: "3-4 hrs" },
        { name: "Dreadlock Knots", duration: "4-5 hrs" },
        { name: "Chunky Knot Locs", duration: "3.5-4.5 hrs" },
        { name: "Messy Knot Style", duration: "2.5-3.5 hrs" }
      ]
    },
    "Bantu Knots for Short Hair": {
      description: "Bantu knots for short hair lengths",
      variations: [
        { name: "Micro Knots", duration: "2-3 hrs" },
        { name: "Tapered Knots", duration: "2.5-3.5 hrs" },
        { name: "Side Knots", duration: "2-3 hrs" },
        { name: "Crown Knots", duration: "2.5-3.5 hrs" }
      ]
    }
  },
  "Weaves/Extensions": {
    "Sew-in Weaves": {
      description: "Professional sew-in weave installation",
      variations: [
        { name: "Seamless Sew-In with Leave Out", duration: "2-3.5 hrs" },
        { name: "Closure Sew-In (4x4)", duration: "2.5-4 hrs" },
        { name: "Closure Sew-In (5x5)", duration: "2.5-4 hrs" },
        { name: "Frontal Sew-In (13x4)", duration: "3-4.5 hrs" },
        { name: "Frontal Sew-In (13x6)", duration: "3-4.5 hrs" },
        { name: "360 Frontal", duration: "3.5-5 hrs" },
        { name: "Extra Bundle Addition", duration: "30 min - 1 hr" }
      ]
    },
    "Quick Weaves": {
      description: "Quick weave installation",
      variations: [
        { name: "Traditional Quick Weave", duration: "1.5-3 hrs" },
        { name: "Quick Weave + 6-8 Braids", duration: "2-3.5 hrs" },
        { name: "2 Braids w/ Quick Weave", duration: "1.5-2.5 hrs" },
        { name: "Braid Down Quick Weave (10-12 braids)", duration: "2-3.5 hrs" },
        { name: "Natural Luxury Quick Weave", duration: "2-3.5 hrs" },
        { name: "Flip Over Quick Weave", duration: "2-3 hrs" },
        { name: "Glueless HD Closure Quick Weave (2x6)", duration: "2-3.5 hrs" },
        { name: "Quick Weave with Leave Out", duration: "1.5-3 hrs" },
        { name: "Full Closure Quick Weave", duration: "2-3.5 hrs" }
      ]
    },
    "Ponytails": {
      description: "Ponytail styles and installations",
      variations: [
        { name: "Braid Pony (High or Mid)", duration: "1-2.5 hrs" },
        { name: "Middle Part Ponytail", duration: "1-2.5 hrs" },
        { name: "Low Swoop Ponytail", duration: "1.5-3 hrs" },
        { name: "Sleek Pony (Mid/High)", duration: "1.5-3 hrs" },
        { name: "Half Up Half Down", duration: "2-3 hrs" },
        { name: "Knot Bun (High or Low)", duration: "1-2.5 hrs" }
      ]
    }
  },
  "Hair Maintenance & Consultation": {
    "Hair Maintenance": {
      description: "Hair maintenance and care services",
      variations: [
        { name: "Edge Touch-ups", duration: "30 min" },
        { name: "Scalp Treatment", duration: "45 min" },
        { name: "Style Refresh", duration: "1 hr" },
        { name: "Full Maintenance", duration: "1.5-2 hrs" }
      ]
    },
    "Hair Consultation": {
      description: "Professional hair consultation services",
      variations: [
        { name: "Basic Consultation", duration: "15 min" },
        { name: "Detailed Consultation", duration: "30 min" }
      ]
    }
  }
};

// Service categories for navigation
export const SERVICE_CATEGORIES = [
  "Braids",
  "Twists", 
  "Faux Locs",
  "Crotchets",
  "Dreads",
  "Kid Styles",
  "Cornrows",
  "Bantu Knots",
  "Weaves/Extensions",
  "Hair Maintenance & Consultation"
];

// Popular services for quick access
export const POPULAR_SERVICES = [
  "Box Braids",
  "Knotless Braids", 
  "Sew-in Weaves",
  "Wash & Style",
  "Hair Coloring"
];