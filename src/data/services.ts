export interface Faq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  nav: string;
  summary: string;
  lead: string;
  points: string[];
  body: string[];
  faqs: Faq[];
}

export const services: Service[] = [
  {
    slug: "domestic",
    title: "Home electrics",
    nav: "Home electrics",
    summary:
      "Lights, sockets, rewires, and wiring for new rooms in Bedford homes.",
    lead: "We work in houses and flats, from one new socket to a full rewire.",
    points: [
      "New lights and sockets",
      "Rewires",
      "New builds and extensions",
      "Outside lights",
      "Landlord electrical checks",
    ],
    body: [
      "Electrotech has said it can help with any part of a home electrical job. That runs from a new build or a rewire down to one light or one socket. The aim is the same level of care on each.",
      "A small job is often a light, a socket, or a fault that has tripped the power. A larger job is a kitchen extension, extra rooms, or a house where the wiring is old and tired. Tell us which one you have when you call.",
      "Beccy Hobson wrote that we did a kitchen extension, including spot lights, and finished on time and on the agreed price. Shelly Martin-Smith wrote that Stuart fitted her lights, then came back the next day at no extra cost when a chandelier arrived late.",
      "For work in a home that Building Regulations cover, Electrotech has said a building notice is sent to you within 30 days. You may need that paper when you sell. Ask us which jobs need it.",
    ],
    faqs: [
      {
        question: "Will you do one socket or one light?",
        answer:
          "Yes. Electrotech has said a single light or socket gets the same care as a larger job.",
      },
      {
        question: "Can you wire an extension?",
        answer:
          "Yes. New builds and extensions are on the list of home work Electrotech has offered. We can also help book other trades if you want one person to keep the job moving. Daniel Casey wrote that we arranged plastering, plumbing, and decorating on his house alterations.",
      },
    ],
  },
  {
    slug: "rewiring",
    title: "Rewires",
    nav: "Rewires",
    summary: "New wiring for homes that still run on old cable and old fuse boards.",
    lead: "A rewire replaces the cables and the fuse board so the house can take today’s load.",
    points: [
      "Full house rewires",
      "Part rewires where the rest tests as sound",
      "New consumer unit, often called a fuse board",
      "A certificate for the finished work",
    ],
    body: [
      "Many Bedford streets still have Victorian, 1930s, and post-war houses. Lights and sockets get added over the years. The cables behind the plaster do not always keep up.",
      "Electrotech has offered rewires of existing homes, and has said the finished work comes with a certificate to BS 7671. That is the British Standard for electrical installations. The certificate says what was done and how it tested.",
      "A full rewire is dusty. Sockets and lights come off, floors may come up, and rooms are out of use for a time. We will say what that means for your house before you agree a price.",
      "Sometimes only part of a house needs new cable. An electrical check comes first, so you are not sold a full rewire you do not need. Mrs Taylor wrote that she valued an honest view of what did and did not need doing.",
    ],
    faqs: [
      {
        question: "How do I know if I need a rewire?",
        answer:
          "Warning signs include a fuse board with rewireable fuses, lights that flicker, sockets that are warm, or rubber or fabric cables in the loft. An electrical check is the proper way to know. We will tell you what the test shows before any rewire is booked.",
      },
      {
        question: "Do I get paperwork?",
        answer:
          "Electrotech has said every job gets a certificate to BS 7671. For notifiable work in a home, a building notice follows within 30 days. Ask for both when you book.",
      },
    ],
  },
  {
    slug: "inspections",
    title: "Electrical checks",
    nav: "Electrical checks",
    summary:
      "Landlord checks and condition reports, now called an EICR.",
    lead: "An Electrical Installation Condition Report tells you if the wiring is safe to keep using.",
    points: [
      "Electrical Installation Condition Reports (EICR)",
      "Landlord checks",
      "Checks after water damage",
      "A written report, not a guess",
    ],
    body: [
      "Electrotech has offered electrical condition reports and landlord certificates. The old name was a periodic inspection report. The report used now is an Electrical Installation Condition Report, or EICR.",
      "The check looks at the fuse board, the earthing, and a sample of the circuits. You get a report that codes what is fine, what should be improved, and what is dangerous.",
      "Mr Wright wrote that we inspected his home after a burst pipe and found faults, including metal light switches that were not earthed, then put them right.",
      "Landlords in England need a satisfactory EICR at set intervals. If you are booking one, say so on the phone so we allow enough time for the test and the report.",
    ],
    faqs: [
      {
        question: "Is an EICR the same as a landlord certificate?",
        answer:
          "The EICR is the report landlords are asked for. Electrotech’s older pages called these landlord certificates and periodic inspection reports. Ask us for an EICR and we will use the current form.",
      },
      {
        question: "Can you check a house after a leak?",
        answer:
          "Yes. Water and electrics are a bad mix. Mr Wright’s comment describes a check after a burst pipe. Switch off the affected circuits if water has reached them, and call us.",
      },
    ],
  },
  {
    slug: "commercial",
    title: "Shops and commercial work",
    nav: "Shops and commercial",
    summary: "Lights, sockets, rewires, and security lighting for business premises.",
    lead: "We have offered electrical work in commercial buildings as well as homes.",
    points: [
      "Lights and sockets",
      "Rewires",
      "New builds and extensions",
      "Condition reports",
      "Security lighting",
      "Commercial control systems",
    ],
    body: [
      "Electrotech’s commercial list covers the same core jobs as the home list, plus security lighting and commercial automation. That means a shop, an office, or a small unit, not a power station.",
      "Security lighting is outside lights that come on when they are needed, so a yard or a doorway is not left dark. It is not a full alarm or CCTV package. We have not advertised CCTV fitting or intruder alarms as a separate trade.",
      "A condition report for a commercial building follows the same idea as a home EICR. It tells you the state of the installation in writing.",
      "If the job has to happen outside your opening hours, say that when you call. The Google listing does not show opening hours, so we agree a time with you.",
    ],
    faqs: [
      {
        question: "Do you fit shop lighting?",
        answer:
          "Lights and sockets are on the commercial list Electrotech published. Tell us the size of the unit and whether you need the work done while you are closed.",
      },
      {
        question: "Do you install CCTV?",
        answer:
          "CCTV is not a service Electrotech has listed. Security lighting is. If you need cameras, you will want a firm that does that work.",
      },
    ],
  },
  {
    slug: "agricultural",
    title: "Farm and stable electrics",
    nav: "Farms and stables",
    summary:
      "Farm wiring, landlord-style checks, and earth bonding for livestock buildings.",
    lead: "Farms and stables need wiring that can cope with damp, dust, and animals.",
    points: [
      "Lights and sockets in farm buildings",
      "Rewires and new buildings",
      "Earth bonding for livestock and horses",
      "Security lighting",
      "Condition reports",
    ],
    body: [
      "Electrotech has offered agricultural electrical work around Bedford. The list includes lights, sockets, rewires, new buildings, condition reports, security lighting, and earth bonding for livestock and equestrian property.",
      "Earth bonding matters where animals can touch metal. A fault that a person might shrug off can be serious for cattle or horses. If you have a parlour, a stable yard, or a barn with metal fittings, say so when you book.",
      "Farm buildings are often wet and full of dust. Fittings need to suit that. We will say what we plan to fit before the work starts, in the written quote.",
    ],
    faqs: [
      {
        question: "Do you bond stables and cattle buildings?",
        answer:
          "Yes. Earth bonding for agricultural and livestock or equestrian property is on Electrotech’s published farm list.",
      },
      {
        question: "Can you add yard lights?",
        answer:
          "Security lighting is listed for farm work. Tell us where the dark spots are and where the power can come from.",
      },
    ],
  },
  {
    slug: "home-automation",
    title: "Home control",
    nav: "Home control",
    summary: "Niko home control for lights, timers, and simple scenes.",
    lead: "A home control system lets one switch, or a phone, run lights around the house.",
    points: [
      "Niko home control, which we have supplied and fitted",
      "Timers and sensors for inside and outside lights",
      "One button by the door to switch lights off",
      "Changes later without a full rewire",
    ],
    body: [
      "Electrotech has fitted Niko home control. A customer wrote that we recommended and supplied the system, and that sensors and timers run lights indoors and out. They also wrote that the system can be reprogrammed, so a switch can be moved to a different set of lights without new cable.",
      "Useful setups are simple. One button by the front door can turn the lights off as you leave. Lights can dim for a room. Outside lights can come on at dusk.",
      "The same idea can be used in a small business, so staff are not hunting for a switch in a stock room. Electrotech called this business automation on its old site.",
      "This is wired home control, not a gadget stuck on the door. If you want a quote, tell us which lights you want on the system.",
    ],
    faqs: [
      {
        question: "Which system have you fitted?",
        answer:
          "The system named in Electrotech’s own pages, and in a customer comment, is Niko home control.",
      },
      {
        question: "Can I change which switch does what later?",
        answer:
          "The published customer comment says the Niko system they had could be reprogrammed without a rewire. We will confirm what your own system can do before you buy it.",
      },
    ],
  },
  {
    slug: "project-help",
    title: "Help running a small project",
    nav: "Project help",
    summary:
      "Electrical work plus help lining up plastering, plumbing, and other trades.",
    lead: "On some jobs we have kept the other trades moving, as well as doing the electrics.",
    points: [
      "Electrics on alterations and extensions",
      "Help finding plasterers, plumbers, and similar trades",
      "One person to speak to about the programme",
    ],
    body: [
      "Electrotech has said that years of construction work left it with a group of trades it trusts, from building and plastering to plumbing and carpentry.",
      "Daniel Casey wrote that on his house alterations we did the electrics and also organised the plastering, plumbing, and decorating. He wrote that the work was to a high standard, on budget, and in the time allowed.",
      "This is help running a domestic project, not a large main-contractor service. If you want us to bring other trades, say that at the start so the quote includes it.",
    ],
    faqs: [
      {
        question: "Will you manage a whole extension?",
        answer:
          "We can do the electrics and, where you want it, help line up the other trades. Ask what is included before you accept the quote. Daniel Casey’s comment is the clearest note we have of this working in practice.",
      },
      {
        question: "Is the quote in writing?",
        answer:
          "Electrotech has said quotes are free, with no obligation, and that you get them in writing before work starts.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
