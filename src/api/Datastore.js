// ── api/Datastore.js ─────────────────────────────────────────────────────────
// Central data store for the HourlyRecruit admin dashboard.
// All data is persisted to localStorage under the key HR_DATA_KEY.

const HR_DATA_KEY = "hr_site_data";

export const DEFAULT_DATA = {
  // ── HOME PAGE ──────────────────────────────────────────────────────────────
  home: {
    hero: {
      badge: "Hire Developers On Hourly Basis",
      heading1: "Hire Skilled",
      heading2: "Developers on",
      accent: "Hourly Basis",
      subtext:
        "Scale your projects faster with experienced developers available on flexible hourly engagement models. No long-term contracts, no risk.",
      checks: [
        "Flexible Hiring",
        "No Long-Term Contracts",
        "Quick Onboarding",
        "Pay Only for Productive Hours",
      ],
      cardStats: [
        { value: "98%", label: "Success Rate" },
        { value: "4.9★", label: "Avg Rating" },
        { value: "24h", label: "Onboarding" },
      ],
    },
    testimonials: [
      {
        initials: "AT",
        name: "Alex Thompson",
        role: "CTO, InnovateX",
        color: "linear-gradient(135deg,#1a56db,#3b82f6)",
        quote:
          "HourlyRecruit helped us quickly onboard frontend and backend developers for our SaaS product. The process was smooth, flexible and highly professional.",
      },
      {
        initials: "PS",
        name: "Priya Sharma",
        role: "Founder, HealthTrack",
        color: "linear-gradient(135deg,#ec4899,#f43f5e)",
        quote:
          "We were able to launch our MVP faster using their hourly developer model. Great communication and high-quality work delivered on time every single sprint.",
      },
      {
        initials: "RM",
        name: "Rahul Mehta",
        role: "Founder, SaaSFlow",
        color: "linear-gradient(135deg,#06b6d4,#0891b2)",
        quote:
          "HourlyRecruit helped us hire experienced developers within days. Their flexible engagement model allowed us to scale quickly without long-term hiring commitments.",
      },
      {
        initials: "SC",
        name: "Sarah Chen",
        role: "VP Engineering, FinEdge",
        color: "linear-gradient(135deg,#8b5cf6,#7c3aed)",
        quote:
          "The dedicated developer model worked brilliantly for us. They integrated seamlessly with our team, attended standups, and delivered exceptional code quality.",
      },
    ],
  },

  // ── DEVELOPERS ────────────────────────────────────────────────────────────
  developers: [
    {
      initials: "AK",
      name: "Arjun Kumar",
      role: "Senior React Developer",
      exp: "6 yrs",
      rate: "$35/hr",
      rating: "4.9",
      projects: 42,
      color: "linear-gradient(135deg,#1a56db,#3b82f6)",
      skills: ["React.js", "TypeScript", "Next.js", "Node.js"],
      category: "Frontend",
    },
    {
      initials: "PS",
      name: "Priya Singh",
      role: "Full Stack Developer",
      exp: "5 yrs",
      rate: "$38/hr",
      rating: "5.0",
      projects: 31,
      color: "linear-gradient(135deg,#ec4899,#f43f5e)",
      skills: ["React.js", "Node.js", "MongoDB", "AWS"],
      category: "Full Stack",
    },
    {
      initials: "RV",
      name: "Rahul Verma",
      role: "Backend Engineer",
      exp: "7 yrs",
      rate: "$40/hr",
      rating: "4.8",
      projects: 58,
      color: "linear-gradient(135deg,#06b6d4,#0891b2)",
      skills: ["Python", "Django", "PostgreSQL", "Redis"],
      category: "Backend",
    },
    {
      initials: "SM",
      name: "Sneha Mehta",
      role: "Flutter Developer",
      exp: "4 yrs",
      rate: "$32/hr",
      rating: "4.9",
      projects: 27,
      color: "linear-gradient(135deg,#8b5cf6,#7c3aed)",
      skills: ["Flutter", "Dart", "Firebase", "iOS/Android"],
      category: "Mobile",
    },
    {
      initials: "KP",
      name: "Kiran Patel",
      role: "DevOps Engineer",
      exp: "6 yrs",
      rate: "$42/hr",
      rating: "4.8",
      projects: 45,
      color: "linear-gradient(135deg,#f59e0b,#d97706)",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      category: "DevOps",
    },
    {
      initials: "DG",
      name: "Divya Gupta",
      role: "UI/UX Designer",
      exp: "5 yrs",
      rate: "$30/hr",
      rating: "5.0",
      projects: 38,
      color: "linear-gradient(135deg,#22c55e,#16a34a)",
      skills: ["Figma", "Adobe XD", "Framer", "Prototyping"],
      category: "Design",
    },
    {
      initials: "AS",
      name: "Amit Sharma",
      role: "Node.js Developer",
      exp: "5 yrs",
      rate: "$36/hr",
      rating: "4.7",
      projects: 33,
      color: "linear-gradient(135deg,#0ea5e9,#0284c7)",
      skills: ["Node.js", "Express", "GraphQL", "MongoDB"],
      category: "Backend",
    },
    {
      initials: "NR",
      name: "Neha Rao",
      role: "React Native Developer",
      exp: "4 yrs",
      rate: "$33/hr",
      rating: "4.9",
      projects: 22,
      color: "linear-gradient(135deg,#f43f5e,#e11d48)",
      skills: ["React Native", "Redux", "Firebase", "REST APIs"],
      category: "Mobile",
    },
    {
      initials: "VK",
      name: "Vikram Krishnan",
      role: "Java Backend Developer",
      exp: "8 yrs",
      rate: "$44/hr",
      rating: "4.8",
      projects: 67,
      color: "linear-gradient(135deg,#d97706,#b45309)",
      skills: ["Java", "Spring Boot", "Microservices", "AWS"],
      category: "Backend",
    },
  ],

  // ── PRICING ───────────────────────────────────────────────────────────────
  pricing: [
    {
      name: "Hourly",
      amount: "$25",
      period: "/hr",
      subtext: "Pay as you go · No minimum commitment",
      popular: false,
      features: [
        "Access to vetted developers",
        "Pay for actual hours logged",
        "Weekly billing & timesheets",
        "Start & pause anytime",
        "Basic account support",
      ],
    },
    {
      name: "Dedicated",
      amount: "$2,800",
      period: "/mo",
      subtext: "Full-time dedicated developer · Timezone aligned",
      popular: true,
      features: [
        "Everything in Hourly",
        "Exclusive to your project",
        "Full timezone alignment",
        "Daily standups & reporting",
        "Dedicated account manager",
        "7-day replacement guarantee",
      ],
    },
    {
      name: "Team",
      amount: "Custom",
      period: "",
      subtext: "Full project team · Milestone-based billing",
      popular: false,
      features: [
        "Everything in Dedicated",
        "2–12 member teams",
        "Project manager included",
        "Milestone-based billing",
        "Fixed scope delivery",
        "Priority support 24/7",
      ],
    },
  ],

  // ── ABOUT PAGE ────────────────────────────────────────────────────────────
  about: {
    hero: {
      heading: "Hire Skilled Developers on Hourly Basis",
      subtext:
        "Scale your projects faster with experienced developers available on flexible hourly engagement models. No long-term contracts, no risk.",
    },
    content: {
      heading: "Helping Businesses Build Faster with Reliable Developers",
      paragraphs: [
        "HourlyRecruit helps startups, agencies, and enterprises hire skilled developers on flexible hourly engagement models. From frontend engineering and backend architecture to DevOps, automation, and mobile app development — we provide experienced professionals who can work independently or alongside your internal team.",
        "Whether you need one developer for a quick task or a complete engineering team for a large-scale project, our process makes tech hiring simple, fast, transparent, and scalable.",
      ],
    },
    stats: [
      { value: "500+", label: "Vetted Developers" },
      { value: "200+", label: "Projects Delivered" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "48h", label: "Avg. Onboarding Time" },
    ],
  },

  // ── CONTACT PAGE ──────────────────────────────────────────────────────────
  contact: {
    hero: {
      heading: "Have a Project in Mind?",
      subtext:
        "Let's discuss how we can help you build and scale your product with the right tech talent.",
    },
    info: {
      location: "Bangalore, India",
      email: "hr@hourlyrecruit.com",
      phone: "+91 888 444 6677",
      website: "www.hourlyrecruit.com",
    },
    nextSteps: [
      "We review your requirements within 2 hours",
      "A team member schedules a quick 30-min call",
      "We share 3–5 matched developer profiles",
      "You interview and choose — hire in 48 hours",
    ],
  },

  // ── HOW IT WORKS (FAQs) ───────────────────────────────────────────────────
  howItWorks: {
    faqs: [
      {
        q: "How quickly can I hire a developer?",
        a: "In most cases, you can have a developer ready to start within 48 hours of sharing your requirements. Complex or very niche requirements may take up to 5 business days.",
      },
      {
        q: "What if the developer doesn't meet my expectations?",
        a: "We offer a 7-day guarantee. If you're not satisfied in the first week, we'll find you a replacement at no additional cost — no questions asked.",
      },
      {
        q: "Do I need to sign a long-term contract?",
        a: "No. Our Hourly model has zero minimum commitment. Our Dedicated model runs month-to-month with a 7-day cancellation notice. No lock-ins, ever.",
      },
      {
        q: "How do you vet your developers?",
        a: "Every developer passes a multi-stage process: initial technical screen, live coding assessment, system design interview, communication evaluation, and reference checks. Less than 8% of applicants make it through.",
      },
      {
        q: "What time zones do your developers work in?",
        a: "Our developers are spread across IST (India), EET (Eastern Europe), and LATAM time zones. We match you with developers who overlap at least 4 hours with your working day.",
      },
      {
        q: "How does billing work?",
        a: "Hourly model: billed weekly based on timesheets. Dedicated model: fixed monthly billing. Project model: milestone-based payments. All invoices are NET-15.",
      },
      {
        q: "Can developers join our existing team processes?",
        a: "Absolutely. Our developers are remote-work veterans who integrate into your Slack, Jira, GitHub, standups, and sprint cycles from day one.",
      },
    ],
  },

  // ── FOOTER ────────────────────────────────────────────────────────────────
  footer: {
    desc: "Hire skilled developers on hourly basis and scale your projects faster without long-term commitments.",
    copyright: "© 2024 HourlyRecruit. All Rights Reserved.",
  },
};

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Deep-merge saved data on top of defaults so new keys are always present. */
function mergeWithDefaults(saved) {
  try {
    const merged = JSON.parse(JSON.stringify(DEFAULT_DATA)); // deep clone defaults

    if (!saved || typeof saved !== "object") return merged;

    // Top-level keys
    for (const key of Object.keys(merged)) {
      if (saved[key] !== undefined) {
        if (Array.isArray(merged[key])) {
          // Arrays: use saved version directly
          merged[key] = saved[key];
        } else if (typeof merged[key] === "object" && merged[key] !== null) {
          // Objects: shallow-merge one level deep for nested sections
          merged[key] = { ...merged[key], ...saved[key] };

          // Go one more level for nested objects (e.g. about.hero, contact.info)
          for (const subKey of Object.keys(merged[key])) {
            if (
              saved[key][subKey] !== undefined &&
              typeof merged[key][subKey] === "object" &&
              !Array.isArray(merged[key][subKey])
            ) {
              merged[key][subKey] = { ...merged[key][subKey], ...saved[key][subKey] };
            }
          }
        } else {
          merged[key] = saved[key];
        }
      }
    }

    return merged;
  } catch {
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

/** Read data from localStorage, falling back to defaults. */
export function getData() {
  try {
    const raw = localStorage.getItem(HR_DATA_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_DATA));
    return mergeWithDefaults(JSON.parse(raw));
  } catch {
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

/** Persist data to localStorage. */
export function setData(data) {
  try {
    localStorage.setItem(HR_DATA_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Datastore: failed to save", e);
  }
}

/** Wipe localStorage and return fresh defaults. */
export function resetData() {
  try {
    localStorage.removeItem(HR_DATA_KEY);
  } catch (e) {
    console.error("Datastore: failed to reset", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}