import type { IndustryDomain } from '../types';

export const industryDomainsData: IndustryDomain[] = [
  {
    id: 'pharma-biotech',
    name: 'Pharmaceutical, Biotech & Cleanrooms',
    badge: 'Sanitary Grade & cGMP',
    iconName: 'Pill',
    tagline: 'High-purity SS 316L sanitary piping, ASME BPE vessels, cleanroom pneumatics & precision instrumentation',
    description: 'Specialized for sterile pharmaceutical manufacturing, WFI loops, and bioprocess corridors across Hyderabad Genome Valley, Vizag Pharma City, and Chennai biotech clusters. Backed by 3.1 Material Test Certificates (MTC) and internal mirror finishes (Ra < 0.4 µm).',
    color: 'emerald',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    borderHover: 'hover:border-emerald-500 hover:shadow-emerald-500/20',
    keyStandards: ['cGMP Compliant', 'ASME BPE Sanitary', 'SS 316L Electro-Polished', 'Ra < 0.4 µm Mirror Finish', 'FDA Class VI Gaskets'],
    hubAreas: [
      'Hyderabad (Pharma City & Genome Valley, Telangana)',
      'Visakhapatnam (Jawaharlal Nehru Pharma City, Andhra Pradesh)',
      'Chennai & Sriperumbudur Biotech Corridor (Tamil Nadu)',
      'Pune & Kurkumbh Pharma Belts (Maharashtra)'
    ],
    specificProductIds: [
      'ss-pipes',
      'ss-tanks-vessels',
      'ss-pipe-fittings',
      'ss-valves',
      'temperature-sensors',
      'pressure-sensors',
      'pneumatic-actuators',
      'solenoid-valves'
    ],
    commonProductIds: [
      'rubber-ptfe-gaskets',
      'pu-tubes',
      'pneumatic-fittings',
      'mcb-rccb-elcb',
      'wires-cables',
      'industrial-fasteners'
    ]
  },
  {
    id: 'chemical-petrochem',
    name: 'Chemical, Petrochemical & Process Refineries',
    badge: 'Corrosion & High Pressure (Up to 6000 PSI)',
    iconName: 'FlaskConical',
    tagline: 'Acid-resistant SS 316/310 piping, ANSI Class 150-2500# flanges, heavy process valves & flameproof switchgear',
    description: 'Heavy-duty fluid handling and electrical distribution for aggressive acid dosing, solvent recovery, and continuous distillation lines across Pashamylaram, Jeedimetla, Visakhapatnam, and Manali/Dahej industrial corridors.',
    color: 'amber',
    gradient: 'from-amber-600 via-orange-600 to-red-700',
    borderHover: 'hover:border-amber-500 hover:shadow-amber-500/20',
    keyStandards: ['NACE MR0175 Sour Service', 'ANSI B16.5 Class 150-2500#', 'Ex-d Flameproof Certified', 'ASTM A312 SCH 40S/80S/160S'],
    hubAreas: [
      'Pashamylaram, Jeedimetla & Kazipally (Telangana)',
      'Atchutapuram & Visakhapatnam Industrial Corridors (AP)',
      'Manali & Ranipet Chemical Estates (Tamil Nadu)',
      'Thane-Belapur, Taloja & Tarapur MIDC (Maharashtra)'
    ],
    specificProductIds: [
      'ss-pipes',
      'ss-flanges',
      'industrial-valves',
      'ss-valves',
      'gear-boxes',
      'vfd-ac-drives',
      'mccb',
      'vcb',
      'switchgear-panels'
    ],
    commonProductIds: [
      'rubber-ptfe-gaskets',
      'industrial-fasteners',
      'u-bolts-clamps',
      'hose-pipes-clamps',
      'fuses-fuse-holders',
      'power-contactors'
    ]
  },
  {
    id: 'food-dairy-beverage',
    name: 'Food, Dairy, Beverages & Agro-Processing',
    badge: 'Hygienic 3-A & IP65 Washdown',
    iconName: 'Utensils',
    tagline: 'Mirror-finish SS storage silos, SMS/DIN hygienic unions, washdown cylinders & oil-free air preparation',
    description: 'Designed for strict food safety compliance across automated milk dairies, brewery fermentation, beverage bottling, sugar mills, and commercial agro-processing plants in West Godavari, Guntur, and western Maharashtra.',
    color: 'sky',
    gradient: 'from-sky-600 via-blue-600 to-indigo-700',
    borderHover: 'hover:border-sky-500 hover:shadow-sky-500/20',
    keyStandards: ['FSSAI Hygiene Standards', '3-A Sanitary Dairy Criteria', 'Oil-Free FRL Air Supply', 'IP65 Water Washdown Safe'],
    hubAreas: [
      'Tadepalligudem & West Godavari Processing Corridor (AP)',
      'Guntur & Vijayawada Food & Spice Belts (AP)',
      'Hyderabad & Medchal Agro-Processing Zone (Telangana)',
      'Pune, Nashik & Kolhapur Dairy & Sugar Hubs (Maharashtra)'
    ],
    specificProductIds: [
      'ss-tanks-vessels',
      'ss-pipes',
      'ss-pipe-fittings',
      'air-preparation-units',
      'pneumatic-cylinders',
      'photoelectric-sensors',
      'vfd-ac-drives',
      'proximity-sensors'
    ],
    commonProductIds: [
      'couplings',
      'bearings',
      'push-buttons-indicators',
      'wires-cables',
      'terminal-blocks-connectors',
      'industrial-casters-wheels'
    ]
  },
  {
    id: 'steel-heavy-engineering',
    name: 'Heavy Engineering, Steel Mills & Fabrication',
    badge: 'High Torque & Structural IS 2062',
    iconName: 'Factory',
    tagline: 'Heavy reduction gearboxes, custom case-hardened gears (58-62 HRC), electrolytic busbars & high-amp switchgear',
    description: 'Continuous S1 heavy duty mechanical drive components, power transmission, and medium-voltage electrical switchgear engineered for hot rolling mills, blast furnaces, cement crushers, and heavy overhead cranes.',
    color: 'rose',
    gradient: 'from-rose-600 via-red-600 to-stone-800',
    borderHover: 'hover:border-rose-500 hover:shadow-rose-500/20',
    keyStandards: ['IS 2062 Structural Standards', 'DIN Class 6-8 Precision Gearing', '58-62 HRC Case Carburized & Quenched', 'IEC 62271 Heavy Switchgear'],
    hubAreas: [
      'Visakhapatnam Steel City & Industrial Port (AP)',
      'Medak, Balanagar & Patancheru Heavy Engineering (Telangana)',
      'Chennai, Ambattur & Ennore Industrial Zone (Tamil Nadu)',
      'Pune, Pimpri-Chinchwad & Bhosari Heavy Machine Clusters (Maharashtra)'
    ],
    specificProductIds: [
      'gear-boxes',
      'gears-components',
      'couplings',
      'vcb',
      'acb',
      'busbars-copper-aluminium',
      'chain-sprockets',
      'ss-sheets-plates',
      'ss-rods-bars'
    ],
    commonProductIds: [
      'industrial-fasteners',
      'bearings',
      'mccb',
      'distribution-boards',
      'power-contactors',
      'cable-glands-accessories',
      'lugs-terminals'
    ]
  },
  {
    id: 'automation-oem',
    name: 'Industrial Automation & Machine Builders (OEMs)',
    badge: 'Industry 4.0 & High-Speed Motion',
    iconName: 'Cpu',
    tagline: 'Siemens/Schneider/ABB PLCs, HMIs, VFD & servo drives, compact ISO cylinders & multi-valve manifolds',
    description: 'End-to-end component packages for special purpose machine (SPM) manufacturers, packaging machine OEMs, robotic conveyor integration, and automotive assembly plants requiring synchronized fieldbus communications.',
    color: 'indigo',
    gradient: 'from-indigo-600 via-violet-600 to-purple-800',
    borderHover: 'hover:border-indigo-500 hover:shadow-indigo-500/20',
    keyStandards: ['Industry 4.0 Ready Architecture', 'Modbus / PROFINET / EtherCAT', 'CE & UL Certified Components', 'ISO 15552 Standard Pneumatics'],
    hubAreas: [
      'Sriperumbudur, Oragadam & Maraimalai Nagar Auto Belts (TN)',
      'Pune, Chakan, Talegaon & PCMC Industrial Hubs (MH)',
      'Hyderabad Hardware Park & Electronic City (Telangana)',
      'Hosur & Coimbatore Precision Engineering Hubs'
    ],
    specificProductIds: [
      'plcs',
      'hmis-touch-panels',
      'vfd-ac-drives',
      'servo-drives',
      'io-modules',
      'remote-io-modules',
      'pneumatic-cylinders',
      'solenoid-valves',
      'proximity-sensors',
      'smps-power-supplies'
    ],
    commonProductIds: [
      'pu-tubes',
      'pneumatic-fittings',
      'speed-controllers',
      'silencers-mufflers',
      'terminal-blocks-connectors',
      'relays-timers',
      'push-buttons-indicators'
    ]
  },
  {
    id: 'water-etp-utilities',
    name: 'Water Treatment, ETP/STP & Plant Utilities',
    badge: 'Submersible IP68 & Zero Leakage',
    iconName: 'Droplets',
    tagline: 'Process butterfly & knife gate valves, SS piping skids, multi-pump cascade drives & hydrostatic transmitters',
    description: 'Turnkey valve, piping, and drive packages for industrial effluent treatment plants (ETP), sewage treatment (STP), reverse osmosis (RO) filtration skids, and municipal water pumping utilities across the four southern & western states.',
    color: 'cyan',
    gradient: 'from-cyan-600 via-teal-600 to-blue-800',
    borderHover: 'hover:border-cyan-500 hover:shadow-cyan-500/20',
    keyStandards: ['ISO 10631 Resilient Seated Standards', 'AWWA C504 Waterworks Criteria', 'PN 10/16/25 Pressure Ratings', 'IP68 Submersible Enclosures'],
    hubAreas: [
      'Common Effluent Treatment Plants (CETP) across TS & AP',
      'Chennai CMWSSB & Coastal Desalination Projects (TN)',
      'Maharashtra Industrial Development Corporation (MIDC) Water Networks',
      'Krishna & Godavari River Basin Pumping Infrastructure'
    ],
    specificProductIds: [
      'industrial-valves',
      'ss-valves',
      'ss-pipes',
      'ss-pipe-fittings',
      'ss-flanges',
      'vfd-ac-drives',
      'pressure-sensors',
      'air-preparation-units'
    ],
    commonProductIds: [
      'rubber-ptfe-gaskets',
      'u-bolts-clamps',
      'hose-pipes-clamps',
      'mccb',
      'power-contactors',
      'wires-cables',
      'couplings'
    ]
  }
];
