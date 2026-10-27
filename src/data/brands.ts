import type { BrandPartner } from '../types';

export const brandPartnersData: BrandPartner[] = [
  // ---------------- Electrical OEM Brands (From Official Flyer) ----------------
  {
    name: 'Schneider Electric',
    category: 'electrical',
    type: 'Switchgear & Power Management',
    description: 'Global pioneer in ACB, MCCB, contactors, VFDs and digital energy management solutions.',
    popular: true,
    accentColor: '#3dcd58',
    logoUrl: './brands/schneider.png'
  },
  {
    name: 'Siemens',
    category: 'electrical',
    type: 'Industrial Automation & Switchgear',
    description: 'World-class industrial motor starters, vacuum breakers, PLCs, and power distribution switchgear.',
    popular: true,
    accentColor: '#00646e',
    logoUrl: './brands/siemens.png'
  },
  {
    name: 'ABB',
    category: 'electrical',
    type: 'Power & Heavy Electrical Drives',
    description: 'Pioneering technology leader in heavy industrial drives, high-voltage breakers, and automation.',
    popular: true,
    accentColor: '#ff000f',
    logoUrl: './brands/abb.png'
  },
  {
    name: 'Eaton',
    category: 'electrical',
    type: 'Powering Business Worldwide',
    description: 'Intelligent power management technologies, medium voltage switchgear, and safety circuit breakers.',
    popular: true,
    accentColor: '#00539b',
    logoUrl: './brands/eaton.png'
  },
  {
    name: 'L&T Electrical & Automation',
    category: 'electrical',
    type: 'Low & Medium Voltage Switchgear',
    description: 'India’s foremost switchgear manufacturer for reliable motor protection, contactors, and ACB units.',
    popular: true,
    accentColor: '#005596',
    logoUrl: './brands/lnt.png'
  },
  {
    name: 'Havells',
    category: 'electrical',
    type: 'Industrial Cables & Switchgear',
    description: 'Certified heavy industrial cables, distribution boards, MCBs, and energy-efficient lighting.',
    popular: true,
    accentColor: '#e31b23',
    logoUrl: './brands/havells.png'
  },
  {
    name: 'Legrand',
    category: 'electrical',
    type: 'Power Distribution & Control',
    description: 'Global specialist in electrical and digital building infrastructures, busbars, and industrial plugs.',
    popular: true,
    accentColor: '#e30613',
    logoUrl: './brands/legrand.png'
  },
  {
    name: 'CHNT',
    category: 'electrical',
    type: 'Industrial Electrical Equipment',
    description: 'Global supplier of smart clean energy and industrial electrical components, contactors & relays.',
    popular: false,
    accentColor: '#005ba4',
    logoUrl: './brands/chnt.png'
  },
  {
    name: 'C&S Electric',
    category: 'electrical',
    type: 'Power Busduct & Controlgear',
    description: 'Leading exporter of industrial busduct systems, air circuit breakers, and control components.',
    popular: false,
    accentColor: '#004b87',
    logoUrl: './brands/cs-electric.png'
  },
  {
    name: 'Panasonic',
    category: 'electrical',
    type: 'Sensors, Relays & Automation',
    description: 'Ultra-precision factory automation sensors, PLC controllers, and high-end industrial relays.',
    popular: true,
    accentColor: '#004098',
    logoUrl: './brands/panasonic.png'
  },

  // ---------------- Pneumatics OEM Brands (From Official Flyer) ----------------
  {
    name: 'SMC',
    category: 'pneumatics',
    type: 'Pneumatic Automation Control',
    description: 'Global leader in pneumatic cylinders, air filter regulators, solenoid valves, and vacuum equipment.',
    popular: true,
    accentColor: '#005bac',
    logoUrl: './brands/smc.png'
  },
  {
    name: 'FESTO',
    category: 'pneumatics',
    type: 'Pneumatic & Electric Automation',
    description: 'World-renowned German manufacturer of high-precision valve terminals, cylinders, and FRL units.',
    popular: true,
    accentColor: '#0091dc',
    logoUrl: './brands/festo.png'
  },
  {
    name: 'AirTAC',
    category: 'pneumatics',
    type: 'Pneumatic Control Components',
    description: 'Major supplier of ISO standard pneumatic cylinders, directional solenoid valves, and fittings.',
    popular: true,
    accentColor: '#003399',
    logoUrl: './brands/airtac.png'
  },
  {
    name: 'Mindman',
    category: 'pneumatics',
    type: 'Pneumatic Valves & Cylinders',
    description: 'High-quality fluid power components, air preparation units, and pneumatic grippers.',
    popular: true,
    accentColor: '#1d4ed8',
    logoUrl: './brands/mindman.png'
  },
  {
    name: 'CKD',
    category: 'pneumatics',
    type: 'Precision Fluid Control Systems',
    description: 'Japanese pioneer in cleanroom pneumatic cylinders, chemical liquid valves, and FRL systems.',
    popular: false,
    accentColor: '#00843d',
    logoUrl: './brands/ckd.png'
  },
  {
    name: 'Parker Legris',
    category: 'pneumatics',
    type: 'Push-In Fittings & Tubing',
    description: 'World-standard quick-connect push-in fittings, industrial ball valves, and high-flex PU tubes.',
    popular: true,
    accentColor: '#ffb81c',
    logoUrl: './brands/parker-legris.png'
  },
  {
    name: 'Camozzi Automation',
    category: 'pneumatics',
    type: 'Motion & Fluid Control',
    description: 'Italian engineering excellence in digital pneumatics, proportional technology, and cylinders.',
    popular: false,
    accentColor: '#e30613',
    logoUrl: './brands/camozzi.png'
  },
  {
    name: 'RG SS',
    category: 'pneumatics',
    type: 'Stainless Steel Pneumatics',
    description: 'Corrosion-resistant stainless steel pneumatic cylinders and specialized sanitary fittings.',
    popular: false,
    accentColor: '#475569',
    logoUrl: './brands/rg-ss.png'
  },
  {
    name: 'Metal Work Pneumatic',
    category: 'pneumatics',
    type: 'Automation & Air Components',
    description: 'Heavy-duty pneumatic actuators, Syntesi modular FRL air preparation units, and electro-valves.',
    popular: false,
    accentColor: '#c8102e',
    logoUrl: './brands/metal-work.png'
  },
  {
    name: 'Janatics Pneumatic',
    category: 'pneumatics',
    type: 'Industrial Fluid Power',
    description: 'Leading Indian manufacturer of rugged pneumatic cylinders, air dryers, and solenoid valves.',
    popular: true,
    accentColor: '#0047bb',
    logoUrl: './brands/janatics.png'
  },
  {
    name: 'Yuken',
    category: 'pneumatics',
    type: 'Hydraulics & Fluid Power',
    description: 'Japanese hydraulic pumps, directional control valves, pressure relief valves, and power packs.',
    popular: false,
    accentColor: '#0284c7',
    logoUrl: './brands/yuken.png'
  },

  // ---------------- Mechanical & Steel Brands (From Official Flyer) ----------------
  {
    name: 'Tata Steel',
    category: 'mechanical',
    type: 'SS & Alloy Structural Sections',
    description: 'World-class industrial steel, structural sections, and precision seamless pipes.',
    popular: true,
    accentColor: '#003366',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Tata_Steel_Logo.svg/320px-Tata_Steel_Logo.svg.png'
  },
  {
    name: 'Jindal Steel & Power',
    category: 'mechanical',
    type: 'High Grade Steel & Plates',
    description: 'High tensile steel plates, ERW and seamless pipes for heavy process engineering.',
    popular: true,
    accentColor: '#004080',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Jindal_Steel_and_Power_Logo.svg/320px-Jindal_Steel_and_Power_Logo.svg.png'
  },
  {
    name: 'JSW Steel',
    category: 'mechanical',
    type: 'Hot Rolled & Cold Rolled Coils',
    description: 'Leading producer of coated steel, sheets, wire rods, and alloy steels.',
    popular: true,
    accentColor: '#d32f2f',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/JSW_Group_logo.svg/320px-JSW_Group_logo.svg.png'
  },
  {
    name: 'SKF Bearings',
    category: 'mechanical',
    type: 'Precision Industrial Bearings',
    description: 'Global benchmark in deep groove ball bearings, spherical roller bearings & housing units.',
    popular: true,
    accentColor: '#005bac',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/SKF_logo.svg/320px-SKF_logo.svg.png'
  },
  {
    name: 'Fenner',
    category: 'mechanical',
    type: 'Power Transmission & Couplings',
    description: 'Industrial belts, taper-lock pulleys, couplings, and power transmission drives.',
    popular: true,
    accentColor: '#d97706'
  },
  {
    name: 'Elecon',
    category: 'mechanical',
    type: 'Industrial Gearboxes & Drives',
    description: 'Heavy helical, bevel-helical, and worm speed reduction gearboxes for continuous duty.',
    popular: true,
    accentColor: '#b45309'
  }
];
