export const LANDING_PAGE_VERSION = "1.1.0";
export const FORM_VERSION = "1.0.0";
export const CONSENT_TEXT_VERSION = "1.0.0";
export const INFORMATION_CHECKED_ISO = "2026-09-10";
export const INFORMATION_CHECKED_DISPLAY = "September 10, 2026";

export type FactStatus = "VERIFIED" | "PROVISIONAL" | "CONFLICTING" | "TBA";

export type DisplayBehavior = "value" | "tba" | "request-update";

export interface ProjectFact {
  id: string;
  item: string;
  value: string;
  sourceLabel: string;
  sourceUrl?: string;
  checked: string;
  status: FactStatus;
  displayBehavior: DisplayBehavior;
}

export interface SourceConflict {
  topic: string;
  officialValue: string;
  conflictingValue: string;
  resolution: string;
}

export const project = {
  name: "Five Oaks",
  developer: "Caivan Communities",
  municipality: "Oakville, Ontario",
  municipalityShort: "Oakville",
  country: "Canada",
  status: "Coming this fall",
  homeTypes: "Freehold townhomes and detached homes",
  intersection: "Dundas Street West and Neyagawa Boulevard",
  primaryCta: "Get Project Updates",
  officialProjectUrl:
    "https://caivan.com/greater-toronto-area/oakville/five-oaks/",
  officialOakvilleCommunitiesUrl:
    "https://caivan.com/greater-toronto-area/oakville/",
  officialCaivanHomeUrl: "https://caivan.com/",
  officialContactUrl: "https://caivan.com/contact/",
  generalSalesCentre: {
    address: "209 Oak Park Blvd., Oakville, Ontario L6H 7S8",
    phone: "289-430-0627",
    note: "General Caivan Oakville Sales Centre contact only. This is not confirmed as the Five Oaks project site or a project-specific sales office.",
  },
} as const;

export const facts: readonly ProjectFact[] = [
  {
    id: "project",
    item: "Project",
    value: "Five Oaks",
    sourceLabel: "Official Five Oaks page",
    sourceUrl: "https://caivan.com/greater-toronto-area/oakville/five-oaks/",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
  {
    id: "developer",
    item: "Developer",
    value: "Caivan Communities",
    sourceLabel: "Official Five Oaks page",
    sourceUrl: "https://caivan.com/greater-toronto-area/oakville/five-oaks/",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
  {
    id: "location",
    item: "Location",
    value: "Dundas Street West and Neyagawa Boulevard, Oakville, Ontario",
    sourceLabel: "Project summary provided for this page",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
  {
    id: "setting",
    item: "Setting",
    value:
      "Surrounded by Lions Valley Park and overlooking Sixteen Mile Creek; select premium lots backing onto protected natural surroundings",
    sourceLabel: "Project summary provided for this page",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
  {
    id: "status",
    item: "Status",
    value: "Coming this fall",
    sourceLabel: "Official Oakville communities page",
    sourceUrl: "https://caivan.com/greater-toronto-area/oakville/",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
  {
    id: "home-types",
    item: "Home types",
    value: "Freehold townhomes and detached homes",
    sourceLabel: "Official Five Oaks page",
    sourceUrl: "https://caivan.com/greater-toronto-area/oakville/five-oaks/",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
  {
    id: "townhome-tenure",
    item: "Townhome tenure",
    value: "Freehold townhomes",
    sourceLabel: "Project summary provided for this page",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
  {
    id: "townhome-size",
    item: "Townhome size",
    value: "1,388–2,773 sq. ft.",
    sourceLabel: "Project summary provided for this page",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
  {
    id: "detached-size",
    item: "Detached home size",
    value: "3,187–5,170 sq. ft.",
    sourceLabel: "Project summary provided for this page",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
  {
    id: "detached-frontages",
    item: "Detached frontages",
    value: "40′, 42′ and 50′",
    sourceLabel: "Project summary provided for this page",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
  {
    id: "parking",
    item: "Parking",
    value: "Up to six vehicles",
    sourceLabel: "Project summary provided for this page",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
  {
    id: "schools",
    item: "Nearby schools",
    value: "Forest Trail Public School and Garth Webb Secondary School",
    sourceLabel: "Project summary provided for this page",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
  {
    id: "nearby",
    item: "Nearby",
    value:
      "Oakville Trafalgar Memorial Hospital, Sixteen Mile Sports Complex, Highway 407, Bronte GO and Downtown Oakville",
    sourceLabel: "Project summary provided for this page",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
  {
    id: "pricing",
    item: "Pricing",
    value: "Not published in reviewed official Five Oaks material",
    sourceLabel: "Official project materials reviewed",
    checked: INFORMATION_CHECKED_ISO,
    status: "TBA",
    displayBehavior: "tba",
  },
  {
    id: "floor-plans",
    item: "Floor plans",
    value: "Not published",
    sourceLabel: "Official project materials reviewed",
    checked: INFORMATION_CHECKED_ISO,
    status: "TBA",
    displayBehavior: "tba",
  },
  {
    id: "deposit",
    item: "Deposit structure",
    value: "Not published",
    sourceLabel: "Official project materials reviewed",
    checked: INFORMATION_CHECKED_ISO,
    status: "TBA",
    displayBehavior: "tba",
  },
  {
    id: "incentives",
    item: "Incentives",
    value: "HST rebate of up to $130,000, including for investors",
    sourceLabel: "Project summary provided for this page",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
  {
    id: "launch-date",
    item: "Launch date",
    value: "Coming this fall",
    sourceLabel: "Project summary provided for this page",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
  {
    id: "occupancy",
    item: "Occupancy",
    value: "Not published",
    sourceLabel: "Official project materials reviewed",
    checked: INFORMATION_CHECKED_ISO,
    status: "TBA",
    displayBehavior: "tba",
  },
  {
    id: "information-checked",
    item: "Information checked",
    value: INFORMATION_CHECKED_DISPLAY,
    sourceLabel: "This page's fact ledger",
    checked: INFORMATION_CHECKED_ISO,
    status: "VERIFIED",
    displayBehavior: "value",
  },
] as const;

export const tbaProjectItems = [
  "Official site plan",
  "Number of lots/homes",
  "Bedroom/bathroom configurations",
  "Detailed features and finishes",
  "Price list",
  "Starting prices",
  "Deposit schedule",
  "Occupancy/closing dates",
  "Assignment rules",
  "Development charges",
  "Official floor plans",
  "Any claims of limited inventory or scarcity",
] as const;

export const sourceConflicts: readonly SourceConflict[] = [];

export function displayFactValue(fact: ProjectFact): string {
  if (fact.displayBehavior === "tba") {
    return "To be announced";
  }
  if (fact.displayBehavior === "request-update") {
    return "Request the latest verified update";
  }
  return fact.value;
}

export function getFact(id: string): ProjectFact {
  const fact = facts.find((entry) => entry.id === id);
  if (!fact) {
    throw new Error(`Unknown project fact: ${id}`);
  }
  return fact;
}

export const copy = {
  independentDisclosure:
    "Independent project information site. Not the official website of Caivan Communities or Five Oaks.",
  legalFooterDisclosure:
    "This is an independent informational website and is not the official website of the developer, builder or project. Project details, prices, incentives, specifications and availability are subject to change without notice. Renderings are artists' concepts where applicable. This is not an offering for sale. Any offering may be made only through the developer's official documents and applicable purchase agreement. E.&O.E.",
  legalReviewFlag:
    "This disclosure is flagged for final Ontario legal/brokerage compliance review before launch.",
  imageQualifier: "Artist's rendering. Specifications, finishes and landscaping are subject to change.",
  aerialQualifier:
    "Community aerial of the Lions Valley / Sixteen Mile Creek setting around Five Oaks.",
  factsExplanation:
    "Project information can change during pre-construction. Confirm prices, incentives and specifications against current developer documents before any purchase decision.",
  pricingLead:
    "Starting prices and a public price list have not been published. Townhome and detached sizes, frontages and the stated HST rebate are listed below as provided for this page.",
  pricingCaution:
    "Pre-construction pricing, incentives and deposit structures can change between releases. The HST rebate of up to $130,000, including for investors, should be confirmed in current official documents.",
  locationLead:
    "Five Oaks is coming this fall to Dundas Street West and Neyagawa Boulevard in Oakville. The community is surrounded by Lions Valley Park and overlooks Sixteen Mile Creek, with select premium lots backing onto protected natural surroundings.",
  oakvilleContext:
    "Nearby amenities identified for this location include Oakville Trafalgar Memorial Hospital, Sixteen Mile Sports Complex, Highway 407, Bronte GO and Downtown Oakville. Nearby schools identified are Forest Trail Public School and Garth Webb Secondary School.",
  oakvilleSafeFacts: [
    "Intersection: Dundas Street West and Neyagawa Boulevard, Oakville.",
    "Setting: Lions Valley Park and Sixteen Mile Creek.",
    "Nearby: Oakville Trafalgar Memorial Hospital and Sixteen Mile Sports Complex.",
    "Transit and roads: Highway 407, Bronte GO and Downtown Oakville.",
    "Schools identified nearby: Forest Trail Public School and Garth Webb Secondary School.",
  ],
  developerSummary:
    "Five Oaks is by Caivan. Caivan reports 4,200 homes built and no cancelled projects. Its public materials describe a multidisciplinary homebuilding team focused on home design, construction quality and the homeowner experience.",
  developerCaution:
    "Features, construction methods and specifications shown in other Caivan communities should still be confirmed in official Five Oaks documents for this release.",
  lawyerReview:
    "Have your lawyer review the Agreement of Purchase and Sale and all schedules before applicable deadlines.",
  checklistIntro:
    "This checklist is general buyer due-diligence information, not individualized legal or financial advice.",
  whatIsFiveOaks:
    "Five Oaks is an exclusive new community by Caivan, coming this fall to Dundas Street West and Neyagawa Boulevard in Oakville. Surrounded by Lions Valley Park and overlooking Sixteen Mile Creek, it offers freehold townhomes of 1,388–2,773 sq. ft. and detached homes of 3,187–5,170 sq. ft. on 40′, 42′ and 50′ frontages, including select premium lots backing onto protected natural surroundings. Parking is listed at up to six vehicles. A buyer incentive of an HST rebate of up to $130,000, including for investors, has been stated for this release. Official starting prices, floor plans, deposits and occupancy remain to be published. Register for updates.",
  heroHeadline: "Freehold singles & townhomes",
  heroSubhead:
    "Beautifully situated above Sixteen Mile Creek, backing onto the lush Lions Valley Park.",
  heroSupport:
    "Beautifully situated above Sixteen Mile Creek, backing onto the lush Lions Valley Park. Coming this fall to Dundas Street West and Neyagawa Boulevard.",
  formSupport:
    "Register for Five Oaks Oakville updates on pricing, floor plans, deposits, the stated HST rebate and fall launch details.",
  formTrust: [
    "Project facts updated September 10, 2026.",
    "Townhome and detached sizes, frontages and location now listed.",
    "No invented starting prices.",
    "Marketing messages only if you opt in.",
  ],
  finalCta:
    "Five Oaks combines an Oakville address at Dundas and Neyagawa, natural surroundings at Lions Valley Park, nearby schools and a stated HST rebate of up to $130,000. Register to review pricing, plans and launch details as they are published.",
  mapUnavailable:
    "Five Oaks is identified at Dundas Street West and Neyagawa Boulevard. A pin map is not shown until verified project coordinates are supplied for public display.",
  privacyNearSubmit:
    "By submitting this form, you acknowledge the Privacy Policy and understand that your information will be used to respond to your request. Marketing messages are sent only in accordance with the consent choices shown above.",
} as const;

export const heroChips = [
  "Coming this fall",
  "Dundas & Neyagawa",
  "Freehold townhomes",
  "Detached 40′, 42′ and 50′",
] as const;

export const registrationBenefits = [
  "Notification when official pricing is published.",
  "Updates when official floor plans become available.",
  "Updates on the stated HST rebate of up to $130,000.",
  "Launch timing for the fall release at Dundas and Neyagawa.",
  "Changes to verified Five Oaks project information.",
] as const;

export const homeCollection = [
  {
    id: "townhomes",
    title: "Freehold townhomes",
    copy: "Townhomes at Five Oaks are listed at 1,388–2,773 sq. ft. Collections shown on this page include the 24′ Collection, Advantage Townhomes and back-to-back (B2B) elevations. Detailed floor plans, deposits and pricing remain to be published.",
    status: "1,388–2,773 sq. ft.",
    imageId: "advantageTowns" as const,
  },
  {
    id: "detached",
    title: "Detached homes",
    copy: "Detached homes are listed at 3,187–5,170 sq. ft. on 40′, 42′ and 50′ frontages, with parking for up to six vehicles. Collections shown include The Starling (40′), The Merlin (42′) and The Sandhill (50′). Select premium lots back onto protected natural surroundings.",
    status: "3,187–5,170 sq. ft.",
    imageId: "starling40" as const,
  },
] as const;

export const pricingStatusItems = [
  { label: "Starting price", factId: "pricing" },
  { label: "Price list", factId: "pricing" },
  { label: "Deposit structure", factId: "deposit" },
  { label: "Current incentives", factId: "incentives" },
  { label: "Launch date", factId: "launch-date" },
  { label: "Occupancy", factId: "occupancy" },
] as const;

export const buyerChecklist = [
  "Final home model and lot.",
  "Purchase price.",
  "Deposit amount and payment dates.",
  "Included features and finishes.",
  "Upgrade costs.",
  "Development and closing adjustments.",
  "Tentative closing dates.",
  "Assignment provisions.",
  "Tarion/New Home Warranty documentation where applicable.",
  "Legal review of the Agreement of Purchase and Sale.",
] as const;

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: readonly FaqItem[] = [
  {
    question: "What is Five Oaks by Caivan?",
    answer:
      "Five Oaks is an exclusive new Caivan community coming this fall to Dundas Street West and Neyagawa Boulevard in Oakville. It offers freehold townhomes and detached homes beside Lions Valley Park and Sixteen Mile Creek, including select premium lots backing onto protected natural surroundings.",
  },
  {
    question: "Where is Five Oaks located?",
    answer:
      "Five Oaks is at Dundas Street West and Neyagawa Boulevard in Oakville, surrounded by Lions Valley Park and overlooking Sixteen Mile Creek. Nearby amenities identified for this location include Oakville Trafalgar Memorial Hospital, Sixteen Mile Sports Complex, Highway 407, Bronte GO and Downtown Oakville.",
  },
  {
    question: "What types of homes are planned at Five Oaks?",
    answer:
      "Freehold townhomes of 1,388–2,773 sq. ft. and detached homes of 3,187–5,170 sq. ft. Detached frontages are listed at 40′, 42′ and 50′. Parking is listed at up to six vehicles. Official floor plans remain to be published.",
  },
  {
    question: "Are the Five Oaks townhomes freehold?",
    answer:
      "Yes. Townhomes at Five Oaks are described as freehold. Buyers should still confirm tenure for their specific home and release in official purchase documents.",
  },
  {
    question: "How much will homes at Five Oaks cost?",
    answer:
      "Starting prices and a public price list have not been published. A buyer incentive of an HST rebate of up to $130,000, including for investors, has been stated for this release. Register for updates rather than relying on undated third-party price lists.",
  },
  {
    question: "Are Five Oaks floor plans available?",
    answer:
      "Official floor plans have not been published. Elevations shown on this page are artist's renderings for the 24′ Collection, Advantage Townhomes, B2B, The Starling, The Merlin and The Sandhill. Register to be notified when official plans are released.",
  },
  {
    question: "What is the Five Oaks deposit structure?",
    answer:
      "The deposit schedule has not been published. Deposit amounts and payment dates should be confirmed in official documents before any purchase decision.",
  },
  {
    question: "Are there incentives for Five Oaks?",
    answer:
      "A buyer incentive of an HST rebate of up to $130,000, including for investors, has been stated for this release. Confirm current eligibility and amounts against official developer documents, as incentives can change.",
  },
  {
    question: "When will Five Oaks launch?",
    answer:
      "Five Oaks is coming this fall. A specific sales-launch calendar date and occupancy timing have not been published. Register for launch updates.",
  },
  {
    question: "How can I receive Five Oaks updates?",
    answer:
      "Submit the project-update form on this page. The publisher identified in the footer will use the contact information you provide to respond to your request. Ongoing promotional messages are sent only if you opt in. You can unsubscribe from commercial electronic messages at any time.",
  },
] as const;

export const seo = {
  title: "Five Oaks Oakville | Dundas & Neyagawa Townhomes & Detached",
  description:
    "Five Oaks by Caivan is coming this fall to Dundas and Neyagawa in Oakville. Freehold townhomes 1,388–2,773 sq. ft., detached 3,187–5,170 sq. ft., HST rebate up to $130,000. Register for updates.",
  ogTitle: "Five Oaks by Caivan | Dundas & Neyagawa, Oakville",
  keywords: [
    "Five Oaks Oakville",
    "Five Oaks by Caivan",
    "Caivan Oakville",
    "Dundas Neyagawa new homes",
    "Oakville freehold townhomes",
    "Oakville detached homes",
  ],
} as const;

export const userMessages = {
  validationSummary: "Please check the highlighted fields and try again.",
  firstName: "Enter your first name.",
  lastName: "Enter your last name.",
  email: "Enter a valid email address.",
  phone: "Enter a valid phone number or leave the field blank.",
  productInterest: "Select a home type interest.",
  loading: "Submitting your request…",
  success:
    "You're registered for Five Oaks updates. We'll use the contact information you provided to keep you informed according to your communication preferences.",
  failure:
    "We couldn't submit your request right now. Your information has not been confirmed as received. Please try again.",
} as const;

export const productInterestOptions = [
  { value: "single-detached", label: "Single-detached home" },
  { value: "townhome", label: "Townhome" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const buyerTimingOptions = [
  { value: "as-soon-as-available", label: "As soon as available" },
  { value: "within-1-year", label: "Within 1 year" },
  { value: "1-2-years", label: "1–2 years" },
  { value: "exploring", label: "Exploring options" },
] as const;

export const images = {
  hero: {
    src: "https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/footers/uploads/1789064103592-gskvl4-B002C0284_260804_WJR722_CH13Edit_LR%20extended%20blue%20sky.jpg",
    alt: "Aerial view of Lions Valley Park and Sixteen Mile Creek near Five Oaks at Dundas Street West and Neyagawa Boulevard in Oakville",
    width: 1920,
    height: 1080,
  },
  logo: {
    src: "https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/campaign-media/uploads/Caivan-FiveOaks-Logo-Teal-RGB@2x.png",
    alt: "Five Oaks by Caivan Logo",
    width: 400,
    height: 100,
  },
  communityAerial: {
    src: "https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/footers/uploads/1789064066316-uyb56z-Community%20Aerial.jpg",
    alt: "Five Oaks community aerial showing the Oakville setting around Lions Valley",
    width: 1920,
    height: 1280,
  },
  pondPathway: {
    src: "https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/footers/uploads/1789064068528-8wp5pe-Pond%20_%20Pathway%20Aerial.jpg",
    alt: "Aerial of pond and pathway open space at Five Oaks in Oakville",
    width: 1920,
    height: 1280,
  },
  creekAerial: {
    src: "https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/footers/uploads/1789064103592-gskvl4-B002C0284_260804_WJR722_CH13Edit_LR%20extended%20blue%20sky.jpg",
    alt: "Sixteen Mile Creek valley and surrounding neighbourhood near Five Oaks, Oakville",
    width: 1920,
    height: 1080,
  },
  collection24: {
    src: "https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/footers/uploads/1789064060902-z6t5dj-24_%20Collection%20Elevation%20B.jpg",
    alt: "Five Oaks 24′ Collection Elevation B, artist's rendering",
    width: 1920,
    height: 1280,
  },
  starling40: {
    src: "https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/footers/uploads/1789064060909-6e22fw-40_%20Collection%20The%20Starling%20Corner%20Elevation%20B.jpg",
    alt: "Five Oaks 40′ Collection The Starling Corner Elevation B, artist's rendering",
    width: 1920,
    height: 1280,
  },
  merlin42: {
    src: "https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/footers/uploads/1789064060912-sudnr6-42_%20Collection%20The%20Merlin%20Elevation%20A.jpg",
    alt: "Five Oaks 42′ Collection The Merlin Elevation A, artist's rendering",
    width: 1920,
    height: 1280,
  },
  sandhill50: {
    src: "https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/footers/uploads/1789064062767-fe32kk-50_%20Collection%20The%20Sandhill%20Elevation%20B.jpg",
    alt: "Five Oaks 50′ Collection The Sandhill Elevation B, artist's rendering",
    width: 1920,
    height: 1280,
  },
  advantageTowns: {
    src: "https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/footers/uploads/1789064063369-8yq5tn-Advantage%20Townhomes%20Elevation%20B.jpg",
    alt: "Five Oaks Advantage Townhomes Elevation B, artist's rendering",
    width: 1920,
    height: 1280,
  },
  b2b: {
    src: "https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/footers/uploads/1789064064069-2q88cg-B2B%20Elevation%20A.jpg",
    alt: "Five Oaks back-to-back townhomes Elevation A, artist's rendering",
    width: 1920,
    height: 1280,
  },
  breakfast: {
    src: "https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/footers/uploads/1789064066093-8shlsz-Breakfast.jpg",
    alt: "Five Oaks breakfast area interior, artist's rendering",
    width: 1920,
    height: 1280,
  },
  greatRoom: {
    src: "https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/footers/uploads/1789064066482-19byoq-Great%20Room.jpg",
    alt: "Five Oaks great room interior, artist's rendering",
    width: 1920,
    height: 1280,
  },
  kitchenSingles: {
    src: "https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/footers/uploads/1789064068180-akzyzu-Kitchen%20-%20Singles.jpg",
    alt: "Five Oaks detached-home kitchen interior, artist's rendering",
    width: 1920,
    height: 1280,
  },
  kitchenTowns: {
    src: "https://ewzutahmskuhbsalpygn.supabase.co/storage/v1/object/public/footers/uploads/1789064068526-4ub02z-Kitchen%20-%20Towns.jpg",
    alt: "Five Oaks townhome kitchen interior, artist's rendering",
    width: 1920,
    height: 1280,
  },
} as const;

export const elevations = [
  {
    id: "24-collection",
    title: "24′ Collection",
    type: "Townhome",
    imageId: "collection24" as const,
  },
  {
    id: "advantage",
    title: "Advantage Townhomes",
    type: "Townhome",
    imageId: "advantageTowns" as const,
  },
  {
    id: "b2b",
    title: "B2B Elevation A",
    type: "Townhome",
    imageId: "b2b" as const,
  },
  {
    id: "starling",
    title: "The Starling · 40′",
    type: "Detached",
    imageId: "starling40" as const,
  },
  {
    id: "merlin",
    title: "The Merlin · 42′",
    type: "Detached",
    imageId: "merlin42" as const,
  },
  {
    id: "sandhill",
    title: "The Sandhill · 50′",
    type: "Detached",
    imageId: "sandhill50" as const,
  },
] as const;
