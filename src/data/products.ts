import type { ProductItem } from '../types';

export const productsData: ProductItem[] = [
  // ================= 1. SS MATERIAL (Blue Category) =================
  {
    id: 'ss-pipes-tubes',
    name: 'SS Pipes & Tubes',
    category: 'ss-material',
    subCategory: 'Piping & Tubing',
    tagline: 'High-grade seamless & welded stainless steel pipes and instrumentation tubes',
    description: 'Precision engineered SS seamless and welded pipes in ASTM A312 / A269 standards. Available in SS 304, 304L, 316, 316L, 310, and 321 grades for high-pressure, chemical, and industrial fluid transmission.',
    specifications: [
      'Grades: SS 304, SS 316, SS 316L, SS 310, SS 321',
      'Sizes: 1/8" OD to 24" NB (Seamless & Welded/ERW)',
      'Schedules: SCH 5S, 10S, 40S, 80S, 160S, XXS',
      'Standards: ASTM A312 / A358 / A269 / DIN 17456',
      'Surface Finish: Mill finish, Matt finish, Mirror 240/320/400 grit'
    ],
    brands: ['Tata Steel', 'Jindal Steel & Power', 'Ratnamani Metals', 'Viraj Profiles'],
    popular: true,
    applications: ['Chemical Plants', 'Pharma Process Lines', 'Food & Dairy', 'Water Treatment', 'Heat Exchangers'],
    badge: 'Best Seller',
    imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ss-fittings',
    name: 'SS Fittings',
    category: 'ss-material',
    subCategory: 'Pipe Fittings & Connectors',
    tagline: 'Socket weld, screwed, and sanitary stainless steel fittings',
    description: 'Heavy-duty forged and fabricated stainless steel fittings including unions, nipples, couplings, bushings, plugs, and hose connectors rated for high pressures up to 3000/6000 PSI.',
    specifications: [
      'Types: Elbows, Tees, Unions, Couplings, Nipples, Bushings, Plugs',
      'Pressure Ratings: 3000 PSI, 6000 PSI, 9000 PSI, Class 150',
      'MOC: SS 304 / 304L / 316 / 316L / 316Ti',
      'End Connections: BSPT, NPT, Socket Weld, Triclamp',
      'Testing: 100% Hydrostatic and PMI tested'
    ],
    brands: ['Ratnamani Metals', 'Viraj Profiles', 'Midhani'],
    popular: true,
    applications: ['Hydraulic Lines', 'High Pressure Gas', 'Chemical Dosing', 'Steam Transfer'],
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ss-flanges',
    name: 'SS Flanges',
    category: 'ss-material',
    subCategory: 'Flanged Connections',
    tagline: 'Forged stainless steel pipe flanges in all standard pressure classes',
    description: 'Comprehensive inventory of ANSI B16.5 and DIN standard SS flanges. Includes Weld Neck, Slip-On, Blind, Socket Weld, Threaded, and Lap Joint flanges machined to precision tolerances.',
    specifications: [
      'Classes: 150#, 300#, 600#, 900#, 1500#, 2500#, PN10, PN16, PN40',
      'Types: Weld Neck (WNRF), Slip-On (SORF), Blind (BLRF), Threaded',
      'Sizes: 1/2" NB to 36" NB',
      'Standards: ANSI/ASME B16.5, DIN 2576 / 2633',
      'Facing: Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ)'
    ],
    brands: ['Viraj Profiles', 'Tata Steel', 'Jindal Steel & Power'],
    popular: false,
    applications: ['Process Plant Piping', 'Pipeline Valves', 'Boiler Headers', 'Vessel Manways'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ss-valves',
    name: 'SS Valves',
    category: 'ss-material',
    subCategory: 'Flow Control & Valves',
    tagline: 'Precision engineered SS Ball, Gate, Globe, Check & Butterfly valves',
    description: 'Full bore stainless steel process valves designed for leak-tight isolation and regulation of corrosive liquids, high-pressure steam, gases, and slurry lines in process plants.',
    specifications: [
      'Types: 1-Piece, 2-Piece, 3-Piece Ball Valves, Gate, Globe, NRV, Butterfly',
      'Pressure Class: Class 150 / 300 / 800 / 1000 WOG',
      'MOC: CF8 (SS 304), CF8M (SS 316), CF3M (SS 316L)',
      'Operation: Manual Hand Lever, Gearbox, Pneumatic Actuator, Motorized',
      'Seat Material: PTFE, R-PTFE, PEEK, Metal-to-Metal'
    ],
    brands: ['L&T Valves', 'Audco', 'SMC', 'Festo'],
    popular: true,
    applications: ['Pharma Reactors', 'Chemical Corrosive Lines', 'Steam Pipelines', 'HVAC & Utilities'],
    badge: 'High Demand',
    imageUrl: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ss-sheets-plates',
    name: 'SS Sheets & Plates',
    category: 'ss-material',
    subCategory: 'Raw Material & Sheeting',
    tagline: 'Hot-rolled & cold-rolled stainless steel sheets, coils and plates',
    description: 'Prime quality SS sheets, plates, and coils with ultra-flat surfaces and consistent metallurgical composition. Suitable for tank fabrication, equipment cladding, cleanroom paneling, and baffles.',
    specifications: [
      'Grades: SS 304, SS 304L, SS 316, SS 316L, SS 310, SS 410',
      'Thickness: 0.5 mm up to 50 mm',
      'Sheet Sizes: 1000x2000 mm, 1250x2500 mm, 1500x3000 mm, Custom cut',
      'Finish: 2B, HRAP, No. 4 Hairline, BA, Chequered',
      'Certification: 100% Original Mill Test Certificate (MTC) supplied'
    ],
    brands: ['Jindal Stainless Limited (JSL)', 'Tata Steel', 'SAIL'],
    popular: false,
    applications: ['Tank & Vessel Fabrication', 'Cleanroom Cladding', 'Machine Guards', 'Food Handling'],
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ss-fasteners',
    name: 'SS Fasteners',
    category: 'ss-material',
    subCategory: 'Industrial Hardware',
    tagline: 'SS 304 & SS 316 Hex bolts, nuts, studs, washers & anchor rods',
    description: 'Corrosion-resistant industrial fasteners precision threaded to metric and imperial standards. Provides high tensile strength and anti-galling performance for structural and pipeline connections.',
    specifications: [
      'Grades: A2-70 (SS 304), A4-70 (SS 316), A4-80 (SS 316 High Tensile)',
      'Items: Hex Head Bolts, Full Thread Studs, Heavy Hex Nuts, Spring/Flat Washers',
      'Thread Standards: Metric (M3 to M48), UNC, UNF, BSW',
      'Standards: DIN 933, DIN 934, ASTM A193 B8/B8M, ASTM A194 Gr 8/8M',
      'Finish: Passivated, Electropolished, Plain clean'
    ],
    brands: ['Viraj Profiles', 'Midhani', 'Sundram Fasteners'],
    popular: false,
    applications: ['Flange Bolting', 'Machinery Assembly', 'Marine Structures', 'Chemical Skid Assembly'],
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ss-pipe-fittings-butt-weld',
    name: 'SS Pipe Fittings (Butt-Weld)',
    category: 'ss-material',
    subCategory: 'Piping & Tubing',
    tagline: 'Seamless & welded butt-weld elbows, tees, reducers & caps',
    description: 'Engineered butt-welding fittings designed in accordance with ASME B16.9. Provides smooth interior flow without turbulence, ideal for high velocity and critical process piping.',
    specifications: [
      'Types: Long Radius 90° & 45° Elbows, Equal & Unequal Tees, Concentric & Eccentric Reducers',
      'Sizes: 1/2" NB to 24" NB',
      'Wall Thickness: SCH 5S, 10S, 40S, 80S, 160S',
      'Standards: ASME B16.9, MSS SP-43',
      'Material: WP304/304L, WP316/316L'
    ],
    brands: ['Ratnamani Metals', 'Viraj Profiles', 'Midhani'],
    popular: false,
    applications: ['High Temperature Steam', 'Pharmaceutical Loops', 'Refineries', 'Chemical Transmission'],
    imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ss-tanks-vessels',
    name: 'SS Tanks & Vessels',
    category: 'ss-material',
    subCategory: 'Process Equipment & Fabrication',
    tagline: 'Custom fabricated storage tanks, reactors and pressure vessels',
    description: 'Engineered stainless steel storage tanks, chemical holding tanks, pressure vessels, and reaction containers built to ASME Section VIII and API standards with sanitary internal mirror finish.',
    specifications: [
      'Capacity: 100 Litres to 50,000 Litres',
      'MOC: SS 304, SS 316, SS 316L (Internal finish Ra < 0.4 µm)',
      'Design Codes: ASME Sec VIII Div 1, API 650, cGMP',
      'Accessories: Dimple jacket, limpet coil, agitator nozzle, CIP spray balls, manholes',
      'Testing: Hydrostatic, dye-penetrant, radiography, ultrasonic certified'
    ],
    brands: ['BHEL', 'JSW Steel', 'Jindal Steel & Power'],
    popular: true,
    applications: ['Chemical Processing', 'Pharmaceutical Blending', 'Brewery & Distilleries', 'WFI Storage'],
    badge: 'Turnkey Solution',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ss-accessories',
    name: 'SS Accessories',
    category: 'ss-material',
    subCategory: 'Industrial Hardware',
    tagline: 'Stainless steel brackets, clamps, sight glasses & sight flow indicators',
    description: 'Comprehensive line of stainless steel auxiliary plant accessories including pipeline sight glasses, sample valves, spray balls, level indicator assemblies, and support brackets.',
    specifications: [
      'Items: Sight Glass Indicators, Spray Balls, Sampling Valves, Pipe Saddles & Shoes',
      'MOC: SS 304 & SS 316',
      'Glass Type: Toughened Borosilicate Glass (suitable for thermal shock)',
      'Pressure Rating: Up to 16 Bar',
      'Connection: Flanged, Threaded, Triclamp'
    ],
    brands: ['Viraj Profiles', 'Midhani'],
    popular: false,
    applications: ['Visual Flow Monitoring', 'Vessel Cleaning', 'Clean-In-Place (CIP)', 'Sampling Points'],
    imageUrl: 'https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?auto=format&fit=crop&w=600&q=80'
  },

  // ================= 2. PHARMA MATERIAL (Green Category) =================
  {
    id: 'pharma-pipes-tubes',
    name: 'Pharma Pipes & Tubes (Electro-Polished)',
    category: 'pharma-material',
    subCategory: 'Sanitary Piping',
    tagline: 'ASTM A270 sanitary electropolished tubes for WFI & ultra-pure media',
    description: 'Ultra-hygienic electropolished stainless steel tubing for Water For Injection (WFI), Purified Water (PW), and active pharmaceutical ingredient (API) fluid transfer with guaranteed Ra < 0.38 µm.',
    specifications: [
      'Standard: ASTM A270-S2, ASME BPE Table DT-4-1',
      'Material: SS 316L (Low Carbon for orbital welding)',
      'Internal Finish: Mechanical Polish (Ra < 0.5 µm), Electro-polish (Ra < 0.38 µm / 15 µin)',
      'Sizes: 1/2" to 4" OD',
      'Packaging: Cleanroom washed, capped & individual plastic sleeved'
    ],
    brands: ['Ratnamani Metals', 'Jindal Stainless Limited (JSL)', 'Viraj Profiles'],
    popular: true,
    applications: ['Water For Injection (WFI)', 'Purified Water Loops', 'Clean Steam Lines', 'Biotech Fermenters'],
    badge: 'cGMP Certified',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pharma-fittings',
    name: 'Pharma Fittings (Tri-Clamp / Sanitary)',
    category: 'pharma-material',
    subCategory: 'Sanitary Connectors',
    tagline: 'ASME BPE compliant sanitary clamp fittings, bends & reducers',
    description: 'High-purity sanitary tube fittings designed for orbital welding and quick tri-clamp connections in pharmaceutical and biotechnology sterile suites.',
    specifications: [
      'Types: TC Ferrule, 90° & 45° Sanitary Bends, Concentric/Eccentric Reducers, Equal Tees',
      'Standards: ASME BPE, SMS, DIN 11850, ISO 2852',
      'Material: Forged SS 316L (Sulphur controlled 0.005 - 0.017%)',
      'Surface Finish: SF1 (Ra < 0.5 µm), SF4 (Electro-polished Ra < 0.38 µm)',
      'Dimensions: 0.5" to 4.0" OD'
    ],
    brands: ['Alfa Laval', 'Saunders', 'Ratnamani Metals'],
    popular: true,
    applications: ['Bio-reactors', 'Sterile Filtration', 'Formulation Skids', 'CIP/SIP Distribution'],
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pharma-valves',
    name: 'Pharma Valves (Aseptic Diaphragm)',
    category: 'pharma-material',
    subCategory: 'Sanitary Flow Control',
    tagline: 'Zero-deadleg aseptic diaphragm valves and sterile sampling valves',
    description: 'Zero dead-leg aseptic diaphragm valves with PTFE / EPDM diaphragms designed to withstand continuous Clean-In-Place (CIP) and Steam-In-Place (SIP) sterilization cycles up to 150°C.',
    specifications: [
      'Types: 2-Way Diaphragm Valve, T-Pattern Zero Dead-leg Valves, Tank Bottom Valves',
      'Body MOC: Forged SS 316L (1.4435)',
      'Diaphragm: EPDM, PTFE/EPDM Two-Piece backed, Silicone',
      'Actuation: Manual stainless steel handwheel or Pneumatic SS actuator',
      'Certification: FDA 21 CFR 177, USP Class VI compliant'
    ],
    brands: ['Saunders', 'GEMÜ', 'SMC', 'Festo'],
    popular: true,
    applications: ['Aseptic Filling', 'Sampling Ports', 'Fermentation Harvesting', 'Pure Steam Isolation'],
    badge: 'FDA Compliant',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pharma-components',
    name: 'Pharma Components',
    category: 'pharma-material',
    subCategory: 'Process Automation',
    tagline: 'Precision sanitary components, nozzles, spray balls & dip tubes',
    description: 'Sanitary process components engineered to cGMP guidelines. Includes tank bottom flush valves, rotary spray balls, sanitary manhole covers, rupture disc holders, and vortex breakers.',
    specifications: [
      'Components: Rotary & Static CIP Spray Balls, Sampling Cocks, Diaphragm Pressure Gauges',
      'MOC: SS 316L with electropolish finish',
      'Drainability: Designed for self-draining orientation without pooling',
      'Wetted Surface: Ra < 0.4 µm mirror finish',
      'Compliance: cGMP and US FDA standards'
    ],
    brands: ['Alfa Laval', 'Midhani'],
    popular: false,
    applications: ['Tank Cleaning (CIP)', 'Vessel Monitoring', 'Fluid Dispensing', 'Sterile Rooms'],
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pharma-filters',
    name: 'Pharma Filters & Housings',
    category: 'pharma-material',
    subCategory: 'Sterile Filtration',
    tagline: 'Sanitary single & multi-cartridge stainless steel filter housings',
    description: 'Sanitary grade SS 316L filter housings for liquid and gas sterilization. Houses 0.2 micron membrane cartridges with electro-polished surfaces and sanitary tri-clamp drain ports.',
    specifications: [
      'Housing MOC: SS 316L (Electropolished internal Ra < 0.4 µm)',
      'Configuration: Single Cartridge (10", 20", 30") and Multi-round (3 to 12 rounds)',
      'Pressure Rating: Up to 10 Bar design pressure',
      'Vent & Drain: Sanitary 1.5" TC ports with sterile sample valve',
      'Certificates: Material test report, Hydro test report, Ra measurement report'
    ],
    brands: ['Pall', 'Millipore', 'Alfa Laval'],
    popular: false,
    applications: ['Sterile Air & Nitrogen Venting', 'Final Product Sterile Filtration', 'Bio-burden Reduction'],
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pharma-strainers',
    name: 'Pharma Strainers',
    category: 'pharma-material',
    subCategory: 'Sterile Filtration',
    tagline: 'Sanitary in-line and angle-type stainless steel wire mesh strainers',
    description: 'Sanitary SS 316L inline and angle strainers with easily removable perforated baskets and fine mesh liners. Protects pumps, homogenizers, and filling nozzles from particulate contamination.',
    specifications: [
      'Types: Inline Sanitary Strainer, 90° Angle Body Strainer',
      'Mesh Sizes: 20 Mesh to 200 Mesh (Perforated backing screen 1 mm to 3 mm)',
      'Connection: Sanitary Tri-Clamp (TC) 1" to 4"',
      'MOC: SS 316L body with Silicone / EPDM / FKM seals',
      'Cleaning: Quick disconnect clamp for rapid washdown'
    ],
    brands: ['Alfa Laval', 'Saunders'],
    popular: false,
    applications: ['Syrup Preparation', 'Liquid Dosage Forms', 'Pre-filter Protection', 'Pump Suction'],
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'gaskets-seals',
    name: 'Gaskets & Seals (Pharma Grade)',
    category: 'pharma-material',
    subCategory: 'Sanitary Sealing',
    tagline: 'FDA approved USP Class VI Tri-Clamp gaskets, O-rings & sanitary seals',
    description: 'High-purity elastomeric and PTFE gaskets manufactured to strict USP Class VI and FDA 21 CFR 177.2600 sanitary criteria. Resistant to SIP steam, aggressive sanitizers, and solvents.',
    specifications: [
      'Materials: Silicone (Platinum Cured), EPDM, FKM (Viton), PTFE (Teflon), Envelope Gaskets',
      'Sizes: 1/2" TC to 6" TC and custom O-rings',
      'Temperature Range: -60°C to +230°C',
      'Certifications: FDA 21 CFR 177.2600, USP Class VI <87>/<88>, ADI-Free',
      'Traceability: Batch numbered with certificate of compliance'
    ],
    brands: ['Garlock', 'Freudenberg', 'Saint-Gobain'],
    popular: true,
    applications: ['Tri-Clamp Connections', 'Reaction Vessel Lids', 'Manhole Seals', 'Valve Diaphragms'],
    badge: 'USP Class VI',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'clamps-accessories',
    name: 'Clamps & Accessories (Sanitary)',
    category: 'pharma-material',
    subCategory: 'Sanitary Hardware',
    tagline: 'Heavy-duty 2-segment, 3-segment & high-pressure bolted tri-clamps',
    description: 'Precision investment-cast stainless steel sanitary clamp bands, wing nuts, blind caps, and tubing hangers designed for rapid assembly and leak-free joint compression.',
    specifications: [
      'Types: Single Pin Clamp, Double Pin Heavy Duty Clamp, 3-Piece Clamp, High Pressure Bolted Clamp',
      'MOC: SS 304 / SS 316 investment cast with brass / SS wing nut',
      'Sizes: 0.5" to 12" TC sizes',
      'Pipe Hangers: Sanitary hygienic pipe supports with silicone / blue elastomer cushion',
      'Finish: Electropolished / Mirror polished'
    ],
    brands: ['Alfa Laval', 'Saunders'],
    popular: false,
    applications: ['Cleanroom Piping Support', 'Vessel Port Blanking', 'Quick-Disconnect Process Skids'],
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
  },

  // ================= 3. ELECTRICAL MATERIAL (Purple Category) =================
  {
    id: 'mccb',
    name: 'MCCB (Molded Case Circuit Breakers)',
    category: 'electrical-material',
    subCategory: 'Power Distribution & Protection',
    tagline: 'High-breaking capacity industrial MCCBs from 16A to 1250A',
    description: 'Heavy-duty Molded Case Circuit Breakers designed for low-voltage industrial distribution networks. Features thermal-magnetic and microprocessor-based electronic trip units with high fault-withstand ratings.',
    specifications: [
      'Current Rating: 16A up to 1250A (3-Pole & 4-Pole configurations)',
      'Breaking Capacity (Icu): 25kA, 36kA, 50kA, 70kA, 100kA at 415V AC',
      'Trip Units: Thermal-Magnetic (TMD) and Microprocessor / Electronic Trip Units',
      'Accessories: Shunt trip, under-voltage release, auxiliary contacts, rotary handles, motorized mechanism',
      'Standards: IEC 60947-2, IS/IEC 60947-2'
    ],
    brands: ['Schneider Electric', 'Siemens', 'ABB', 'L&T Electrical'],
    popular: true,
    applications: ['Main LT Switchboards', 'Motor Control Centers (MCC)', 'PCC Panels', 'Substation Feeder Panels'],
    badge: 'Tier-1 Brands',
    imageUrl: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mcb',
    name: 'MCB (Miniature Circuit Breakers)',
    category: 'electrical-material',
    subCategory: 'Switchgear & Control',
    tagline: '0.5A to 63A B, C & D curve DIN rail miniature circuit breakers',
    description: 'High-performance DIN rail mounted MCBs engineered for cable protection against short-circuits and overcurrents in factory sub-distribution and automation control panels.',
    specifications: [
      'Current Ratings: 0.5A, 1A, 2A, 4A, 6A, 10A, 16A, 20A, 25A, 32A, 40A, 63A',
      'Poles: 1P, 1P+N, 2P, 3P, 3P+N, 4P',
      'Tripping Characteristics: B Curve (lighting), C Curve (inductive loads), D Curve (high inrush motors/transformers)',
      'Breaking Capacity: 10kA and 15kA (IEC 60898-1 / IEC 60947-2)',
      'Mounting: Standard 35mm DIN rail with bi-connect terminals'
    ],
    brands: ['Schneider Electric', 'Siemens', 'ABB', 'Legrand', 'Havells'],
    popular: true,
    applications: ['Control Panels', 'Motor Feeder Circuits', 'PLC Power Supplies', 'Lighting Panels'],
    imageUrl: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'acb',
    name: 'ACB (Air Circuit Breakers)',
    category: 'electrical-material',
    subCategory: 'Power Distribution & Protection',
    tagline: 'High-current drawout & fixed ACBs up to 6300A with advanced protection',
    description: 'Heavy power Air Circuit Breakers designed for main incomers and high-capacity transformer outputs. Equipped with intelligent microprocessor release units for comprehensive power monitoring.',
    specifications: [
      'Current Ratings: 630A, 800A, 1000A, 1250A, 1600A, 2000A, 2500A, 3200A, 4000A, 6300A',
      'Configuration: 3-Pole & 4-Pole, Draw-out (EDO/MDO) and Fixed types',
      'Breaking Capacity: 50kA, 65kA, 85kA, 100kA at 415V AC for 1 sec (Icw)',
      'Protection Unit: LSIG (Overload, Short-circuit, Instantaneous, Ground fault) with RS485 Modbus communications',
      'Mechanism: Manual spring charged or Motorized with shunt/closing coils'
    ],
    brands: ['Schneider Electric', 'Siemens', 'ABB', 'L&T Electrical'],
    popular: true,
    applications: ['Transformer Incomers', 'Main Power Distribution (PCC)', 'Industrial Generators (DG)', 'UPS Paralleling'],
    badge: 'Heavy Industrial',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ac-switches',
    name: 'AC Switches & Disconnectors',
    category: 'electrical-material',
    subCategory: 'Switchgear & Control',
    tagline: 'Load break switches, changeover switches & cam-operated rotary switches',
    description: 'Industrial grade switch-disconnector units and motorized changeover switches engineered for safe electrical isolation under heavy load conditions up to 1000V.',
    specifications: [
      'Types: On-Load Changeover Switches, Switch Disconnector Fuse (SDF), Rotary Cam Switches',
      'Current Range: 25A to 3150A (3P & 4P)',
      'Utilization Category: AC-23A for highly inductive motor loads',
      'Enclosures: Open execution or IP65 Sheet Steel / Cast Aluminum enclosures',
      'Safety: Padlockable in OFF position, door interlock mechanism'
    ],
    brands: ['Schneider Electric', 'L&T Electrical', 'Socomec', 'Siemens'],
    popular: false,
    applications: ['Mains-DG Changeover', 'Local Motor Isolators', 'Solar Inverter Disconnect', 'Panel Master Switches'],
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mcb-rccb',
    name: 'MCB & RCCB (Residual Current Circuit Breakers)',
    category: 'electrical-material',
    subCategory: 'Life & Equipment Protection',
    tagline: 'Earth leakage circuit breakers (ELCB/RCCB) & RCBO composite units',
    description: 'High-sensitivity residual current devices designed to detect hazardous earth leakage currents, preventing electrical shocks, electrocution, and electrical fire hazards in industrial plants.',
    specifications: [
      'Sensitivity Ratings: 30 mA (Personnel safety), 100 mA, 300 mA (Fire prevention)',
      'Current Ratings: 16A, 25A, 40A, 63A, 80A, 100A (2-Pole & 4-Pole)',
      'Types: Type AC (standard AC faults), Type A (pulsating DC faults), Type B (frequency drive harmonics)',
      'Combined Units: RCBO (Integrated MCB + RCCB protection in single module)',
      'Standards: IEC/EN 61008-1, IS 12640-1'
    ],
    brands: ['Schneider Electric', 'Siemens', 'ABB', 'Legrand', 'Havells'],
    popular: false,
    applications: ['Industrial Socket Outlets', 'Wet Area Equipment', 'Control Panels', 'HVAC Equipment'],
    imageUrl: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'contactors',
    name: 'Contactors (Power & Auxiliary)',
    category: 'electrical-material',
    subCategory: 'Motor Control & Automation',
    tagline: '3-Pole & 4-Pole heavy-duty motor duty contactors up to 1000A',
    description: 'Rugged electrical contactors engineered for frequent motor starting, reversing, star-delta combinations, and capacitor switching with superior electrical endurance up to 1.5 million operations.',
    specifications: [
      'Power Range: 9A up to 1000A (AC-3 rating for motor loads up to 450 kW)',
      'Coil Voltages: 24V DC, 110V AC, 230V AC, 415V AC (50/60 Hz)',
      'Types: 3-Pole Power Contactors, 4-Pole Power Contactors, Capacitor Duty Contactors, Definite Purpose',
      'Auxiliary Contacts: Built-in 1NO+1NC, 2NO+2NC, expandable clip-on add-on blocks',
      'Accessories: Mechanical interlock kits, pneumatic timer blocks, surge suppressors'
    ],
    brands: ['Schneider Electric', 'Siemens', 'ABB', 'L&T Electrical'],
    popular: true,
    applications: ['Direct-On-Line (DOL) Starters', 'Star-Delta Starters', 'Capacitor Banks (APFC)', 'Crane Hoists'],
    badge: 'Industrial Grade',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'relays',
    name: 'Relays (Thermal Overload & Control)',
    category: 'electrical-material',
    subCategory: 'Motor Control & Protection',
    tagline: 'Thermal bimetallic overload relays, electronic relays & plug-in control relays',
    description: 'Comprehensive line of motor protection overload relays and industrial interface relays. Provides phase-failure protection, phase unbalance detection, and reliable PLC signal isolation.',
    specifications: [
      'Types: Bimetallic Thermal Overload Relays, Microprocessor Motor Protection Relays (MPR), 8-pin/11-pin Plug-in Control Relays',
      'Trip Classes: Class 10A, Class 20, Class 30 (for heavy inertia starts)',
      'Protection: Overload, Phase Loss, Single Phasing, Ground Fault, PTC Thermistor inputs',
      'Control Relay Contacts: 2 C/O, 4 C/O, rated 5A / 10A with LED status indicator',
      'Mounting: Direct contactor mounting or separate 35mm DIN rail adapter'
    ],
    brands: ['Schneider Electric', 'Siemens', 'ABB', 'Omron', 'L&T Electrical'],
    popular: false,
    applications: ['Motor Overload Protection', 'PLC Output Isolation', 'Interlock Logic', 'Alarm Annunciation'],
    imageUrl: 'https://images.unsplash.com/photo-1581092916357-5896ebc48073?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'control-components',
    name: 'Control Components',
    category: 'electrical-material',
    subCategory: 'Panel Accessories & HMI',
    tagline: 'Push buttons, selector switches, pilot lamps, timers & SMPS power supplies',
    description: 'Complete suite of 22.5mm industrial control devices, digital panel meters, multi-function timers, temperature controllers, and DIN-rail regulated DC power supplies.',
    specifications: [
      'Push Buttons & Lamps: 22.5mm Metallic & Plastic Push Buttons, Emergency Stop (Mushroom turn-to-reset), Multi-color LED Indicators',
      'Timers & Counters: Multi-function On-Delay/Off-Delay Timers, Star-Delta Timers, Digital Preset Counters',
      'DC Power Supplies (SMPS): 24V DC / 12V DC (2.5A, 5A, 10A, 20A, 40A) with short-circuit protection',
      'Panel Meters: Digital Voltmeter, Ammeter, Multifunction Energy Meters (MFM) with RS485 Modbus',
      'Enclosure Protection: IP65 / IP67 front face'
    ],
    brands: ['Schneider Electric', 'Siemens', 'Omron', 'Phoenix Contact', 'Delta'],
    popular: false,
    applications: ['Control Desks', 'Operator Consoles', 'Packaging Machines', 'Automation Panels'],
    imageUrl: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cable-glands-lugs',
    name: 'Cable Glands & Lugs',
    category: 'electrical-material',
    subCategory: 'Wiring Hardware & Terminations',
    tagline: 'Brass double compression / single compression glands & heavy-duty tinned copper lugs',
    description: 'Heavy-duty cable termination accessories engineered for armoured and unarmoured cables. Guarantees IP66 environmental ingress protection and low electrical contact resistance.',
    specifications: [
      'Cable Glands: Single Compression (SC) & Double Compression (DC) Weatherproof / Flameproof (Ex d)',
      'Gland MOC: Nickel Plated Brass, Stainless Steel SS 316, Polyamide Nylon',
      'Cable Lugs: Heavy-Duty Electrolytic Tinned Copper & Aluminium crimping lugs (1.5 sq.mm to 1000 sq.mm)',
      'Lug Types: Ring type, Pin type, Fork type, In-line butt connectors',
      'Standards: BS 6121, IS 12943, DIN 46235'
    ],
    brands: ['Dowells', 'Comet', 'Braco', 'Phoenix Contact'],
    popular: false,
    applications: ['Panel Cable Entry', 'Junction Boxes', 'Motor Terminal Boxes', 'Hazardous Area Termination'],
    imageUrl: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cable-wires',
    name: 'Cable & Wires',
    category: 'electrical-material',
    subCategory: 'Conductors & Power Cabling',
    tagline: 'LT power, control, instrumentation & flexible copper cables',
    description: 'Industrial high-conductivity copper and aluminium armoured/unarmoured cables with XLPE/PVC insulation. Available in fire-retardant low-smoke (FRLS) and zero-halogen (LSZH) variants.',
    specifications: [
      'Types: LT XLPE Armoured Power Cables (1.1 kV), Multicore Flexible Control Cables, Shielded Instrumentation Cables',
      'Conductor MOC: Electrolytic Grade Plain Annealed Copper / High Purity Aluminium',
      'Cores & Sizes: 1-Core up to 61-Core (0.5 sq.mm up to 630 sq.mm)',
      'Sheath & Insulation: FRLS PVC, Zero Halogen (LSZH), Heat Resistant HR-PVC',
      'Standards: IS 7098 (Part 1), IS 1554 (Part 1), BS 5308'
    ],
    brands: ['Polycab', 'Finolex', 'Havells', 'RR Kabel'],
    popular: true,
    applications: ['Factory Power Distribution', 'Motor Feeder Runs', 'Analog Signal Transducers', 'Machine Internal Wiring'],
    badge: 'IS Certified',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
  },

  // ================= 4. MECHANICAL MATERIAL (Orange Category) =================
  {
    id: 'gear-boxes',
    name: 'Industrial Gear Boxes',
    category: 'mechanical-material',
    subCategory: 'Power Transmission',
    tagline: 'High torque, heavy-duty speed reduction gearboxes',
    description: 'Robust industrial speed reducers including Helical, Bevel-Helical, Planetary, and Worm gearboxes engineered for high torque transmission, low noise, and minimal maintenance.',
    specifications: [
      'Types: Helical, Worm, Bevel-Helical, Planetary Gearboxes',
      'Power Range: 0.25 kW to 350+ kW',
      'Reduction Ratios: 5:1 up to 1000:1',
      'Housing: Heavy-duty graded Cast Iron (CI) / Fabricated Steel',
      'Mounting: Foot, Flange, Shaft mount with torque arm'
    ],
    brands: ['Elecon', 'Premium Transmission', 'BHEL', 'Kalyani'],
    popular: true,
    applications: ['Belt Conveyors', 'Cement Mills', 'Agitators & Mixers', 'Cranes & Hoists', 'Cooling Towers'],
    badge: 'Heavy Torque',
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'gears',
    name: 'Gears & Pinions',
    category: 'mechanical-material',
    subCategory: 'Power Transmission',
    tagline: 'Precision machined spur, helical, bevel gears, racks & pinions',
    description: 'Custom manufactured and standard gear wheels, pinion shafts, internal gear rings, and rack & pinion sets carburized and case-hardened up to 62 HRC for extreme mechanical endurance.',
    specifications: [
      'Types: Spur Gears, Helical Gears, Spiral Bevel Gears, Worm & Worm Wheel Sets, Internal Rings',
      'Material: EN8, EN19, EN24, 20MnCr5, Case-Hardened Alloy Steels',
      'Tooth Profiles: DIN Class 6-8 precision profile grinding',
      'Hardness: 58-62 HRC (Case Carburized & Quenched)',
      'Module Range: 1.0 Module to 24 Module, up to 2500 mm diameter'
    ],
    brands: ['Kalyani', 'Tata Steel', 'Midhani'],
    popular: false,
    applications: ['Heavy Machinery', 'Rolling Mills', 'Sugar Mills', 'Crusher Drives', 'Machine Tools'],
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'couplings',
    name: 'Couplings (Flexible & Rigid)',
    category: 'mechanical-material',
    subCategory: 'Power Transmission',
    tagline: 'Tyre, Pin-Bush, Gear, Jaw, Grid & Fluid couplings',
    description: 'High-performance mechanical couplings engineered to absorb angular, parallel, and axial shaft misalignments while damping torsional shock and vibration between motors and driven machines.',
    specifications: [
      'Types: Flexible Pin Bush, Gear Couplings, Tyre Couplings, Jaw/Lovejoy, Grid Couplings, Fluid Couplings',
      'Torque Capacity: Up to 500,000 Nm',
      'Bore Sizes: 10 mm to 450 mm with precision keyways',
      'MOC: Graded Cast Iron (CI), Forged Carbon Steel, Aluminum, Polyurethane spider inserts',
      'Standards: AGMA, DIN, ISO balancing standards'
    ],
    brands: ['Fenner', 'Elecon', 'Lovejoy', 'Flender'],
    popular: true,
    applications: ['Motor-Pump Sets', 'Compressor Drives', 'Turbine Drives', 'Rolling Mill Lines'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bearings',
    name: 'Bearings (Industrial)',
    category: 'mechanical-material',
    subCategory: 'Rotary Motion',
    tagline: 'Deep groove ball, spherical roller, tapered roller & pillow block bearings',
    description: 'High-precision industrial bearings engineered to carry heavy radial and thrust loads under extreme speeds and high operating temperatures in continuous production environments.',
    specifications: [
      'Types: Deep Groove Ball Bearings, Spherical Roller, Cylindrical Roller, Taper Roller, Thrust Bearings, Pillow Block Units (Plummer Blocks)',
      'Precision Classes: ISO Normal, P6, P5',
      'Cages: Machined Brass, Pressed Steel, Polyamide',
      'Clearances: C2, Normal, C3, C4 (suitable for thermal expansion)',
      'Seals: 2RS (Rubber contact seals), 2Z (Metal shields), Open'
    ],
    brands: ['SKF', 'FAG / Schaeffler', 'Timken', 'NSK'],
    popular: true,
    applications: ['Electric Motors', 'Conveyor Idlers', 'Centrifugal Pumps', 'Gearbox Shafts', 'Fans & Blowers'],
    badge: '100% Genuine',
    imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'power-transmission',
    name: 'Power Transmission (Chains & Belts)',
    category: 'mechanical-material',
    subCategory: 'Power Transmission',
    tagline: 'Roller chains, sprockets, V-belts, timing belts & pulleys',
    description: 'Heavy-duty simplex, duplex, and triplex industrial roller chains, taper-lock sprockets, Classical V-Belts, Wedge Belts, and synchronous timing belts for non-slip power transmission.',
    specifications: [
      'Chains: British (BS) & American (ANSI) Standard Roller Chains (06B to 32B, ANSI 35 to 200)',
      'Belt Types: Classical V-Belts (A, B, C, D), Wedge Belts (SPA, SPB, SPC), Timing Belts (8M, 14M, HTD)',
      'Pulleys: Cast Iron Taper-Lock V-Pulleys and Timing Pulleys statically balanced',
      'Sprockets: Simplex, Duplex, Triplex with induction hardened teeth',
      'Chain Attachment: Extended pins, bent lugs, hollow pin chains'
    ],
    brands: ['Fenner', 'Diamond Chains', 'Gates', 'Continental'],
    popular: false,
    applications: ['Packaging Machines', 'Assembly Conveyors', 'Agricultural Machinery', 'Mining Plants'],
    imageUrl: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'shafts-key',
    name: 'Shafts & Key Steel',
    category: 'mechanical-material',
    subCategory: 'Power Transmission',
    tagline: 'Precision ground shafting, drive shafts & metric bright key steel',
    description: 'Precision drawn and induction hardened drive shafts, linear guide rods, and square/rectangular bright key steel bars manufactured to ISO h6 and h7 tolerance standards.',
    specifications: [
      'Key Steel: Square (3x3 mm to 50x50 mm) and Rectangular (up to 100x50 mm) bright drawn C45 / EN8',
      'Shafts: Precision Ground Carbon Steel (EN8, EN9, EN19, EN24) and Stainless Steel (SS 304, SS 316, 410)',
      'Tolerances: ISO h6, h7, h8 precision ground straightness < 0.1 mm/meter',
      'Surface Hardness: Induction hardened 55-60 HRC (for linear shafting)',
      'Finishing: Chrome plated, Black oxide, or Bright polished'
    ],
    brands: ['Tata Steel', 'Kalyani', 'Midhani'],
    popular: false,
    applications: ['Motor Couplings', 'Gearbox Output Shafts', 'Linear Motion Bushings', 'Pump Impeller Shafts'],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pipes-pipe-fittings-mech',
    name: 'Pipes & Pipe Fittings (CS / MS / GI)',
    category: 'mechanical-material',
    subCategory: 'Piping & Tubing',
    tagline: 'Carbon steel seamless pipes, MS ERW pipes & GI heavy fittings',
    description: 'Heavy-duty industrial carbon steel seamless pipes (ASTM A106 Gr B), MS pipes, and galvanized iron (GI) fittings engineered for steam lines, chilled water, compressed air, and structural fabrication.',
    specifications: [
      'Standards: ASTM A106 Gr B, ASTM A53, IS 1239 (Part 1 & 2), IS 3589',
      'Sizes: 1/2" NB to 36" NB (Class A, B, C & Schedules 40/80/160)',
      'Fittings: Malleable Iron GI Fittings, Forged CS A105 Fittings (Elbows, Tees, Unions, Couplings)',
      'End Types: Screwed BSPT/NPT, Beveled for butt-welding, Grooved/Victaulic',
      'Testing: Hydrostatic tested, Eddy Current tested'
    ],
    brands: ['Tata Steel', 'Jindal Steel & Power', 'SAIL', 'MS Forgings'],
    popular: true,
    applications: ['High Pressure Steam Lines', 'Boiler Feed Water', 'Fire Fighting Ring Mains', 'Cooling Water Circuits'],
    badge: 'Heavy Utility',
    imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'flanges-mech',
    name: 'Flanges (Carbon Steel & Forged)',
    category: 'mechanical-material',
    subCategory: 'Flanged Connections',
    tagline: 'Forged carbon steel ASTM A105 flanges for utility & process piping',
    description: 'High-pressure forged carbon steel pipe flanges manufactured to ASME B16.5 and BS 10 Table D/E/F. Machined with serrated gasket facing for positive leak-proof containment.',
    specifications: [
      'Material: ASTM A105 Forged Carbon Steel, IS 2062 Gr B Mild Steel',
      'Classes: 150#, 300#, 600#, 900#, Table D, Table E, PN16, PN25',
      'Types: Weld Neck (WNRF), Slip-On (SORF), Blind (BLRF), Threaded Companion',
      'Sizes: 15 mm NB to 1200 mm NB',
      'Coating: Rust preventive black lacquer, yellow zinc, or hot-dip galvanized'
    ],
    brands: ['Viraj Profiles', 'Tata Steel', 'SAIL'],
    popular: false,
    applications: ['Steam Isolation', 'Cooling Tower Piping', 'Compressed Air Mains', 'Storage Tank Nozzles'],
    imageUrl: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'industrial-hardware',
    name: 'Industrial Hardware & Fasteners',
    category: 'mechanical-material',
    subCategory: 'Industrial Hardware',
    tagline: 'High tensile grade 8.8 & 10.9 bolts, nuts, circlips, dowel pins & shims',
    description: 'Heavy-duty workshop and maintenance hardware including high-tensile fasteners, eye bolts, lifting shackles, external/internal circlips, parallel dowel pins, and precision alignment shims.',
    specifications: [
      'Fastener Grades: High Tensile Grade 8.8, 10.9, 12.9 Allen Cap Screws (DIN 912) and Hex Bolts',
      'Circlips & Pins: Internal/External Circlips (DIN 471/472), Hardened Dowel Pins (DIN 6325)',
      'Lifting Gear: Forged Eye Bolts (DIN 580), Dee Shackles, Bow Shackles (IS 6132)',
      'Alignment Shims: Stainless steel pre-cut slotted motor shims (0.05 mm to 2.0 mm)',
      'Finish: Black oxide, Zinc phosphated, Cadmium plated'
    ],
    brands: ['Unbrako', 'TVS Fasteners', 'Sundram Fasteners'],
    popular: false,
    applications: ['Equipment Leveling', 'Motor Alignment', 'Tool Room Jigs', 'Heavy Rigging & Maintenance'],
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80'
  },

  // ================= 5. OTHER INDUSTRIAL ITEMS (Pink/Crimson Category) =================
  {
    id: 'pumps',
    name: 'Industrial Pumps',
    category: 'other-industrial',
    subCategory: 'Fluid Handling & Pumping',
    tagline: 'Centrifugal, chemical process, multi-stage, positive displacement & vacuum pumps',
    description: 'Heavy-duty industrial pumps engineered to move clean water, corrosive chemicals, aggressive solvents, viscous oils, slurries, and sanitary food-grade liquids with high hydraulic efficiency.',
    specifications: [
      'Types: End-Suction Centrifugal, Chemical Process Pumps (ISO 2858 / ANSI), Multi-Stage High Pressure Boiler Feed Pumps, Progressive Cavity Screw Pumps, Sanitary Lobe Pumps',
      'MOC: SS 316, SS 304, Cast Iron (CI), Hastelloy, Polypropylene (PP), PVDF',
      'Flow Rate: 1 m³/hr to 1500+ m³/hr | Head: Up to 350 meters',
      'Sealing: Single / Double Cartridge Mechanical Seals, Gland Packing',
      'Drive: Direct coupled to IE3 / IE4 energy efficient electric motors'
    ],
    brands: ['Kirloskar Brothers', 'KSB Pumps', 'Grundfos', 'Crompton Greaves'],
    popular: true,
    applications: ['Boiler Feed Water', 'Chemical Circulation', 'Cooling Water Circulation', 'ETP/STP Plants', 'Pharma Transfer'],
    badge: 'Core Machinery',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'motors',
    name: 'Electric Motors (IE2 / IE3 / IE4)',
    category: 'other-industrial',
    subCategory: 'Electrical Drives',
    tagline: '3-Phase squirrel cage induction motors, flameproof & inverter duty motors',
    description: 'High-efficiency industrial induction motors built for continuous S1 duty in dusty, humid, and chemical manufacturing environments. Fully compatible with Variable Frequency Drives (VFD).',
    specifications: [
      'Efficiency Classes: IE2 (High Efficiency), IE3 (Premium Efficiency), IE4 (Super Premium)',
      'Power Range: 0.18 kW (0.25 HP) up to 355 kW (475 HP)',
      'Speeds (Poles): 2-Pole (3000 RPM), 4-Pole (1500 RPM), 6-Pole (1000 RPM), 8-Pole (750 RPM)',
      'Enclosures: Totally Enclosed Fan Cooled (TEFC) IP55 / IP65, Flameproof Ex d (Gas Group IIA, IIB, IIC)',
      'Insulation: Class F insulation with Class B temperature rise, vacuum pressure impregnated (VPI)'
    ],
    brands: ['ABB', 'Siemens', 'Bharat Bijlee (BBL)', 'Crompton Greaves', 'Havells'],
    popular: true,
    applications: ['Pump Drives', 'Fans & Blowers', 'Conveyor Lines', 'Crushers & Mills', 'Compressor Drives'],
    badge: 'Energy Efficient',
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'instrumentation',
    name: 'Instrumentation & Process Sensors',
    category: 'other-industrial',
    subCategory: 'Process Measurement',
    tagline: 'Pressure gauges, RTD temperature transmitters, level sensors & flow meters',
    description: 'Precision industrial measurement instruments for real-time monitoring of pressure, temperature, level, and flow. Available with 4-20mA analog outputs and digital HART/Modbus protocol.',
    specifications: [
      'Pressure: Bourdon Tube Pressure Gauges (Glycerin filled, SS 316 wetted), Differential Pressure (DP), Pressure Transmitters',
      'Temperature: PT100 RTD Sensors, Mineral Insulated Duplex Thermocouples (Type K/J/R/S), Head Mounted Transmitters',
      'Level: Radar Level Transmitters, Ultrasonic Transmitters, Magnetic Float Level Switches',
      'Flow: Electromagnetic Flow Meters, Vortex Meters, Rotameters',
      'Accuracy: ±0.1% to ±0.5% of span with calibration certificates'
    ],
    brands: ['WIKA', 'Endress+Hauser', 'Siemens', 'Omron'],
    popular: false,
    applications: ['Boiler Monitoring', 'Reactor Temperature Control', 'Tank Level Measurement', 'Water Custody Transfer'],
    imageUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'welding-consumables',
    name: 'Welding Consumables & Electrodes',
    category: 'other-industrial',
    subCategory: 'Fabrication & Maintenance',
    tagline: 'SS, MS & hardfacing welding electrodes, TIG filler wire & MIG wire spools',
    description: 'Approved industrial welding consumables for precision fabrication and emergency equipment repair. Guarantees crack-resistant weld joints with smooth bead appearance and low spatter.',
    specifications: [
      'SMAW Electrodes: E6013, E7018, E7018-1 (Low Hydrogen MS), E308L-16, E316L-16, E310-16 (SS Welding)',
      'TIG Filler Rods: ER308L, ER316L, ER70S-6 (Sizes: 1.6 mm, 2.0 mm, 2.4 mm, 3.2 mm x 1000 mm)',
      'MIG Spools: ER70S-6 (Copper Coated 0.8 mm, 1.2 mm on 15 kg spools), ER316L',
      'Specialty: Hardfacing electrodes for crusher hammers, cutting knives & valve seat cladding',
      'Certifications: IBR, Lloyd’s, DNV, RDSO approved'
    ],
    brands: ['ESAB', 'Ador Welding', 'D&H Secheron', 'L&T Welding'],
    popular: false,
    applications: ['Pipe Welding', 'Pressure Vessel Fabrication', 'Maintenance Hardfacing', 'Structural Erection'],
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'safety-items',
    name: 'Safety Items & Industrial PPE',
    category: 'other-industrial',
    subCategory: 'Plant Safety',
    tagline: 'Safety helmets, steel-toe boots, chemical suits, eye protection & harnesses',
    description: 'Comprehensive personal protective equipment (PPE) and plant safety gear certified to EN and BIS standards. Keeps industrial personnel safe in hazardous chemical and high-voltage areas.',
    specifications: [
      'Head & Face: IS 2925 Industrial Safety Helmets (Ratchet type), Polycarbonate Face Shields, UV-resistant Safety Goggles',
      'Footwear: ISI Marked Steel Toe Safety Shoes (Oil & Chemical resistant, electrical shock resistant up to 15kV)',
      'Hand Protection: Chemical resistant Nitrile gloves, Cut-level 5 Kevlar gloves, Electrical insulating rubber gloves (Class 0 to Class 4)',
      'Respiratory & Fall: FFP2/FFP3 Dust Masks, Half-face Chemical Cartridge Respirators, Full Body Safety Harness (EN 361)',
      'Plant Safety: Eye Wash Stations, Lockout-Tagout (LOTO) kits, Fire Blankets'
    ],
    brands: ['Karam', '3M', 'Honeywell', 'Udyogi'],
    popular: false,
    applications: ['Factory Operations', 'Chemical Handling', 'High Altitude Maintenance', 'Electrical Substation Work'],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'industrial-tools',
    name: 'Industrial Tools & Equipment',
    category: 'other-industrial',
    subCategory: 'Workshop & Maintenance Tools',
    tagline: 'Heavy-duty power tools, pneumatic torque wrenches & precision hand tools',
    description: 'Professional industrial power tools and mechanics hand tool sets for factory floor maintenance. Engineered to withstand rigorous daily use in heavy fabrication workshops.',
    specifications: [
      'Power Tools: Heavy Angle Grinders (4", 5", 7", 9"), Rotary Hammer Drills, Magnetic Base Core Drills, Die Grinders',
      'Pneumatic Tools: Air Impact Wrenches (1/2", 3/4", 1" drive up to 2500 Nm), Air Riveters, Needle Scalers',
      'Hand Tools: Chrome Vanadium Spanner Sets (Ring & D-Spanners 6 mm to 50 mm), Heavy Socket Sets, Torque Wrenches (10 Nm to 1000 Nm)',
      'Cutting & Clamping: Heavy-duty bench vices, C-clamps, pipe cutters, hydraulic crimping tools',
      'Standards: DIN, ANSI, ISO specification compliant'
    ],
    brands: ['Bosch', 'DeWalt', 'Stanley', 'Taparia'],
    popular: true,
    applications: ['Plant Maintenance', 'Equipment Overhaul', 'Piping Assembly', 'Machinery Rigging'],
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'packing-machine-spare-parts',
    name: 'Packing Machine Spare Parts',
    category: 'other-industrial',
    subCategory: 'Packaging Machinery Spares',
    tagline: 'Sealing jaws, heating elements, vacuum cups, knives & conveyor rollers',
    description: 'Critical replacement spare parts for primary and secondary packaging machinery, blister pack machines, pouch packaging FFS machines, cartoners, and bottle filling lines.',
    specifications: [
      'Sealing & Heating: Cartridge Heaters, Band Heaters, Teflon Coated Sealing Jaws & Formers, Temperature Sensors',
      'Cutting: Serrated Packaging Knives, Guillotine Blades, Perforation Blades (Hardened Tool Steel / Carbide)',
      'Pneumatics: High-speed mini cylinders, vacuum suction cups (silicone/nitrile), vacuum ejectors, push-in PU fittings',
      'Timing & Drives: Timing belts with custom rubber / Linatex coating, miniature bearings, guide rollers',
      'Custom Fabrication: Drawing-based CNC machined replacement spares for imported packaging equipment'
    ],
    brands: ['SMC', 'Festo', 'Rexroth', 'Janatics'],
    popular: false,
    applications: ['Pharmaceutical Blister Packing', 'Food Pouch Filling', 'Bottle Labelling Lines', 'Corrugated Box Tapers'],
    badge: 'Zero Downtime',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'maintenance-items',
    name: 'Maintenance Items & Consumables',
    category: 'other-industrial',
    subCategory: 'Factory Consumables',
    tagline: 'Industrial lubricants, threadlockers, anti-seize paste, gaskets & cleaners',
    description: 'Essential factory maintenance supplies, high-temperature greases, anaerobic thread-locking adhesives, penetrating oils, degreasers, and emergency pipe repair leak-stopping tapes.',
    specifications: [
      'Adhesives & Sealants: Threadlockers (Low, Medium, High strength), Retaining Compounds, RTV Silicone Gasket Makers',
      'Lubrication: EP2/EP3 Lithium Complex Grease, Food Grade NSF H1 Greases, Synthetic Gear Oils (ISO VG 220/320/460)',
      'Aerosols & Sprays: Rust Penetrating Oil (WD/Mos2), Electrical Contact Cleaners, Heavy Duty Degreasers, Zinc Cold Galvanizing Sprays',
      'Jointing & Packing: Expanded PTFE Gasket Tape, Non-Asbestos Jointing Sheets (CAF replacement), Gland Packing Ropes',
      'Emergency Repair: Epoxy Putty Sticks, Pipe Repair Bandages, Leak Repair Clamps'
    ],
    brands: ['Loctite / Henkel', 'Pidilite', 'Mobil', 'Shell', 'Castrol'],
    popular: true,
    applications: ['Preventive Maintenance', 'Gearbox Oil Top-up', 'Flange Gasketing', 'Motor Bearing Lubrication'],
    badge: 'Daily Essential',
    imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80'
  }
];

export const productCategoriesList = [
  { id: 'all', label: 'All Products', count: 44, color: 'blue' },
  { id: 'ss-material', label: 'SS Material', count: 9, color: 'sky', flyerHeader: 'SS MATERIAL' },
  { id: 'pharma-material', label: 'Pharma Material', count: 8, color: 'emerald', flyerHeader: 'PHARMA MATERIAL' },
  { id: 'electrical-material', label: 'Electrical Material', count: 10, color: 'purple', flyerHeader: 'ELECTRICAL MATERIAL' },
  { id: 'mechanical-material', label: 'Mechanical Material', count: 9, color: 'amber', flyerHeader: 'MECHANICAL MATERIAL' },
  { id: 'other-industrial', label: 'Other Industrial Items', count: 8, color: 'rose', flyerHeader: 'OTHER INDUSTRIAL ITEMS' },
];

