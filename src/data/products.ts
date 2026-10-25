import type { ProductItem } from '../types';

export const productsData: ProductItem[] = [
  // ================= MECHANICAL ITEMS =================
  {
    id: 'ss-pipes',
    name: 'SS Pipes (Stainless Steel)',
    category: 'mechanical',
    subCategory: 'Piping & Tubing',
    tagline: 'High-grade seamless & ERW stainless steel pipes',
    description: 'Precision engineered stainless steel pipes in ASTM A312, grades SS 304, 304L, 316, 316L. Suitable for high pressure, high temperature, and corrosive chemical environments.',
    specifications: [
      'Grades: SS 304, SS 316, SS 316L, SS 310',
      'Sizes: 1/4" NB to 24" NB',
      'Schedules: SCH 5S, 10S, 40S, 80S, 160S, XXS',
      'Standards: ASTM A312 / A358 / DIN / JIS',
      'Finish: Mill, Matt, Polished 240/320/400 grit'
    ],
    brands: ['Jindal Steel & Power', 'Ratnamani Metals', 'Tata Steel', 'Viraj Profiles'],
    popular: true,
    applications: ['Chemical processing', 'Oil & Gas', 'Pharma plants', 'Water treatment', 'Food & Dairy'],
    badge: 'Best Seller',
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ss-tanks-vessels',
    name: 'SS Tanks & Industrial Vessels',
    category: 'mechanical',
    subCategory: 'Fabrication & Storage',
    tagline: 'Heavy-duty storage tanks and process vessels',
    description: 'Custom fabricated storage tanks, reactor vessels, mixing tanks, and pressure containers designed according to ASME standards with leak-proof sanitary welding.',
    specifications: [
      'Capacities: 100 Litres to 50,000+ Litres',
      'MOC: SS 304 / SS 316 / SS 316L / Carbon Steel',
      'Design Code: ASME Sec VIII Div 1, API 650',
      'Orientation: Vertical & Horizontal configurations',
      'Accessories: Manholes, sight glasses, level gauges, heating jackets'
    ],
    brands: ['BHEL', 'JSW Steel', 'Jindal Steel & Power'],
    popular: true,
    applications: ['Chemical storage', 'Pharma reactors', 'Brewery & beverages', 'Effluent treatment'],
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pipe-fittings-ss',
    name: 'SS Pipe Fittings',
    category: 'mechanical',
    subCategory: 'Piping & Tubing',
    tagline: 'Forged & butt-weld stainless steel fittings',
    description: 'Comprehensive inventory of 90° & 45° Elbows, Equal & Reducing Tees, Concentric & Eccentric Reducers, End Caps, Stub Ends, and Unions.',
    specifications: [
      'Types: Butt-weld, Socket Weld, Screwed (BSP/NPT)',
      'Pressure Ratings: 3000 PSI, 6000 PSI, 9000 PSI',
      'Grades: SS 304/304L, SS 316/316L',
      'Sizes: 1/2" NB to 16" NB',
      'Testing: Hydrostatic, Radiography, Ultrasonic certified'
    ],
    brands: ['Ratnamani Metals', 'Viraj Profiles', 'Midhani'],
    popular: false,
    applications: ['High pressure fluid lines', 'Steam piping', 'Hydraulic circuits'],
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'gear-boxes',
    name: 'Industrial Gear Boxes',
    category: 'mechanical',
    subCategory: 'Power Transmission',
    tagline: 'High torque, heavy-duty speed reduction gearboxes',
    description: 'Robust industrial speed reducers including Helical, Bevel-Helical, Planetary, and Worm gearboxes engineered for high torque transmission, low noise, and minimal maintenance.',
    specifications: [
      'Types: Helical, Worm, Bevel-Helical, Planetary',
      'Power Range: 0.25 kW to 350+ kW',
      'Reduction Ratios: 5:1 up to 1000:1',
      'Housing: Heavy-duty graded Cast Iron (CI) / Fabricated Steel',
      'Mounting: Foot, Flange, Shaft mount with torque arm'
    ],
    brands: ['BHEL', 'Kalyani', 'JSW Steel'],
    popular: true,
    applications: ['Conveyors', 'Cement mills', 'Sugar processing', 'Agitators', 'Cranes & hoists'],
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'gears-components',
    name: 'Gears & Gear Components',
    category: 'mechanical',
    subCategory: 'Power Transmission',
    tagline: 'Precision machined spur, helical, bevel gears & pinions',
    description: 'Custom manufactured and standard gear wheels, pinion shafts, internal rings, and rack & pinion assemblies carburized and hardened for extreme endurance.',
    specifications: [
      'Types: Spur Gears, Helical Gears, Spiral Bevel Gears, Worm Gears',
      'Material: EN8, EN19, EN24, 20MnCr5, Case Hardened Alloys',
      'Tooth Profiles: DIN Class 6-8 precision grinding',
      'Hardness: 58-62 HRC (Case Carburized)'
    ],
    brands: ['Kalyani', 'Tata Steel', 'Midhani'],
    popular: false,
    applications: ['Heavy machinery', 'Machine tools', 'Rolling mills', 'Automotive drives'],
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ss-flanges',
    name: 'SS Flanges (All Classes)',
    category: 'mechanical',
    subCategory: 'Flanges & Valves',
    tagline: 'Forged stainless steel & alloy steel flanges',
    description: 'ANSI/ASME B16.5 and DIN standard flanges: Weld Neck (WNRF), Slip-On (SORF), Blind (BLRF), Socket Weld, Lap Joint, and Threaded configurations.',
    specifications: [
      'Classes: 150#, 300#, 600#, 900#, 1500#, 2500#',
      'Sizes: 1/2" to 36" NB',
      'MOC: ASTM A182 F304/F304L, F316/F316L, Carbon Steel A105',
      'Facing: Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ)'
    ],
    brands: ['Viraj Profiles', 'Ratnamani Metals', 'Welspun', 'Jindal Steel & Power'],
    popular: true,
    applications: ['Petrochemicals', 'Pipeline headers', 'Boiler piping', 'Gas lines'],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ss-valves',
    name: 'SS High Precision Valves',
    category: 'mechanical',
    subCategory: 'Flanges & Valves',
    tagline: 'Corrosion resistant stainless steel ball, needle & check valves',
    description: 'High-integrity 1-piece, 2-piece, and 3-piece ball valves, needle valves, and swing check valves built with precision micro-finished stainless steel balls and virgin PTFE seals.',
    specifications: [
      'Body: ASTM A351 CF8 (304), CF8M (316)',
      'Pressure: 150# to 800#, 1000 WOG to 6000 PSI',
      'Operation: Manual Lever, Gear, Pneumatic/Electric Actuator ready',
      'Ends: Screwed End (BSP/NPT), Socket Weld, Flanged 150#'
    ],
    brands: ['Viraj Profiles', 'Ratnamani Metals', 'Midhani'],
    popular: false,
    applications: ['Pharmaceutical pipelines', 'Solvent transfer', 'Pure water loops', 'Corrosive chemicals'],
    imageUrl: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'industrial-valves',
    name: 'Industrial Heavy Valves',
    category: 'mechanical',
    subCategory: 'Flanges & Valves',
    tagline: 'Gate, globe, butterfly & non-return valves',
    description: 'Heavy duty Cast Iron, Cast Steel (WCB), and Forged Steel industrial valves engineered for isolation, throttling, and automated flow management.',
    specifications: [
      'Types: Gate, Globe, Butterfly (Wafer/Lug), Dual Plate Check, Y-Strainer',
      'Standards: API 600 / API 602 / BS 5155 / API 598',
      'Sizes: 1" NB to 32" NB',
      'Pressure: PN10, PN16, Class 150 to Class 1500'
    ],
    brands: ['BHEL', 'SAIL', 'JSW Steel'],
    popular: false,
    applications: ['Water distribution', 'Thermal power plants', 'Sugar mills', 'HVAC loops'],
    imageUrl: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ss-sheets-plates',
    name: 'SS Sheets & Plates',
    category: 'mechanical',
    subCategory: 'Raw Materials & Hardware',
    tagline: 'Hot rolled and cold rolled stainless sheets & coils',
    description: 'Mill certified prime quality stainless steel plates and sheets with high dimensional accuracy, uniform thickness, and superior surface finish.',
    specifications: [
      'Grades: SS 304, 304L, 316, 316L, 310, 430, Duplex 2205',
      'Thickness: 0.5mm to 100mm',
      'Finish: 2B, No.4, BA, HRAP, Mirror, Chequered',
      'Cutting: Plasma, Waterjet, Laser cutting available'
    ],
    brands: ['Jindal Steel & Power', 'Tata Steel', 'SAIL', 'JSW Steel'],
    popular: false,
    applications: ['Vessel cladding', 'Food equipment', 'Structural fabrication', 'Ducting'],
    imageUrl: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ss-rods-bars',
    name: 'SS Rods & Bright Bars',
    category: 'mechanical',
    subCategory: 'Raw Materials & Hardware',
    tagline: 'Cold drawn & peeled stainless steel round, hex & square bars',
    description: 'High tensile bright round bars, hexagonal rods, and square bars engineered for machine tool shafts, pump impellers, and precision CNC components.',
    specifications: [
      'Grades: SS 202, 304, 316, 410, 17-4PH',
      'Diameter: 3mm to 300mm',
      'Tolerances: h9, h11, polished centerless ground',
      'Lengths: 3 to 6 Meters with test certificate'
    ],
    brands: ['Viraj Profiles', 'Midhani', 'Kalyani', 'Tata Steel'],
    popular: false,
    applications: ['Shafts', 'Fasteners', 'Machined pump parts', 'Valves stems'],
    imageUrl: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'couplings',
    name: 'Industrial Couplings',
    category: 'mechanical',
    subCategory: 'Power Transmission',
    tagline: 'Flexible, jaw, pin bush, grid & gear couplings',
    description: 'Complete range of mechanical power transmission couplings designed to compensate for angular, parallel, and axial misalignment while dampening vibrations.',
    specifications: [
      'Types: Lovejoy Jaw Couplings, Pin Bush, Tyre, Grid, Curved Tooth Gear',
      'Bore Sizes: 10mm to 250mm',
      'Torque Capacity: Up to 150,000 Nm',
      'Elements: High resilient polyurethane, NBR elastomer spiders'
    ],
    brands: ['Kalyani', 'Tata Steel'],
    popular: false,
    applications: ['Motor to pump connection', 'Turbines', 'Compressors', 'Rolling mills'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bearings',
    name: 'Industrial Bearings & Housings',
    category: 'mechanical',
    subCategory: 'Power Transmission',
    tagline: 'Deep groove, spherical roller, taper roller & pillow blocks',
    description: 'Heavy duty anti-friction bearings and cast iron plummer block / pillow block housings engineered for continuous operating reliability under extreme radial and thrust loads.',
    specifications: [
      'Types: Deep Groove Ball, Spherical Roller, Taper Roller, Cylindrical, Thrust',
      'Housings: SN 500, UCP, UCF, UCFL flange units',
      'Seals: 2RS Rubber sealed, 2Z Metal shielded, Labyrinth seals',
      'Clearances: C3, C4 high speed & high temperature ratings'
    ],
    brands: ['Tata Steel', 'Kalyani'],
    popular: true,
    applications: ['Electric motors', 'Heavy gearboxes', 'Conveyor rollers', 'Crushers', 'Pumps'],
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chain-sprockets',
    name: 'Chains & Sprockets',
    category: 'mechanical',
    subCategory: 'Power Transmission',
    tagline: 'Simplex, duplex, triplex roller chains and drive sprockets',
    description: 'High tensile pre-loaded roller chains according to British (BS) and American (ANSI) standards, along with induction hardened plate wheels and hub sprockets.',
    specifications: [
      'Chains: 08B, 10B, 12B, 16B, 20B, 24B, ANSI 40, 50, 60, 80, 100',
      'Configuration: Simplex, Duplex, Triplex, Extended pitch conveyor chain',
      'Sprockets: Induction hardened teeth (HRC 45-50)',
      'Material: C45 Carbon Steel, Stainless Steel SS 304'
    ],
    brands: ['Tata Steel', 'JSW Steel'],
    popular: false,
    applications: ['Bucket elevators', 'Assembly lines', 'Packaging machinery', 'Agricultural equipment'],
    imageUrl: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fasteners-u-bolts',
    name: 'Industrial Fasteners & U-Bolts',
    category: 'mechanical',
    subCategory: 'Raw Materials & Hardware',
    tagline: 'High tensile & SS bolts, nuts, washers, U-bolts and clamps',
    description: 'Heavy hexagonal structural bolts, stud bolts, Nyloc nuts, flat & spring washers, heavy pipe support U-bolts with neoprene pads, and rigid pipe saddle clamps.',
    specifications: [
      'Grades: High Tensile 8.8, 10.9, 12.9, Stainless Steel A2-70 (304), A4-70 (316), B7/2H',
      'Standards: IS 1363, IS 1364, DIN 933, DIN 934, ASTM A193',
      'Sizes: M4 to M64, Lengths up to 1000mm',
      'Coating: Hot Dip Galvanized (HDG), Zinc Plated, Black Phosphate'
    ],
    brands: ['Tata Steel', 'Viraj Profiles', 'JSW Steel'],
    popular: false,
    applications: ['Structural steel fabrication', 'Pipeline support', 'Vessel mounting', 'Machinery erection'],
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'gaskets-hoses',
    name: 'Gaskets & Industrial Hose Assemblies',
    category: 'mechanical',
    subCategory: 'Raw Materials & Hardware',
    tagline: 'Spiral wound, PTFE gaskets, hydraulic hose pipes & clamps',
    description: 'Metallic spiral wound gaskets with graphite or PTFE filler, non-asbestos fiber sheets, Teflon envelope gaskets, high pressure wire braided hydraulic hoses, and heavy SS worm drive clamps.',
    specifications: [
      'Gaskets: ASME B16.20 Spiral Wound (SS 316 + Flexible Graphite), Pure PTFE sheets, CAF/CNAF',
      'Hose Ratings: 1SN, 2SN, 4SP wire braid up to 400 Bar working pressure',
      'Hose MOC: Nitrile synthetic rubber, EPDM, SS corrugated flexible hoses',
      'Clamps: Heavy duty T-bolt clamps, Jubilee worm drive clamps in SS 304'
    ],
    brands: ['Viraj Profiles', 'Welspun'],
    popular: false,
    applications: ['Flange joint sealing', 'Hydraulic power packs', 'Pneumatic trunk lines', 'Steam piping'],
    imageUrl: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80'
  },

  // ================= ELECTRICAL ITEMS =================
  {
    id: 'mccb',
    name: 'MCCB (Molded Case Circuit Breakers)',
    category: 'electrical',
    subCategory: 'Protection & Switchgear',
    tagline: 'Thermal-magnetic & microprocessor based MCCBs',
    description: 'High breaking capacity Molded Case Circuit Breakers engineered for overload, short-circuit, and earth fault protection in industrial power distribution panels.',
    specifications: [
      'Current Ratings: 16A to 1250A',
      'Poles: 3 Pole (3P) & 4 Pole (4P)',
      'Breaking Capacity (Icu): 25kA, 36kA, 50kA, 70kA, 100kA',
      'Trip Units: Thermal-Magnetic (TMD), Microprocessor / Electronic (ETU)',
      'Accessories: Shunt trip, Under-voltage release, Auxiliary & Alarm contacts, Rotary handles'
    ],
    brands: ['Schneider Electric', 'Siemens', 'ABB', 'L&T Electrical & Automation', 'Eaton'],
    popular: true,
    applications: ['Main incoming panel boards', 'Motor feeders', 'Transformer secondaries', 'Commercial complexes'],
    badge: 'Popular OEM',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'vcb',
    name: 'VCB (Vacuum Circuit Breakers)',
    category: 'electrical',
    subCategory: 'Protection & Switchgear',
    tagline: 'Indoor & outdoor medium voltage vacuum circuit breakers',
    description: '11kV / 22kV / 33kV high reliability Vacuum Circuit Breakers featuring maintenance-free vacuum interrupters with rapid arc quenching and mechanical life up to 30,000 operations.',
    specifications: [
      'Rated Voltage: 11kV, 22kV, 33kV',
      'Current Ratings: 630A, 1250A, 2000A, 3150A',
      'Short Circuit Breaking: 25kA, 31.5kA, 40kA for 3 seconds',
      'Type: Draw-out truck mounted or Fixed execution',
      'Mechanism: Motorized spring operated mechanism with manual override'
    ],
    brands: ['Schneider Electric', 'Siemens', 'ABB', 'L&T Electrical & Automation'],
    popular: false,
    applications: ['Substation switchyards', 'Industrial HT incomers', 'Captive power plants', 'Renewable solar parks'],
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'acb',
    name: 'ACB (Air Circuit Breakers)',
    category: 'electrical',
    subCategory: 'Protection & Switchgear',
    tagline: 'Intelligent low voltage power air circuit breakers',
    description: 'High capacity Air Circuit Breakers for LT panel incomers offering advanced protection releases, power quality metering, communication protocols, and selective tripping.',
    specifications: [
      'Current Ratings: 630A up to 6300A',
      'Breaking Capacity: 50kA, 65kA, 85kA, 100kA (Ics = 100% Icu)',
      'Type: Drawout (MDO/EDO) and Fixed execution',
      'Poles: 3 Pole and 4 Pole',
      'Protection: LSIG (Overload, Short Circuit, Instantaneous, Earth Fault)'
    ],
    brands: ['Schneider Electric', 'Siemens', 'ABB', 'L&T Electrical & Automation', 'Eaton'],
    popular: true,
    applications: ['PCC (Power Control Center) panels', 'DG sets synchronization', 'Hospital backup power', 'Steel & heavy plants'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'switchgear-panels',
    name: 'Switchgear & Control Panels',
    category: 'electrical',
    subCategory: 'Panels & Distribution',
    tagline: 'Custom engineered PCC, MCC, APFC & VFD control panels',
    description: 'Fully compartmentalized, CPRI certified electrical switchgear panels with IP54/IP55 ingress protection, CNC fabricated enclosures, and systematic internal busbar trunking.',
    specifications: [
      'Types: PCC, MCC, APFC (Capacitor), VFD Panels, PLC Automation Panels, AMF Panels',
      'Form of Separation: Form 3b, Form 4b',
      'Busbar: Electrolytic 99.9% pure Copper / Aluminium insulated busbars',
      'Paint Finish: 7-tank pretreatment powder coated (RAL 7035 / 7032)'
    ],
    brands: ['Schneider Electric', 'L&T Electrical & Automation', 'Siemens', 'ABB', 'C&S Electric'],
    popular: true,
    applications: ['Industrial processing plants', 'Factory automation', 'Pumping stations', 'Commercial buildings'],
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'distribution-boards',
    name: 'Distribution Boards & Enclosures',
    category: 'electrical',
    subCategory: 'Panels & Distribution',
    tagline: 'SPN, TPN, vertical & phase selector distribution boards',
    description: 'Premium sheet steel enclosures, weatherproof junction boxes, and modular distribution boards designed for safe sub-circuit protection in harsh conditions.',
    specifications: [
      'Types: SPN (Single Phase), TPN (Three Phase), Phase Segregated, Vertical Busbar DBs',
      'Ways: 4 Way, 6 Way, 8 Way, 12 Way, 16 Way',
      'Protection: IP42 / IP54 / IP65 weatherproof ratings',
      'Material: Galvanized sheet steel with corrosion resistant electro-coating'
    ],
    brands: ['Havells', 'Legrand', 'Schneider Electric', 'CHNT', 'Panasonic'],
    popular: false,
    applications: ['Floor distribution', 'Lighting circuits', 'Machinery local supply', 'Infrastructure'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'contactors-relays',
    name: 'Power Contactors & Thermal Relays',
    category: 'electrical',
    subCategory: 'Control & Relays',
    tagline: 'AC3 heavy duty contactors, overload relays & electronic timers',
    description: 'Magnetic power contactors from 9A to 800A AC3 duty coupled with bimetallic thermal overload relays, phase failure protectors, and multi-function electronic timers.',
    specifications: [
      'Contactor Ratings: 9A, 12A, 18A, 25A, 32A, 40A, 65A, 95A, 115A, 150A up to 800A',
      'Control Coil: 24V DC, 110V AC, 230V AC, 415V AC',
      'Duty: AC-1, AC-3, AC-4 heavy duty inching/reversing',
      'Relays: Bi-metallic Overload, Electronic Motor Protection, Phase Sequence, Earth Leakage'
    ],
    brands: ['Schneider Electric', 'Siemens', 'ABB', 'L&T Electrical & Automation'],
    popular: true,
    applications: ['DOL Starters', 'Star-Delta Starters', 'Crane hoists', 'Pump controllers', 'Compressors'],
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'push-buttons-indicators',
    name: 'Push Buttons & LED Indicators',
    category: 'electrical',
    subCategory: 'Control & Relays',
    tagline: '22.5mm industrial pilot devices and emergency stop actuators',
    description: 'High visibility LED pilot indicators, momentary/maintained flush push buttons, mushroom head emergency stops with twist-to-release, and illuminated key switches.',
    specifications: [
      'Mounting Hole: 22.5 mm standard dia',
      'Colours: Red, Green, Yellow, Blue, White, Amber',
      'Supply Voltage: 24V AC/DC, 110V AC, 240V AC',
      'Ingress Protection: IP65 / IP67 oil-tight & water-tight',
      'Contact Blocks: 1NO, 1NC, 2NO, 2NC silver alloy contacts'
    ],
    brands: ['Schneider Electric', 'Siemens', 'L&T Electrical & Automation', 'C&S Electric'],
    popular: false,
    applications: ['Control desk consoles', 'Machine operator stations', 'Emergency trip circuits'],
    imageUrl: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cables-busbars',
    name: 'Wires, Cables & Busbars',
    category: 'electrical',
    subCategory: 'Cabling & Connections',
    tagline: 'LT/HT Armoured power cables, flexible wires & copper busbars',
    description: 'XLPE / PVC insulated aluminium and copper armoured power cables, multi-core shielded instrumentation cables, and 99.9% electrolytic grade copper/aluminium busbars.',
    specifications: [
      'Voltage Grade: 1.1 kV LT Cables, 11kV/33kV HT Cables',
      'Cores: 1C, 2C, 3C, 3.5C, 4C up to 630 sq.mm',
      'Conductor: Electrolytic high-conductivity copper / aluminium',
      'Fire Safety: FRLS (Flame Retardant Low Smoke), ZHFR (Zero Halogen)'
    ],
    brands: ['Havells', 'Schneider Electric', 'Tata Steel', 'Kalyani'],
    popular: true,
    applications: ['Plant power cabling', 'VFD feeder cables', 'Switchboard busbar systems', 'Control circuits'],
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'lugs-cable-glands',
    name: 'Lugs, Terminals & Cable Glands',
    category: 'electrical',
    subCategory: 'Cabling & Connections',
    tagline: 'Crimping lugs, double compression brass glands & accessories',
    description: 'Heavy duty electrolytic copper and bimetallic crimping lugs (ring, pin, fork), brass double compression flameproof/weatherproof cable glands, PVC shrouds, and earthing tags.',
    specifications: [
      'Lug Sizes: 1.5 sq.mm to 1000 sq.mm',
      'Plating: Electro-tinned for corrosion inhibition',
      'Glands: Single & Double Compression Weatherproof (IP66) and Flameproof (Ex d IIC)',
      'Accessories: Earth tags, neoprene grommets, PVC protective shrouds'
    ],
    brands: ['Schneider Electric', 'L&T Electrical & Automation', 'Legrand'],
    popular: false,
    applications: ['Cable termination in panels', 'Hazardous area glands', 'Motor terminal boxes'],
    imageUrl: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mcb-rccb-elcb',
    name: 'MCB, RCCB & ELCB Units',
    category: 'electrical',
    subCategory: 'Protection & Switchgear',
    tagline: 'Miniature circuit breakers & residual current human life protectors',
    description: 'DIN rail mounted 10kA miniature circuit breakers (B, C, D curves) and Residual Current Circuit Breakers (30mA, 100mA, 300mA) protecting against overloads and electrocution.',
    specifications: [
      'MCB Ratings: 0.5A to 63A (1P, 2P, 3P, 4P)',
      'Curves: B curve (resistive), C curve (general inductive), D curve (high inrush)',
      'RCCB Sensitivity: 30mA (human life safety), 100mA, 300mA (fire protection)',
      'Standards: IEC 60898-1, IS/IEC 60947-2'
    ],
    brands: ['Schneider Electric', 'Siemens', 'ABB', 'Havells', 'Legrand', 'CHNT', 'Panasonic'],
    popular: false,
    applications: ['Lighting and power distribution boards', 'Laboratory equipment', 'HVAC units'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fuses-switches',
    name: 'HRC Fuses, Control Switches & Fuse Holders',
    category: 'electrical',
    subCategory: 'Protection & Switchgear',
    tagline: 'High rupturing capacity fuses, rotary cam switches & fuse bases',
    description: 'DIN blade type BS88 & NH HRC fuses with fast-acting semiconductor fuses for drive protection, along with multi-position rotary cam switches and finger-safe fuse holders.',
    specifications: [
      'Fuse Types: NH00, NH0, NH1, NH2, NH3, Cylindrical 10x38, 14x51, 22x58',
      'Ratings: 2A to 1000A, 500V / 690V / 1000V AC',
      'Breaking Capacity: 120kA at 500V AC',
      'Switches: Cam switches, On-Load Changeover switches, Isolator switches'
    ],
    brands: ['Schneider Electric', 'Siemens', 'L&T Electrical & Automation', 'C&S Electric', 'Eaton'],
    popular: false,
    applications: ['Capacitor bank protection', 'Thyristor protection', 'Bus coupler isolators'],
    imageUrl: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80'
  },

  // ================= ELECTRONICS & INDUSTRIAL AUTOMATION =================
  {
    id: 'sensors-proximity-photo',
    name: 'Sensors (Proximity, Photoelectric & Temp)',
    category: 'electronics-automation',
    subCategory: 'Sensors & Transducers',
    tagline: 'High precision industrial detection and measurement sensors',
    description: 'Rugged inductive proximity switches (flush/non-flush), photoelectric sensors (diffuse, retro-reflective, through-beam), 4-20mA pressure transmitters, and PT100/Thermocouple sensors.',
    specifications: [
      'Proximity: M8, M12, M18, M30 inductive & capacitive (Sensing: 2mm to 40mm)',
      'Output: NPN / PNP, NO / NC, 2-wire / 3-wire DC, 2-wire AC',
      'Photoelectric: Laser, red LED, background suppression up to 20 meters',
      'Pressure: 0-1 Bar to 0-600 Bar (Output: 4-20mA, 0-10V, RS485 Modbus)',
      'Temperature: RTD PT100 Class A, K-Type, J-Type thermocouples with thermowells'
    ],
    brands: ['Schneider Electric', 'Siemens', 'Panasonic', 'ABB'],
    popular: true,
    applications: ['Packaging machinery', 'Conveyor counting', 'Pneumatic cylinder position', 'Reactor temp control'],
    badge: 'High Accuracy',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'vfd-ac-drives',
    name: 'VFD / AC Drives & Servo Drives',
    category: 'electronics-automation',
    subCategory: 'Drives & Motion Control',
    tagline: 'Energy saving Variable Frequency Drives & precision servo systems',
    description: 'High performance sensorless vector and closed-loop field-oriented VFDs for pumps, fans, conveyors, and extruders, alongside dynamic AC servo drives and brushless servomotors.',
    specifications: [
      'Power: 0.4 kW to 500 kW (Single Phase 230V & Three Phase 415V/690V)',
      'Control: V/f control, Open-loop Vector, Closed-loop FOC torque control',
      'Overload: 150% for 60 seconds (Heavy Duty), 110% for Normal Duty',
      'Communications: Modbus RTU, Profinet, EtherCAT, Ethernet/IP, CANopen',
      'Built-in: Safe Torque Off (STO), EMC filter, DC choke, PID controller'
    ],
    brands: ['Schneider Electric', 'Siemens', 'ABB', 'Panasonic'],
    popular: true,
    applications: ['Boiler feed pumps', 'Overhead cranes', 'Centrifuges', 'CNC routers', 'Winders / Unwinders'],
    badge: 'Energy Saver',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'plcs-controllers',
    name: 'PLCs (Programmable Logic Controllers)',
    category: 'electronics-automation',
    subCategory: 'Automation & Controllers',
    tagline: 'Micro, compact & modular modular rack-mounted PLCs',
    description: 'Leading industrial automation CPUs engineered for fast cycle times, extensive analog/digital I/O expansion, high-speed pulse outputs, and robust fieldbus communication.',
    specifications: [
      'Architecture: Micro (10-40 I/O) up to Modular Rack (thousands of points)',
      'Programming: Ladder Logic (LD), Structured Text (ST), Function Block (FBD)',
      'Connectivity: Dual Ethernet ports, RS485, Profinet, Profibus, Modbus TCP',
      'Features: High speed counters (up to 200 kHz), PID loops with autotune'
    ],
    brands: ['Schneider Electric', 'Siemens', 'ABB', 'Panasonic'],
    popular: true,
    applications: ['Machine automation', 'Batch process control', 'Water treatment SCADA', 'Robotic cells'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hmis-touch-panels',
    name: 'HMIs & Touch Panels',
    category: 'electronics-automation',
    subCategory: 'Automation & Controllers',
    tagline: 'TFT true color industrial human machine interface screens',
    description: 'Widescreen 4.3", 7", 10.1", 12", and 15" capacitive and resistive touch screens with bright LED backlighting, Ethernet logging, recipe management, and remote mobile VNC access.',
    specifications: [
      'Display: 4.3", 7.0", 10.1", 15.6" TFT LCD, 65k to 16M colours',
      'Resolution: 800x480 up to 1920x1080 Full HD',
      'Front Bezel: IP65 / NEMA 4x water/oil resistant',
      'Storage: USB host, SD card data logging, recipe memory, multi-language support'
    ],
    brands: ['Schneider Electric', 'Siemens', 'Panasonic'],
    popular: false,
    applications: ['Machine control panels', 'Factory floor dashboards', 'Packaging line terminals'],
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'io-modules',
    name: 'Industrial & Remote I/O Modules',
    category: 'electronics-automation',
    subCategory: 'Automation & Controllers',
    tagline: 'Decentralized distributed fieldbus I/O slice systems',
    description: 'Fast slice-based digital/analog inputs, thermocouple/RTD signal conditioners, and relay outputs communicating via Modbus RTU, Modbus TCP, Profinet, or EtherCAT.',
    specifications: [
      'Types: 8/16 DI, 8/16 DO (Transistor/Relay), 4/8 AI (4-20mA / 0-10V), 4 AO',
      'Isolation: 2500V RMS optical isolation between field and system logic',
      'Mounting: 35mm DIN rail with push-in spring clamp terminals',
      'Protocols: Ethernet/IP, Profinet IO, Modbus TCP/RTU'
    ],
    brands: ['Schneider Electric', 'Siemens', 'ABB'],
    popular: false,
    applications: ['Distributed plant wiring', 'Conveyor sorting lines', 'Remote pumping telemetry'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'smps-power-supplies',
    name: 'SMPS & Power Electronics Units',
    category: 'electronics-automation',
    subCategory: 'Power Electronics',
    tagline: 'DIN rail 24V DC regulated power supplies, converters & UPS',
    description: 'High efficiency (>92%) industrial switched-mode power supplies (SMPS) with over-voltage, short-circuit protection, DC-DC isolated converters, and buffer battery DC-UPS modules.',
    specifications: [
      'Outputs: 12V DC, 24V DC, 48V DC (Current: 2.5A, 5A, 10A, 20A, 40A)',
      'Input Range: Universal 85-264V AC / 120-370V DC, Single & 3-Phase',
      'Features: Power boost 150%, active PFC, MTBF > 500,000 hours',
      'DC-UPS: Battery back-up modules for zero-millisecond power switchover'
    ],
    brands: ['Schneider Electric', 'Siemens', 'ABB', 'Panasonic'],
    popular: false,
    applications: ['PLC control cabinets', 'Sensor power feeds', 'Instrumentation panels', 'SCADA telecontrol'],
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80'
  },

  // ================= PNEUMATICS ITEMS (OEM MAKE) =================
  {
    id: 'pneumatic-cylinders',
    name: 'Pneumatic Cylinders (ISO Standard)',
    category: 'pneumatics',
    subCategory: 'Actuators',
    tagline: 'ISO 15552, ISO 6432 & compact guided cylinders',
    description: 'Precision honed aluminium and stainless steel pneumatic cylinders: tie-rod, profile tube with magnetic sensors, compact short-stroke cylinders, and dual-rod guided units.',
    specifications: [
      'Bore Sizes: 12mm, 16mm, 20mm, 25mm, 32mm, 40mm, 50mm, 63mm, 80mm, 100mm, 125mm',
      'Stroke: 10mm to 2000mm standard & custom strokes',
      'Working Pressure: 1.0 to 10.0 Bar',
      'Cushioning: Adjustable pneumatic cushioning at both ends',
      'Sensors: Reed switch & solid state magnetic position switch slots'
    ],
    brands: ['SMC', 'FESTO', 'AirTAC', 'Mindman', 'CKD'],
    popular: true,
    applications: ['Pick and place robotics', 'Packaging machines', 'Clamping jigs', 'Pressing fixtures'],
    badge: 'OEM Direct',
    imageUrl: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'frl-air-preparation',
    name: 'FRL Units & Air Filter Regulators',
    category: 'pneumatics',
    subCategory: 'Air Preparation',
    tagline: 'Modular filter, regulator & lubricator systems',
    description: 'Comprehensive compressed air conditioning units: particulate filters (5 micron / 0.01 micron coalescing), precision diaphragm regulators with locking knobs, and micro-fog mist lubricators.',
    specifications: [
      'Port Sizes: 1/8", 1/4", 3/8", 1/2", 3/4", 1" BSP',
      'Filtration: 5µm, 40µm standard, 0.01µm coalescing oil removal',
      'Pressure Range: 0.5 to 8.5 Bar (Max 15 Bar)',
      'Drain Type: Manual drain, semi-auto drain, and fully automatic float drain',
      'Bowl: Polycarbonate with steel guard or full metal bowl'
    ],
    brands: ['SMC', 'FESTO', 'AirTAC', 'Parker Legris', 'Mindman'],
    popular: true,
    applications: ['Compressed air main lines', 'Pneumatic tool air supply', 'Clean dry air for instruments'],
    imageUrl: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'solenoid-valves',
    name: 'Solenoid Valves (Pneumatic)',
    category: 'pneumatics',
    subCategory: 'Valves & Control',
    tagline: '5/2, 5/3, 3/2-way high speed pilot & direct acting valves',
    description: 'High response spool valves and poppet solenoid valves available as individual units or mounted on pre-piped multi-station sub-base manifolds with manual override pins.',
    specifications: [
      'Configurations: 5/2 Single Solenoid (Spring return), 5/2 Double Solenoid, 5/3 Closed Center, 3/2 NC/NO',
      'Voltages: 24V DC, 12V DC, 110V AC, 220V AC with LED DIN connectors (IP65)',
      'Response Time: < 15ms cycle switching',
      'Mounting: Body ported, Sub-base, Multi-station gang manifolds'
    ],
    brands: ['SMC', 'FESTO', 'AirTAC', 'CKD', 'Mindman'],
    popular: true,
    applications: ['Double acting cylinder control', 'Automated sorting diverters', 'Bagging machines'],
    badge: 'High Frequency',
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pneumatic-fittings',
    name: 'One-Touch Push-In Fittings & Couplers',
    category: 'pneumatics',
    subCategory: 'Tubing & Fittings',
    tagline: 'Quick connect nickel-plated brass & composite push-in fittings',
    description: 'Full assortment of Male Studs, Female Connectors, Union Straights, 90° Swivel Elbows, Branch Tees, Banjo fittings, and Quick Release air couplers (QRC).',
    specifications: [
      'Tube OD: 4mm, 6mm, 8mm, 10mm, 12mm, 14mm, 16mm',
      'Thread: BSPT (R), BSPP (G with O-ring), NPT, Metric (M5, M6)',
      'Material: Nickel plated brass with POM release collar and SS gripping collet',
      'Pressure: Vacuum -0.9 Bar up to 15 Bar'
    ],
    brands: ['SMC', 'FESTO', 'Parker Legris', 'AirTAC'],
    popular: false,
    applications: ['Machine pneumatic plumbing', 'Air distribution manifolds', 'Robot tool heads'],
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'speed-controllers-silencers',
    name: 'Speed Controllers, Silencers & Mufflers',
    category: 'pneumatics',
    subCategory: 'Valves & Control',
    tagline: 'Exhaust silencers, sintered bronze mufflers & throttle valves',
    description: 'Meter-in and meter-out elbow speed flow control valves with knurled lock nuts, alongside sintered bronze and compact plastic silencers reducing exhaust noise below 75 dBA.',
    specifications: [
      'Flow Control: Meter-out (Cylinder exhaust), Meter-in (Supply throttling)',
      'Silencers: Sintered Bronze Cone, Flat Hex, Plastic porous with high flow throughput',
      'Connections: 1/8", 1/4", 3/8", 1/2" BSP thread',
      'Noise Reduction: 20 to 35 dB sound attenuation'
    ],
    brands: ['SMC', 'FESTO', 'Parker Legris', 'AirTAC', 'Mindman'],
    popular: false,
    applications: ['Cylinder speed adjustment', 'Exhaust noise suppression', 'Clean factory environment'],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pu-tubes',
    name: 'PU Tubes & Flexible Air Hoses',
    category: 'pneumatics',
    subCategory: 'Tubing & Fittings',
    tagline: '100% virgin polyurethane (PU), nylon & anti-spark tubes',
    description: 'High flexibility, kink-resistant polyurethane tubes with calibrated external diameters for tight push-in seal integrity. Available in 100m and 200m coils.',
    specifications: [
      'Sizes: 4x2.5mm, 6x4mm, 8x5.5mm, 10x6.5mm, 12x8mm, 16x11mm',
      'Colours: Blue, Transparent Clear, Black, Orange, Yellow, Red',
      'Burst Pressure: 30 Bar at 23°C (Working pressure: 10 Bar)',
      'Temperature: -20°C to +70°C'
    ],
    brands: ['SMC', 'FESTO', 'Parker Legris', 'AirTAC'],
    popular: true,
    applications: ['Industrial robotics', 'Pneumatic tools', 'Packaging machines', 'Automotive lines'],
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pneumatic-actuators-valves',
    name: 'Pneumatic Rotary Actuators & Angle Seat Valves',
    category: 'pneumatics',
    subCategory: 'Actuators',
    tagline: 'Rack & pinion quarter-turn actuators and stainless angle seat valves',
    description: 'Heavy duty rack-and-pinion 90° pneumatic rotary actuators for automating ball and butterfly valves, complemented by piston-operated stainless steel angle seat steam valves.',
    specifications: [
      'Type: Double Acting (DA) & Spring Return (SR / Single Acting fail-safe)',
      'Torque Output: 10 Nm up to 5000 Nm',
      'Mounting: ISO 5211 / DIN 3337 direct mounting to valve tops',
      'Angle Seat Valve: SS 316 Body, PTFE seal, withstands 180°C steam'
    ],
    brands: ['FESTO', 'SMC', 'AirTAC', 'CKD'],
    popular: false,
    applications: ['Process valve automation', 'Steam flow cut-off', 'Pasteurization loops', 'Bulk solids slide gates'],
    imageUrl: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=600&q=80'
  }
];

export const productCategoriesList = [
  { id: 'all', label: 'All Products', count: productsData.length },
  { id: 'mechanical', label: 'Mechanical Items', count: productsData.filter(p => p.category === 'mechanical').length },
  { id: 'electrical', label: 'Electrical Items', count: productsData.filter(p => p.category === 'electrical').length },
  { id: 'electronics-automation', label: 'Electronics & Automation', count: productsData.filter(p => p.category === 'electronics-automation').length },
  { id: 'pneumatics', label: 'Pneumatics (OEM)', count: productsData.filter(p => p.category === 'pneumatics').length },
] as const;
