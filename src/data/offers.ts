import type { OfferItem } from '../types';

export const offersData: OfferItem[] = [
  {
    id: 'offer-amc',
    title: 'Turnkey Plant Annual Maintenance Contract',
    badge: '1 MONTH FREE AMC',
    category: 'mechanical-items',
    couponCode: 'GSR-AMC30',
    description: 'Sign up for our industrial Turnkey Plant Annual Maintenance Contract (AMC) and receive the first 30 days of comprehensive inspection & preventive engineering audit completely free.',
    discount: '1 MONTH FREE',
    highlightText: '24/7 Rapid Emergency Response & Certified Preventive Maintenance across Telangana, AP, Tamil Nadu & Maharashtra',
    validUntil: 'First 20 Plant Signups',
    imageUrl: './products/gear-boxes.png',
    targetCategoryLabel: 'Turnkey AMC Services'
  },
  {
    id: 'offer-mechanical',
    title: 'SS Pipes, Flanges & Mechanical Mega Discount',
    badge: 'UP TO 15% OFF',
    category: 'mechanical-items',
    couponCode: 'GSR-MECH15',
    description: 'Flat 15% discount on commercial orders of ASTM A312 SS pipes, forged flanges, industrial valves & heavy couplings. 100% Mill Test Certified with GST billing.',
    discount: '15% OFF',
    highlightText: 'Free Express Dispatch on orders above ₹50,000 across Telangana, Andhra Pradesh, Tamil Nadu & Maharashtra',
    validUntil: 'Valid this month',
    imageUrl: './products/ss-pipes.png',
    targetCategoryLabel: 'Mechanical Items'
  },
  {
    id: 'offer-electrical',
    title: 'Schneider, Siemens & ABB Switchgear Contractor Deal',
    badge: 'SPECIAL CONTRACTOR RATE',
    category: 'electrical-items',
    couponCode: 'GSR-ELEC12',
    description: 'Exclusive 12% project rebate on MCCB, Air Circuit Breakers (ACB), power contactors, and motor distribution panels for factory revamps.',
    discount: '12% OFF',
    highlightText: 'Authorised Tier-1 Brands: Schneider Electric, Siemens, ABB, L&T, Havells',
    validUntil: 'Limited Project Stock',
    imageUrl: './products/mccb.png',
    targetCategoryLabel: 'Electrical Items'
  },
  {
    id: 'offer-automation',
    title: 'Industrial VFD Drives & PLC Automation Rebate',
    badge: '5% OFF DISCOUNT',
    category: 'automation-electronics',
    couponCode: 'GSR-AUTO5',
    description: 'Special 5% discount on variable frequency drives (VFD), industrial PLCs, HMIs, and proximity sensor kits with free parameter calibration.',
    discount: '5% OFF',
    highlightText: 'Includes Free On-Site Engineering Support & Troubleshooting Consultation',
    validUntil: 'Special Project Offer',
    imageUrl: './products/vfd-ac-drives.png',
    targetCategoryLabel: 'Electronics & Automation'
  },
  {
    id: 'offer-pneumatics',
    title: 'SMC & FESTO Pneumatics Bundle + Free PU Tubing',
    badge: '10% OFF + FREE GIFT',
    category: 'pneumatics-items',
    couponCode: 'GSR-PNEU10',
    description: 'Order ISO pneumatic cylinders, solenoid valves, or FRL air preparation units above ₹25,000 and receive a 100-meter high-flex PU tube roll free of cost.',
    discount: '10% OFF + 100m Tube',
    highlightText: 'Genuine OEM Brands: SMC, FESTO, AirTAC, Mindman, CKD, Parker Legris',
    validUntil: 'While stocks last',
    imageUrl: './products/pneumatic-cylinders.png',
    targetCategoryLabel: 'Pneumatics Items'
  }
];
