export const site = {
  name: "Cainta Baptist Church",
  fullName: "Cainta Baptist Church",
  tagline: "You are welcome here.",
  description:
    "Cainta Baptist Church welcomes you. Come as you are this Sunday — we would love to meet you.",
  url: "https://caintabaptist.org",
  email: "caintabaptistchurchph@gmail.com",
  phone: "+639123456789",
  phoneDisplay: "+63 912 345 6789",
  reviews: {
    count: 3,
    href: "https://www.facebook.com/caintabaptistchurchph/reviews",
  },
  address: {
    line1: "157 Marick Drive, Subdivision",
    line2: "Cainta, Rizal, Philippines, 1900",
    full: "157 Marick Drive, Subdivision, Cainta, Rizal, Cainta, Philippines, 1900",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=157+Marick+Drive+Subdivision+Cainta+Rizal+1900+Philippines",
  },
  pastor: {
    name: "Vien Olaer",
    title: "Pastor",
    quote:
      "Come as you are. You don't need to be perfect. We are happy to walk with you.",
  },
  social: {
    facebook: "https://www.facebook.com/caintabaptistchurchph",
    facebookName: "Cainta Baptist Church",
    youtube: "https://youtube.com/",
    instagram: "https://instagram.com/",
    messenger: "https://m.me/caintabaptistchurchph",
    photos: "https://www.facebook.com/caintabaptistchurchph/photos",
  },
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
