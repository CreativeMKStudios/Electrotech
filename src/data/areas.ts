export interface Area {
  slug: string;
  name: string;
  title: string;
  description: string;
  distance: string;
  paragraphs: string[];
  homes: string;
}

export const areas: Area[] = [
  {
    slug: "bedford",
    name: "Bedford",
    title: "Electrician in Bedford",
    description:
      "Electrotech is based at 5 Miller Road in Bedford, MK42 9FS. Call 01234 325435 for home, shop, or farm electrics.",
    distance: "The business address is in Bedford.",
    homes:
      "Terraces near the town centre, 1930s houses, post-war estates, and newer builds sit side by side.",
    paragraphs: [
      "Electrotech’s Google listing is at 5 Miller Road, Bedford, MK42 9FS. Miller Road is in the Cauldwell part of south Bedford, a short way from the town centre and the river.",
      "Bedford’s housing is mixed. Streets close to the centre have older brick houses. Further out you find 1930s semis, post-war estates, and newer homes. Older houses often still have a fuse board that has been added to for decades. A new socket is simple. A rewire is not, and it should start with a look at what is already there.",
      "The town also has shops, small offices, and industrial units. Commercial work we have listed includes lights, sockets, rewires, condition reports, and security lighting.",
      "If your Bedford job is a landlord check, ask for an EICR. That is the report used now. Electrotech’s older pages called the same kind of visit a landlord certificate or a periodic inspection.",
    ],
  },
  {
    slug: "kempston",
    name: "Kempston",
    title: "Electrician for Kempston",
    description:
      "Electrotech is a Bedford electrician a short drive from Kempston. Call 01234 325435 about lights, rewires, and checks.",
    distance: "About 2 miles west of the Miller Road base.",
    homes: "Twentieth-century semis, estates, and older houses near the High Street.",
    paragraphs: [
      "Kempston sits on the west side of Bedford, across the Great Ouse from the town centre. From 5 Miller Road it is a short drive, not a cross-county trip.",
      "Much of Kempston is family housing from the last hundred years, with older houses nearer the High Street and Church End. Extensions and loft rooms are common. Those jobs need new circuits, not just a spur taken off a socket that is already busy.",
      "A landlord with a Kempston rental can book an electrical condition report. Bring the age of the house if you know it, and say whether the fuse board has trip switches or old fuse wire.",
      "Call before you assume we can come the same day. Richard Denton wrote about a same-day look with no call-out charge on his job, but that was his visit, not a promise for every call.",
    ],
  },
  {
    slug: "shortstown",
    name: "Shortstown",
    title: "Electrician for Shortstown",
    description:
      "Electrotech has published both a Miller Road listing and an earlier Shortstown address. Call 01234 325435.",
    distance: "About 3 miles east of the Miller Road listing.",
    homes: "Homes beside the old Cardington site, plus newer streets.",
    paragraphs: [
      "Shortstown is east of Bedford, next to Cardington. Electrotech’s current Google listing is 5 Miller Road. An earlier version of the Electrotech website gave a trading address at 15 Sunderland Place, Shortstown, MK42 0FE, with the phone number 01234 743979. The phone on the live Google listing is 01234 325435. Use that number.",
      "The two addresses are the same firm’s published details from different years, not two companies. Customers on the old site name Stuart. The Google review from DK Brawn names Stuart as well.",
      "Housing in Shortstown includes homes around the old airship site and later streets. New kitchens, extra sockets, and outside lights are typical jobs. If the house is newer, you may not need a rewire. An honest look is worth more than a stock quote.",
      "Elstow is on the way, just south of Bedford. If you are between Elstow and Shortstown, say the road name when you call so we can judge the visit.",
    ],
  },
  {
    slug: "wixams",
    name: "Wixams",
    title: "Electrician for Wixams",
    description:
      "Electrotech is based in Bedford, a few miles from Wixams. Call 01234 325435 for sockets, lights, and checks.",
    distance: "About 5 miles south of Miller Road.",
    homes: "Mostly houses built since the 2000s on the old brickworks land.",
    paragraphs: [
      "Wixams is the newer village south of Bedford, built beside the railway on land that used to be brickworks. Most homes are from this century. The cables are newer than in a Victorian terrace in Bedford, so a full rewire is less common.",
      "People in newer houses still need an electrician. Extra sockets in a kitchen, a shed supply, outside lights, and a check before a sale are normal jobs. A new circuit has to be tested and written up. It should not be added on the quiet to a board that is already full.",
      "Electrotech is based at 5 Miller Road, so Wixams is a local drive down the A6 side of town. Say which part of Wixams you are in. The village is spread out, and the end of a street can add time.",
      "If you are a landlord with a newer rental, you can still be asked for an EICR. Age of the house does not remove that.",
    ],
  },
  {
    slug: "ampthill",
    name: "Ampthill",
    title: "Electrician for Ampthill",
    description:
      "Bedford electrician Electrotech can be asked about jobs in Ampthill. Call 01234 325435 and we will say if we can take it.",
    distance: "About 8 miles south of Bedford.",
    homes: "Georgian streets in the town and newer estates on the edges.",
    paragraphs: [
      "Ampthill is a market town in Central Bedfordshire, about eight miles south of our Miller Road base. The drive is ordinary. It is far enough that we would rather you call and check than assume a same-day visit.",
      "The centre has older houses, some of them Georgian, packed along a high street. Edges of the town are later estates. Old houses often hide a mix of wiring: original cables in one room, plastic cable in an extension, and a fuse board that has been changed once already.",
      "That mix is where a condition report earns its keep. It shows whether you need a repair, a new board, or a rewire. Electrotech has offered those reports, and has said the quote is in writing before work starts.",
      "Farm and stable work is also on our list. Villages around Ampthill have yards where earth bonding and proper outside lights matter. Tell us if animals use the building.",
    ],
  },
  {
    slug: "flitwick",
    name: "Flitwick",
    title: "Electrician for Flitwick",
    description:
      "Call Electrotech on 01234 325435 about electrical work in Flitwick. We are based in Bedford, about 10 miles away.",
    distance: "About 10 miles south of Bedford.",
    homes: "Family housing, older cottages, and streets near the station.",
    paragraphs: [
      "Flitwick is on the railway south of Ampthill, roughly ten miles from 5 Miller Road. It is the far end of a local run for a Bedford electrician. Phone first and we will tell you if the day can take the journey.",
      "The town is mostly houses, with shops near the centre and the station. Typical jobs are the same as in Bedford: extra lights, sockets, a consumer unit, a landlord check, or the electrics on an extension.",
      "If the house has had several owners, ask for a look before a rewire. Louise Clark wrote that we did the job she asked for and also fixed smaller items while we were there. Bring a list. Small faults are easier to sort on the same visit.",
      "We have not published a Flitwick office. The only addresses Electrotech has published are 5 Miller Road, Bedford, and, on an older website, 15 Sunderland Place, Shortstown.",
    ],
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((area) => area.slug === slug);
}
