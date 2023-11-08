import { FormDataTypes } from "@/app/types/all-form-types"

const INITIAL_DATA: FormDataTypes = {
  checkInTime: "",
  checkOutTime: "",
  selfCheckIn: false,
  luggageCheckIn: false,
  luggageDropTime: "",
  rentalLicense: false,
  extraLicenseRequired: false,
  extraLicenceGMAG: false,
  extraEcoHouse: false,
  extraPartiesNotAllowed: false,
  extraPartiesAllowed: false,
  wheelchairFriendly: false,
  childrenAllowed: false,
  petsAllowed: false,
  smokingAllowed: false,
  lodgingType: "villa",
  awayFromItAll: false,
  livingRoom: false,
  livingRoomDescription: "",
  family: false,
  romantic: false,
  historical: false,
  traditionalProperty: false,
  secluded: false,
  brandNew: false,
  detached: false,
  semiDetached: false,
  privateResidence: false,
  kitchenGround: false,
  diner: false,
  dinerDescription: "",
  numOfFloorsToGround: "",
  areaOfTheHouseInM2: "",
  surroundingAreaInM2: "",
  yearOfBuilt: "",
  serviceSupermarket: false,
  singleLevelHome: false,
  serviceBoatTaxiService: false,
  serviceLunch: false,
  serviceOwnerNearby: false,
  serviceMealDeliveryService: false,
  childrenYes: false,
  garden: false,
  viewOcean: false,
  resort: false,
  river: false,
  rural: false,
  skiIn: false,
  skiOut: false,
  town: false,
  village: false,
  waterView: false,
  waterfront: false,
  viewSea: false,
  viewSunset: false,
  viewPanoramic: false,
  viewSunrise: false,
  viewCountryside: false,
  viewBayView: false,
  viewBeachView: false,
  viewCityView: false,
  viewGardenView: false,
  viewHarborView: false,
  viewMarinaView: false,
  viewMountainView: false,
  viewPoolView: false,
  viewResortView: false,
  viewValleyView: false,
  viewVineyardView: false,
  nearestVillage: "",
  onTheBeach: false,
  walkToTheBeach: false,
  distanceToCityCenter: "",
  taverna: false,
  distanceToTheBeach: "",
  countryside: false,
  beachFront: false,
  distanceToShops: "",
  distanceToAirport: "",
  distanceToKiosk: "",
  distanceToBar: "",
  distanceToFerry: "",
  distanceToGolf: "",
  highway: false,
  ski: false,
  train: false,
  closestBeach: "",
  nearestRestaurant: "",
  nearestSupermarket: "",
  nearestMiniMarket: "",
  nearestPointOfInterest: "",
  nearestAtm: "",
  nearestBank: "",
  nearestWaterPark: "",
  nearestMarina: "",
  nearestDiveCenter: "",
  nearestHospital: "",
  nearestPoliceStation: "",
  nearestPetrolStation: "",
  nearestBusStation: "",
  nearestTennisCourt: "",
  nearestPharmacy: "",
  nearestHairdressers: "",
  nearestMedicalCenter: "",
  nearestLaunderette: "",
  propertyAddress: "",
  postCode: "",
  gpsLatitude: "",
  gpsLongitude: "",
  basketballCourt: false,
  cycling: false,
  crossCountrySkiing: false,
  deepseaFishing: false,
  equestrianEvents: false,
  fishing: false,
  fishingBay: false,
  fishingFly: false,
  fishingFreshwater: false,
  fishingSurf: false,
  golf: false,
  golfOptional: false,
  hiking: false,
  hotAirBallooning: false,
  hunting: false,
  area: false,
  sports: false,
  iceSkating: false,
  jetSkiing: false,
  kayaking: false,
  mountainBiking: false,
  mountainClimbing: false,
  mountaineering: false,
  paragliding: false,
  parasailing: false,
  pierFishing: false,
  rafting: false,
  racquetball: false,
  rockClimbing: false,
  rollerBlading: false,
  sailing: false,
  skiLiftPrivileges: false,
  skiLiftPrivilegesOptional: false,
  skiing: false,
  skiingWater: false,
  snorkeling: false,
  snowboarding: false,
  snowmobiling: false,
  spelunking: false,
  surfing: false,
  swimming: false,
  tennis: false,
  whitewaterRafting: false,
  windSurfing: false,
  sportsSnorkelingDiving: false,
  sportsTubingWater: false,
  powerBoatRental: false,
  scubaOrSnorkeling: "",
  attractionBay: "",
  attractionAttractionscoinLaundry: "",
  attractionDutyFree: "",
  attractionHealthBeautyspa: "",
  attractionMarina: "",
  attractionMuseums: "",
  attractionThemeParks: "",
  attractionWaterParks: "",
  attractionWineryTours: "",
  attractionZoo: "",
  leisureAntiquing: "",
  leisureBirdWatching: "",
  leisureEcoTourism: "",
  leisureGambling: "",
  leisureHorsebackRiding: "",
  leisureOutletShopping: "",
  leisurePaddleBoating: "",
  leisureSledding: "",
  leisureBoating: "",
  leisureShopping: "",
  leisureWildLifeViewing: "",
  leisureWaterSports: "",
  leisureFitnessCenter: "",
  leisureHospital: "",
  leisureLaundromat: "",
  levelGround: false,
  terrace: false,
  outsideFurniture: false,
  depthMarks: false,
  safetySign: false,
  swimmingRing: false,
  staircase: false,
  jacuzziJets: false,
  poolMaintenace: false,
  accessToPool: false,
  fence: false,
  poolTowels: false,
  poolShower: false,
  poolLasso: false,
  solarPanels: false,
  inflatables: false,
  minWidth: "",
  maxWidth: "",
  minDepth: "",
  maxdepth: "",
  garage: false,
  outsideTableTennis: false,
  insideTableTennis: false,
  tennisCourt: false,
  balcony: false,
  poolTable: false,
  diningTerrace: false,
  yard: false,
  freeParkingOnTheStreet: false,
  privateParking: false,
  chairsAndTableOutside: false,
  grass: false,
  trees: false,
  gardener: false,
  waterFromAPersonalSupply: false,
  outdoorJacuzzi: false,
  footballGame: false,
  roofTerrace: false,
  outsideKitchen: false,
  traditionalPizzaOven: false,
  outsideFridge: false,
  extraWaterTank: false,
  playground: false,
  hammock: false,
  gardenSwing: false,
  washingBasin: false,
  deck: false,
  outdoorDining: false,
  porch: false,
  insideMiniBar: false,
  outsideMiniBar: false,
  drinkingWater: false,
  poofPilows: false,
  parkingAvailable: "",
  terraceOrVeranda: "",
  shadedTerraceOrveranda: "",
  barbeque: "",
  umbrella: "",
  sunloungers: "",
  kioskWithDiningFacilities: "",
  fireplaceType: "",
  heatingMeans: "",
  tvType: "",
  hydroMassageType: "",
  internetType: "",
  heating: false,
  acInLounge: false,
  sofa: false,
  musicSystem: false,
  ironNIroningBoard: false,
  dvdPlayer: false,
  dishwasher: false,
  washingMachine: false,
  hairdryer: false,
  airConditioning: false,
  ceilingFans: false,
  gym: false,
  cleaningMaterials: false,
  availableSmallGames: false,
  books: false,
  tumbleDryer: false,
  electricityKeyFob: false,
  laundryRoom: false,
  clothesDryerRack: false,
  fan: false,
  entertainmentVideogames: false,
  amenitieswoodStove: false,
  amenitiesFitnessRoom: false,
  entertainmentSatelliteOrCable: false,
  entertainmentVideoLibrary: false,
  amenitiesElevator: false,
  entertainmentToys: false,
  amenitiesTelephone: false,
  amenitiesGameRoom: false,
  entertainmentMusicLibrary: false,
  clothesStorage: false,
  privateEntrance: false,
  washerDryer: false,
  safeBox: false,
  insideJacuzzi: false,
  snookerTable: false,
  hotWaterFromElectric: false,
  hotWaterFromSolar: false,
  sauna: false,
  petrolBoiler: false,
  workStation: false,
  mosquitoNet: false,
  outletAdapters: false,
  networkCode: false,
  wifiBroadband: false,
  freeWifi: false,
  coffeeTypeAvailable: "",
  cookerWithFullOven: "",
  fridgeOrFreezer: "",
  microwave: false,
  toaster: false,
  cookerWithSmallOven: false,
  smallFridge: false,
  dinningArea: false,
  dishesAndSilverware: false,
  kitchen: false,
  dinningRoomOrSpace: false,
  highChair: false,
  waterDispenser: false,
  cookingBasics: false,
  diningTable: false,
  cookwareAndKitchenUtensils: false,
  separateStove: false,
  wineGlasses: false,
  kettle: false,
  sandwichToaster: false,
  espressoCoffeeMachine: false,
  stove: false,
  blenderOrMulti: false,
  filterCoffeeMachine: false,
  kitchenette: false,
  fryer: false,
  mixer: false,
  extraSmallBbqOven: false,
  breadMaker: false,
  carbonMonoxideAlarm: false,
  emergencyExitRoute: false,
  fireEmergencyContact: false,
  fireExtinguisher: false,
  firstAidKit: false,
  medicalEmergencyContact: false,
  policeEmergencyContact: false,
  smokeAlarm: false,
  deadboltLock: false,
  outdoorLighting: false,
  lightningProtection: false,
  bedroomOneType: "",
  bedroomTwoType: "",
  bedroomThreeType: "",
  bedroomFourType: "",
  bedroomFiveType: "",
  bedroomSixType: "",
  bedroomSevenType: "",
  bathroomOne: "",
  bathroomTwo: "",
  bathroomThree: "",
  bathroomFour: "",
  bathroomFive: "",
  bathroomSix: "",
  bathroomSeven: "",
  bedroomOneHeating: "",
  bedroomTwoHeating: "",
  bedroomThreeHeating: "",
  bedroomFourHeating: "",
  bedroomFiveHeating: "",
  bedroomSixHeating: "",
  bedroomSevenHeating: "",
  bathroomsCommonOne: "",
  bathroomsCommonTwo: "",
  bathroomsCommonThree: "",
  bathroomsCommonFour: "",
  bathroomsCommonFive: "",
  bathroomsCommonSix: "",
  bathroomsCommonSeven: "",
  commonAreaBedOne: "",
  commonAreaBedTwo: "",
  cot: "",
  enSuiteBathroomOne: "",
  extrasBabyBath: false,
  extrasBabyPotty: false,
  extrasChangingMat: false,
  extrasBabyLinen: false,
  extrasBabyWashingGel: false,
  extrasPortBebe: false,
  extrasBabyListeningDevice: false,
  extrasBabyChangingTable: false,
  extrasChildSafetyGate: false,
  cleaningProducts: false,
  beachSunLoungersProvided: false,
  beachTowelsCoolBagsAndBoxes: false,
  beachTowelsProvided: false,
  essentials: false,
  hangers: false,
  extraPillowsAndBlankets: false,
  roomDarkeningShades: false,
  showerGel: false,
  extrasBeachChair: false,
  extrasPaddleBoard: false,
  hotWaterProvided: false,
  maidEveryDay: false,
  maidOnceAWeek: false,
  maidTwiceAWeek: false,
  maidThriceAWeek: false,
  bedLinen: false,
  linenOnceAWeek: false,
  linenTwiceAWeek: false,
  towels: false,
  towelsOnceAWeek: false,
  towelsTwiceAWeek: false,
  towelsThriceAWeek: false,
  shampooProvided: false,
  maidBreakfastIncluded: false,
  carHireRecommended: false,
  carHireNotEssential: false,
  extraKeyLocation: "",
  keyLocation: "",
  linenCleaningMethod: "",
  safeEnhachedCleaning: "",
  safeCleaningDisinfection: "",
  safeSelfCheckInCheckOut: "",
  safeCommonSurfaceDisinfecting: "",
  safeSanitaryAssociation: "",
  sanitaryStandard: "",
  physicalDistancing: false,
  briefDescription: "",






 









}


export default INITIAL_DATA;





const {nearestVillage, nearestVillageDistance, taverna, tavernaDistance, distanceToTheBeach, distanceToBeachValue, distanceToTheSea, distanceToTheSeaValue, distanceToShops,
   distanceToShopsValue, distanceToAirport, distanceToAirportValue, distanceToKiosk, distanceToKioskValue, distanceToBar, distanceToBarValue, distanceToFerry, distanceToFerryValue,
    distanceToGolf, distanceToGolfValue, closestBeach, closestBeachDistance, nearestAtm, nearestBank, nearestBusStation, nearestDiveCenter, nearestHairdressers, nearestHospital,
     nearestLaunderette, nearestMarina, nearestMedicalCenter, nearestMiniMarket, nearestPetrolStation, nearestPharmacy, nearestPointOfInterest, nearestPoliceStation} = INITIAL_DATA
