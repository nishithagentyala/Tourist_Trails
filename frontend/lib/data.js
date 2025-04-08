const destinations = [
  {
    id: 1,
    name: "Tawang Monastery",
    State: "Arunachal Pradesh",
    Category: "Religious/Monastery",
    Location: "Tawang",
    BestTimetoVisit: "March to October",
    images: [
      "https://www.exoticmiles.com/wp-content/uploads/2020/05/Tawang-Monastery.jpg",
      "https://s7ap1.scene7.com/is/image/incredibleindia/tawang-monastery-tawang-arunachal-pradesh-2-attr-hero?qlt=82&ts=1726743068766",
      "https://travelogyindia.b-cdn.net/storage/app/upload/tawang-monastery-arunachal-pradesh.jpg",
    ],
    Detail:
      "Tawang Monastery, located in Arunachal Pradesh, is the largest monastery in India and the second-largest in the world. Situated at an altitude of 10,000 feet, it offers breathtaking views of the Himalayas. Founded in the 17th century, it is a significant center of Mahayana Buddhism and houses around 450 monks. The monastery features an 8-meter tall golden Buddha statue, ancient scriptures, and vibrant murals. Its peaceful ambiance and spiritual heritage attract pilgrims and travelers alike.",
    Description:
      "The largest monastery in India, offering stunning views of the Himalayas and a spiritual retreat.",
  },
  {
    id: 2,
    name: "Kaziranga National Park",
    State: "Assam",
    Category: "Wildlife/National Park",
    Location: "Golaghat & Nagaon",
    images: [
      "https://liamtra.com/blog/wp-content/uploads/2023/02/Flora-and-Fauna-found-in-Kaziranga-National-Park-1.jpg",
      "https://www.kaziranganationalpark-india.com/blog/wp-content/uploads/2021/12/kaziranga-elephants.jpg",
      "https://kazirangatourism.in/image/wildlifesafari.jpg",
    ],
    Detail:
      "Kaziranga National Park, a UNESCO World Heritage Site in Assam, is renowned for its population of the one-horned rhinoceros. Spanning lush grasslands, wetlands, and forests, it is also home to elephants, tigers, wild water buffalo, and a wide variety of birds. The park's rich biodiversity and scenic beauty make it a paradise for wildlife enthusiasts and photographers. Jeep and elephant safaris offer an immersive experience in its vibrant ecosystem. ",
    BestTimetoVisit: "November to April",
    Description:
      "A UNESCO World Heritage Site, home to the Indian one-horned rhinoceros and diverse wildlife.",
  },
  {
    id: 3,
    name: "Jagannath Temple",
    State: "Odisha",
    Category: "Religious/Temple",
    Location: "Puri",
    images: [
      "https://s7ap1.scene7.com/is/image/incredibleindia/sri-jagannath-temple-puri-odisha-2-attr-hero?qlt=82&ts=1726663717081",
      "https://s7ap1.scene7.com/is/image/incredibleindia/sri-jagannath-temple-puri-odisha-1-attr-hero?qlt=82&ts=1726663747217",
      "https://images.firstpost.com/uploads/2024/01/odisha1.jpg?im=FitAndFill=(1200,675)",
    ],
    BestTimetoVisit: "October to February",
    Detail:
      "Jagannath Temple, located in Puri, Odisha, is one of the four sacred Char Dham pilgrimage sites in India. Dedicated to Lord Jagannath, a form of Lord Vishnu, the temple is famous for its grand architecture, spiritual atmosphere, and the annual Rath Yatra festival. The temple's towering spire and intricate carvings showcase Kalinga architecture at its finest. Devotees from all over the world visit to seek blessings and witness centuries-old rituals. Non-Hindus are not allowed inside the temple but can view it from the nearby library terrace.",
    Description:
      "One of the Char Dham pilgrimage sites, famous for the annual Rath Yatra festival.",
  },
  {
    id: 4,
    name: "Sundarbans",
    State: "West Bengal",
    Category: "Wildlife/National Park",
    Location: "Sundarbans Delta",
    images: [
      "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/01/16170702/tiger.jpg?tr=w-1200,q-60",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDs-yXqxsvgZJcpT9XGEsv6OeXb2ALPlcnsg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpn6wkB_Ar97GVuqPSHJilRTcpoZv_qhcqg&s",
    ],
    BestTimetoVisit: "November to February",
    Detail:
      "The Sundarbans, located in West Bengal, is the world’s largest mangrove forest and a UNESCO World Heritage Site. It is home to the elusive Royal Bengal Tiger, saltwater crocodiles, and a variety of bird and marine species. The region is interlaced with tidal rivers, creeks, and mudflats, offering a unique ecosystem and a rich biodiversity. Boat safaris through the dense mangrove channels provide a thrilling and immersive experience. ",
    Description:
      "The world's largest mangrove forest, home to the Royal Bengal Tiger.",
  },
  {
    id: 5,
    name: "Taj Mahal",
    State: "Uttar Pradesh",
    Category: "Heritage/Monument",
    Location: "Agra",
    images: [
      "https://images.pexels.com/photos/5608221/pexels-photo-5608221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
      "https://c4.wallpaperflare.com/wallpaper/839/1000/912/world-1920x1080-taj-mahal-taj-wallpaper-preview.jpg",
    ],
    BestTimetoVisit: "October to March",
    Detail:
      "The Taj Mahal, a UNESCO World Heritage Site in Agra, is an iconic symbol of love built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. Constructed from gleaming white marble, it features intricate inlay work and symmetrical gardens. The monument’s changing hues with the light of day make it a visual marvel.",
    Description:
      "A UNESCO World Heritage Site and one of the Seven Wonders of the World, known for its stunning white marble architecture.",
  },
  {
    id: 6,
    name: "Jaipur City Palace",
    State: "Rajasthan",
    Category: "Heritage/Palace",
    Location: "Jaipur",
    images: [
      "https://www.rajasthandirect.com/wp-content/uploads/2012/11/city-palace-jaipur-1.jpg",
      "https://images.memphistours.com/large/9a3063ce2cf1eb7675ef5298c7d594e6.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqrPRgVekIj0Jevblvtx7GXTkBlOo02xoNw&s",
    ],
    BestTimetoVisit: "October to March",
    Detail:
      "Located in the heart of Jaipur, the City Palace is a magnificent complex of courtyards, gardens, and palatial buildings. Built by Maharaja Sawai Jai Singh II, it reflects a blend of Rajput, Mughal, and European architectural styles. Highlights include the Chandra Mahal, Mubarak Mahal, and the intricately decorated Peacock Gate. ",
    Description:
      "A beautiful blend of Mughal and Rajput architecture, housing museums and royal artifacts.",
  },
  {
    id: 7,
    name: "Rann of Kutch",
    State: "Gujarat",
    Category: "Desert/Natural Beauty",
    Location: "Kutch",
    images: [
      "https://www.rannutsav.com/assets/front/img/white-rann.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBmR40BKTxKvbH0P3molBbqW0WF5MofmvOQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUXZVkVj4OPW17_zoCN0XAmFUDb69cQwonw&s",
    ],
    BestTimetoVisit: "November to February",
    Detail:
      "The Rann of Kutch is one of the world’s largest salt deserts, stretching across the Thar Desert in Gujarat. During the Rann Utsav, this stark white landscape transforms into a vibrant cultural celebration with folk music, dance, crafts, and camel rides. The full moon nights over the salt flats offer a surreal experience. Visitors can also explore nearby attractions like Kala Dungar and traditional Kutchi villages. It's a unique blend of natural beauty and cultural richness.",
    Description:
      "A vast white salt desert, famous for the Rann Utsav festival.",
  },
  {
    id: 8,
    name: "Munnar Tea Gardens",
    State: "Kerala",
    Category: "Hill Station/Nature",
    Location: "Munnar",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-5MrAJHCzoK8xYuXOdXVposXqz8XkaUjzg&s",
      "https://www.keralatoursoperatorindia.com/images/tea/kerala-tea-slider-1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdbRs7Np5c_0YOqT-X3J77q2ls8eZXcW50Q&s",
    ],
    BestTimetoVisit: "September to March",
    Detail:
      "Nestled in the Western Ghats, Munnar is famous for its sprawling tea gardens that blanket the rolling hills in lush green. The plantations, established by British settlers, offer picturesque views, fresh mountain air, and a tranquil atmosphere. Visitors can enjoy guided tours, watch tea-picking in action, and explore the Tea Museum. Munnar is also a haven for nature lovers, with nearby waterfalls, wildlife sanctuaries, and viewpoints. ",
    Description:
      "A picturesque hill station known for its lush tea plantations, rolling hills, and misty valleys, offering a peaceful retreat.",
  },
  {
    id: 9,
    name: "Mysore Palace",
    State: "Karnataka",
    Category: "Heritage/Palace",
    Location: "Mysore",
    images: [
      "https://static.toiimg.com/photo/51010758/.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-fnPI4tfg5u2KWS1SpbJLyJ8gtXCYozGgQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMeUei7fE4iHD59bz1HfQEptF7Z51bbdfsA&s",
    ],
    BestTimetoVisit:
      "October to March, especially during the Dussehra festival",
    Detail:
      "The Mysore Palace is a magnificent royal residence and one of the most visited monuments in India. A masterpiece of Indo-Saracenic architecture, it features grand halls, intricately carved doors, and stunning stained-glass ceilings. The palace comes alive during the Dussehra festival with dazzling lights and vibrant processions. Rich in history, it reflects the legacy of the Wodeyar dynasty. ",
    Description:
      "A magnificent Indo-Saracenic palace that lights up beautifully during festivals.",
  },
  {
    id: 10,
    name: "Meenakshi Temple",
    State: "Tamil Nadu",
    Category: "Religious/Temple",
    Location: "Madurai",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfa5iLIFWdR-qcMUGfgsYMiXQmy_mqhbHOkw&s",
      "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/meenakshi-amman-temple-1656170467_cfebe78d69f069f881aa.webp",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/71/bf/0e/madurai-meenakshi-temple.jpg?w=1200&h=-1&s=1",
    ],
    BestTimetoVisit: "October to March",
    Detail:
      "Located in Madurai, Meenakshi Amman Temple is a dazzling example of Dravidian architecture with its towering gopurams adorned with thousands of colorful sculptures. Dedicated to Goddess Meenakshi and Lord Sundareswarar, it is a major pilgrimage site and cultural landmark. The temple complex includes sacred tanks, halls with stone pillars, and daily rituals that draw thousands of devotees. It is known for its spiritual ambiance and architectural marvels.",
    Description:
      "An iconic temple known for its colorful gopurams and intricate carvings.",
  },
  {
    id: 11,
    name: "Charminar",
    State: "Telangana",
    Category: "Heritage/Monument",
    Location: "Hyderabad",
    images: [
      "https://s7ap1.scene7.com/is/image/incredibleindia/charminar-mosque-hyderabad-telangana-3-attr-about?qlt=82&ts=1726652899615",
      "https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/09/Charminar-Hyderabad.jpg?fit=1000%2C551&ssl=1",
      "https://s7ap1.scene7.com/is/image/incredibleindia/charminar-hyderabad-2-attr-hero?qlt=82&ts=1726652869975",
    ],
    BestTimetoVisit: "October to March",
    Detail:
      "Charminar, located in the heart of Hyderabad, is a grand monument built in 1591 by Muhammad Quli Qutb Shah. Known for its four grand arches and minarets, it showcases Indo-Islamic architecture with Persian influences. Surrounding the monument is the bustling Laad Bazaar, famous for bangles, pearls, and local delicacies. Charminar is a symbol of Hyderabad’s rich history and culture. Its terrace offers panoramic views of the old city.",
    Description:
      "A historic monument and mosque, symbolizing the grandeur of Hyderabad.",
  },
  {
    id: 12,
    name: "Sultanpur National Park",
    State: "Haryana",
    Category: "Wildlife/National Park",
    Location: "Gurugram",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/c8/82/44/sultanpur-national-park.jpg?w=800&h=-1&s=1",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbAj9oXciJyUrlo615tULtRBhmTPFG4I8Kg&s",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/92/68/cb/sultanpur-national-park.jpg?w=1200&h=1200&s=1",
    ],
    BestTimetoVisit: "November to February",
    Detail:
      "Sultanpur National Park, located near Gurgaon, is a birdwatcher’s paradise and a peaceful escape into nature. The park hosts over 250 species of resident and migratory birds, especially during the winter months. Painted storks, greater flamingos, and Siberian cranes can often be spotted. It features walking trails, watch towers, and a serene environment ideal for photography and quiet reflection. It's a great day trip from Delhi for nature lovers.",
    Description:
      "A famous bird sanctuary home to migratory birds from Europe, Siberia, and Central Asia, making it a paradise for birdwatchers.",
  },
  {
    id: 13,
    name: "Baidyanath Jyotirlinga Temple",
    State: "Jharkhand",
    Category: "Religious/Temple",
    Location: "Deoghar",
    images: [
      "https://ritsin.com/wp-content/uploads/2013/07/baidyanath-temple-mandir-jyotirlinga-1.jpg",
      "https://i0.wp.com/acharyaganesh.com/wp-content/uploads/2024/11/blog-Vaidyanath-Jyotirlinga.jpg?fit=1280%2C720&ssl=1",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-AYiAW8QCFV5EQWK_J1aoRQRhzO2_zU1eA&s",
    ],
    BestTimetoVisit:
      "October to March for pleasant weather; July–August during Shravan for religious festivities.",
    Detail:
      "Situated in Deoghar, the Baidyanath Temple is one of the twelve sacred Jyotirlingas dedicated to Lord Shiva. The temple complex, built in classic Hindu architectural style, attracts millions of devotees, especially during the Shravan month. It is deeply connected with mythological stories and offers a spiritually enriching experience. Pilgrims often undertake a barefoot journey to offer holy Ganga water to the Shivalinga.",
    Description:
      "Baidyanath Jyotirlinga Temple, located in Deoghar, is one of the twelve sacred Jyotirlingas in India, dedicated to Lord Shiva. This temple is a major pilgrimage site, attracting millions of devotees, especially during the Shravani Mela. The temple complex includes several shrines, and it holds immense mythological and spiritual significance.",
  },
  {
    id: 14,
    name: "Khajuraho Temples",
    State: "Madhya Pradesh",
    Category: "Heritage/Temple",
    Location: "Khajuraho",
    images: [
      "https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U=",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8hL9pJlafQSMt7Ny52vw2D-Lvsv1xFLBuA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8hL9pJlafQSMt7Ny52vw2D-Lvsv1xFLBuA&s",
    ],
    BestTimetoVisit:
      "October to March, especially February during the Khajuraho Dance Festival.",
    Detail:
      "The Khajuraho Temples are a UNESCO World Heritage site known for their exquisite sculptures and architectural brilliance. Built by the Chandela dynasty between the 10th and 12th centuries, the temples are famed for their intricate carvings, including many depicting sensual art and daily life. The group includes both Hindu and Jain temples, reflecting a spirit of tolerance. Surrounded by lush gardens, they offer a deep cultural and historical insight.",
    Description:
      "A UNESCO World Heritage Site, known for its intricate erotic sculptures and Nagara-style architecture.",
  },
  {
    id: 15,
    name: "Vantawng Falls",
    State: "Mizoram",
    Category: "Waterfall/Nature",
    Location: "Serchhip",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnIU8OZ2Eji_TLQn1S3l9YqHAANGBU2lwcg&s",
      "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/18/ebdae070e14630983ee582f92c54e2c7_1000x1000.jpg",
      "https://i.pinimg.com/736x/c6/12/97/c6129704ca968d93a2771e629b71c4a7.jpg",
    ],
    BestTimetoVisit: "September to January",
    Detail:
      "Vantawng Falls is the highest and most spectacular waterfall in Mizoram, cascading down 750 feet in a scenic jungle setting. Surrounded by thick bamboo groves and lush forested hills, the waterfall looks like a white ribbon gushing through the greenery. It’s located near Thenzawl and is accessible via a short trek. A viewing tower allows safe and panoramic views of the fall. Its serene location makes it a perfect spot for nature lovers and photographers.",
    Description:
      "The highest waterfall in Mizoram, surrounded by lush green forests and a breathtaking natural landscape.",
  },
  {
    id: 16,
    name: "Ajanta and Ellora Caves",
    State: "Maharashtra",
    Category: "Heritage/Caves",
    Location: "Aurangabad",
    images: [
      "https://aurangabadtourism.in/images/places-to-visit/header/ellora-caves-aurangabad-tourism-entry-fee-timings-holidays-reviews-header.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDTPSh6ip3MPXabAX7EJK-UL3dX8ci7Vo8w&s",
      "https://media.licdn.com/dms/image/D5612AQGu3ARo0kcO8g/article-cover_image-shrink_720_1280/0/1719485183350?e=2147483647&v=beta&t=Qvo7hiS5ADOQQJkZnNhrincNuEO5398BMzCUqNV6_6w",
    ],
    BestTimetoVisit: "October to March",
    Detail:
      "The Ajanta and Ellora Caves are UNESCO World Heritage sites famed for their remarkable rock-cut architecture, murals, and sculptures. Ajanta features Buddhist caves with ancient paintings and stupas, while Ellora combines Buddhist, Hindu, and Jain temples carved into volcanic rock. The Kailasa Temple at Ellora is a marvel carved from a single stone. These caves reflect India’s spiritual history and artistic brilliance from the 2nd century BCE to the 10th century CE.",
    Description:
      "Rock-cut caves featuring ancient Buddhist, Hindu, and Jain sculptures.",
  },
  {
    id: 17,
    name: "Golden Temple",
    State: "Punjab",
    Category: "Religious/Temple",
    Location: "Amritsar",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLVmu06I2NneSo0bvL4b-sP-0dVduSG6fGQ&s",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/56/fd/28.jpg",
      "https://media.istockphoto.com/id/543179390/photo/golden-temple-the-main-sanctuary-of-sikhs-amritsar-india.jpg?s=612x612&w=0&k=20&c=s4bOWzg0e0ecBBPmuzIEShhrmMWFE16cnYlAZ7Nfdeg=",
    ],
    BestTimetoVisit:
      "November to March for cool weather and festivals like Guru Nanak Jayanti.",
    Detail:
      "The Golden Temple (Harmandir Sahib) in Amritsar is the holiest shrine in Sikhism, symbolizing equality and humility. Adorned with a gold-plated dome and surrounded by the sacred Amrit Sarovar, it offers a serene spiritual experience. The temple is open to people of all faiths and is renowned for its community kitchen (Langar) that serves free meals daily. Illuminated beautifully at night, its reflection in the water is mesmerizing.",
    Description:
      "The holiest Sikh shrine, known for its golden structure and Langar service.",
  },
  {
    id: 18,
    name: "Dal Lake",
    State: "Jammu & Kashmir",
    Category: "Lake/Nature",
    Location: "Srinagar",
    images: [
      "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190312112932/Shikara-boats-on-Dal-lake-Srinagar.jpg",
      "https://img.indiahighlight.com/fit-in/1090x600/ih/uploads/1725346274.jpg",
      "https://www.flamingotravels.co.in/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FPlacesOfInterest%2Fdal%20lake.png&w=640&q=90",
    ],
    BestTimetoVisit: "April to October for lush landscapes",
    Detail:
      "Dal Lake is the jewel of Srinagar, known for its scenic beauty and tranquil waters surrounded by the snow-capped Himalayas. Visitors can enjoy shikara rides, stay in charming houseboats, or shop from floating markets. The Mughal gardens along its banks add to its charm. The lake changes character with the seasons—lush in summer and frozen in winter. It's a perfect retreat for romance, photography, and nature lovers.",
    Description: "Famous for houseboats, shikaras, and scenic Himalayan views.",
  },
  {
    id: 19,
    name: "Mahabodhi Temple",
    State: "Bihar",
    Category: "Religious/Temple",
    Location: "Bodh Gaya",
    images: [
      "https://www.akkaias.com/uploads/images/outlooktraveller.jpg",
      "https://vajiram-prod.s3.ap-south-1.amazonaws.com/Mahabodhi_Temple_Complex_511d2e9a47.webp",
      "https://thegr8wall.wordpress.com/wp-content/uploads/2016/01/dscn0103.jpg?w=584",
    ],
    BestTimetoVisit:
      "October to March, especially during Buddha Jayanti or Bodh Mahotsav in December.",
    Detail:
      "The Mahabodhi Temple in Bodh Gaya marks the sacred spot where Lord Buddha attained enlightenment under the Bodhi Tree. This UNESCO World Heritage site features a grand pyramidal tower and serene ambiance, attracting pilgrims from across the world. The Bodhi Tree, descended from the original, and the nearby Lotus Pond are key highlights. The temple represents the heart of Buddhist pilgrimage and spirituality.",
    Description:
      "A UNESCO World Heritage Site, marking the place where Buddha attained enlightenment.",
  },
  {
    id: 20,
    name: "Rohtang Pass",
    State: "Himachal Pradesh",
    Category: "Mountain Pass/Nature",
    Location: "Near Manali",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyZNQ4Vekdo4P57vnCqnVCWRY5ZnPyRd7IkA&s",
      "https://s7ap1.scene7.com/is/image/incredibleindia/rohtang-pass-manali-himachal-pradesh-1-attr-hero?qlt=82&ts=1726730701545",
      "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Rohtang-pass-in-summer_16th-jan.jpg",
    ],
    BestTimetoVisit: "May to October ",
    Detail:
      "Rohtang Pass, located at 13,050 feet above sea level, offers breathtaking views of the snow-covered peaks and glaciers of the Pir Panjal Range. It serves as a gateway between the Kullu Valley and Lahaul-Spiti, drawing adventure lovers for snow activities like skiing and snowboarding. The pass is a haven for bikers and nature photographers. Due to heavy snowfall, it's only open for a few months each year.",
    Description:
      "A high mountain pass offering breathtaking views of the Himalayas, popular for snow activities and adventure sports.",
  },
  {
    id: 21,
    name: "Loktak Lake",
    State: "Manipur",
    Category: "Lake/Nature",
    Location: "Bishnupur",
    images: [
      "https://www.savaari.com/blog/wp-content/uploads/2022/12/loktak-lake-in-india.jpg",
      "https://res.cloudinary.com/purnesh/image/upload/f_auto/v1632891688/a1632891686987.jpg",
      "https://en-media.thebetterindia.com/uploads/2016/02/loktak_f.jpg",
    ],
    BestTimetoVisit: "November to March for clear skies and pleasant weather.",
    Detail:
      "Loktak Lake is the largest freshwater lake in northeastern India, famous for its phumdis—floating islands made of vegetation, soil, and organic matter. The lake is home to the Keibul Lamjao National Park, the world’s only floating national park, and the rare Sangai deer. Houseboats and scenic boat rides allow visitors to explore this unique ecological wonder. It's a peaceful retreat for birdwatchers and nature lovers.",
    Description:
      "The largest freshwater lake in Northeast India, famous for its floating phumdis.",
  },
  {
    id: 22,
    name: "Living Root Bridges",
    State: "Meghalaya",
    Category: "Eco-Tourism/Nature",
    Location: "Cherrapunji & Mawlynnong",
    images: [
      "https://i.natgeofe.com/n/6f1836a2-2337-48a1-b131-e42831c93cf1/double-decker-living-root-bridge-meghalaya-india_16x9.jpg",
      "https://thelogicalindian.com/wp-content/uploads/2024/10/500x300_235015-copy-of-web-image-34.webp",
      "https://travenjo.com/wp-content/uploads/2019/04/Living-Root-Brdige-Mawlynnong.jpg?x98861",
    ],
    BestTimetoVisit:
      "October to April, when the trails are less slippery and the monsoon has nourished the greenery.",
    Detail:
      "Crafted from the roots of ancient rubber trees, the Living Root Bridges in Meghalaya are a remarkable example of bioengineering and harmony with nature. These natural bridges are grown over decades by the Khasi and Jaintia tribes and are especially famous in Cherrapunji and Nongriat. The double-decker root bridge in Nongriat is a popular trekking destination. The surrounding forests and waterfalls add to the ethereal charm.",
    Description:
      "Handcrafted by generations of the Khasi tribe, these unique bridges are made from living tree roots, blending nature and engineering. The Double-Decker Living Root Bridge in Nongriat is the most famous.",
  },
  {
    id: 23,
    name: "Tsomgo Lake",
    State: "Sikkim",
    Category: "Lake/Nature",
    Location: "East Sikkim",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9scoyiFY80EsqLPofgeWvG_4Mb8be4hL73Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiz3Y0WOaIKHsTDtJQ1jtXMUhzG3LAx3ukEw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHmdZ9_dyiFJOR7kU7P33P25GeBriLolIdg&s",
    ],
    BestTimetoVisit:
      "April to May and October to December for snow or blooming alpine flowers.",
    Detail:
      "Tsomgo Lake, also called Changu Lake, is a glacial lake located at 12,400 feet above sea level near Gangtok. Surrounded by snow-capped mountains, it offers a surreal setting, especially when partially frozen. The lake holds religious significance for the Sikkimese people and is often visited for yak rides and scenic beauty. In spring, it’s adorned with blooming rhododendrons and primulas.",
    Description:
      "A glacial lake at an altitude of 12,310 ft, known for its breathtaking views and changing colors throughout the seasons.",
  },
  {
    id: 24,
    name: "Dzukou Valley",
    State: "Nagaland",
    Category: "Hill Station/Nature",
    Location: "Kohima",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYsfV_oqG-aHrLrxmuX6j2hogAJukMz2qmUNIEitJKTU17-FgdwhT3Mx83L6YZp8t_3tc&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMVMNBZb-0jZqFnDpkSE1c-Dcqu-I_8ZZPg&s",
      "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2023/11/dzukou-8.jpeg?size=*:900",
    ],
    BestTimetoVisit: "June to September for blooming flowers;",
    Detail:
      "Dzukou Valley, located on the border of Nagaland and Manipur, is renowned for its rolling green meadows, seasonal wildflowers, and serene trekking trails. It's especially stunning during the summer bloom of the rare Dzukou lily. The valley offers a peaceful escape and panoramic views of the surrounding hills. Camping under the stars adds to the charm for nature lovers and trekkers alike.",
    Description: "Famous for its seasonal flowers and breathtaking landscapes.",
  },
  {
    id: 25,
    name: "Unakoti",
    State: "Tripura",
    Category: "Heritage/Temple",
    Location: "Kailashahar",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHpiWq8MZkARPwKXHC0cjkI7OZGh5s1oP7Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTriK4BOstHei2e1u1jsknzfps8jFoKH_RADg&s",
      "https://thegypsychiring.com/wp-content/uploads/2023/08/Unakoti-Archaeological-Site-in-Tripura.webp",
    ],
    BestTimetoVisit:
      "October to April for comfortable weather and festivals like Ashokastami Mela.",
    Detail:
      "Unakoti is an ancient Shaivite pilgrimage site known for its massive rock carvings and bas-reliefs of Hindu deities, carved into a forested hill. These 7th–9th century sculptures, including the iconic 30-foot-tall Unakotiswara Shiva head, are both artistic and mystical. The name Unakoti means one less than a crore, linked to intriguing legends. It’s a hidden archaeological gem nestled in lush surroundings.",
    Description:
      "A unique rock-cut site with thousands of Shaivite sculptures.",
  },
  {
    id: 26,
    name: "Kedarnath Temple",
    State: "Uttarakhand",
    Category: "Religious/Temple",
    Location: "Kedarnath",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kedarnath_Temple_in_Rainy_season.jpg/640px-Kedarnath_Temple_in_Rainy_season.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUD-BQsltt2eG7gYfiWa1O8yhCD4rPR195RA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYdZO_CjyKXHMkeS1gQ189z7J5wVBS-IvsA&s",
    ],
    BestTimetoVisit:
      " May to June and September to October (temple remains closed during winter due to snow).",
    Detail:
      "Situated at 11,755 feet in the Garhwal Himalayas, Kedarnath Temple is one of the twelve Jyotirlingas of Lord Shiva and an essential stop in the Char Dham Yatra. Surrounded by snow-capped peaks and accessed via a challenging trek, it offers a spiritually intense and scenic experience. Despite harsh weather, pilgrims visit for devotion and awe-inspiring beauty.",
    Description:
      "One of the holiest Hindu temples dedicated to Lord Shiva, nestled in the Himalayas and part of the Char Dham pilgrimage.",
  },
  {
    id: 27,
    name: "Rock Garden",
    State: "Chhattisgarh",
    Category: "Nature/Park",
    Location: "Raipur",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAfNa42_HhAch5a1xnoR5Zb7Vb-h2MYlyXyR8MqJHkRxl7TAoE48ny-aTgkuq-o1IBdg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpbmDpb_ost8CwD4tqQrrFY4GJM_K11tW5f2N1LZvfq2U1m4CKBAb6zX6uIhr1c7V6Ok&usqp=CAU",
      "https://paramountclientweb.s3.ap-south-1.amazonaws.com/indian-holiday-trip/Place/2023/Mar/Img_3942_202313231035_rock_garden.jpg",
    ],
    BestTimetoVisit: " October to March",
    Detail:
      "The Rock Garden of Chandigarh is a unique sculpture garden created by artist Nek Chand using industrial and domestic waste. Sprawling across 40 acres, it features imaginative artworks, waterfalls, and mosaic-covered courtyards. It's a creative oasis in the city, blending recycling with artistic expression. A favorite for families, photographers, and art lovers alike.",
    Description:
      "A beautifully designed garden with artificial waterfalls and sculptures, offering a relaxing environment.",
  },
  {
    id: 28,
    name: "Baga Beach",
    State: "Goa",
    Category: "Beach",
    Location: "North Goa",
    images: [
      "https://img.freepik.com/premium-photo/umbrella-chair-beach-with-palm-tree-sea-beach_1339-125629.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714176000&semt=ais",
      "https://gogoacarrentals.com/wp-content/uploads/2019/03/Candolim-Beach.jpg",
      "https://assets.cntraveller.in/photos/60ba253f0f3a5367ec9fe958/16:9/w_1360,h_765,c_limit/GoaWhat-I-learnt-Ranjan-Pal-1366x768.jpg",
    ],
    BestTimetoVisit: "November to February",
    Detail:
      "Baga Beach is one of Goa’s most popular beaches, known for its lively nightlife, water sports, and beachside shacks. Tourists flock here for parasailing, jet-skiing, dolphin spotting, and party vibes. It’s also a great spot to relax with stunning sunsets and fresh seafood. The nearby Tito’s Lane adds to the beach’s energetic ambiance.",
    Description:
      "Baga Beach is one of the most popular beaches in Goa, known for its vibrant nightlife, water sports, beach shacks, and stunning sunset views. It attracts tourists from all over the world for its lively atmosphere and adventure activities like parasailing, jet skiing, and banana boat rides.",
  },
];
export default destinations;
