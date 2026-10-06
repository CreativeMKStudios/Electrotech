export type ReviewSource = "Google" | "Electrotech website";

export interface Review {
  id: string;
  name: string;
  quote: string;
  source: ReviewSource;
  date?: string;
  stars?: number;
  note?: string;
}

/**
 * Google review copied from the live Electrotech listing.
 * Website comments are the words Electrotech published on electrotech-uk.com.
 * Names and spellings are kept as published.
 */
export const reviews: Review[] = [
  {
    id: "dk-brawn",
    name: "DK Brawn",
    stars: 5,
    date: "29 March 2013",
    source: "Google",
    quote:
      "Excellent service. Stuart was polite, respectful and professional. His work was of a very high standard and it was a pleasure to allow him into our home. He is honest and hard working, very clean and tidy and I would not hesitate to recommend him to anyone.",
  },
  {
    id: "andy-christoforou",
    name: "Andy Christoforou",
    source: "Electrotech website",
    quote:
      "Stuart and his team are the perfect professionals. I have a long term project and Electrotech have done all the fixes, which are ongoing. Stuart has been patient, reliable, flexible and honest. I cannot rate him and his team highly enough given the array of trades people I have used hitherto. If you need any electrical work, seek Electrotech for an informed quote and a quality job.",
  },
  {
    id: "daniel-casey",
    name: "Daniel Casey",
    source: "Electrotech website",
    quote:
      "We had some alterations carried out to our house and Electrotech undertook the work. They also organised the plastering, plumbing and re decoration so we didn't have to worry about finding anyone else. All the work was carried out to a very high standard, on budget and within the allotted time. Friendly, approachable and professional.",
  },
  {
    id: "joyce-parkinson",
    name: "Joyce Parkinson",
    source: "Electrotech website",
    quote:
      "Very friendly service and good value for money. They did a great job and have already booked them to do more work.",
  },
  {
    id: "barnwell",
    name: "Mr & Mrs Barnwell",
    source: "Electrotech website",
    quote:
      "Very polite and friendly. He explained everything he was doing in a way which made it very easy for us to understand what he was doing.",
  },
  {
    id: "barnes",
    name: "Jonanna & Mark Barnes",
    source: "Electrotech website",
    quote:
      "Excellent advice before works minimising changes during project. Where changes were required they were very helpful and prompt. Excellent execution of works, and now very well recommended!",
  },
  {
    id: "wright",
    name: "Mr Wright",
    source: "Electrotech website",
    quote:
      "Electrotech carried out an electrical inspection of my property following a burst water pipe. As a result they identified a number of faults which they rectified, eg Metal light switches that were not earthed. I was very happy with the service and information they provided.",
  },
  {
    id: "robert-green",
    name: "Robert Green",
    source: "Electrotech website",
    quote:
      "Water from the shower pump Christmas day. No power to Kitchen, managed over the holiday found Electotech just by the writing on his van but proved to be the best thing I have done",
  },
  {
    id: "christina",
    name: "Christina",
    source: "Electrotech website",
    quote:
      "Very helpful, they were the only ones who called back and did a great job. Very clean and tidy and I have already booked them in for more work.",
  },
  {
    id: "beccy-hobson",
    name: "Beccy Hobson",
    source: "Electrotech website",
    quote:
      "They did a kitchen extension for us, including spot lights. Completed on time and within budget. Have already recommended to a friend.",
  },
  {
    id: "john-mason",
    name: "John Mason",
    source: "Electrotech website",
    quote:
      "We have used Electrotech on several occasions and have been very pleased with all aspects of their service and readily recommend them.",
  },
  {
    id: "shelly",
    name: "Shelly Martin-Smith",
    source: "Electrotech website",
    quote:
      "Was very impressed. Stuart was extremely helpful and efficient. He fitted all my lights perfectly for me and due to a chandelier not arriving on time he came back the next day at a time convenient for me and no extra cost to install. Would definitely use again and recommend his service.",
  },
  {
    id: "richard-denton",
    name: "Richard Denton",
    source: "Electrotech website",
    quote:
      "Contacted company who were able to come round same day to have a look at the problem (No call out charge) returned first thing the next morning and job fixed within 1 hour and no hefty charge either. Would certainly recommend!!",
  },
  {
    id: "louise-clark",
    name: "Louise Clark",
    source: "Electrotech website",
    quote:
      "Very prompt and efficient. Very well priced and carried out exactly as required. Also fixed loads of smaller items for me in a few minutes. Would definitely recommend.",
  },
  {
    id: "mathew-spencer",
    name: "Mathew Spencer",
    source: "Electrotech website",
    quote:
      "Communication between myself and Electrotech was excellent. The job was done very professionally and I would recommend him to anyone.",
  },
  {
    id: "robert-harris",
    name: "Robert Harris",
    source: "Electrotech website",
    quote:
      "Stuart was thoroughly professional, friendly and efficient. I would and have recommended him to friends and family. He was always punctual and thorough.",
  },
  {
    id: "joanna-burr",
    name: "Joanna Burr",
    source: "Electrotech website",
    quote:
      "Work carried out efficiently. Knowledgeable and friendly, and very reasonably priced. I would definitely recommend, a reliable technician.",
  },
  {
    id: "john-parrott",
    name: "John Parrott",
    source: "Electrotech website",
    quote:
      "Stuart is a very pleasant man and I would highly recommend him for his trade, he was punctual fitted 2 lights one was a chandelier and was here under an hour and left no mess and had very good communication skills, if I had another job to be done I would definitely have him back.",
  },
  {
    id: "pam-haxell",
    name: "Pam Haxell",
    source: "Electrotech website",
    quote:
      "Very thorough, just what I expected and got, recommending him to my daughter now.",
  },
  {
    id: "bridgeman",
    name: "Mrs CG Bridgeman",
    source: "Electrotech website",
    quote:
      "I was put in touch via a neighbour who had a very positive experience. Very pleased and great that much of our arrangements were done online. Super.",
  },
  {
    id: "helen",
    name: "Helen Hutchingson",
    source: "Electrotech website",
    quote:
      "Very happy with work and service was very professional compared with other electricians who didn't turn up when they said they would!",
  },
  {
    id: "t-dent",
    name: "Mr T Dent",
    source: "Electrotech website",
    quote:
      "Works hard to meet clients needs with helpful advice. I will use him for all future work of this type.",
  },
  {
    id: "d-brawn",
    name: "Mr D Brawn",
    source: "Electrotech website",
    quote:
      "Very professional, friendly and helpful. Most importantly he does what he says he will do and he is a very clean efficient worker. We were very pleased with his work.",
    note: "A separate comment from the Google review by DK Brawn. The words are not the same.",
  },
  {
    id: "alan-crompton",
    name: "Alan Crompton",
    source: "Electrotech website",
    quote:
      "Where possible, I have a preference for using local tradesman. I needed an electrician and after some initial scouting around came across Stuart at Electrotech. He provided a thorough and cost competitive quote, explained the work in \"simple English\" prior to starting and did a professional job. I will use Electrotech again and have no hesitation is referring elsewhere.",
  },
  {
    id: "mrs-taylor",
    name: "Mrs Taylor",
    source: "Electrotech website",
    quote:
      "Great to find someone friendly reliable and willing to give an honest opinion on what does and doesn't need doing.",
  },
  {
    id: "niko-customer",
    name: "Customer",
    source: "Electrotech website",
    note: "Published on the home automation page. No name was given.",
    quote:
      "Electrotech have carried out a number of projects for us; most recently the installation of Niko Home Automation. Electrotech recommended and supplied the system which provides us with great flexibility in controlling our home. We use sensors and timers to operate a number of lights inside and outside the house and it is fully programmable, requiring no re-wiring if we decide to change which switch operates any particular set of lights. We have always found Electrotech to be friendly, professional and very reliable and we will continue to use them in future.",
  },
];

export const googleReview = reviews[0];
