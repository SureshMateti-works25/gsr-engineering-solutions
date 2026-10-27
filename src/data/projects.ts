export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  industry: 'Pharma & Biotech' | 'Steel & Heavy Engineering' | 'Food & Packaging' | 'Chemical & Process';
  location: string;
  serviceCategory: 'Supply + Installation' | 'Switchgear Retrofit' | 'Pneumatics Automation' | 'Turnkey AMC & Maintenance';
  duration: string;
  scope: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  materialsSupplied: string[];
  servicesRendered: string[];
  imageUrl: string;
  galleryUrls?: string[];
  clientQuote?: {
    quote: string;
    author: string;
    role: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'pharma-pumps-piping-installation',
    title: 'Turnkey Supply & Installation of SS 316L Sanitary Piping & Transfer Pumps for Sterile Pharma Unit',
    clientType: 'Sterile Injectables & Liquid Oral Formulation Plant',
    industry: 'Pharma & Biotech',
    location: 'Pharma SEZ, Genome Valley, Hyderabad, Telangana',
    serviceCategory: 'Supply + Installation',
    duration: '21 Days Turnaround',
    scope: 'Comprehensive Material Supply + On-Site Orbital TIG Welding, Hydro-Testing, Boroscopy & Validation',
    summary: 'Complete engineering delivery from raw material supply to live commissioning of high-purity Water-for-Injection (WFI) and purified water distribution loops, complete with sanitary centrifugal process pumps and aseptic diaphragm valve manifolds.',
    challenge: 'Strict regulatory requirement for inner surface finish (Ra < 0.38 µm), pure steam sterilizability at 121°C, and urgent 21-day timeline to pass upcoming international regulatory inspection.',
    solution: 'GSR Engineering Solutions supplied fully certified ASME BPE SS 316L electropolished tubes with 3.1 MTC, deployed certified high-purity orbital welding technicians, installed sanitary SS pumps with mechanical seals, and conducted 100% boroscopy inspections.',
    results: [
      'Zero defect rate across 450+ field welds with 100% boroscopy clearance',
      'Passivated and hydro-tested up to 10.5 Bar with zero pressure drop',
      'Completed 4 days ahead of schedule, facilitating successful regulatory audit',
      'Now protected under comprehensive GSR 24/7 Annual Maintenance Contract (AMC)'
    ],
    materialsSupplied: [
      'ASTM A270 / ASME BPE SS 316L Electropolished Tubing (1" to 3")',
      'Zero dead-leg Aseptic Diaphragm Valves & Tri-Clamp Bends',
      'Sanitary Centrifugal Process Pumps (IE3 5.5 kW)',
      'USP Class VI Silicone & PTFE Sanitary Gaskets'
    ],
    servicesRendered: [
      '3D Isometric Piping Spool Routing & Layout Design',
      'Automatic Orbital TIG Welding with Argon Purging',
      'Nitric Acid Passivation & Surface Decontamination',
      'Complete DQ/IQ Validation Dossier & Mill Test Certifications'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    clientQuote: {
      quote: 'GSR Engineering Solutions is fundamentally different from typical traders. Sandeep Kumar and his engineering crew delivered certified materials and executed flawless sanitary piping installation without interrupting our ongoing production line.',
      author: 'K. V. Ramana Rao',
      role: 'General Manager - Engineering & Maintenance, Hyderabad'
    },
    metrics: [
      { label: 'Surface Finish', value: 'Ra < 0.38 µm' },
      { label: 'Test Pressure', value: '10.5 Bar' },
      { label: 'Delivery Time', value: '17 Days (Ahead)' },
      { label: 'Welding Quality', value: '100% Boroscopy Pass' }
    ]
  },
  {
    id: 'steel-switchgear-retrofit-upgrade',
    title: '3200A Main Switchgear Retrofit & Heavy Power Distribution Modernization for Steel Rolling Mill',
    clientType: 'Integrated Steel & TMT Rolling Mill',
    industry: 'Steel & Heavy Engineering',
    location: 'Industrial Corridor, Visakhapatnam, Andhra Pradesh',
    serviceCategory: 'Switchgear Retrofit',
    duration: '4-Day Plant Shutdown Window',
    scope: 'Supply of Schneider & Siemens Switchgear + Busbar Engineering, Panel Erection & Relay Coordination',
    summary: 'Modernized an aging 30-year-old power distribution substation by supplying and retrofitting new microprocessor-based 3200A Air Circuit Breakers (ACB) and 630A/800A MCCB distribution panels during a planned 96-hour annual shutdown.',
    challenge: 'Severe plant downtime penalty of ₹12 Lakhs per hour if shutdown exceeded 96 hours. Required seamless mechanical and electrical coupling to existing legacy busbar chambers.',
    solution: 'Engineered custom copper adapter busbars in advance, supplied factory-tested Schneider MasterPact ACB units and Siemens 3VA MCCBs, executed 24/7 shift erection, and tuned micro-logic trip units on-site.',
    results: [
      'Successfully energized in 88 hours (8 hours ahead of shutdown deadline)',
      'Eliminated nuisance tripping, saving an estimated ₹45 Lakhs in annual downtime',
      'Integrated real-time digital energy metering with RS485 Modbus communication',
      'Provided 2-year warranty with zero breakdown incidents recorded'
    ],
    materialsSupplied: [
      'Schneider Electric MasterPact 3200A 4P Drawout ACB with MicroLogic Trip',
      'Siemens 3VA 630A & 800A Electronic MCCBs with Short-Circuit Protection',
      'Electrolytic Grade E91E Tinned Copper Busbars (100x10mm)',
      '1.1kV XLPE Multi-Core Armoured Cables & Heavy Brass Glands'
    ],
    servicesRendered: [
      'Pre-shutdown thermal imaging & short-circuit fault analysis',
      'Custom copper busbar bending, silver plating & torque setting',
      'Secondary injection testing and earth fault relay coordination',
      'Turnkey handover with Electrical Inspectorate compliance filing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    clientQuote: {
      quote: 'GSR Engineering Solutions executed our 3200A substation retrofit flawlessly. Their switchgear knowledge and rapid busbar customization saved us millions in plant uptime.',
      author: 'M. S. Prasad',
      role: 'Chief Technical Officer, Vizag Steel Rolling Complex'
    },
    metrics: [
      { label: 'Main Breaker', value: '3200A Drawout' },
      { label: 'Shutdown Window', value: '88 Hrs (Target: 96h)' },
      { label: 'Breaking Capacity', value: '65kA (Icu)' },
      { label: 'Uptime Gain', value: '+99.8%' }
    ]
  },
  {
    id: 'fmcg-pneumatic-automation-overhaul',
    title: 'High-Speed Automated Packaging Line Pneumatics & Multi-Axis PLC Synchronization',
    clientType: 'Beverage & FMCG Bottling Facility',
    industry: 'Food & Packaging',
    location: 'Industrial Area, Medchal, Hyderabad, Telangana',
    serviceCategory: 'Pneumatics Automation',
    duration: '10 Days Turnaround',
    scope: 'SMC & FESTO Pneumatics Supply + Valve Manifolds, Optical Sensors & PLC Cycle Optimization',
    summary: 'Upgraded 3 automatic high-speed bottling and cartoning lines suffering from sluggish pneumatic actuation and intermittent solenoid coil burnout caused by poor air quality and uncalibrated flow rates.',
    challenge: 'Existing packaging line capped at 180 bottles/minute due to slow air cylinder stroke return times and frequent valve manifold failures.',
    solution: 'Designed and installed clean modular SMC FRL air preparation units with coalescing 0.01 micron sub-micro filters, replaced tired cylinders with high-speed Festo guided compact cylinders, and rewrote sensor feedback logic.',
    results: [
      'Bottling output increased by 28% from 180 to 230 bottles per minute',
      'Compressed air consumption reduced by 19% through optimized pressure regulation',
      'Cylinder cycle lifetime extended 3x with zero seal failures after 6 months',
      'Eliminated moisture carryover through desiccant and auto-drain integration'
    ],
    materialsSupplied: [
      'FESTO ADN Series ISO 21287 Compact Cylinders & Proximity Reed Switches',
      'SMC SY Series 5/2-Way Solenoid Valve Manifold with Multipin Sub-D',
      'SMC AC Series Modular Filter-Regulator-Lubricator (FRL) Air Trio',
      'Polyurethane PU Tubing (8mm & 10mm) and Speed Regulators'
    ],
    servicesRendered: [
      'Pneumatic circuit redesign and air consumption audit',
      'Valve island mounting, pneumatic pipe routing & leak-tight testing',
      'Optical photoelectric sensor alignment for carton position tracking',
      'On-site operator training on pneumatic preventative maintenance'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80',
    clientQuote: {
      quote: 'The team from GSR solved pneumatic speed bottlenecks that our original equipment manufacturer could not diagnose. Our line runs 28% faster with zero unplanned stops.',
      author: 'P. Sudhakar',
      role: 'Operations Head, Beverage Bottling Unit'
    },
    metrics: [
      { label: 'Line Speed', value: '230 BPM (+28%)' },
      { label: 'Air Savings', value: '19% Reduction' },
      { label: 'Filtration', value: '0.01 Micron' },
      { label: 'Unplanned Stops', value: 'Zero (6 Mos)' }
    ]
  },
  {
    id: 'chemical-pumps-amc-maintenance',
    title: 'Comprehensive Annual Maintenance Contract (AMC) & Predictive Vibration Monitoring for Chemical Pumps',
    clientType: 'Agrochemical & Bulk Drug Active Ingredients (API) Plant',
    industry: 'Chemical & Process',
    location: 'East Godavari Industrial Belt, Andhra Pradesh',
    serviceCategory: 'Turnkey AMC & Maintenance',
    duration: 'Ongoing 1-Year Master Service Agreement',
    scope: 'Routine Quarterly Overhauls + Mechanical Seal Replacements + 24/7 Breakdown Response Guarantee',
    summary: 'Managing end-to-end reliability for 42 industrial centrifugal process pumps, slurry transfer pumps, and high-pressure metering pumps handling corrosive organic solvents and high-temperature slurries.',
    challenge: 'High seal failure rate and bearing seizures due to aggressive corrosive media and thermal expansion, causing unplanned batch stops and toxic solvent leak risks.',
    solution: 'Implemented predictive vibration monitoring and laser shaft alignment, retrofitted double mechanical seals with thermosiphon barrier fluid pots, and stationed dedicated monthly maintenance technicians on-site.',
    results: [
      'Catastrophic pump failures reduced by 92% in the first 9 months',
      'Guaranteed on-site engineer dispatch within 2 hours for any emergency breakdown',
      'All genuine spares (mechanical seals, ceramic rings, bearings) stocked locally',
      'Client saved an estimated ₹38 Lakhs in prevented solvent leakages and batch loss'
    ],
    materialsSupplied: [
      'Cartridge Double Mechanical Seals with Silicon Carbide / Tungsten Faces',
      'SKF Heavy-Duty Explorer Deep Groove & Angular Contact Bearings',
      'Pure PTFE Braided Gland Packing and Chemically Inert Gaskets',
      'Loctite Industrial Threadlockers, Retaining Compounds & Food-Grade Greases'
    ],
    servicesRendered: [
      'Monthly FFT Spectrum Vibration Analysis & Dynamic Balancing',
      'Precision Dual-Beam Laser Shaft & Pulley Alignment (tolerance < 0.03mm)',
      'Hydrostatic casing pressure testing and impellor dynamic trimming',
      '24/7 Emergency Breakdown Support Hotline with Dedicated Spares Stock'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=1000&q=80',
    clientQuote: {
      quote: 'Having GSR Engineering Solutions handle our AMC has transformed our maintenance department. We no longer worry about pump seal failures or middle-of-the-night plant shutdowns.',
      author: 'Dr. N. Satyanarayana',
      role: 'Director of Manufacturing, Godavari Chemicals'
    },
    metrics: [
      { label: 'Pumps Under AMC', value: '42 Heavy Units' },
      { label: 'Breakdown Drop', value: '-92% Failures' },
      { label: 'SLA Response', value: '< 2 Hours On-Site' },
      { label: 'Laser Alignment', value: '< 0.03 mm Tolerance' }
    ]
  }
];
