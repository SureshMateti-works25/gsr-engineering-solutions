import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'mechanical-maintenance',
    title: 'Mechanical Maintenance & Overhaul',
    tagline: 'Comprehensive Installation, Servicing & Preventative Upkeep',
    description: 'Turnkey mechanical engineering services covering erection, precision shaft alignment, dynamic balancing, overhaul of heavy gearboxes, pump overhauling, and scheduled preventive maintenance to prevent catastrophic factory floor failures.',
    iconName: 'Wrench',
    features: [
      'Industrial machinery erection, foundation leveling & laser shaft alignment',
      'High-pressure piping fabrication, orbital welding & hydrostatic pressure testing',
      'Gearbox disassembly, gear tooth inspection, bearing replacement & run-in testing',
      'Centrifugal, positive displacement & vacuum pump servicing and mechanical seal replacement',
      'Routine lubrication audits, vibration analysis & thermographic condition monitoring'
    ],
    sla: 'Emergency dispatch available across Telangana & Andhra Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'electrical-services',
    title: 'Electrical Services & Troubleshooting',
    tagline: 'Turnkey Installation, Testing, Maintenance & Fault Diagnostics',
    description: 'End-to-end industrial electrical engineering spanning HT/LT substation maintenance, switchgear panel retrofitting, breaker testing, power factor optimization, VFD programming, and urgent electrical breakdown troubleshooting.',
    iconName: 'Zap',
    features: [
      'ACB & VCB timing tests, contact resistance measurement, and primary injection testing',
      'LT/HT panel health check-ups, busbar torque verification, and hot-spot IR thermography',
      'VFD, PLC & Soft Starter commissioning, parameter tuning, and fieldbus communication setup',
      'Motor insulation resistance (Megger) testing, winding surge testing & power factor correction',
      'Round-the-clock rapid electrical fault diagnostics to restore plant uptime'
    ],
    sla: 'Prompt on-site technical support for critical production breakdowns',
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'industrial-spare-parts',
    title: 'Industrial Spare Parts Supply & Inventory',
    tagline: 'Direct OEM Sourcing to Minimize Downtime & Guarantee Continuous Operation',
    description: 'Strategically stocked mechanical, electrical, and pneumatic spare parts for immediate dispatch. We partner with tier-1 global manufacturers to deliver genuine replacement parts with manufacturer warranties and test certificates.',
    iconName: 'PackageCheck',
    features: [
      'Instant access to genuine OEM spare parts for fast turnaround',
      'Critical breakdown delivery across Hyderabad, Secunderabad, Vizag, and industrial corridors',
      'Obsolescence management: drop-in modern equivalents for phased-out breakers, drives & valves',
      'Bulk enterprise procurement contracts with scheduled supply and volume discounts',
      '100% authentic materials with mill test certificates (MTC) and factory warranty'
    ],
    sla: 'Ready inventory with express dispatch for critical spares',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  }
];
