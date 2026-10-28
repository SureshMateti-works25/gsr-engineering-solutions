import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'amc-service',
    title: 'AMC (Annual Maintenance Contract) Service',
    tagline: 'Scheduled Preventative Health Checks & Guaranteed Uptime',
    description: 'Comprehensive annual maintenance contracts tailored for industrial manufacturing plants. Includes periodic mechanical audits, electrical thermal scans, scheduled calibration, and prioritized support to preemptively eliminate machine stoppages.',
    iconName: 'ClipboardCheck',
    features: [
      'Comprehensive monthly / quarterly preventative maintenance schedules',
      'Regular vibration analysis, thermography & alignment audits',
      'Pre-scheduled spares replacement and consumables management',
      'Priority emergency callouts with guaranteed maximum response time SLAs',
      'Detailed maintenance health logs and equipment reliability reports'
    ],
    sla: 'Dedicated account engineer with planned maintenance visits',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'machine-maintenance',
    title: 'Machine Maintenance Service',
    tagline: 'Precision Mechanical & Electrical Machine Servicing',
    description: 'Specialized maintenance for heavy industrial production machinery, CNC units, packaging lines, conveyors, extruders, and process equipment. We restore machines to original manufacturer tolerances.',
    iconName: 'Cog',
    features: [
      'Gearbox overhaul, bearing replacement & precision laser shaft alignment',
      'Piping, pneumatic cylinders, manifold & hydraulic circuit servicing',
      'Electrical panel, switchgear & sensor diagnostics and re-wiring',
      'Dynamic balancing of impellers, rotors, fans & high-speed shafts',
      'Refurbishment of worn mechanical components and seal replacements'
    ],
    sla: 'Fast turnaround on-site servicing to minimize downtime',
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'installation-commissioning',
    title: 'Installation & Commissioning Support',
    tagline: 'Turnkey Erection, Rigging, Wiring & Plant Commissioning',
    description: 'Expert engineering support for setting up new production lines, industrial machinery erection, electrical HT/LT switchgear installation, process piping hook-up, and final trial runs.',
    iconName: 'Wrench',
    features: [
      'Civil foundation verification, equipment grouting & precision leveling',
      'Turnkey electrical cabling, cable tray laying & motor terminations',
      'SS & MS process piping fabrication, hydro-testing & valve hook-ups',
      'VFD, PLC & control panel parametrization and loop testing',
      'Full load trial runs, safety interlock testing & handover documentation'
    ],
    sla: 'Experienced engineering crew for turnkey plant commissioning',
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'on-site-technical-support',
    title: 'On-Site Service & Technical Support',
    tagline: 'Expert Field Engineers at Your Factory Doorstep',
    description: 'Immediate technical field support across Hyderabad, Secunderabad, Medchal, Patancheru, Vizag, Vijayawada, and the entire Telugu states. Our engineers diagnose and resolve tricky machine faults on-site.',
    iconName: 'Headphones',
    features: [
      'Rapid field dispatch across all major industrial corridors in Telangana & AP',
      'On-site root-cause failure analysis (RCFA) for repeat breakdowns',
      'Retrofitting modern electrical switchgear & automation into legacy panels',
      'Pneumatic circuit troubleshooting & air leakage optimization audits',
      'Hands-on technical guidance for plant maintenance teams'
    ],
    sla: 'Direct mobile hotline: +91 8712344439 for rapid engineer dispatch',
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'breakdown-service',
    title: 'Breakdown Service (24/7 Rapid Response)',
    tagline: 'Emergency Intervention to Restore Factory Uptime Immediately',
    description: 'When unexpected machinery breakdowns halt your factory production line, our dedicated emergency crew provides 24/7 urgent dispatch with critical spare parts to bring your plant back online swiftly.',
    iconName: 'AlertTriangle',
    features: [
      '24/7 critical breakdown hotline directly managed by G Sandeep Kumar',
      'Immediate emergency dispatch of critical spare parts (breakers, bearings, valves, seals)',
      'Fast electrical fault isolation & bypass restoration solutions',
      'Emergency mechanical repair, welding & shaft replacement on urgent priority',
      'Overnight emergency repair capability for continuous process plants'
    ],
    sla: '24/7 Immediate Emergency Action Hotline',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  }
];
