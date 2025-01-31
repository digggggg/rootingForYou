const { Plant, User } = require("../models");

const plantData = [
  {
    title: "Snake Plant",
    upkeep:
      "Great for small spaces, and distinctive with leaves that are stiff and sharp. Easy to care for; can be neglected for weeks at a time.",
    toxicity: "Toxic to humans and even more so to animals if eaten.",
    water:
      "Let plant dry out between waterings. Water less frequently during winter",
    sun_amount: "Indirect",
    difficulty: 2,
    plant_img:
      "https://www.thespruce.com/thmb/akRDvKeZLPNU1NjRrbkiCrgwZo4=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/snake-plant-care-overview-1902772-04-d3990a1d0e1d4202a824e929abb12fc1-349b52d646f04f31962707a703b94298.jpeg",
  },
  {
    title: "Peace Lily",
    upkeep:
      "In ideal conditions, the plant will unveil beautiful white flowers that look like calla lilies.",
    toxicity: "Can be toxic to pets if eaten",
    water:
      "Keep soil moist but do not overwater. Give the leaves a spritz of water occasionally",
    sun_amount: "Avoid direct afternoon sunlight",
    difficulty: 5,
    plant_img:
      "https://i.etsystatic.com/15265690/r/il/9c7e6c/1211862072/il_794xN.1211862072_3kuo.jpg",
  },
  {
    title: "Fiddle Leaf Fig",
    upkeep: "Likes humidity. Mist the plant regularly",
    toxicity: "Toxic to dogs, cats and horses if eaten",
    water: "Water when the top of the soil is somewhat dry. Don not overwater",
    sun_amount: "Indirect",
    difficulty: 4,
    plant_img:
      "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Fiddle_Leaf_Fig_3_FGT_650x.jpg?v=1654093350",
  },
  {
    title: "Philodendron",
    upkeep:
      "Notable for its heart-shaped leaves and easy care. If leaves turn yellow, the plant is getting too much sun. Leggy stems may result from too little light.",
    toxicity: "Toxic to pets and humans if eaten",
    water: "Water when the top inch of soil is dry. Avoid soggy soil",
    sun_amount: "Tolerates a wide range of light conditions",
    difficulty: 4,
    plant_img:
      "https://www.englishgardens.com/wp-content/uploads/House-Plant-Philodendron-1-600x600.jpg",
  },
  {
    title: "ZZ Plant",
    upkeep:
      "Native to East Africa, this plant is virtually indestructible. Does fine with fluorescent light only. Drought-tolerant; if neglected, will perk up when watered again.",
    toxicity: "Toxic to pets and humans if eaten",
    water: "Water when the top inch of soil is dry. Avoid soggy soil",
    sun_amount: "Tolerates a wide range of light conditions",
    difficulty: 4,
    plant_img:
      "https://cdn.shopify.com/s/files/1/2570/3692/products/6in1ZZOverview_1024x1024@2x.jpg?v=1631652524",
  },
  {
    title: "Pothos",
    upkeep:
      "A trailing vine available in variations of leaf colors. If leaves are pale, the plant is getting too much light. In too little light, leaves will become solid green (not variegated).",
    toxicity: "Toxic to pets and humans if eaten",
    water: "Let dry between waterings. Water if leaves droop",
    sun_amount: "Bright light but not direct sun. Tolerates low light",
    difficulty: 5,
    plant_img:
      "https://cdn.shopify.com/s/files/1/0062/8532/8445/products/Golden_Pothos_BB_600x600_357b4263-6c75-466d-8c65-31061dc69954.jpg?v=1634736332&width=1000",
  },
  {
    title: "Majesty Palm",
    upkeep:
      "These tropical plants with long, feathery fronds can grow up to 15ft tall",
    toxicity: "Toxic to pets and humans if eaten",
    water:
      "Water once a week when the top inch of soil is dry. Don not let soil dry completely",
    sun_amount: "Avoid direct sunlight, it can cause leaves to brown",
    difficulty: 5,
    plant_img:
      "http://mobileimages.lowes.com/productimages/c10ff1be-24b1-4315-ad87-bc5aca07db8a/00894215.jpg",
  },
  {
    title: "Dumb Cane aka Leopard Lily aka Dieffenbachia",
    upkeep: "Keep away from cold drafts",
    toxicity:
      "Extremely poisonous if eaten. Sap can irritate the skin. Keep well away from pets and children",
    water: 'Water well on a regular schedule when the top 2-3" of soil are dry',
    sun_amount: "Medium to bright light; direct sun can burn the leaves",
    difficulty: 7,
    plant_img:
      "https://gardenerspath.com/wp-content/uploads/2021/01/Dieffenbachia-Growing-in-a-Pot-Indoors.jpg",
  },
  {
    title: "Ficus",
    upkeep:
      "Place your ficus where it will not have to be moved all winter, because it does not like changes in environmental conditions",
    toxicity: "Toxic to pets if eaten",
    water:
      "need consistent, but moderate watering throughout the growing season, with dry spells in the winter",
    sun_amount: "Medium to bright light; 65 - 75°F; barely moist soil",
    difficulty: 4,
    plant_img:
      "https://cdn.shopify.com/s/files/1/0068/4215/5090/t/115/assets/5255f44f733f--Ficus-BenjaminaMidnightGrave-8IN-Grower-336eae_730x.jpg?v=1611596561",
  },
  {
    title: "Cast-Iron Plant",
    upkeep:
      "Almost indestructible, withstanding neglect, low light, low humidity and a wide range of temperatures—perfect for a dark corner. Start with large plants since plants grow slowly",
    toxicity: "Entirely Non-Toxic",
    water: "When its top two inches of soil are dry to the touch.",
    sun_amount:
      "Low light; 45 - 85°F; evenly moist soil (barely moist in fall and winter)",
    difficulty: 2,
    plant_img:
      "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Cast_Iron_Plant_4_FGT_650x.jpg?v=1633113688",
  },
  {
    title: "Christmas Cactus",
    upkeep:
      "Plants usually bloom mid- to late December. After blooming is finished, prune by pinching or using a sharp knife to cut off several sections. This encourages the plant to branch, creating a fuller plant with more blossoms.",
    toxicity: "Non-toxic to dogs and cats",
    water:
      "Plan to water every 2-3 weeks, but only water when the top one third of soil feels dry to the touch.",
    sun_amount:
      "Medium to bright light with no direct sun; 65 - 80°F; evenly moist soil (barely moist in fall and winter)",
    difficulty: 3,
    plant_img:
      "https://cdn.mos.cms.futurecdn.net/SZnVkFK5hpCzgC2JGERGJW-1024-80.jpg.webp",
  },
  {
    title: "Plectranthus aka Swedish Ivy",
    upkeep:
      "Despite its name, the Plectranthus is native to South Africa and Australia. Its cascading stems studded with glossy rounded, scalloped-edge leaves make it primarily a foliage plant. But if often blooms in late spring or early summer with tiny white or pale mauve blooms on short spikes. Its tidy drapes make Swedish ivy a great choice for hanging baskets",
    toxicity: "Non-Toxic",
    water:
      "Plectranthus require regular watering to thrive, on average about 1 inch of water per week. Only water once the top inch or two of soil has dried out. Be careful not to overwater. The soil should stay moist but not wet",
    sun_amount: "Medium light; 50 - 65°F; barely moist soil",
    difficulty: 5,
    plant_img:
      "https://gardenerspath.com/wp-content/uploads/2022/03/Swedish-Ivy-in-Bloom-Hero.jpg",
  },
  {
    title: "Christmas Cactus",
    upkeep:
      "Plants usually bloom mid- to late December. After blooming is finished, prune by pinching or using a sharp knife to cut off several sections. This encourages the plant to branch, creating a fuller plant with more blossoms.",
    toxicity: "Non-toxic to dogs and cats",
    water:
      "Plan to water every 2-3 weeks, but only water when the top one third of soil feels dry to the touch.",
    sun_amount:
      "Medium to bright light with no direct sun; 65 - 80°F; evenly moist soil (barely moist in fall and winter)",
    difficulty: 3,
    plant_img:
      "https://cdn.mos.cms.futurecdn.net/SZnVkFK5hpCzgC2JGERGJW-1024-80.jpg.webp",
  },
  {
    title: "Dracaena aka Corn Plant",
    upkeep:
      "A large group of popular foliage plants, Dracaena (Dracaena spp.) display long, straplike leaves variegated with white, cream or red. Use young plants on tabletops. Larger plants require floor space, where they make striking specimens or work well in foliage groupings. Maintain plants at less than 6 feet by lopping off the top of the plant; within weeks a pair of new shoots will appear just below the cut.",
    toxicity:
      "When ingested, the plant can cause vomiting (occasionally with blood), depression, anorexia, hyper-salivation and, in cats, dilated pupils",
    water: "Every 10-14 days",
    sun_amount: "Medium to bright light; 65 - 75°F; barely moist soil",
    difficulty: 4,
    plant_img:
      "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Dracaena_Corn_Plant_FGT_1_650x.jpg?v=1612444294",
  },
  {
    title: "Anthurium aka Flamingo Flower",
    upkeep:
      "Flowers typically are red, but you can find hybrids in shades of pink, lavender, white and even green. Anthurium flower blossoms make superb cut flowers because they last a long time.",
    toxicity: "Toxic to pets and children",
    water: "roots become waterlogged easily so limit watering to once a week",
    sun_amount:
      "Medium to bright light with no direct sun; 65 - 80°F; evenly moist soil (barely moist in fall and winter)",
    difficulty: 4,
    plant_img:
      "https://bigboyplants.com/wp-content/uploads/2020/05/Anthurium-Care-Guide-1.jpg?ezimgfmt=ng%3Awebp%2Fngcb16%2Frs%3Adevice%2Frscb16-1",
  },
  {
    title: "Aloe Vera",
    upkeep:
      "an easy-care succulent, has distinctive elongated leaves that fan out in a vase shape from a central base. Try smaller varieties such as Aloe vera on a sunny kitchen window. Aloes work nicely in dish gardens and in rooms with Southwestern decor. Keep the spiky leaves away from high-traffic areas.",
    toxicity: "minor toxicity, some may be allergic",
    water: "once every two weeks",
    sun_amount: "Bright light; 65 - 75°F; moderately dry soil",
    difficulty: 2,
    plant_img:
      "https://media.greg.app/cGxhbnQtZGItcGhvdG9zLzExODk0MzMyMV8yMDUzMTY0NzA5NDI4NTFfOTkyNjI1NzkyNTk1Nzc5OTMzX24uanBn?auto=webp&width=1000&fit=cover&format=pjpg&height=1000&optimize=medium&precrop=1000:1000,smart",
  },
  {
    title: "Asparagus Fern",
    upkeep:
      "Delicate needlelike foliage drapes from this subtropical relative of asparagus, which is not a true fern. Stems of asparagus fern (Asparagus densiflorus) shoot upward and outward, making it a good hanging basket plant. Small white flowers hidden among needles turn into bright red berries. Keep the poisonous berries away from children and pets.",
    toxicity: "Toxic to dogs and cats, especially the berries",
    water:
      "Keep soil moist, and water when the top inch of soil feels dry to the touch.",
    sun_amount: "Medium to bright light; 60 - 75°F; evenly moist soil",
    difficulty: 5,
    plant_img:
      "https://www.provenwinners.com/sites/provenwinners.com/files/imagecache/500x500/ifa_upload/asparagus_fern_mono.jpg",
  },
  {
    title: "Peperomia",
    upkeep:
      "Peperomias most interesting feature is its leaves, which vary in shape (heart shape to narrow), texture (waxy to wafflelike) and color (green, reddish or silvery gray). Plants occasionally produce slender flowery spikes that resemble rat tails. Use on tabletops and as a companion in dish gardens and mixed baskets. The plant tolerates the low light of a north windowsill and stays small enough to fit on a desk or to be used in a terrarium.",
    toxicity: "Non-toxic and cat-friendly",
    water: "every one to two weeks",
    sun_amount: "Low to medium light; 60 - 75°F; moderately dry soil",
    difficulty: 3,
    plant_img:
      "https://www.logees.com/media/catalog/product/cache/088d41982d5ddfc4a0a1e449b5ddd946/p/e/peperomia_prostrata_square.jpg",
  },
  {
    title: "Chinese Evergreen",
    upkeep:
      "An excellent foliage plant for low to medium light, slow-growing Chinese evergreen (Aglaonema commutatum) can live for 10 years or more. Its standout feature: arching, lance-shape leaves, which are usually variegated with silver, gray or shades of green. Put a small plant on a living room table, or group larger ones with other low-light plants.",
    toxicity: "Toxic to humans and pets when ingested",
    water:
      "once every seven to 10 days in the summer and every two weeks in the winter",
    sun_amount: "Low to medium light; 60 - 75°F; evenly moist soil",
    difficulty: 4,
    plant_img:
      "https://www.gardendesign.com/pictures/images/900x705Max/site_3/chinese-evergreen-plant-aglaonema-shutterstock-com_15962.jpg",
  },
  {
    title: "Parlor Palm",
    upkeep:
      "The elegant, upright parlor palm (Chamaedorea elegans, located in the middle) has been a popular houseplant since Victorian times. Straplike green leaflets on feathery fronds grow 9 to 24 inches long. It is great for filling an empty corner and can get by on lower light than other palms. Young plants will do nicely in a terrarium while small.",
    toxicity: "Non-toxic to humans and pets",
    water: "every 1-2 weeks",
    sun_amount: "Medium to low light; 55 - 75°F; evenly moist soil",
    difficulty: 3,
    plant_img:
      "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Parlor_Palm_1_FGT_650x.jpg?v=1645211847",
  },
  {
    title: "English Ivy",
    upkeep:
      "This versatile foliage plant and its dainty demeanor makes it suitable for hanging baskets or pots. It is among the best houseplants for training on topiary forms or using as a groundcover beneath larger houseplants. Place English ivy (Hedera helix) on a mantel or shelf where the stems can hang down. The stems can grow quite long but are easily controlled with pruning",
    toxicity:
      "Toxic to humans and many animals, leaves are more toxic than the berries!",
    water:
      "Water ivies thoroughly, then let the soil dry to the touch to a depth of ½ inch before watering again.",
    sun_amount:
      "Medium to bright light; 55 - 70°F; average to high humidity; evenly moist soil",
    difficulty: 5,
    plant_img:
      "https://www.plants.com/images/157642L_20201120-1605903838316.jpg",
  },
  {
    title: "Spider Plant",
    upkeep:
      "This versatile foliage plant and its dainty demeanor makes it suitable for hanging baskets or pots. It is among the best houseplants for training on topiary forms or using as a groundcover beneath larger houseplants. Place English ivy (Hedera helix) on a mantel or shelf where the stems can hang down. The stems can grow quite long but are easily controlled with pruning. If you notice browning leaf tips, it can be from chemicals found in water, which cause build-up.",
    toxicity: "Non-toxic to humans and pets",
    water: "Water your Spider Plant when the top 50% of the soil is dry.",
    sun_amount: "Medium to bright light; 65 - 75°F; evenly moist soil",
    difficulty: 6,
    plant_img:
      "https://cdn.shopify.com/s/files/1/0183/3541/products/spider.jpg?v=1643921473",
  },
  {
    title: "Tradescantia",
    upkeep:
      "The trailing stems of tradescantias (Tradescantia spp.) change direction slightly at each node, giving the plant a zigzag look. Grow in mixed baskets, hanging baskets or as a groundcover under larger houseplants. Varietaged and purple-leaf types need bright light to maintain colors. Older plants become leggy and unkempt; replace them with new plants from rooted cuttings.",
    toxicity: "Non-toxic to humans and pets",
    water: "Water your Tradescantia when the top 50%-75% of soil is dry.",
    sun_amount:
      "Indirect Medium to bright light; 55 - 75°F; moderately dry soil",
    difficulty: 5,
    plant_img:
      "https://i.etsystatic.com/17296139/r/il/e9ec6a/2578878613/il_fullxfull.2578878613_61eq.jpg",
  },
  {
    title: "Arrowhead Vine",
    upkeep:
      "This lush foliage plant retains its variegation -- dark green leaves marked with white along the veins -- even in low light. Use small plants in mixed baskets and with other foliage plants in tabletop gardens. Train vining types to an upright form on a moss pole. Arrowhead vine (Syngonium podophyllum) does well in artificial light.",
    toxicity: "Toxic to humans and pets",
    water:
      "The arrowhead plant should be allowed to dry out between waterings.",
    sun_amount:
      "Low to medium light; 60 - 75°F; evenly moist soil, does well in artificial light",
    difficulty: 4,
    plant_img:
      "https://i.pinimg.com/originals/85/76/ab/8576ab403039c1906e19352b8eec7285.jpg",
  },
];



async function seedPlant(){
    const plants = await Plant.bulkCreate(plantData, {
        individualHooks: true,
    })
    const users = await User.findAll()
    let newPlant;
        newPlant = await Plant.update(
            {
                user_id: users[0].id,
                problem: "My plant is the love of my life what else can I do to make it's life better"
            },
            {
                where: {id: [1, 2, 3, 4, 5, 6]}
            }
        )

        newPlant = await Plant.update(
            {
                user_id: users[1].id,
                problem: "I think my plant is seeing another botanist"
            },
            {
                where: {id: [7, 8, 9, 10, 11, 12]}
            }
        )
         
        newPlant = await Plant.update(
            {
                user_id: users[2].id,
                problem: "My plant isn't taking root"
            },
            {
                where: {id: [13, 14, 15, 16, 17, 18]}
            }
        ) 
        newPlant = await Plant.update(
            {
                user_id: users[3].id,
                problem: "My plant is so pretty what do you guys think?"
            },
            {
                where: {id: [19, 20, 21, 22, 23, 24]}
            }
        )
    return;
}



module.exports = seedPlant
