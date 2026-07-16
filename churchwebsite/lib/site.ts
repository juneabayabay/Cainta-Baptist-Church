export const site = {
  name: "Cainta Baptist Church",
  fullName: "Cainta Baptist Church",
  tagline: "You are loved by God. Come find rest in Him.",
  description:
    "Cainta Baptist Church welcomes you. You are loved by God — come as you are this Sunday and find rest, hope, and a church family in Cainta.",
  verse: {
    text: "Come to me, all who are tired and burdened, and I will give you rest.",
    reference: "Matthew 11:28",
  },
  url: "https://caintabaptist.org",
  email: "caintabaptistchurchph@gmail.com",
  phone: "+639123456789",
  phoneDisplay: "+63 912 345 6789",
  reviews: {
    count: 3,
    href: "https://www.facebook.com/CaintaBaptistChurch/reviews",
  },
  address: {
    line1: "157 Marick Drive, Subdivision",
    line2: "Cainta, Rizal, Philippines, 1900",
    full: "157 Marick Drive, Subdivision, Cainta, Rizal, Philippines, 1900",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=157+Marick+Drive+Subdivision+Cainta+Rizal+1900+Philippines",
  },
  pastor: {
    name: "Vien Olaer",
    title: "Pastor",
    quote:
      "Come as you are. You don't need to be perfect. We are happy to walk with you.",
  },
  vision:
    "To be a loving church family in Cainta where every person can know Jesus, find rest, and grow in hope.",
  mission:
    "To welcome people as they are, share God's Word with simple hearts, and walk with them one Sunday at a time.",
  /** Replace this when the church story is ready */
  story: {
    title: "Our story",
    body: "",
    placeholder:
      "This space is reserved for the story of Cainta Baptist Church — how God began this family, and how He continues to lead us. Coming soon.",
  },
  social: {
    facebook: "https://www.facebook.com/CaintaBaptistChurch",
    facebookName: "Cainta Baptist Church",
    youtube: "https://youtube.com/",
    instagram: "https://instagram.com/",
    messenger: "https://m.me/CaintaBaptistChurch",
    photos: "https://www.facebook.com/CaintaBaptistChurch/photos",
  },
  /** Replace these with real church photos before launch */
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1600&q=80",
      alt: "Worship together on Sunday",
      caption: "We worship together",
    },
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
      alt: "Church family sharing a warm moment",
      caption: "We are a family",
    },
    {
      src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80",
      alt: "People gathered in church",
      caption: "Come as you are",
    },
    {
      src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
      alt: "Friends praying and caring for each other",
      caption: "We pray for one another",
    },
    {
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
      alt: "Music and praise during service",
      caption: "We lift our voices",
    },
    {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      alt: "People laughing and feeling welcome",
      caption: "There is a place for you",
    },
  ],
  hours: {
    sunday: { open: "08:00", close: "11:30" },
    wednesday: { open: "18:30", close: "20:30" },
  },
  giving: {
    gcash: {
      number: "09XX XXX XXXX",
      name: "Cainta Baptist Church",
      href: "https://gcash.com",
    },
    maya: {
      number: "09XX XXX XXXX",
      name: "Cainta Baptist Church",
      href: "https://www.maya.ph",
    },
    bank: {
      bank: "BDO",
      account: "XXXX-XXXX-XXXX",
      name: "Cainta Baptist Church",
    },
    onlineForm: "https://forms.gle/example",
  },
  services: [
    {
      title: "Sunday Small Group",
      time: "Sunday · 8:00 AM – 9:00 AM",
      description: "Meet friends, pray, and feel at home before the service.",
    },
    {
      title: "Sunday Worship",
      time: "Sunday · 9:00 AM – 11:30 AM",
      description: "Sing, hear God's Word, and leave with hope in your heart.",
    },
    {
      title: "Prayer & Bible Study",
      time: "Wednesday · 6:30 PM",
      description: "Pray together and learn from the Bible midweek.",
    },
    {
      title: "Helping Others",
      time: "As scheduled",
      description: "We love and help people in our community.",
    },
  ],
} as const;
