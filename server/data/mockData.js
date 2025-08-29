// File: perfume-shop/server/data/mockData.js
// ACTION: Replace the entire content of this file.

const products = [
    {
        name: "Azure Dream",
        shortDescription: "A fresh wave of citrus and sea salt.",
        fullDescription: "Evoking the spirit of the Mediterranean, Azure Dream captures the essence of a coastal breeze. With top notes of bergamot and grapefruit, a heart of sea salt and jasmine, and a base of cedarwood and musk, this fragrance is your escape to the sea.",
        price: 3499,
        sizes: ['50ml', '100ml'],
        mainImage: "https://images.pexels.com/photos/1230335/pexels-photo-1230335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        galleryImages: [
            "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2080543/pexels-photo-2080543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1597573/pexels-photo-1597573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        tags: ["bestseller", "fresh"]
    },
    {
        name: "Ember Haze",
        shortDescription: "A warm blend of spice and smoky wood.",
        fullDescription: "Ember Haze is a captivating and mysterious fragrance. It opens with a spicy mix of saffron and black pepper, leading to a heart of rich leather and oud. The base is a warm, lingering blend of amber, vanilla, and sandalwood, perfect for an unforgettable evening.",
        price: 4299,
        sizes: ['50ml', '100ml'],
        mainImage: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        galleryImages: [
            "https://images.pexels.com/photos/1078973/pexels-photo-1078973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/259963/pexels-photo-259963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        tags: ["bestseller", "woody", "evening"]
    },
    {
        name: "Velvet Bloom",
        shortDescription: "A delicate bouquet of rose and peony.",
        fullDescription: "Velvet Bloom is a tribute to classic femininity. This elegant floral fragrance features top notes of Bulgarian rose and pink peony. The heart reveals a touch of lychee and freesia, while the base of white musk and cashmere wood adds a soft, sensual finish.",
        price: 3899,
        sizes: ['50ml', '100ml'],
        mainImage: "https://images.pexels.com/photos/102126/pexels-photo-102126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        galleryImages: [
            "https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1191377/pexels-photo-1191377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        tags: [ "floral"]
    },
    {
        name: "Solaris",
        shortDescription: "A radiant burst of tropical citrus.",
        fullDescription: "Solaris is pure sunshine in a bottle. It opens with vibrant notes of mandarin orange and pineapple, followed by a creamy heart of coconut and tiare flower. A base of amber and vanilla rounds out this joyful and energetic scent, perfect for sunny days.",
        price: 3299,
        sizes: ['50ml', '100ml'],
        mainImage: "https://images.pexels.com/photos/1149022/pexels-photo-1149022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        galleryImages: [
            "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2080960/pexels-photo-2080960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        tags: ["bestseller", "citrus", "daytime"]
    },
    
    {
        name: "Midnight Oud",
        shortDescription: "An intense and mysterious oriental blend.",
        fullDescription: "A journey into the heart of the Orient, Midnight Oud is a rich and powerful fragrance. It combines the deep, resinous aroma of oud wood with spicy notes of incense and a hint of sweet raspberry. The base of leather and amber creates a long-lasting, unforgettable impression.",
        price: 5499,
        sizes: ['75ml', '125ml'],
        mainImage: "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        galleryImages: [
            "https://images.pexels.com/photos/2253893/pexels-photo-2253893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/3779836/pexels-photo-3779836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/3059947/pexels-photo-3059947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        tags: ["bestseller", "oriental", "luxury"]
    },
    {
        name: "Greenleaf",
        shortDescription: "The crisp scent of a forest morning.",
        fullDescription: "Greenleaf is a fresh and invigorating scent that captures the essence of nature. Top notes of galbanum and tomato leaf create a sharp, green opening. The heart unfolds with notes of basil and mint, while the base of moss and vetiver provides a clean, earthy finish.",
        price: 3199,
        sizes: ['50ml', '100ml'],
        mainImage: "https://images.pexels.com/photos/262527/pexels-photo-262527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        galleryImages: [
            "https://images.pexels.com/photos/1105373/pexels-photo-1105373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1579240/pexels-photo-1579240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/845413/pexels-photo-845413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        tags: ["green", "unisex"]
    },
    {
        name: "Cocoa Crème",
        shortDescription: "A delicious and comforting gourmand scent.",
        fullDescription: "Indulge your senses with Cocoa Crème, a warm and edible fragrance. It opens with a delectable note of dark chocolate, leading to a heart of creamy vanilla bean and a hint of toasted almond. The base of sandalwood and musk adds a soft, lingering warmth.",
        price: 3699,
        sizes: ['50ml'],
        mainImage: "https://images.pexels.com/photos/3780469/pexels-photo-3780469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        galleryImages: [
            "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/6621323/pexels-photo-6621323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        tags: ["gourmand", "sweet"]
    },
    {
        name: "Aqua Vitae",
        shortDescription: "A classic aquatic fragrance for men.",
        fullDescription: "Aqua Vitae is a timeless and masculine aquatic scent. It opens with a refreshing blast of Calabrian bergamot and neroli. The heart reveals marine notes and persimmon, while the base is a solid foundation of patchouli and rock rose. A true modern classic.",
        price: 3999,
        sizes: ['75ml', '125ml'],
        mainImage: "https://images.pexels.com/photos/1258333/pexels-photo-1258333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        galleryImages: [
            "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        tags: ["aquatic", "masculine"]
    }
];

module.exports = products;