export const site = {
  name: "Cainta Baptist Church",
  shortName: "CBC",
  fullName: "Cainta Baptist Church",
  denomination: "Baptist",
  tagline: "Come as you are. You belong here.",
  description:
    "Cainta Baptist Church — a place of hope, rest, and belonging in Cainta, Rizal.",
  heroMeta: "Cainta, Rizal · Sundays from 9:00 AM",
  servingAreas: "Cainta, Pasig, Taytay, Antipolo",
  language: "English services · Tagalog welcome",
  verse: {
    text: "Come to me, all who are weary and burdened, and I will give you rest.",
    reference: "Matthew 11:28",
  },
  url: "https://caintabaptist.org",
  email: "caintabaptistchurchph@gmail.com",
  phone: "+639123456789",
  phoneDisplay: "+63 912 345 6789",
  phoneIsPlaceholder: true,
  reviews: {
    count: 3,
    label: "Facebook reviews",
    href: "https://www.facebook.com/CaintaBaptistChurch/reviews",
  },
  googleBusiness: {
    url: "",
    mapsPlaceUrl:
      "https://www.google.com/maps/search/?api=1&query=157+Marick+Drive+Subdivision+Cainta+Rizal+1900+Philippines",
  },
  address: {
    line1: "157 Marick Drive Subdivision",
    line2: "Cainta, Rizal 1900, Philippines",
    full: "157 Marick Drive Subdivision, Cainta, Rizal 1900, Philippines",
    parking: "Street parking nearby.",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=157+Marick+Drive+Subdivision+Cainta+Rizal+1900+Philippines",
    mapsSearchUrl:
      "https://www.google.com/maps/search/?api=1&query=157+Marick+Drive+Subdivision+Cainta+Rizal+1900+Philippines",
    wazeUrl:
      "https://waze.com/ul?q=157+Marick+Drive+Subdivision+Cainta+Rizal+Philippines&navigate=yes",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=157+Marick+Drive+Subdivision+Cainta+Rizal+1900+Philippines&z=17&output=embed",
  },
  visit: {
    headline: "We saved a seat for you",
  },
  beliefs: [
    {
      title: "Jesus",
      text: "He loves you and offers forgiveness and new life.",
    },
    {
      title: "Grace",
      text: "Salvation is a gift — not something you earn.",
    },
    {
      title: "The Bible",
      text: "God's Word brings hope, truth, and direction.",
    },
    {
      title: "Family",
      text: "We walk with one another — no one has to go alone.",
    },
  ],
  faq: [
    {
      question: "Do I need to register?",
      answer: "No. Just come — we will welcome you at the door.",
    },
    {
      question: "What time should I arrive?",
      answer:
        "Come by 9:00 AM for Small Group, or by 10:00 AM for Worship. Wednesday prayer is 6:30–8:30 PM.",
    },
    {
      question: "Is there parking?",
      answer: "Yes, street parking nearby. Message us if you need help.",
    },
    {
      question: "Are children welcome?",
      answer: "Always. Your whole family is welcome.",
    },
    {
      question: "What if I'm not Baptist?",
      answer: "You are still welcome. Everyone has a place here.",
    },
  ],
  testimonials: [
    {
      quote: "I walked in nervous — and left feeling like I finally belonged.",
      author: "A Sunday guest",
    },
    {
      quote: "This church reminded me that God still has hope for my life.",
      author: "Someone from our church family",
    },
  ],
  expect: [
    {
      title: "Come as you are",
      text: "No dress code. Bring your questions and your heart.",
    },
    {
      title: "You are not alone",
      text: "A greeter will meet you and help you feel at home.",
    },
    {
      title: "Bring your family",
      text: "Children are loved here. There is room for everyone.",
    },
  ],
  pastor: {
    name: "Vien Olaer",
    title: "Pastor",
    quote:
      "Whoever you are and whatever you carry — Jesus is waiting with open arms. So are we.",
    photo: "",
  },
  vision: "A home in Cainta where tired hearts find Jesus and fresh hope.",
  mission: "To welcome, love, and walk with people toward Christ.",
  social: {
    facebook: "https://www.facebook.com/CaintaBaptistChurch",
    facebookName: "Cainta Baptist Church",
    youtube: "",
    instagram: "",
    messenger: "https://m.me/CaintaBaptistChurch",
    photos: "https://www.facebook.com/CaintaBaptistChurch/photos",
  },
  gallery: [
    {
      src: "/community-joy.jpg",
      alt: "Church family sharing joy after worship",
      caption: "Life together",
    },
    {
      src: "/invite-sanctuary.jpg",
      alt: "Quiet sanctuary light inviting prayer",
      caption: "A place to pray",
    },
    {
      src: "/hero-come-home.jpg",
      alt: "Warm welcome outside the church",
      caption: "You are welcome",
    },
    {
      src: "/hero-welcome-v2.jpg",
      alt: "People gathering for Sunday worship",
      caption: "Sunday gathering",
    },
  ],
  hours: {
    sunday: { open: "09:00", close: "11:30" },
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
  },
  services: [
    {
      title: "Sunday Small Group",
      time: "Sunday · 9:00–10:00 AM",
      description: "Find friends and pray together.",
    },
    {
      title: "Sunday Worship",
      time: "Sunday · 10:00–11:30 AM",
      description: "Meet God in song and His Word.",
    },
    {
      title: "Prayer & Bible Study",
      time: "Wednesday · 6:30–8:30 PM",
      description: "Grow midweek with prayer and Scripture.",
    },
    {
      title: "Community Outreach",
      time: "Announced on Facebook",
      description: "Love and serve our neighbors in Cainta.",
    },
  ],
} as const;
