export const site = {
  name: "Cainta Baptist Church",
  fullName: "Cainta Baptist Church",
  tagline: "A new day of hope starts here.",
  description:
    "Cainta Baptist Church — a welcoming family in Cainta, Rizal. Join us this Sunday for worship, friendship, and the hope found in Jesus.",
  verse: {
    text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning.",
    reference: "Lamentations 3:22–23",
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
    line2: "Cainta, Rizal 1900, Philippines",
    full: "157 Marick Drive, Subdivision, Cainta, Rizal 1900, Philippines",
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
    headline: "Everything you need for your first Sunday.",
    tips: [
      {
        title: "Google Maps or Waze",
        text: "Search “157 Marick Drive, Cainta” — both apps will guide you to our door.",
      },
      {
        title: "Arrive a little early",
        text: "Doors open before 8:00 AM. Arriving 10 minutes early helps you settle in.",
      },
      {
        title: "Need help finding us?",
        text: "Call or message us on Facebook — someone from our team will gladly assist.",
      },
    ],
  },
  expect: [
    {
      title: "What to wear",
      text: "Come comfortable. Jeans or Sunday best — you are welcome either way.",
    },
    {
      title: "Sunday schedule",
      text: "Small group at 8:00 AM, worship from 9:00–11:30 AM. Stay for coffee and conversation after.",
    },
    {
      title: "Kids & family",
      text: "Children are welcome in every part of our gathering. Your whole family belongs.",
    },
    {
      title: "First-time guests",
      text: "Look for a greeter at the door — they will help you find a seat and answer questions.",
    },
  ],
  pastor: {
    name: "Vien Olaer",
    title: "Pastor",
    quote:
      "Every new morning is a reminder that God gives fresh hope. You do not have to walk alone.",
  },
  vision:
    "To be a church in Cainta where people discover new life in Jesus and grow in hope together.",
  mission:
    "To welcome everyone with warmth, teach God's Word clearly, and encourage one another every step of the way.",
  story: {
    title: "Our story",
    body: "",
    placeholder:
      "The story of Cainta Baptist Church — how God began this family and where He is leading us — will be shared here soon.",
  },
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
      src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1600&q=80",
      alt: "Worship together on Sunday",
      caption: "Worship together",
    },
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
      alt: "Church family sharing a warm moment",
      caption: "A caring family",
    },
    {
      src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80",
      alt: "People gathered in church",
      caption: "Come as you are",
    },
    {
      src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
      alt: "Friends praying together",
      caption: "We pray together",
    },
    {
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
      alt: "Music and praise during service",
      caption: "Hope in song",
    },
    {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      alt: "People laughing and feeling welcome",
      caption: "Joy in community",
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
      description: "Connect, pray, and get to know others before worship.",
    },
    {
      title: "Sunday Worship",
      time: "Sunday · 9:00 AM – 11:30 AM",
      description: "Sing, hear God's Word, and leave encouraged for the week ahead.",
    },
    {
      title: "Prayer & Bible Study",
      time: "Wednesday · 6:30 PM",
      description: "Midweek gathering for prayer and studying Scripture together.",
    },
    {
      title: "Community Outreach",
      time: "As scheduled",
      description: "Serving neighbors in Cainta with practical love and care.",
    },
  ],
} as const;
