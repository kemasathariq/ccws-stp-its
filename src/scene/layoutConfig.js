/**
 * All scene dimensions are provisional blockout values, NOT measured building data.
 * Replace these values after the team records approximate measurements onsite.
 * Units: metres (intended convention).
 */
export const BUILDING_LAYOUT = {
  footprintWidth: 20,
  footprintDepth: 14,
  wallHeight: 5.5,
  wallThickness: 0.25,
  floorThickness: 0.18,
  frontFacadeZ: -7,
  entranceWidth: 3.2,
  entranceHeight: 2.6,
  coworkingZone: { centerX: -4.5, centerZ: 0, width: 9, depth: 11 },
  exhibitionZone: { centerX: 4.5, centerZ: 0, width: 9, depth: 11 },
  // Exact exhibit placement and café position remain unverified.
};
