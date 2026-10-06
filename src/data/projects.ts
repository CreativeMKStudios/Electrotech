export interface Project {
  title: string;
  detail: string;
  customer: string;
  source: string;
}

/** Jobs named in published customer comments. No extra results have been added. */
export const projects: Project[] = [
  {
    title: "Kitchen extension and spot lights",
    detail:
      "Beccy Hobson wrote that Electrotech did a kitchen extension for her, including spot lights, and that it was finished on time and within the price agreed.",
    customer: "Beccy Hobson",
    source: "Comment on Electrotech’s website",
  },
  {
    title: "House lights, including a return visit for a chandelier",
    detail:
      "Shelly Martin-Smith wrote that Stuart fitted her lights, then came back the next day at a time that suited her, at no extra cost, because a chandelier had not arrived.",
    customer: "Shelly Martin-Smith",
    source: "Comment on Electrotech’s website",
  },
  {
    title: "Two lights, one of them a chandelier",
    detail:
      "John Parrott wrote that Stuart fitted two lights, one a chandelier, was there under an hour, and left no mess.",
    customer: "John Parrott",
    source: "Comment on Electrotech’s website",
  },
  {
    title: "House alterations, with other trades arranged",
    detail:
      "Daniel Casey wrote that Electrotech did the electrical work on alterations to his house and also organised the plastering, plumbing, and decorating.",
    customer: "Daniel Casey",
    source: "Comment on Electrotech’s website",
  },
  {
    title: "Inspection after a burst pipe",
    detail:
      "Mr Wright wrote that Electrotech inspected his home after a burst water pipe, found faults including metal light switches that were not earthed, and put them right.",
    customer: "Mr Wright",
    source: "Comment on Electrotech’s website",
  },
  {
    title: "No power to the kitchen on Christmas Day",
    detail:
      "Robert Green wrote that water from a shower pump left him with no power to the kitchen on Christmas Day, and that he found Electrotech from the writing on the van.",
    customer: "Robert Green",
    source: "Comment on Electrotech’s website",
  },
  {
    title: "Niko home control",
    detail:
      "A customer, writing on Electrotech’s home automation page, said we supplied and fitted Niko home control, with sensors and timers for inside and outside lights, and that switches could later be reprogrammed without a rewire.",
    customer: "Name not published",
    source: "Electrotech home automation page",
  },
  {
    title: "Ongoing fixes on a long job",
    detail:
      "Andy Christoforou wrote that Stuart and his team had done the fixes on a long-term project, and that Stuart had been patient, reliable, flexible, and honest.",
    customer: "Andy Christoforou",
    source: "Comment on Electrotech’s website",
  },
];
