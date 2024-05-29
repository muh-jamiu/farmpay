const farms = [
  {
    name: "SunnyVale Farm",
    description:
      "SunnyVale Farm is committed to organic farming and sustainable practices, providing high-quality produce to the local community. We specialize in cultivating a variety of vegetables, including tomatoes, cucumbers, and peppers, using eco-friendly methods.",
    image:
      "https://www.blueflamebiodigesters.com/wp-content/uploads/2022/12/Organic-Farm-1170x675.webp",
    otherImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9wOXe9-BcI5UJLcXmrkIBM-UML3hVapKwg&s",
      "https://organicabiotech.com/wp-content/uploads/2021/10/organic-farming-min.jpg",
    ],
    location: "Rumuokoro, Port Harcourt",
    category: "Organic",
    capacity: 10,
    price: 80000,

    available: true,
    totalSlots: 5,
    availableSlots: 5,

    timeLine: [
      {
        id: 1,
        title: "Month 1",
        description: "Soil preparation and planting",
        isDone: true,
      },
      {
        id: 2,
        title: "Month 2",
        description: "Crop monitoring and pest control",
        isDone: true,
      },
      {
        id: 3,
        title: "Month 3",
        description: "Irrigation and fertilization",
        isDone: false,
      },
      {
        id: 4,
        title: "Month 4",
        description: "Harvesting and packaging",
        isDone: false,
      },
    ],
  },
  {
    name: "LushLand Farms",
    description:
      "LushLand Farms focuses on modern agricultural techniques to maximize yield and quality, providing fresh and nutritious produce year-round. Our farm uses advanced irrigation systems and organic fertilizers to ensure the best growth conditions.",
    image:
      "https://media.premiumtimesng.com/wp-content/files/2020/06/Going-into-the-Cassava-Farming-Business-nigeria.jpg",
    otherImages: [
      "https://greenhillsfarmstead.com/wp-content/uploads/2021/07/FACTS-1-1024x1024.png",
      "https://miro.medium.com/v2/resize:fit:1400/1*lm18SlmCRWUeoH2AXjBXZA.jpeg",
    ],
    location: "Eleme, Port Harcourt",
    category: "Modern Agriculture",
    capacity: 15,
    price: 90000,
    available: true,

    totalSlots: 8,
    availableSlots: 8,

    timeLine: [
      {
        id: 1,
        title: "Month 1",
        description: "Land clearing and soil testing",
        isDone: true,
      },
      {
        id: 2,
        title: "Month 2",
        description: "Planting and irrigation setup",
        isDone: true,
      },
      {
        id: 3,
        title: "Month 3",
        description: "Growth monitoring and nutrient application",
        isDone: false,
      },
      {
        id: 4,
        title: "Month 4",
        description: "Harvesting and distribution",
        isDone: false,
      },
    ],
  },
  {
    name: "HarvestHill",
    description:
      "HarvestHill is dedicated to producing high-quality fruits and vegetables using eco-friendly methods. Our farm is designed to support biodiversity and minimize environmental impact. We grow a wide range of crops, including bananas, plantains, and leafy greens.",
    image:
      "https://i0.wp.com/www.fukuoka-now.com/wp-content/uploads/2022/08/fn_kyushu-ringo-mura-sansuien-fruit-resize_2023_cl-001.jpeg?resize=1280%2C852&ssl=1",
    otherImages: [
      "https://cdn.standardmedia.co.ke/images/wysiwyg/images/IqOkEIT9zal85QCiq8XtfFNwNlxgtSVyDwc764AY.jpg",
      "https://images.unsplash.com/photo-1536657464919-892534f60d6e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXQlMjBmYXJtfGVufDB8fDB8fHww",
    ],
    location: "Choba, Port Harcourt",
    category: "Eco-friendly",
    capacity: 12,
    price: 50000,
    available: true,

    totalSlots: 7,
    availableSlots: 7,

    timeLine: [
      {
        id: 1,
        title: "Month 1",
        description: "Initial planting and setup",
        isDone: true,
      },
      {
        id: 2,
        title: "Month 2",
        description: "Growth monitoring",
        isDone: true,
      },
      {
        id: 3,
        title: "Month 3",
        description: "Pest control and weeding",
        isDone: false,
      },
      {
        id: 4,
        title: "Month 4",
        description: "Harvest and sale",
        isDone: false,
      },
    ],
  },
  {
    name: "Evergreen Acres",
    description:
      "Evergreen Acres produces a wide range of organic crops with a focus on sustainability and environmental health. We aim to provide the freshest and healthiest produce to our customers, including carrots, lettuce, and herbs.",
    image:
      "https://www.nairaland.com/attachments/16361376_images2_jpeg_jpegeaa7b646bbf3e81e48bac7a3f797497c",
    otherImages: [
      "https://thefarmersjournal.com/wp-content/uploads/2023/05/Okra-Production-Guide-Step-by-Step-1.jpg",
      "https://i.ytimg.com/vi/MfC8lP7fGAA/maxresdefault.jpg",
    ],
    location: "Aluu, Port Harcourt",
    category: "Organic",
    capacity: 20,
    price: 30000,
    available: true,
    totalSlots: 10,
    availableSlots: 10,
    timeLine: [
      {
        id: 1,
        title: "Month 1",
        description: "Soil testing and preparation",
        isDone: true,
      },
      {
        id: 2,
        title: "Month 2",
        description: "Planting and watering",
        isDone: true,
      },
      {
        id: 3,
        title: "Month 3",
        description: "Crop maintenance and growth monitoring",
        isDone: false,
      },
      {
        id: 4,
        title: "Month 4",
        description: "Harvesting and selling",
        isDone: false,
      },
    ],
  },
  {
    name: "GreenLeaf Farms",
    description:
      "GreenLeaf Farms specializes in high-quality leafy greens and vegetables grown using sustainable practices. Our main crops include spinach, kale, and lettuce, all cultivated with minimal environmental impact.",
    image:
      "https://dailytrust.com/wp-content/uploads/2017/09/2017_9large_A_farmer_Malam_Iliya_Abubakar_inspects_his_yam_farm_at_Damari_Katsina_State.jpg",
    otherImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9JMgkSVZnSXVC7fRoqd0AlDBsriGrY5JKQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHU8kegS3jWgT9glmEQNWUMS29S4mV4OIv6A&s",
    ],
    location: "Oyigbo, Port Harcourt",
    category: "Vegetables",
    capacity: 18,
    price: 25000,
    available: true,

    totalSlots: 8,
    availableSlots: 8,

    timeLine: [
      {
        id: 1,
        title: "Month 1",
        description: "Land preparation and planting",
        isDone: true,
      },
      {
        id: 2,
        title: "Month 2",
        description: "Irrigation and crop monitoring",
        isDone: true,
      },
      {
        id: 3,
        title: "Month 3",
        description: "Weeding and fertilization",
        isDone: false,
      },
      {
        id: 4,
        title: "Month 4",
        description: "Harvest and distribution",
        isDone: false,
      },
    ],
  },
  {
    name: "RiverBank Farm",
    description:
      "RiverBank Farm harnesses the natural resources of its location near the Bonny River to grow a variety of crops, including cassava, yams, and maize. Our farm emphasizes water conservation and soil health to produce high yields.",
    image: "https://news.siu.edu/_assets/images/2018/09/corn.jpg",
    otherImages: [
      "https://media.bullseyeplus.com/Media/Blogs/5237/bg-corn_field-001-naramit.jpg",
      "https://i.ytimg.com/vi/u94iAWIU_6Q/maxresdefault.jpg",
    ],
    location: "Bonny, Port Harcourt",
    category: "Mixed Crops",
    capacity: 25,
    price: 55000,
    available: true,
    totalSlots: 13,
    availableSlots: 13,

    timeLine: [
      {
        id: 1,
        title: "Month 1",
        description: "Soil testing and initial planting",
        isDone: true,
      },
      {
        id: 2,
        title: "Month 2",
        description: "Irrigation and crop maintenance",
        isDone: true,
      },
      {
        id: 3,
        title: "Month 3",
        description: "Weed and pest control",
        isDone: false,
      },
      {
        id: 4,
        title: "Month 4",
        description: "Harvest and post-harvest handling",
        isDone: false,
      },
    ],
  },
];

module.exports = farms;
