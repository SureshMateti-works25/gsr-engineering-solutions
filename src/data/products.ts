import type { ProductItem } from '../types';

export const productsData: ProductItem[] = [
  {
    "id": "ss-pipes",
    "name": "SS Pipes",
    "category": "mechanical-items",
    "subCategory": "Piping & Tubing",
    "tagline": "High-grade ASTM A312 / A269 seamless & welded stainless steel pipes",
    "description": "Precision engineered SS seamless and welded pipes in ASTM A312 / A269 standards. Available in SS 304, 304L, 316, 316L, 310, and 321 grades for high-pressure, chemical, and industrial fluid transmission.",
    "specifications": [
      "Grades: SS 304, SS 316, SS 316L, SS 310, SS 321",
      "Sizes: 1/8\" OD to 24\" NB (Seamless & Welded/ERW)",
      "Schedules: SCH 5S, 10S, 40S, 80S, 160S, XXS",
      "Standards: ASTM A312 / A358 / A269 / DIN 17456",
      "Surface Finish: Mill finish, Matt finish, Mirror 240/320/400 grit"
    ],
    "brands": [
      "Tata Steel",
      "Jindal Steel & Power",
      "Ratnamani Metals & Tubes"
    ],
    "popular": true,
    "applications": [
      "Chemical Plants",
      "Pharma Process Lines",
      "Food & Dairy",
      "Water Treatment",
      "Heat Exchangers"
    ],
    "badge": "Best Seller",
    "discountBadge": "15% OFF Bulk",
    "imageUrl": "./products/ss-pipes.png"
  },
  {
    "id": "ss-tanks-vessels",
    "name": "SS Tanks & Vessels",
    "category": "mechanical-items",
    "subCategory": "Process Equipment & Fabrication",
    "tagline": "Custom fabricated storage tanks, reactors and pressure vessels",
    "description": "Engineered stainless steel storage tanks, chemical holding tanks, pressure vessels, and reaction containers built to ASME Section VIII and API standards with sanitary internal mirror finish.",
    "specifications": [
      "Capacity: 100 Litres to 50,000 Litres",
      "MOC: SS 304, SS 316, SS 316L (Internal finish Ra < 0.4 µm)",
      "Design Codes: ASME Sec VIII Div 1, API 650, cGMP",
      "Accessories: Dimple jacket, limpet coil, agitator nozzle, CIP spray balls, manholes",
      "Testing: Hydrostatic, dye-penetrant, radiography, ultrasonic certified"
    ],
    "brands": [
      "Tata Steel",
      "JSW Steel",
      "Jindal Steel & Power"
    ],
    "popular": true,
    "applications": [
      "Chemical Processing",
      "Pharmaceutical Blending",
      "Brewery & Distilleries",
      "WFI Storage"
    ],
    "badge": "Turnkey Solution",
    "discountBadge": "Custom Quote",
    "imageUrl": "./products/ss-tanks-vessels.png"
  },
  {
    "id": "ss-pipe-fittings",
    "name": "Pipe Fittings (SS)",
    "category": "mechanical-items",
    "subCategory": "Pipe Fittings & Connectors",
    "tagline": "Socket weld, screwed, butt-weld & sanitary stainless steel fittings",
    "description": "Heavy-duty forged and fabricated stainless steel fittings including elbows, tees, unions, nipples, couplings, bushings, plugs, and hose connectors rated up to 3000/6000 PSI.",
    "specifications": [
      "Types: Elbows 90°/45°, Equal/Unequal Tees, Unions, Couplings, Reducers, Nipples",
      "Pressure Ratings: 3000 PSI, 6000 PSI, 9000 PSI, Class 150",
      "MOC: SS 304 / 304L / 316 / 316L / 316Ti",
      "End Connections: BSPT, NPT, Socket Weld, Butt Weld, Triclamp",
      "Testing: 100% Hydrostatic and PMI tested"
    ],
    "brands": [
      "Ratnamani Metals & Tubes",
      "Tata Steel",
      "Jindal Steel & Power"
    ],
    "popular": true,
    "applications": [
      "Hydraulic Lines",
      "High Pressure Gas",
      "Chemical Dosing",
      "Steam Transfer"
    ],
    "badge": "High Demand",
    "discountBadge": "10% OFF",
    "imageUrl": "./products/ss-pipe-fittings.png"
  },
  {
    "id": "gear-boxes",
    "name": "Gear Boxes",
    "category": "mechanical-items",
    "subCategory": "Power Transmission",
    "tagline": "Heavy-duty helical, worm, planetary & bevel-helical reduction gearboxes",
    "description": "Robust industrial speed reducers engineered for high torque transmission, low noise, and continuous S1 duty in crushers, conveyor lines, agitators, and mill drives.",
    "specifications": [
      "Types: Helical, Worm, Bevel-Helical, Planetary Gearboxes",
      "Power Range: 0.25 kW to 350+ kW",
      "Reduction Ratios: 5:1 up to 1000:1",
      "Housing: Graded Cast Iron (CI) / Fabricated Mild Steel",
      "Mounting: Foot, Flange, Shaft mount with torque arm"
    ],
    "brands": [
      "Elecon",
      "Fenner",
      "Premium Transmission"
    ],
    "popular": true,
    "applications": [
      "Belt Conveyors",
      "Cement Mills",
      "Agitators & Mixers",
      "Cranes & Hoists",
      "Cooling Towers"
    ],
    "badge": "Heavy Torque",
    "discountBadge": "12% OFF",
    "imageUrl": "./products/gear-boxes.png"
  },
  {
    "id": "gears-components",
    "name": "Gears & Gear Components",
    "category": "mechanical-items",
    "subCategory": "Power Transmission",
    "tagline": "Precision machined spur, helical, bevel gears, racks & pinions",
    "description": "Custom manufactured and standard gear wheels, pinion shafts, internal gear rings, and rack & pinion sets carburized and case-hardened up to 58-62 HRC for extreme mechanical endurance.",
    "specifications": [
      "Types: Spur Gears, Helical Gears, Spiral Bevel Gears, Worm & Worm Wheel Sets",
      "Material: EN8, EN19, EN24, 20MnCr5, Case-Hardened Alloy Steels",
      "Tooth Profiles: DIN Class 6-8 precision profile grinding",
      "Hardness: 58-62 HRC (Case Carburized & Quenched)",
      "Module Range: 1.0 Module to 24 Module, up to 2500 mm diameter"
    ],
    "brands": [
      "Elecon",
      "Tata Steel",
      "Fenner"
    ],
    "popular": false,
    "applications": [
      "Heavy Machinery",
      "Rolling Mills",
      "Sugar Mills",
      "Crusher Drives",
      "Machine Tools"
    ],
    "discountBadge": "OEM Quality",
    "imageUrl": "./products/gears-components.png"
  },
  {
    "id": "couplings",
    "name": "Couplings",
    "category": "mechanical-items",
    "subCategory": "Power Transmission",
    "tagline": "Tyre, Pin-Bush, Gear, Jaw, Grid & Fluid mechanical couplings",
    "description": "High-performance mechanical shaft couplings engineered to absorb angular, parallel, and axial misalignments while damping torsional shock and vibration between motors and driven machines.",
    "specifications": [
      "Types: Flexible Pin Bush, Gear Couplings, Tyre Couplings, Jaw/Lovejoy, Grid Couplings",
      "Torque Capacity: Up to 500,000 Nm",
      "Bore Sizes: 10 mm to 450 mm with precision keyways",
      "MOC: Graded Cast Iron (CI), Forged Carbon Steel, Polyurethane inserts",
      "Standards: AGMA, DIN, ISO balancing standards"
    ],
    "brands": [
      "Fenner",
      "Elecon",
      "Lovejoy"
    ],
    "popular": true,
    "applications": [
      "Motor-Pump Sets",
      "Compressor Drives",
      "Turbine Drives",
      "Rolling Mill Lines"
    ],
    "discountBadge": "10% OFF",
    "imageUrl": "./products/couplings.png"
  },
  {
    "id": "ss-flanges",
    "name": "SS Flanges",
    "category": "mechanical-items",
    "subCategory": "Flanged Connections",
    "tagline": "Forged stainless steel pipe flanges in all standard pressure classes",
    "description": "Comprehensive inventory of ANSI B16.5 and DIN standard SS flanges. Includes Weld Neck, Slip-On, Blind, Socket Weld, Threaded, and Lap Joint flanges machined to precision tolerances.",
    "specifications": [
      "Classes: 150#, 300#, 600#, 900#, 1500#, 2500#, PN10, PN16, PN40",
      "Types: Weld Neck (WNRF), Slip-On (SORF), Blind (BLRF), Threaded",
      "Sizes: 1/2\" NB to 36\" NB",
      "Standards: ANSI/ASME B16.5, DIN 2576 / 2633",
      "Facing: Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ)"
    ],
    "brands": [
      "Ratnamani Metals & Tubes",
      "Tata Steel",
      "Jindal Steel & Power"
    ],
    "popular": true,
    "applications": [
      "Process Plant Piping",
      "Pipeline Valves",
      "Boiler Headers",
      "Vessel Manways"
    ],
    "discountBadge": "15% OFF Bulk",
    "imageUrl": "./products/ss-flanges.png"
  },
  {
    "id": "ss-valves",
    "name": "SS Valves",
    "category": "mechanical-items",
    "subCategory": "Flow Control & Valves",
    "tagline": "Precision engineered SS Ball, Gate, Globe, Check & Butterfly valves",
    "description": "Full bore stainless steel process valves designed for leak-tight isolation and regulation of corrosive liquids, high-pressure steam, gases, and slurry lines in process plants.",
    "specifications": [
      "Types: 1-Piece, 2-Piece, 3-Piece Ball Valves, Gate, Globe, NRV, Butterfly",
      "Pressure Class: Class 150 / 300 / 800 / 1000 WOG",
      "MOC: CF8 (SS 304), CF8M (SS 316), CF3M (SS 316L)",
      "Operation: Manual Hand Lever, Gearbox, Pneumatic Actuator, Motorized",
      "Seat Material: PTFE, R-PTFE, PEEK, Metal-to-Metal"
    ],
    "brands": [
      "L&T Electrical & Automation",
      "SMC",
      "FESTO"
    ],
    "popular": true,
    "applications": [
      "Pharma Reactors",
      "Chemical Corrosive Lines",
      "Steam Pipelines",
      "HVAC & Utilities"
    ],
    "badge": "Best Seller",
    "discountBadge": "Special Price",
    "imageUrl": "./products/ss-valves.png"
  },
  {
    "id": "industrial-valves",
    "name": "Industrial Valves",
    "category": "mechanical-items",
    "subCategory": "Flow Control & Valves",
    "tagline": "Cast steel & forged gate, globe, check, plug & knife gate valves",
    "description": "Heavy utility and process pipeline valves for high temperature steam, hydrocarbons, cooling tower circuits, and compressed air distribution.",
    "specifications": [
      "Standards: API 600, API 602, BS 1868, BS 1873, ASME B16.34",
      "Body Material: ASTM A216 WCB (Cast Steel), A105 (Forged Steel), Cast Iron",
      "Pressure Ratings: Class 150, 300, 600, 800, 1500",
      "Ends: Flanged RF, Screwed NPT, Butt-weld, Wafer type",
      "Testing: API 598 Pressure and Leak Test certified"
    ],
    "brands": [
      "L&T Electrical & Automation",
      "SMC",
      "Tata Steel"
    ],
    "popular": false,
    "applications": [
      "Steam Mains",
      "Thermal Power Plants",
      "Water Supply Networks",
      "Boiler Headers"
    ],
    "discountBadge": "10% OFF",
    "imageUrl": "./products/industrial-valves.png"
  },
  {
    "id": "bearings",
    "name": "Bearings",
    "category": "mechanical-items",
    "subCategory": "Rotary Motion",
    "tagline": "Deep groove ball, spherical roller, tapered roller & pillow block bearings",
    "description": "High-precision industrial bearings engineered to carry heavy radial and thrust loads under extreme speeds and high operating temperatures in continuous production environments.",
    "specifications": [
      "Types: Deep Groove Ball Bearings, Spherical Roller, Cylindrical Roller, Taper Roller, Pillow Blocks",
      "Precision Classes: ISO Normal, P6, P5",
      "Cages: Machined Brass, Pressed Steel, Polyamide",
      "Clearances: C2, Normal, C3, C4 (suitable for thermal expansion)",
      "Seals: 2RS (Rubber contact seals), 2Z (Metal shields), Open"
    ],
    "brands": [
      "SKF Bearings",
      "Fenner",
      "Tata Steel"
    ],
    "popular": true,
    "applications": [
      "Electric Motors",
      "Conveyor Idlers",
      "Centrifugal Pumps",
      "Gearbox Shafts",
      "Fans & Blowers"
    ],
    "badge": "100% Genuine",
    "discountBadge": "Special OEM Rate",
    "imageUrl": "./products/bearings.png"
  },
  {
    "id": "ss-rods-bars",
    "name": "SS Rods & Bars",
    "category": "mechanical-items",
    "subCategory": "Raw Material & Shafting",
    "tagline": "SS 304, 316 bright round bars, hex bars, square bars & flat sections",
    "description": "Cold drawn, centreless ground and peeled stainless steel bright bars manufactured to precision h9, h11 tolerances for CNC machining, fasteners, and pump shafts.",
    "specifications": [
      "Grades: SS 304, 304L, 316, 316L, 310, 410, 17-4PH",
      "Diameters: 3 mm to 300 mm round bars",
      "Shapes: Round, Hexagonal, Square, Rectangular Flats",
      "Finish: Cold Drawn, Centerless Ground, Bright Polished",
      "Tolerance: ISO h8, h9, h11, ASTM A276 / A479"
    ],
    "brands": [
      "Tata Steel",
      "Jindal Steel & Power",
      "JSW Steel"
    ],
    "popular": false,
    "applications": [
      "Pump Shafts",
      "Valve Stems",
      "CNC Machined Parts",
      "Textile Machinery",
      "Fasteners"
    ],
    "discountBadge": "Bulk Discount",
    "imageUrl": "./products/ss-rods-bars.png"
  },
  {
    "id": "chain-sprockets",
    "name": "Chain & Sprockets",
    "category": "mechanical-items",
    "subCategory": "Power Transmission",
    "tagline": "Simplex, duplex, triplex roller chains & induction hardened sprockets",
    "description": "Heavy-duty industrial transmission roller chains and taper-lock sprockets engineered for smooth power transmission without slip under shock loads.",
    "specifications": [
      "Chains: British (BS 228) and American (ANSI B29.1) standards (06B to 32B, ANSI 35 to 200)",
      "Configurations: Simplex (Single Strand), Duplex, Triplex",
      "Sprockets: Pilot Bore & Taper Lock Bushes, Plate Wheels",
      "Teeth Treatment: Induction hardened 45-50 HRC for extended wear life",
      "Attachments: Extended pins, bent lugs, hollow pins available"
    ],
    "brands": [
      "Fenner",
      "Elecon"
    ],
    "popular": false,
    "applications": [
      "Packaging Conveyors",
      "Assembly Automation",
      "Cement & Mining Lines",
      "Food Processing"
    ],
    "discountBadge": "10% OFF",
    "imageUrl": "./products/chain-sprockets.png"
  },
  {
    "id": "industrial-fasteners",
    "name": "Industrial Fasteners (Bolts & Nuts)",
    "category": "mechanical-items",
    "subCategory": "Fasteners & Hardware",
    "tagline": "High tensile Grade 8.8, 10.9 & SS 304/316 hex bolts, nuts, studs & washers",
    "description": "Complete range of structural and corrosion-resistant fasteners. Includes metric and inch thread hex head bolts, socket cap screws, full-thread stud bolts, and spring washers.",
    "specifications": [
      "Grades: High Tensile Grade 8.8, 10.9, 12.9; SS A2-70 (SS 304), A4-70 / A4-80 (SS 316)",
      "Standards: DIN 931, DIN 933, DIN 934, ASTM A193 B7/B8/B8M, ASTM A194 2H/Gr 8",
      "Thread Sizes: M3 to M64; 1/4\" to 2-1/2\" UNC/UNF/BSW",
      "Coatings: Black oxide, Zinc phosphated, Hot-dip galvanized, Cadmium plated"
    ],
    "brands": [
      "Tata Steel",
      "Ratnamani Metals & Tubes"
    ],
    "popular": true,
    "applications": [
      "Flange Bolting",
      "Heavy Machinery Erection",
      "Structural Steel Framing",
      "Plant Maintenance"
    ],
    "discountBadge": "15% OFF Bulk",
    "imageUrl": "./products/industrial-fasteners.png"
  },
  {
    "id": "u-bolts-clamps",
    "name": "U Bolts & Clamps",
    "category": "mechanical-items",
    "subCategory": "Piping Support & Clamps",
    "tagline": "Heavy-duty pipe support U-bolts, saddle clamps & cushioned pipe hangers",
    "description": "Precision bent pipe U-bolts supplied with double nuts and washers. Ideal for securing industrial piping, conduit lines, and structural beams against vibration.",
    "specifications": [
      "Sizes: 1/2\" NB to 36\" NB pipe diameter execution",
      "Material: Carbon Steel Mild Steel (IS 2062), SS 304, SS 316",
      "Types: Standard Round Bend, Square Bend, Rubber / Neoprene Coated",
      "Accessories: Includes 4 Hex Nuts, 2 Spring Washers, Backing Grip Plates",
      "Finishing: Electro-Galvanized, Hot-Dip Galvanized, Passivated"
    ],
    "brands": [
      "Tata Steel",
      "Jindal Steel & Power"
    ],
    "popular": false,
    "applications": [
      "Piping Rigging",
      "HVAC Ducting",
      "Hydraulic Tubing Support",
      "Offshore Structures"
    ],
    "discountBadge": "Special Price",
    "imageUrl": "./products/u-bolts-clamps.png"
  },
  {
    "id": "rubber-ptfe-gaskets",
    "name": "Rubber & PTFE Gaskets",
    "category": "mechanical-items",
    "subCategory": "Sealing Solutions",
    "tagline": "Spiral wound, expanded PTFE, neoprene, EPDM & CAF replacement gaskets",
    "description": "High-integrity sealing gaskets engineered for ANSI B16.5 and DIN flanges. Resistant to thermal cycling, corrosive chemicals, high pressure steam, and aggressive solvents.",
    "specifications": [
      "Types: Spiral Wound (SS 316/Graphite/PTFE with inner/outer rings), Full Face & Ring Gaskets",
      "Materials: 100% Virgin PTFE, Expanded PTFE, EPDM, Nitrile, Viton (FKM), Neoprene",
      "Pressure Ratings: Class 150#, 300#, 600#, 900#, 1500#, PN16, PN40",
      "Temperature Range: -200°C up to +550°C",
      "Certifications: FDA compliant, ASME B16.20 standard"
    ],
    "brands": [
      "Ratnamani Metals & Tubes",
      "Tata Steel"
    ],
    "popular": true,
    "applications": [
      "Chemical Reactors",
      "High Pressure Steam Lines",
      "Heat Exchangers",
      "Water Mains"
    ],
    "badge": "Essential",
    "discountBadge": "10% OFF",
    "imageUrl": "./products/rubber-ptfe-gaskets.png"
  },
  {
    "id": "hose-pipes-clamps",
    "name": "Hose Pipes & Clamps",
    "category": "mechanical-items",
    "subCategory": "Fluid Transfer & Clamps",
    "tagline": "Stainless steel braided hoses, steam hoses, hydraulic hoses & heavy T-bolt clamps",
    "description": "Flexible corrugated stainless steel hoses with external SS wire braiding for vibration dampening, high temperature steam loops, and aggressive fluid transfer skid assemblies.",
    "specifications": [
      "Hose MOC: Corrugated SS 304 / SS 316 with single / double wire braid",
      "End Fittings: Flanged (SORF/WNRF), BSP/NPT Male-Female, Quick Camlock",
      "Clamps: Heavy-Duty T-Bolt Hose Clamps, Worm Drive SS Hose Clips (W4 / W5)",
      "Pressure Capability: Up to 250 Bar (depending on hose size and braiding)",
      "Thermal Limit: -70°C to +400°C"
    ],
    "brands": [
      "Ratnamani Metals & Tubes",
      "Parker Legris"
    ],
    "popular": false,
    "applications": [
      "Pump Inlet-Outlet Dampening",
      "Thermal Oil Circuits",
      "Chemical Unloading Skids"
    ],
    "discountBadge": "12% OFF",
    "imageUrl": "./products/hose-pipes-clamps.png"
  },
  {
    "id": "ss-sheets-plates",
    "name": "SS Sheets & Plates",
    "category": "mechanical-items",
    "subCategory": "Raw Material & Sheeting",
    "tagline": "Hot-rolled & cold-rolled stainless steel sheets, coils, plates & chequered sheets",
    "description": "Prime quality SS sheets, plates, and coils with ultra-flat surfaces and consistent metallurgical composition. Suitable for tank fabrication, equipment cladding, cleanroom paneling, and baffles.",
    "specifications": [
      "Grades: SS 304, SS 304L, SS 316, SS 316L, SS 310, SS 410",
      "Thickness: 0.5 mm up to 50 mm",
      "Sheet Sizes: 1000x2000 mm, 1250x2500 mm, 1500x3000 mm, Custom cut",
      "Finish: 2B, HRAP, No. 4 Hairline, BA, Chequered",
      "Certification: 100% Original Mill Test Certificate (MTC) supplied"
    ],
    "brands": [
      "Tata Steel",
      "JSW Steel",
      "Jindal Steel & Power"
    ],
    "popular": true,
    "applications": [
      "Tank & Vessel Fabrication",
      "Cleanroom Cladding",
      "Machine Guards",
      "Food Handling"
    ],
    "discountBadge": "15% OFF Bulk",
    "imageUrl": "./products/ss-sheets-plates.png"
  },
  {
    "id": "industrial-casters-wheels",
    "name": "Industrial Casters / Wheels",
    "category": "mechanical-items",
    "subCategory": "Material Handling & Hardware",
    "tagline": "Heavy-duty polyurethane, nylon & cast iron swivel & brake caster wheels",
    "description": "Heavy load caster wheel assemblies engineered for warehouse trolleys, mobile cleanroom skids, heavy equipment rigs, and factory automated guided carts (AGVs).",
    "specifications": [
      "Wheel Materials: High-elastic Polyurethane (PU), Cast Iron, Forged Steel, Virgin White Nylon",
      "Load Capacity: 100 kg to 5,000 kg per caster",
      "Types: Swivel, Rigid / Fixed, Swivel with Total Foot Brake",
      "Bearings: Precision Double Ball Bearing / Taper Roller Bearings in swivel head",
      "Mounting: Top Plate Mounting with standard hole patterns"
    ],
    "brands": [
      "Tata Steel",
      "Fenner"
    ],
    "popular": false,
    "applications": [
      "Factory Trolleys",
      "Pharma Cleanroom Carts",
      "Tool Racks",
      "Mobile Scaffoldings"
    ],
    "discountBadge": "Special Offer",
    "imageUrl": "./products/industrial-casters-wheels.png"
  },
  {
    "id": "mccb",
    "name": "MCCB (Molded Case Circuit Breakers)",
    "category": "electrical-items",
    "subCategory": "Power Distribution & Protection",
    "tagline": "High-breaking capacity industrial MCCBs from 16A to 1250A",
    "description": "Heavy-duty Molded Case Circuit Breakers designed for low-voltage industrial distribution networks. Features thermal-magnetic and microprocessor-based electronic trip units with high fault-withstand ratings.",
    "specifications": [
      "Current Rating: 16A up to 1250A (3-Pole & 4-Pole configurations)",
      "Breaking Capacity (Icu): 25kA, 36kA, 50kA, 70kA, 100kA at 415V AC",
      "Trip Units: Thermal-Magnetic (TMD) and Microprocessor / Electronic Trip Units",
      "Accessories: Shunt trip, under-voltage release, auxiliary contacts, rotary handles, motorized mechanism",
      "Standards: IEC 60947-2, IS/IEC 60947-2"
    ],
    "brands": [
      "Schneider Electric",
      "Siemens",
      "ABB",
      "Eaton",
      "L&T Electrical & Automation"
    ],
    "popular": true,
    "applications": [
      "Main LT Switchboards",
      "Motor Control Centers (MCC)",
      "PCC Panels",
      "Substation Feeder Panels"
    ],
    "badge": "Tier-1 Stock",
    "discountBadge": "12% OFF",
    "imageUrl": "./products/mccb.png"
  },
  {
    "id": "vcb",
    "name": "VCB (Vacuum Circuit Breakers)",
    "category": "electrical-items",
    "subCategory": "Medium Voltage Switchgear",
    "tagline": "11kV / 33kV indoor drawout and outdoor vacuum circuit breakers up to 2000A",
    "description": "Medium voltage vacuum circuit breakers engineered for distribution substations, high-voltage transformer protection, and large industrial plant main incoming feeders.",
    "specifications": [
      "Voltage Ratings: 3.3 kV, 6.6 kV, 11 kV, 33 kV",
      "Continuous Current: 630A, 1250A, 1600A, 2000A, 3150A",
      "Short-Circuit Breaking: 25kA, 31.5kA, 40kA for 3 seconds",
      "Execution: Horizontal drawout truck mounted inside metal-clad switchgear",
      "Standards: IEC 62271-100, IS 13118"
    ],
    "brands": [
      "Siemens",
      "ABB",
      "Schneider Electric",
      "L&T Electrical & Automation"
    ],
    "popular": true,
    "applications": [
      "Substation Incomers",
      "Captive Power Plants",
      "Heavy Steel Mills",
      "Solar Power Plants"
    ],
    "badge": "High Voltage",
    "discountBadge": "OEM Contractor Rate",
    "imageUrl": "./products/vcb.png"
  },
  {
    "id": "ac-switches",
    "name": "AC Switches",
    "category": "electrical-items",
    "subCategory": "Switchgear & Isolation",
    "tagline": "On-load changeover switches, switch disconnector fuses (SDF) up to 3150A",
    "description": "Industrial grade switch-disconnector units and motorized changeover switches engineered for safe electrical isolation under heavy load conditions up to 1000V.",
    "specifications": [
      "Types: On-Load Changeover Switches, Switch Disconnector Fuse (SDF), Rotary Cam Switches",
      "Current Range: 25A to 3150A (3P & 4P)",
      "Utilization Category: AC-23A for highly inductive motor loads",
      "Enclosures: Open execution or IP65 Sheet Steel / Cast Aluminum enclosures",
      "Safety: Padlockable in OFF position, door interlock mechanism"
    ],
    "brands": [
      "Schneider Electric",
      "L&T Electrical & Automation",
      "Havells",
      "Siemens"
    ],
    "popular": false,
    "applications": [
      "Mains-DG Changeover",
      "Local Motor Isolators",
      "Solar Inverter Disconnect",
      "Panel Master Switches"
    ],
    "discountBadge": "10% OFF",
    "imageUrl": "./products/ac-switches.png"
  },
  {
    "id": "acb",
    "name": "ACB (Air Circuit Breakers)",
    "category": "electrical-items",
    "subCategory": "Power Distribution & Protection",
    "tagline": "High-current drawout & fixed ACBs up to 6300A with intelligent trip units",
    "description": "Heavy power Air Circuit Breakers designed for main incomers and high-capacity transformer outputs. Equipped with intelligent microprocessor release units for comprehensive power monitoring.",
    "specifications": [
      "Current Ratings: 630A, 800A, 1000A, 1250A, 1600A, 2000A, 2500A, 3200A, 4000A, 6300A",
      "Configuration: 3-Pole & 4-Pole, Draw-out (EDO/MDO) and Fixed types",
      "Breaking Capacity: 50kA, 65kA, 85kA, 100kA at 415V AC for 1 sec (Icw)",
      "Protection Unit: LSIG (Overload, Short-circuit, Instantaneous, Ground fault) with RS485 Modbus",
      "Mechanism: Manual spring charged or Motorized with shunt/closing coils"
    ],
    "brands": [
      "Schneider Electric",
      "Siemens",
      "ABB",
      "L&T Electrical & Automation",
      "Eaton"
    ],
    "popular": true,
    "applications": [
      "Transformer Incomers",
      "Main Power Distribution (PCC)",
      "Industrial Generators (DG)",
      "UPS Paralleling"
    ],
    "badge": "Heavy Industrial",
    "discountBadge": "Special Project Price",
    "imageUrl": "./products/acb.png"
  },
  {
    "id": "switchgear-panels",
    "name": "Switchgear & Panels",
    "category": "electrical-items",
    "subCategory": "Power Distribution Systems",
    "tagline": "Custom engineered PCC, MCC, APFC, VFD control & automation LT panels",
    "description": "Fully factory-assembled, wired, and tested low-voltage power distribution switchboards and motor control center panels built with certified Form 3b/4b compartmentalization.",
    "specifications": [
      "Types: Power Control Center (PCC), Motor Control Center (MCC), Automatic Power Factor Correction (APFC)",
      "Busbar System: Electrolytic grade Copper / Aluminium busbars certified for 50kA/1sec",
      "Enclosure: CRCA sheet steel, 2mm thickness, 7-tank powder coated IP54/IP55",
      "Smart Metering: Multifunction energy meters with RS485 Modbus connectivity",
      "Compliance: IEC 61439-1/2, IS 8623 standards"
    ],
    "brands": [
      "Schneider Electric",
      "Siemens",
      "ABB",
      "L&T Electrical & Automation"
    ],
    "popular": true,
    "applications": [
      "Manufacturing Plants",
      "Pharma SEZ Units",
      "Commercial Buildings",
      "Substations"
    ],
    "discountBadge": "Turnkey Quote",
    "imageUrl": "./products/switchgear-panels.png"
  },
  {
    "id": "distribution-boards",
    "name": "Distribution Boards",
    "category": "electrical-items",
    "subCategory": "Panel Enclosures & Distribution",
    "tagline": "Heavy-duty SPN, TPN & vertical distribution boards up to 250A",
    "description": "Precision engineered sheet steel sub-distribution boards for modular DIN-rail MCBs, RCCBs, and isolators. Offers IP43/IP54 ingress protection with insulated copper busbars.",
    "specifications": [
      "Configurations: SPN (4 to 16 Ways), TPN (4 to 12 Ways), Vertical TPN (MCCB Incomer)",
      "Enclosure Material: Deep-drawn CRCA sheet steel with epoxy polyester powder coat",
      "Door Type: Single Door & Double Door (acrylic / metal window)",
      "Busbar: Electrolytic tinned copper busbar rated up to 250A",
      "Ingress Protection: IP30 (indoor), IP43, IP54 weatherproof outdoor"
    ],
    "brands": [
      "Schneider Electric",
      "Havells",
      "Legrand",
      "Siemens"
    ],
    "popular": false,
    "applications": [
      "Lighting Sub-Distribution",
      "Factory Machine Power Feeds",
      "Cleanroom Panels",
      "Commercial Suites"
    ],
    "discountBadge": "10% OFF",
    "imageUrl": "./products/distribution-boards.png"
  },
  {
    "id": "electrical-spares",
    "name": "Electrical Spares",
    "category": "electrical-items",
    "subCategory": "Maintenance Spares",
    "tagline": "Arc chutes, fixed/moving contacts, shunt trip coils, auxiliary contacts & carbon brushes",
    "description": "Critical OEM replacement spares for maintaining and retrofitting circuit breakers, contactors, and high-voltage disconnectors without replacing entire switchboards.",
    "specifications": [
      "Items: Silver alloy Contact Kits, Arc Chutes, Shunt Trip / UVR Coils (24V-415V), Mechanical Interlocks",
      "Compatibility: Designed for Schneider, Siemens, L&T, ABB ACB/MCCB frames",
      "Motor Spares: Industrial carbon brushes, brush holders, slip rings",
      "Certifications: OEM tested and calibrated"
    ],
    "brands": [
      "Schneider Electric",
      "Siemens",
      "ABB",
      "L&T Electrical & Automation"
    ],
    "popular": false,
    "applications": [
      "Preventive Maintenance",
      "Emergency Breaker Overhaul",
      "Motor Servicing"
    ],
    "discountBadge": "Fast Dispatch",
    "imageUrl": "./products/electrical-spares.png"
  },
  {
    "id": "relays-timers",
    "name": "Relays & Timers",
    "category": "electrical-items",
    "subCategory": "Protection & Timing Relays",
    "tagline": "Thermal bimetallic overload relays, multi-function digital timers & monitoring relays",
    "description": "Precision protective relays and industrial timing modules for motor safety, phase failure detection, reverse phase sequence prevention, and automated machinery cycling.",
    "specifications": [
      "Types: Bimetallic Thermal Overload Relays (0.1A to 630A), Star-Delta Timers, Off-Delay Timers",
      "Monitoring: Voltage Monitoring Relays (Under/Over Voltage, Phase Asymmetry, Phase Loss)",
      "Control Relays: 8-Pin / 11-Pin Plug-in Relay bases with 2 C/O, 4 C/O 10A contacts & LED status",
      "Mounting: Direct contactor mounting or standard 35mm DIN rail",
      "Standards: IEC 60947-4-1, IEC 61812-1"
    ],
    "brands": [
      "Schneider Electric",
      "Siemens",
      "ABB",
      "Panasonic"
    ],
    "popular": true,
    "applications": [
      "Motor Starters",
      "Conveyor Automation",
      "Pump Panels",
      "Generator Synchronizing"
    ],
    "discountBadge": "10% OFF",
    "imageUrl": "./products/relays-timers.png"
  },
  {
    "id": "power-contactors",
    "name": "Power Contactors",
    "category": "electrical-items",
    "subCategory": "Motor Control & Automation",
    "tagline": "3-Pole & 4-Pole heavy-duty motor duty contactors up to 1000A",
    "description": "Rugged electrical contactors engineered for frequent motor starting, reversing, star-delta combinations, and capacitor switching with superior electrical endurance up to 1.5 million operations.",
    "specifications": [
      "Power Range: 9A up to 1000A (AC-3 rating for motor loads up to 450 kW)",
      "Coil Voltages: 24V DC, 110V AC, 230V AC, 415V AC (50/60 Hz)",
      "Types: 3-Pole Power Contactors, 4-Pole Power Contactors, Capacitor Duty Contactors",
      "Auxiliary Contacts: Built-in 1NO+1NC, 2NO+2NC, expandable clip-on add-on blocks",
      "Accessories: Mechanical interlock kits, pneumatic timer blocks, surge suppressors"
    ],
    "brands": [
      "Schneider Electric",
      "Siemens",
      "ABB",
      "L&T Electrical & Automation",
      "CHNT"
    ],
    "popular": true,
    "applications": [
      "Direct-On-Line (DOL) Starters",
      "Star-Delta Starters",
      "Capacitor Banks (APFC)",
      "Crane Hoists"
    ],
    "badge": "Industrial Grade",
    "discountBadge": "12% OFF",
    "imageUrl": "./products/power-contactors.png"
  },
  {
    "id": "push-buttons-indicators",
    "name": "Push Buttons & Indicators",
    "category": "electrical-items",
    "subCategory": "Panel Accessories & HMI",
    "tagline": "22.5mm metallic & plastic push buttons, pilot LED lamps, mushroom E-stops",
    "description": "Complete range of control room and panel-front signaling devices, illuminated push buttons, emergency stop latching buttons, and high-visibility LED cluster pilot lights.",
    "specifications": [
      "Mounting Diameter: Standard 22.5 mm cut-out",
      "Actuator Types: Flush Push Button, Projecting, Spring Return, Key-Operated, Mushroom E-Stop (Turn-to-reset)",
      "Colors: Red, Green, Yellow, Blue, White, Amber",
      "Pilot Lamps: High-intensity LED cluster indicators (24V AC/DC, 110V AC, 230V AC)",
      "Ingress Protection: IP65 / IP66 oil-tight, dust-tight front face"
    ],
    "brands": [
      "Schneider Electric",
      "Siemens",
      "L&T Electrical & Automation"
    ],
    "popular": true,
    "applications": [
      "Control Desks",
      "Operator Consoles",
      "Packaging Machinery",
      "Crane Pendants"
    ],
    "discountBadge": "Special Bundle",
    "imageUrl": "./products/push-buttons-indicators.png"
  },
  {
    "id": "wires-cables",
    "name": "Wires & Cables",
    "category": "electrical-items",
    "subCategory": "Conductors & Power Cabling",
    "tagline": "LT XLPE armoured power cables, flexible control cables & FRLS copper wires",
    "description": "Industrial high-conductivity copper and aluminium armoured/unarmoured cables with XLPE/PVC insulation. Available in fire-retardant low-smoke (FRLS) and zero-halogen (LSZH) variants.",
    "specifications": [
      "Types: 1.1 kV LT XLPE Armoured Power Cables, Multicore Flexible Control Cables (0.5 to 4 sq.mm)",
      "Conductor MOC: Electrolytic Grade Plain Annealed Copper / High Purity Aluminium",
      "Cores & Sizes: 1-Core up to 61-Core (1.5 sq.mm up to 630 sq.mm)",
      "Sheath & Insulation: FRLS PVC, Zero Halogen (LSZH), Heat Resistant HR-PVC",
      "Standards: IS 7098 (Part 1), IS 1554 (Part 1), BS 5308"
    ],
    "brands": [
      "Havells",
      "Schneider Electric",
      "Legrand"
    ],
    "popular": true,
    "applications": [
      "Factory Power Distribution",
      "Motor Feeder Runs",
      "Analog Signal Transducers",
      "Machine Internal Wiring"
    ],
    "badge": "ISI Certified",
    "discountBadge": "15% OFF Bulk",
    "imageUrl": "./products/wires-cables.png"
  },
  {
    "id": "terminal-blocks-connectors",
    "name": "Terminal Blocks & Connectors",
    "category": "electrical-items",
    "subCategory": "Wiring Hardware & Terminations",
    "tagline": "DIN rail screw clamp, spring clamp & push-in terminal blocks up to 240 sq.mm",
    "description": "High-density DIN-rail modular terminal blocks for reliable control wire interconnections in distribution boards, marshalling racks, and automation cabinets.",
    "specifications": [
      "Connection Tech: Screw Clamp, Spring Clamp, Push-In (Tool-less rapid wiring)",
      "Wire Range: 0.5 sq.mm up to 240 sq.mm",
      "Voltage / Current: Up to 1000V / 415A ratings",
      "Types: Feed-Through, Ground / PE Earth Terminals, Double-Deck, Disconnect / Knife, Fuse Terminals",
      "Insulation: Polyamide 6.6 (UL 94-V0 flame retardant)"
    ],
    "brands": [
      "Schneider Electric",
      "Legrand",
      "Siemens"
    ],
    "popular": false,
    "applications": [
      "Control Panels",
      "PLC Marshalling Cabinets",
      "Junction Boxes",
      "Motor Terminal Cabinets"
    ],
    "discountBadge": "10% OFF",
    "imageUrl": "./products/terminal-blocks-connectors.png"
  },
  {
    "id": "lugs-terminals",
    "name": "Lugs & Terminals",
    "category": "electrical-items",
    "subCategory": "Wiring Hardware & Terminations",
    "tagline": "Heavy-duty electrolytic tinned copper & aluminium crimping cable lugs",
    "description": "Heavy-duty cable termination accessories engineered for armoured and unarmoured cables. Guarantees IP66 environmental ingress protection and low electrical contact resistance.",
    "specifications": [
      "Materials: High conductivity electrolytic copper (99.9% purity), tin plated; EC grade aluminium",
      "Types: Ring / Eye type, Pin type, Fork / Spades, In-line butt connectors, Tubular heavy duty",
      "Cable Sizes: 1.5 sq.mm up to 1000 sq.mm",
      "Stud Sizes: M4, M5, M6, M8, M10, M12, M16, M20",
      "Standards: DIN 46235, BS 4579, IS 8337"
    ],
    "brands": [
      "Schneider Electric",
      "Havells"
    ],
    "popular": true,
    "applications": [
      "Transformer Terminations",
      "Panel Busbar Connections",
      "Motor Junction Terminals"
    ],
    "discountBadge": "Bulk Pack",
    "imageUrl": "./products/lugs-terminals.png"
  },
  {
    "id": "cable-glands-accessories",
    "name": "Cable Glands & Accessories",
    "category": "electrical-items",
    "subCategory": "Wiring Hardware & Terminations",
    "tagline": "Brass double compression / single compression weatherproof & flameproof glands",
    "description": "Heavy-duty brass nickel-plated cable glands designed to clamp armoured and unarmoured cables while maintaining IP66 dust and moisture sealing.",
    "specifications": [
      "Types: Single Compression (SC), Double Compression (DC) Weatherproof & Flameproof (Ex d)",
      "Material: Brass (IS 319), Nickel Plated Brass, SS 316, Polyamide Nylon",
      "Thread Options: Metric (M16 to M100), NPT, BSP, PG threads",
      "Accessories: PVC Shrouds, Earth Tags, Lock Nuts, Neoprene Washers",
      "Ingress Protection: IP66 / IP67 certified"
    ],
    "brands": [
      "Havells",
      "Schneider Electric"
    ],
    "popular": false,
    "applications": [
      "Panel Cable Entry Plates",
      "Hazardous Area Substations",
      "Motor Terminal Boxes"
    ],
    "discountBadge": "10% OFF",
    "imageUrl": "./products/cable-glands-accessories.png"
  },
  {
    "id": "fuses-fuse-holders",
    "name": "Fuses & Fuse Holders",
    "category": "electrical-items",
    "subCategory": "Short-Circuit Protection",
    "tagline": "Industrial HRC blade fuses, semiconductor ultra-rapid fuses & DIN rail fuse carriers",
    "description": "High Rupturing Capacity (HRC) industrial fuse links designed for short-circuit protection of distribution cables, transformers, and semiconductor drives up to 120kA breaking capacity.",
    "specifications": [
      "Types: DIN Blade Type (Size 000, 00, 0, 1, 2, 3), Bolted Tag (BS 88), Cylindrical (10x38 mm, 14x51 mm, 22x58 mm)",
      "Current Ratings: 2A up to 1250A",
      "Breaking Capacity: 80kA to 120kA at 415V / 500V / 690V AC",
      "Specialty: Ultra-Rapid (gR / aR) semiconductor protection fuses for VFDs & thyristors",
      "Fuse Holders: 1P, 2P, 3P finger-safe DIN rail mounted fuse disconnectors with LED indicators"
    ],
    "brands": [
      "Schneider Electric",
      "Siemens",
      "Eaton",
      "C&S Electric"
    ],
    "popular": false,
    "applications": [
      "VFD Converter Protection",
      "Capacitor Bank Incomers",
      "Feeder Pillars",
      "UPS Battery Lines"
    ],
    "discountBadge": "Special Price",
    "imageUrl": "./products/fuses-fuse-holders.png"
  },
  {
    "id": "control-switches",
    "name": "Control Switches",
    "category": "electrical-items",
    "subCategory": "Switchgear & Control",
    "tagline": "Cam-operated rotary switches, voltmeter/ammeter selector switches up to 63A",
    "description": "Multi-position cam switches designed for instrument selection, motor reversing, star-delta manual control, and local-remote automation mode bypass.",
    "specifications": [
      "Types: Voltmeter Selector (OFF-RY-YB-BR), Ammeter Selector (OFF-R-Y-B), Auto/Manual/Remote, Reversing",
      "Current Ratings: 6A, 10A, 16A, 25A, 32A, 63A",
      "Positions: 2, 3, 4, 6, 8-way step angles (30°, 45°, 60°, 90°)",
      "Mounting: Panel Door Flush Mounting, Base Mounting, Enclosed in Sheet Steel box",
      "Contacts: Silver-alloy double-break contacts"
    ],
    "brands": [
      "Schneider Electric",
      "Siemens",
      "L&T Electrical & Automation"
    ],
    "popular": false,
    "applications": [
      "Control Desks",
      "Generator Control Panels",
      "Test Benches",
      "Machine Selection Logic"
    ],
    "discountBadge": "10% OFF",
    "imageUrl": "./products/control-switches.png"
  },
  {
    "id": "mcb-rccb-elcb",
    "name": "MCB, RCCB & ELCB",
    "category": "electrical-items",
    "subCategory": "Life & Equipment Protection",
    "tagline": "DIN rail miniature circuit breakers (0.5A-63A) & 30mA residual current breakers",
    "description": "High-sensitivity residual current devices and miniature circuit breakers designed to detect hazardous earth leakage currents, preventing electrical shocks and equipment burnout.",
    "specifications": [
      "MCB Ratings: 0.5A to 63A (B, C, D Tripping Curves, 10kA Breaking Capacity)",
      "RCCB Sensitivity: 30 mA (Personnel safety), 100 mA, 300 mA (Fire prevention)",
      "Poles: 1P, 1P+N, 2P, 3P, 3P+N, 4P execution",
      "Combined Units: RCBO (Integrated Overload + Short-Circuit + Earth Leakage in 2-module width)",
      "Standards: IS/IEC 60898-1, IS 12640-1"
    ],
    "brands": [
      "Schneider Electric",
      "Siemens",
      "Havells",
      "Legrand",
      "ABB",
      "CHNT"
    ],
    "popular": true,
    "applications": [
      "Sub-Distribution Panels",
      "Machine Wet Areas",
      "Control Circuits",
      "Industrial Offices"
    ],
    "badge": "Safety Critical",
    "discountBadge": "12% OFF",
    "imageUrl": "./products/mcb-rccb-elcb.png"
  },
  {
    "id": "busbars-copper-aluminium",
    "name": "Copper & Aluminium Busbars",
    "category": "electrical-items",
    "subCategory": "Power Distribution Systems",
    "tagline": "High-conductivity flat rectangular busbar sections & heat-shrink insulation sleeves",
    "description": "Electrolytic grade plain and tinned copper & aluminium flat busbars engineered to carry high electrical current with minimal thermal losses in industrial switchboards.",
    "specifications": [
      "Materials: Electrolytic Copper (E-Cu 99.9% conductivity, 100% IACS); EC grade Aluminium (61% IACS)",
      "Dimensions: Width 12 mm to 200 mm; Thickness 3 mm to 25 mm",
      "Plating: Plain bright finish, Full tin plated, Silver plated on contact pads",
      "Current Capacity: 100A up to 5000A continuous busbar runs",
      "Insulation: Polyolefin high-voltage heat-shrink insulation sleeves (Red, Yellow, Blue, Black, Green)"
    ],
    "brands": [
      "Schneider Electric",
      "L&T Electrical & Automation",
      "C&S Electric"
    ],
    "popular": true,
    "applications": [
      "PCC / MCC Main Busbar Chambers",
      "Transformer Busduct Risers",
      "Plating Rectifiers"
    ],
    "discountBadge": "Custom Cut",
    "imageUrl": "./products/busbars-copper-aluminium.png"
  },
  {
    "id": "proximity-sensors",
    "name": "Proximity Sensors",
    "category": "automation-electronics",
    "subCategory": "Sensors & Transducers",
    "tagline": "Inductive, capacitive & magnetic contactless position detection sensors",
    "description": "High-speed solid-state proximity sensors for detecting metallic and non-metallic objects without physical contact in automated packaging, conveyor, and machine tool lines.",
    "specifications": [
      "Types: Inductive (ferrous/non-ferrous metals), Capacitive (liquids, plastics, powders)",
      "Body Styles: Cylindrical M8, M12, M18, M30 threaded brass nickel-plated; Rectangular flat pack",
      "Sensing Range: 1 mm up to 40 mm sensing distance (Flush & Non-Flush mountable)",
      "Outputs: PNP / NPN, NO / NC, 2-Wire DC, 2-Wire AC/DC (10-30V DC / 90-250V AC)",
      "Ingress Protection: IP67 / IP68 / IP69K washdown resistant"
    ],
    "brands": [
      "Panasonic",
      "Schneider Electric",
      "Siemens"
    ],
    "popular": true,
    "applications": [
      "Bottle Counting Lines",
      "Cylinder Position Feedback",
      "Conveyor Sorting",
      "Machine Tool Indexing"
    ],
    "badge": "Automation Core",
    "discountBadge": "10% OFF",
    "imageUrl": "./products/proximity-sensors.png"
  },
  {
    "id": "photoelectric-sensors",
    "name": "Photoelectric Sensors",
    "category": "automation-electronics",
    "subCategory": "Sensors & Transducers",
    "tagline": "Through-beam, retro-reflective & diffuse optical detection sensors",
    "description": "Precision optical sensors equipped with infrared and visible red laser emitters for long-distance presence sensing, transparent object detection, and color mark registration.",
    "specifications": [
      "Modes: Through-Beam (up to 50 meters), Polarized Retro-Reflective (up to 7 meters), Diffuse Reflective",
      "Specialty: Clear glass/PET bottle detection, Color Mark Registration, Background suppression",
      "Light Source: Visible Red LED, Infrared LED, Class 1 Laser diode",
      "Response Time: High speed < 0.5 milliseconds",
      "Housing: Compact plastic rectangular (IP67) or stainless steel washdown IP69K"
    ],
    "brands": [
      "Panasonic",
      "Schneider Electric",
      "Siemens"
    ],
    "popular": true,
    "applications": [
      "Carton Detection",
      "High Speed Web Inspection",
      "Door Access Safety",
      "Sorting Chutes"
    ],
    "discountBadge": "10% OFF",
    "imageUrl": "./products/photoelectric-sensors.png"
  },
  {
    "id": "pressure-sensors",
    "name": "Pressure Sensors",
    "category": "automation-electronics",
    "subCategory": "Sensors & Transducers",
    "tagline": "Digital pressure switches & 4-20mA ceramic / piezoresistive transmitters",
    "description": "Electronic pressure transmitters and digital display switches for real-time monitoring of hydraulic, pneumatic, and steam process pressures with analog 4-20mA / Modbus outputs.",
    "specifications": [
      "Pressure Ranges: Vacuum (-1 to 0 Bar), Low (0-10 Bar), High (0-600 Bar)",
      "Wetted Material: SS 316L diaphragm, Ceramic thick-film sensor",
      "Output Signals: 4-20mA (2-Wire), 0-10V DC, IO-Link, Dual PNP Switch points",
      "Process Connections: 1/4\" BSP/NPT, 1/2\" BSP/NPT male",
      "Accuracy: ±0.25% to ±0.5% of full scale"
    ],
    "brands": [
      "SMC",
      "FESTO",
      "Panasonic"
    ],
    "popular": false,
    "applications": [
      "Hydraulic Power Packs",
      "Compressed Air Mains",
      "Boiler Feed Water",
      "Pump Discharge Control"
    ],
    "discountBadge": "Special Price",
    "imageUrl": "./products/pressure-sensors.png"
  },
  {
    "id": "temperature-sensors",
    "name": "Temperature Sensors",
    "category": "automation-electronics",
    "subCategory": "Sensors & Transducers",
    "tagline": "PT100 RTD sensors, mineral insulated Type K/J thermocouples & head transmitters",
    "description": "Industrial resistance temperature detectors and thermocouple assemblies engineered for continuous thermal monitoring in reactors, heat exchangers, ovens, and furnaces.",
    "specifications": [
      "Types: PT100, PT1000 Class A/B RTD (3-Wire / 4-Wire); Thermocouples Type K, J, T, R, S",
      "Sheath Material: SS 316, SS 310, Inconel 600, Ceramic outer protection tube",
      "Sheath Diameters: 3 mm, 6 mm, 8 mm x Custom immersion lengths",
      "Transmitter: Head mounted 4-20mA 2-Wire analog converter with HART protocol",
      "Temperature Range: -200°C up to +1300°C"
    ],
    "brands": [
      "Siemens",
      "Schneider Electric",
      "Panasonic"
    ],
    "popular": false,
    "applications": [
      "Chemical Reactors",
      "Autoclaves & Sterilizers",
      "Furnace Control",
      "Cold Storage Monitoring"
    ],
    "discountBadge": "Calibrated",
    "imageUrl": "./products/temperature-sensors.png"
  },
  {
    "id": "vfd-ac-drives",
    "name": "VFD / AC Drives",
    "category": "automation-electronics",
    "subCategory": "Variable Speed Drives",
    "tagline": "0.4 kW to 315 kW sensorless vector variable frequency inverter drives",
    "description": "High-performance AC variable frequency drives engineered for precise motor speed control, energy savings on pumps/fans, and high starting torque in heavy industrial applications.",
    "specifications": [
      "Power Range: Single Phase 230V (0.4 to 2.2 kW); Three Phase 415V (0.75 kW to 315+ kW)",
      "Control Methods: V/F Control, Sensorless Vector Control (SVC), Closed-Loop Field Oriented Control",
      "Overload Capacity: 150% for 60 seconds (Heavy Duty), 120% for 60 seconds (Normal Duty)",
      "Communications: Modbus RTU (RS485 built-in), Profinet, Ethernet/IP, CANopen option cards",
      "Features: Built-in EMC filter, PID controller, braking chopper unit, detachable LED keypad"
    ],
    "brands": [
      "Schneider Electric",
      "Siemens",
      "ABB",
      "Panasonic"
    ],
    "popular": true,
    "applications": [
      "Centrifugal Pumps",
      "AHU HVAC Blowers",
      "Belt Conveyors",
      "Extruders & Mixers",
      "Crane Hoists"
    ],
    "badge": "High Efficiency",
    "discountBadge": "Save ₹15,000",
    "imageUrl": "./products/vfd-ac-drives.png"
  },
  {
    "id": "servo-drives",
    "name": "Servo Drives",
    "category": "automation-electronics",
    "subCategory": "Motion Control",
    "tagline": "Ultra-fast response AC servo motors & digital servo amplifiers for multi-axis CNC",
    "description": "Precision closed-loop motion control servo drive packages offering exceptional positioning accuracy, high dynamic response, and zero backlash in robotic and packaging machinery.",
    "specifications": [
      "Power Range: 100W up to 15 kW with matching high-inertia / low-inertia servo motors",
      "Feedback: 23-bit / 24-bit absolute optical encoder (over 16 million pulses per revolution)",
      "Speed Range: Up to 6000 RPM rated speed",
      "Control Modes: Position Control (Pulse Train / EtherCAT), Speed Control, Torque Control",
      "Fieldbus Support: EtherCAT, CANopen, Modbus, Profinet real-time motion protocols"
    ],
    "brands": [
      "Panasonic",
      "Schneider Electric",
      "Siemens"
    ],
    "popular": true,
    "applications": [
      "Packaging Form-Fill-Seal (FFS)",
      "CNC Machine Tools",
      "Pick & Place Robots",
      "Labeling Machines"
    ],
    "badge": "High Precision",
    "discountBadge": "Special OEM Rate",
    "imageUrl": "./products/servo-drives.png"
  },
  {
    "id": "plcs",
    "name": "PLCs",
    "category": "automation-electronics",
    "subCategory": "Programmable Controllers",
    "tagline": "Compact & modular industrial PLCs with built-in Ethernet, analog I/O & Modbus",
    "description": "Rugged programmable logic controllers designed for deterministic control of industrial machinery. Supports ladder logic, structured text, and function block programming.",
    "specifications": [
      "CPU Types: Compact Brick PLCs (16 to 60 I/O) & Modular Rack PLCs (expandable up to 2048 I/O)",
      "Execution Speed: Ultra-fast 0.02 µs per basic instruction",
      "Memory: Up to 4 MB program memory + SD card logging slot",
      "Built-in Ports: Dual Ethernet RJ45 (Modbus TCP/IP, Profinet), RS485 / RS232 serial",
      "Programming Standards: IEC 61131-3 compliant"
    ],
    "brands": [
      "Siemens",
      "Schneider Electric",
      "Panasonic"
    ],
    "popular": true,
    "applications": [
      "Water Treatment Automation",
      "Packaging Lines",
      "Automated Assembly Skids",
      "HVAC Plant Control"
    ],
    "badge": "Core Controller",
    "discountBadge": "10% OFF",
    "imageUrl": "./products/plcs.png"
  },
  {
    "id": "hmis-touch-panels",
    "name": "HMIs / Touch Panels",
    "category": "automation-electronics",
    "subCategory": "Operator Interfaces",
    "tagline": "4.3\" to 15.6\" color TFT industrial touchscreen operator interfaces",
    "description": "High-contrast graphic touch screens engineered for factory floor equipment visualization, parameter recipe management, alarm logging, and real-time trend plotting.",
    "specifications": [
      "Screen Sizes: 4.3\", 7.0\", 10.1\", 12.1\", 15.6\" High-Definition 65K color TFT LCD",
      "Touch Type: 4-wire resistive touch / Projected Capacitive multi-touch glass",
      "Ports: 10/100 Mbps Ethernet, RS232, RS485, USB Host (data export / barcode scanner)",
      "Protection: IP65 / NEMA 4X front panel oil and waterproof rating",
      "Protocols: Supports over 300 PLC drivers including Siemens, Schneider, Mitsubishi, Modbus"
    ],
    "brands": [
      "Schneider Electric",
      "Siemens",
      "Panasonic"
    ],
    "popular": true,
    "applications": [
      "Packaging Machines",
      "Process Reactor Desks",
      "Pharmaceutical Skids",
      "Batch Mixers"
    ],
    "discountBadge": "12% OFF",
    "imageUrl": "./products/hmis-touch-panels.png"
  },
  {
    "id": "io-modules",
    "name": "I/O Modules",
    "category": "automation-electronics",
    "subCategory": "Programmable Controllers",
    "tagline": "Digital input, transistor/relay output & high-resolution analog expansion modules",
    "description": "Snap-on expansion modules designed to scale PLC I/O capacity with optocoupler isolation against industrial electrical noise and voltage spikes.",
    "specifications": [
      "Digital I/O: 8-Channel / 16-Channel 24V DC Sink/Source Inputs; Relay / Transistor NPN/PNP Outputs",
      "Analog I/O: 4-Channel / 8-Channel 16-bit Voltage (0-10V) and Current (4-20mA) inputs/outputs",
      "Temperature Modules: Direct PT100 RTD / Thermocouple sensor input channels",
      "Isolation: 1500V AC optical isolation between field wiring and internal bus"
    ],
    "brands": [
      "Siemens",
      "Schneider Electric",
      "Panasonic"
    ],
    "popular": false,
    "applications": [
      "Panel Expansion",
      "Multiple Sensor Interfacing",
      "Analog Signal Conditioning"
    ],
    "discountBadge": "Special Price",
    "imageUrl": "./products/io-modules.png"
  },
  {
    "id": "remote-io-modules",
    "name": "Remote I/O Modules",
    "category": "automation-electronics",
    "subCategory": "Distributed Automation",
    "tagline": "Decentralized fieldbus remote I/O slice blocks over Profinet, EtherCAT & Modbus TCP",
    "description": "Modular decentralized remote slice I/O stations that install directly near field sensors and actuators, cutting control cabinet cable runs by up to 70%.",
    "specifications": [
      "Bus Couplers: Profinet, EtherCAT, Modbus TCP/IP, Ethernet/IP, CANopen",
      "Form Factor: Ultra-compact 12mm slice width with spring-clamp push-in terminal blocks",
      "Hot Swap: Modules can be replaced without powering down the fieldbus network",
      "Diagnostic LEDs: Channel-level status, bus error, and field power fault indicators"
    ],
    "brands": [
      "Siemens",
      "Schneider Electric"
    ],
    "popular": false,
    "applications": [
      "Long Conveyor Lines",
      "Material Handling Systems",
      "Distributed Plant Skids"
    ],
    "discountBadge": "10% OFF",
    "imageUrl": "./products/remote-io-modules.png"
  },
  {
    "id": "industrial-io-modules",
    "name": "Industrial I/O Modules",
    "category": "automation-electronics",
    "subCategory": "Distributed Automation",
    "tagline": "High-speed counter, encoder input & pulse output position modules",
    "description": "Special function industrial automation interface cards for high-speed pulse measurement, quadrature encoder tracking, and stepper motor control.",
    "specifications": [
      "Counter Frequency: Up to 200 kHz / 500 kHz differential pulse input",
      "Outputs: High-speed pulse train output (PTO) for stepper & pulse-direction servo control",
      "Analog Resolution: 16-bit precision with digital filtering algorithms"
    ],
    "brands": [
      "Siemens",
      "Panasonic",
      "Schneider Electric"
    ],
    "popular": false,
    "applications": [
      "Flying Shear Cutters",
      "Web Tension Feedback",
      "Linear Scale Reading"
    ],
    "discountBadge": "OEM Special",
    "imageUrl": "./products/industrial-io-modules.png"
  },
  {
    "id": "industrial-automation-modules",
    "name": "Industrial Automation Modules",
    "category": "automation-electronics",
    "subCategory": "Automation & Control",
    "tagline": "Protocol gateways, industrial ethernet switches & safety relay controllers",
    "description": "Heavy-duty industrial communication bridges, unmanaged/managed DIN-rail Ethernet switches, and SIL3 / PLe certified machinery safety interlock controllers.",
    "specifications": [
      "Gateways: Modbus RTU to Modbus TCP, Serial to Ethernet, Profinet to Modbus bridges",
      "Ethernet Switches: 5-Port / 8-Port 10/100/1000 Mbps DIN Rail Industrial Switches (IP30, 24V DC)",
      "Safety Relays: Dual-channel E-Stop monitoring, light curtain interlock (SIL 3 / Cat 4 certified)"
    ],
    "brands": [
      "Schneider Electric",
      "Siemens",
      "Panasonic"
    ],
    "popular": false,
    "applications": [
      "SCADA Network Backbone",
      "Factory OT Network Isolation",
      "Machine Safety Guards"
    ],
    "discountBadge": "10% OFF",
    "imageUrl": "./products/industrial-automation-modules.png"
  },
  {
    "id": "smps-power-supplies",
    "name": "SMPS / Power Supplies",
    "category": "automation-electronics",
    "subCategory": "Power Electronics",
    "tagline": "DIN rail regulated 24V DC / 12V DC industrial switch-mode power supplies",
    "description": "Ultra-reliable DIN rail power supplies engineered for industrial automation cabinets. Delivers clean, ripple-free 24V DC with short-circuit, overload, and overvoltage protection.",
    "specifications": [
      "Output Voltages: 24V DC, 12V DC, 48V DC (Adjustable ±10%)",
      "Current Ratings: 2.5A (60W), 5A (120W), 10A (240W), 20A (480W), 40A (960W)",
      "Input Voltage Range: Universal 85-264V AC / 120-370V DC (Single Phase & 3-Phase inputs)",
      "Efficiency: Up to 94% high efficiency with active PFC (Power Factor Correction)",
      "Protection: Hiccup short-circuit recovery, overload, thermal shutdown, DC OK relay contact"
    ],
    "brands": [
      "Schneider Electric",
      "Siemens",
      "Panasonic"
    ],
    "popular": true,
    "applications": [
      "PLC & HMI Powering",
      "Sensor Field Loops",
      "Solenoid Valve Coils",
      "DC Instrumentation"
    ],
    "badge": "24V Essential",
    "discountBadge": "10% OFF",
    "imageUrl": "./products/smps-power-supplies.png"
  },
  {
    "id": "dc-dc-converters",
    "name": "DC-DC Converters",
    "category": "automation-electronics",
    "subCategory": "Power Electronics",
    "tagline": "Galvanically isolated wide-input step-down & step-up DC voltage regulators",
    "description": "Heavy industrial isolated DC-DC converters for stabilizing fluctuating battery or field DC voltages to provide clean power to sensitive microprocessors and telemetry units.",
    "specifications": [
      "Input Ranges: 9-36V DC, 18-75V DC, 36-160V DC (4:1 wide input ratio)",
      "Output Voltages: Regulated 5V, 12V, 24V DC outputs",
      "Isolation: 1500V DC to 3000V DC input-to-output galvanic isolation",
      "Mounting: DIN Rail or Chassis mounting with rugged extruded aluminum heat-sink"
    ],
    "brands": [
      "Schneider Electric",
      "Siemens"
    ],
    "popular": false,
    "applications": [
      "Solar Inverter Auxiliary",
      "Railway Rolling Stock",
      "Battery Bank Instrumentation"
    ],
    "discountBadge": "Special Price",
    "imageUrl": "./products/dc-dc-converters.png"
  },
  {
    "id": "ups-battery-systems",
    "name": "UPS & Battery Systems",
    "category": "automation-electronics",
    "subCategory": "Power Electronics",
    "tagline": "Industrial online double-conversion UPS & sealed maintenance-free (SMF) battery banks",
    "description": "Continuous uninterrupted power supply systems designed to protect mission-critical PLCs, servers, SCADA historians, and emergency shutdown systems during power grid outages.",
    "specifications": [
      "Capacity: 1 kVA to 50 kVA (Single Phase & Three Phase execution)",
      "Topology: True Online Double Conversion with zero millisecond transfer time",
      "Battery: High-rate discharge Sealed Maintenance-Free (SMF) VRLA batteries (12V 26Ah to 200Ah)",
      "Backup Duration: Custom engineered battery banks from 15 minutes up to 8 hours backup",
      "Bypass: Built-in automatic static bypass and manual maintenance bypass switch"
    ],
    "brands": [
      "Schneider Electric",
      "Eaton",
      "ABB"
    ],
    "popular": true,
    "applications": [
      "SCADA Server Rooms",
      "Emergency Plant Shutdown",
      "Critical Lab Instruments"
    ],
    "discountBadge": "Turnkey Backup",
    "imageUrl": "./products/ups-battery-systems.png"
  },
  {
    "id": "pneumatic-cylinders",
    "name": "Pneumatic Cylinders",
    "category": "pneumatics-items",
    "subCategory": "Pneumatic Actuators",
    "tagline": "ISO 15552, ISO 21287 compact & round body pneumatic air cylinders",
    "description": "Precision pneumatic air cylinders manufactured to international ISO standards. Features hard chrome-plated piston rods, self-lubricating seals, and adjustable pneumatic cushioning.",
    "specifications": [
      "Types: ISO 15552 Profile Cylinders, ISO 21287 Compact, ISO 6432 Mini Round, Guided Twin-Rod",
      "Bore Sizes: 16 mm up to 320 mm bore diameter; Strokes: 10 mm to 2000 mm",
      "Action: Double Acting, Single Acting (Spring Return), Double Acting Through-Rod",
      "Operating Pressure: 1.0 to 10.0 Bar; Magnetic piston for reed switch position sensing",
      "MOC: Hard Anodized Aluminum Barrel, Stainless Steel Piston Rod, NBR / Polyurethane / Viton Seals"
    ],
    "brands": [
      "SMC",
      "FESTO",
      "AirTAC",
      "Mindman",
      "CKD",
      "Janatics Pneumatic"
    ],
    "popular": true,
    "applications": [
      "Automatic Clamping",
      "Pusher Systems",
      "Packaging Machines",
      "Gate Openers",
      "Robotic Gripping"
    ],
    "badge": "OEM Make",
    "discountBadge": "10% OFF + Gift",
    "imageUrl": "./products/pneumatic-cylinders.png"
  },
  {
    "id": "air-filter-regulators",
    "name": "Air Filter Regulators",
    "category": "pneumatics-items",
    "subCategory": "Air Preparation",
    "tagline": "Combined air filter-regulators with pressure gauge & auto-drain bowl",
    "description": "Space-saving combination air filter and pressure regulating units designed to remove airborne moisture, particulate rust, and oil mist while maintaining stable downstream air pressure.",
    "specifications": [
      "Port Sizes: G 1/8\", 1/4\", 3/8\", 1/2\", 3/4\", 1\" BSP threaded",
      "Filtration Micron: 5 Micron standard, 40 Micron coarse, 0.01 Micron coalescing oil mist",
      "Pressure Regulation: 0.5 to 8.5 Bar (Max inlet pressure 10 Bar / 150 PSI)",
      "Drain Mechanism: Manual Drain, Semi-Automatic, Automatic Float Drain",
      "Bowl Material: Polycarbonate with steel guard, or Full Metal Bowl for harsh environments"
    ],
    "brands": [
      "SMC",
      "FESTO",
      "AirTAC",
      "Janatics Pneumatic",
      "Parker Legris"
    ],
    "popular": true,
    "applications": [
      "Machine Tool Air Supply",
      "Spray Painting Lines",
      "Packaging Machines",
      "Pneumatic Control Panels"
    ],
    "discountBadge": "10% OFF",
    "imageUrl": "./products/air-filter-regulators.png"
  },
  {
    "id": "solenoid-valves",
    "name": "Solenoid Valves",
    "category": "pneumatics-items",
    "subCategory": "Directional Control",
    "tagline": "5/2, 5/3 & 3/2-way high-speed pneumatic pilot & direct acting solenoid valves",
    "description": "High-cycle industrial directional solenoid valves for controlling pneumatic cylinder actuation. Available as standalone valves or mounted on multi-station aluminum sub-base manifolds.",
    "specifications": [
      "Functions: 5/2 Single Solenoid (Spring return), 5/2 Double Solenoid, 5/3 All Ports Blocked / Exhaust Open, 3/2 NC",
      "Port Sizes: M5, 1/8\", 1/4\", 3/8\", 1/2\" BSP",
      "Coil Voltages: 24V DC, 12V DC, 110V AC, 230V AC (with LED DIN connector plug)",
      "Response Time: Ultra-fast switching < 20 ms; Rated for up to 50 million cycles",
      "Manual Override: Push-turn locking pin for commissioning without electrical power"
    ],
    "brands": [
      "SMC",
      "FESTO",
      "AirTAC",
      "Mindman",
      "Janatics Pneumatic"
    ],
    "popular": true,
    "applications": [
      "Cylinder Reversing Logic",
      "Process Valve Actuation",
      "Automated Reject Gates",
      "Pick-and-Place"
    ],
    "badge": "High Demand",
    "discountBadge": "12% OFF",
    "imageUrl": "./products/solenoid-valves.png"
  },
  {
    "id": "pneumatic-fittings",
    "name": "Pneumatic Fittings",
    "category": "pneumatics-items",
    "subCategory": "Pneumatic Connectors",
    "tagline": "One-touch push-in instant tube fittings, swivel elbows, tees & quick couplings",
    "description": "Precision engineered push-in tube fittings designed for rapid tool-free connection of flexible polyurethane and nylon pneumatic tubing without air leakage.",
    "specifications": [
      "Configurations: Straight Male Connector, 90° Swivel Elbow, Equal Tee, Union Y, Bulkhead, Reducer",
      "Tube OD: 4 mm, 6 mm, 8 mm, 10 mm, 12 mm, 16 mm",
      "Thread Standards: 1/8\", 1/4\", 3/8\", 1/2\" BSPT / BSPP / NPT threads with pre-applied Teflon sealant",
      "Body Material: Nickel-plated brass with POM release ring and stainless steel gripping collet",
      "Pressure Limit: 0 to 10 Bar (Vacuum up to -750 mmHg)"
    ],
    "brands": [
      "Parker Legris",
      "SMC",
      "FESTO",
      "AirTAC",
      "Camozzi Automation"
    ],
    "popular": true,
    "applications": [
      "Machine Internal Air Tubing",
      "Robotic Tooling",
      "Valve Manifold Plumbings"
    ],
    "badge": "Essential",
    "discountBadge": "Bulk Pack Discount",
    "imageUrl": "./products/pneumatic-fittings.png"
  },
  {
    "id": "speed-controllers",
    "name": "Speed Controllers",
    "category": "pneumatics-items",
    "subCategory": "Flow Control & Valves",
    "tagline": "In-line & cylinder port mounted flow control needle valves with lock nut",
    "description": "Precision pneumatic throttle valves with built-in non-return valves designed to adjust the extending and retracting speeds of pneumatic cylinders.",
    "specifications": [
      "Types: Meter-Out (cylinder port standard), Meter-In, In-Line bidirectional flow regulators",
      "Sizes: Tube OD 4 mm to 12 mm; Threads M5 to 1/2\" BSP",
      "Adjustment: Knurled manual knob with positive locking nut and calibrated reference indicator",
      "MOC: Nickel-plated brass body with stainless steel needle"
    ],
    "brands": [
      "SMC",
      "FESTO",
      "AirTAC",
      "Janatics Pneumatic"
    ],
    "popular": false,
    "applications": [
      "Smooth Cylinder Deceleration",
      "Feeder Speed Tuning",
      "Cushion Stroke Regulation"
    ],
    "discountBadge": "10% OFF",
    "imageUrl": "./products/speed-controllers.png"
  },
  {
    "id": "silencers-mufflers",
    "name": "Silencers & Mufflers",
    "category": "pneumatics-items",
    "subCategory": "Pneumatic Accessories",
    "tagline": "Sintered bronze & porous plastic noise reduction exhaust silencers",
    "description": "High-flow exhaust silencers that screw into solenoid valve exhaust ports to reduce compressed air discharge noise to safe OSHA decibel levels while preventing dust ingress.",
    "specifications": [
      "Materials: Sintered Bronze Element with Brass Hex Head; Porous Polyethylene Plastic Element",
      "Sizes: 1/8\", 1/4\", 3/8\", 1/2\", 3/4\", 1\" BSP male thread",
      "Noise Reduction: Decreases exhaust sound by 25 to 35 dB(A)",
      "Types: Standard Bullet Silencer, Flat Compact Hex Muffler, Speed Control Muffler"
    ],
    "brands": [
      "SMC",
      "FESTO",
      "AirTAC",
      "Parker Legris"
    ],
    "popular": false,
    "applications": [
      "Valve Exhaust Ports",
      "Air Cylinder Exhaust",
      "Vacuum Ejector Venting"
    ],
    "discountBadge": "Special Price",
    "imageUrl": "./products/silencers-mufflers.png"
  },
  {
    "id": "pu-tubes",
    "name": "PU Tubes",
    "category": "pneumatics-items",
    "subCategory": "Pneumatic Tubing",
    "tagline": "High-flexibility polyurethane & nylon compressed air tubing coils",
    "description": "Premium ether-based polyurethane tubing offering extreme kink resistance, tight bending radius, and high fatigue endurance for moving robotic arms and drag chain runs.",
    "specifications": [
      "Sizes (OD x ID): 4x2.5 mm, 6x4 mm, 8x5.5 mm, 10x6.5 mm, 12x8 mm, 16x11 mm",
      "Colors: Translucent Blue, Clear / Transparent, Black, Yellow, Red, Green",
      "Packaging: 100 Meter / 200 Meter Continuous Coils",
      "Operating Pressure: 0 to 10 Bar at 23°C (Burst pressure > 30 Bar)",
      "Temperature Range: -20°C to +60°C"
    ],
    "brands": [
      "Parker Legris",
      "SMC",
      "FESTO",
      "AirTAC"
    ],
    "popular": true,
    "applications": [
      "Machine Tool Tubing",
      "Robotic Cable Tracks",
      "Pneumatic Control Panels",
      "Assembly Workbenches"
    ],
    "badge": "Best Seller",
    "discountBadge": "Free on Big Orders",
    "imageUrl": "./products/pu-tubes.png"
  },
  {
    "id": "frl-units",
    "name": "FRL Units",
    "category": "pneumatics-items",
    "subCategory": "Air Preparation",
    "tagline": "Triple modular Filter + Regulator + Lubricator air treatment assemblies",
    "description": "Complete three-piece and two-piece modular air preparation combinations. Cleans the incoming compressed air, stabilizes pressure, and injects fine aerosol oil mist to lubricate cylinders.",
    "specifications": [
      "Assembly: Air Filter (5 Micron) + Precision Diaphragm Regulator + Micro-Fog Lubricator",
      "Port Connections: 1/4\", 3/8\", 1/2\", 3/4\", 1\" BSP",
      "Flow Capacity: Up to 5000 Litres/min flow rate",
      "Features: Integrated pressure gauge, auto-drain option, quick clamp mounting brackets"
    ],
    "brands": [
      "SMC",
      "FESTO",
      "AirTAC",
      "Janatics Pneumatic",
      "Metal Work Pneumatic"
    ],
    "popular": true,
    "applications": [
      "Plant Main Air Header Entry",
      "Heavy Pneumatic Presses",
      "Packaging Machine Feeders"
    ],
    "badge": "Core Air Unit",
    "discountBadge": "10% OFF Bundle",
    "imageUrl": "./products/frl-units.png"
  },
  {
    "id": "direction-control-valves",
    "name": "Direction Control Valves",
    "category": "pneumatics-items",
    "subCategory": "Directional Control",
    "tagline": "Hand lever, foot pedal, push-pull & mechanical roller limit switch valves",
    "description": "Manually operated and mechanically actuated pneumatic valves for operator control stations, emergency dump circuits, and mechanical end-stop sequencing.",
    "specifications": [
      "Operators: Hand Lever (2-position / 3-position detent), Foot Pedal with safety guard, Push-Pull knob, Roller Lever",
      "Functions: 3/2 Way, 5/2 Way, 5/3 Way Center Closed",
      "Port Sizes: 1/8\", 1/4\", 3/8\", 1/2\" BSP",
      "Body: Die-cast aluminum alloy with anodized spool and NBR seals"
    ],
    "brands": [
      "SMC",
      "FESTO",
      "AirTAC",
      "Janatics Pneumatic",
      "Camozzi Automation"
    ],
    "popular": false,
    "applications": [
      "Manual Assembly Jigs",
      "Pneumatic Clamping Fixtures",
      "Safety Interlock Doors"
    ],
    "discountBadge": "Special Offer",
    "imageUrl": "./products/direction-control-valves.png"
  },
  {
    "id": "air-preparation-units",
    "name": "Air Preparation Units",
    "category": "pneumatics-items",
    "subCategory": "Air Preparation",
    "tagline": "High-flow industrial refrigerated air dryers, oil mist separators & main line filters",
    "description": "Centralized plant air treatment equipment designed to eliminate water vapor and oil aerosols down to Class 1 ISO 8573-1 air purity standards before feeding pneumatic automation.",
    "specifications": [
      "Equipment: Refrigerated Compressed Air Dryers, Coalescing Micro-Mist Separators (0.01 µm), Desiccant Dryers",
      "Flow Range: 20 CFM up to 2000 CFM",
      "Pressure Dew Point: +3°C (Refrigerated) / -40°C (Desiccant)",
      "Condensate Drain: Zero air-loss electronic timed level-sensing auto drain"
    ],
    "brands": [
      "SMC",
      "FESTO",
      "Janatics Pneumatic",
      "Metal Work Pneumatic"
    ],
    "popular": true,
    "applications": [
      "Central Compressor Rooms",
      "Pharmaceutical Cleanroom Air",
      "Automated Paint Spraying"
    ],
    "discountBadge": "Turnkey Solution",
    "imageUrl": "./products/air-preparation-units.png"
  },
  {
    "id": "pneumatic-actuators",
    "name": "Pneumatic Actuators",
    "category": "pneumatics-items",
    "subCategory": "Pneumatic Actuators",
    "tagline": "Quarter-turn rack & pinion pneumatic rotary actuators for ball & butterfly valves",
    "description": "High-torque double-acting and spring-return pneumatic rotary actuators engineered to automate industrial quarter-turn ball valves, plug valves, and butterfly valves.",
    "specifications": [
      "Action: Double Acting (DA) & Spring Return / Single Acting (SR) Fail-Safe",
      "Rotation Angle: 90° ± 5° adjustable travel stops",
      "Mounting Standards: ISO 5211 valve flange mounting, NAMUR VDI/VDE 3845 solenoid & switchbox top",
      "Torque Output: 10 Nm up to 5,000 Nm at 6 Bar air supply",
      "Body Material: Extruded Hard Anodized Aluminum with PTFE coated pistons"
    ],
    "brands": [
      "SMC",
      "FESTO",
      "AirTAC",
      "L&T Electrical & Automation"
    ],
    "popular": true,
    "applications": [
      "Automated Valve Isolation",
      "Chemical Reactor Inlets",
      "Process Piping Skids"
    ],
    "badge": "Valve Automation",
    "discountBadge": "12% OFF",
    "imageUrl": "./products/pneumatic-actuators.png"
  }
];

export const productCategoriesList = [
  {
    "id": "all",
    "label": "All Products",
    "count": 62,
    "color": "blue",
    "flyerHeader": "COMPLETE INDUSTRIAL PORTFOLIO"
  },
  {
    "id": "mechanical-items",
    "label": "Mechanical Items",
    "count": 18,
    "color": "sky",
    "flyerHeader": "MECHANICAL ITEMS"
  },
  {
    "id": "electrical-items",
    "label": "Electrical Items",
    "count": 18,
    "color": "purple",
    "flyerHeader": "ELECTRICAL ITEMS"
  },
  {
    "id": "automation-electronics",
    "label": "Electronics & Automation",
    "count": 15,
    "color": "emerald",
    "flyerHeader": "ELECTRONICS & INDUSTRIAL AUTOMATION"
  },
  {
    "id": "pneumatics-items",
    "label": "Pneumatics Items (OEM)",
    "count": 11,
    "color": "rose",
    "flyerHeader": "PNEUMATICS ITEMS (OEM MAKE)"
  }
];
