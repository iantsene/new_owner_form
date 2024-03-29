import { FormDataTypes } from "@/app/types/all-form-types";

const INITIAL_DATA: FormDataTypes = {
basicInfo: {
        lodgingType: "villa",
        poolExists: false,
        checkInTime: "15:00",
        selfCheckIn: false,
        checkOutTime: "10:00",
        luggageCheckIn: false,
        luggageDropTime: "13:00",
        rentalLicense: false,
        extraLicenseRequired: false,
        extraLicenseType: "",
        maxPaxNumber: undefined,
        maxAdultsNumber: undefined,
        maxChildrenNumber: undefined,
        bedroomNumber: undefined,
        commonAreaBedsNumber: undefined,
        bathroomNumber: undefined,
        sofaBedsNumber: undefined,
        campBedsNumber: undefined,
        foldingBedsNumber: undefined,
        cotsNumber: undefined,
        enSuiteBathsNumber: undefined,
        commonBathsNumber: undefined,
        propertyAddress: "",
        postCode: "",
        gpsLatitude: "",
        gpsLongitude: "",
        },
mainDescription: {
        awayFromItAll: false,
        family: false,
        romantic: false,
        historical: false,
        traditionalProperty: false,
        secluded: false,
        singleLevelHome: false,
        detached: false,
        semiDetached: false,
        brandNew: false,
        privateResidence: false,
        bedAndBreakfast: false,

        areaOfTheHouseInM2: "",
        surroundingAreaInM2: "",
        numOfFloorsToGround: "",
        yearOfBuilt: "",

        briefDescription: "",
        },
pool:   {
        poolLevel: "",
        terrace: false,
        poolFurniture: false,
        staircase: '',
        jacuzziJets: false,
        accessToPool: '',
        fence: false,
        poolTowels: false,
        poolShower: false,
        inflatables: false,

        safetySign: false,
        depthMarks: false,
        poolRing: false,
        poolLasso: false,
        solarPanels: false,
        poolMaintained: false,

        minWidth: "",
        maxWidth: "",
        minDepth: "",
        maxdepth: "",
          },
outside:  {
        diningTerrace: false,
        outsideFridge: false,
        outsideKitchen: false,
        traditionalPizzaOven: false,
        outsideMiniBar: false,
        chairsAndTableOutside: false,
        kiosk: "",

        washingBasin: false,
        barbeque: "",

        garden: false,
        gardener: false,
        trees: false,
        grass: false,
        yard: false,
        deck: false,
        porch: false,
        roofTerrace: false,
        balcony: false,

        extraWaterTank: false,
        drinkingWater: false,
        waterFromAPersonalSupply: false,

        poolTable: false,
        outdoorJacuzzi: false,
        footballGame: false,
        outsideTableTennis: false,
        playground: false,
        gardenSwing: false,
        hammock: false,
        poofPilows: false,

        basketballCourt: false,
        tennisCourt: false,

        terraceOrVeranda: "",
        shadedTerraceOrveranda: "",
        umbrella: "",
        sunloungers: "",

        parkingAvailable: false,
        parkingDescription: "",
        garage: false,
        privateParking: false,
        freeParkingOnTheStreet: false,
        },
inside: {
        livingRoom: false,
        livingRoomDescription: "",
        fireplaceType: "",
        sofa: false,
        tvType: "",
        satelliteOrCable: false,
        sauna: false,

        internetType: "",
        freeWifi: false,
        wifiBroadband: false,
        networkCode: "",

        heating: "",
        fan: false,
        airConditioningCooling: false,
        airConditioningHeating: false,
        acInLounge: false,
        ceilingFans: false,
        standingFans: false,
        woodStove: false,

        hotWaterFromSolar: false,
        hotWaterFromElectric: false,

        cleaningMaterials: false,
        dishwasher: false,
        laundryRoom: false,
        washingMachine: false,
        tumbleDryer: false,
        washerDryer: false,
        ironNIroningBoard: false,
        clothesDryerRack: false,
        clothesStorage: false,

        hairdryer: false,
        mosquitoNets: false,
        dvdPlayer: false,
        musicSystem: false,
        outletAdapters: false,
        insideMiniBar: false,

        insideJacuzzi: false,
        fitnessRoom: false,
        gym: false,
        books: false,

        privateEntrance: false,
        petrolBoiler: false,
        safeBox: false,
        workStation: false,
        telephone: false,
        electricityKeyFob: false,
        elevator: false,

        insideTableTennis: false,
        availableSmallGames: false,
        videoGames: false,
        toys: false,
        videoLibrary: false,
        musicLibrary: false,
        gameRoom: false,
        snookerTable: false,
            },
bedsNbaths: {
        bedrooms: [],
        commonAreaBeds: [],
        commonBaths: [],
          },
kitchen:  {
        microwave: false,
        toaster: false,
        smallFridge: false,
        fridgeWithFreezer: false,
        sandwichToaster: false,
        blenderOrMulti: false,
        breadMaker: false,
        mixer: false,
        kettle: false,
        filterCoffeeMachine: false,
        fryer: false,
        espressoCoffeeMachine: false,
        waterDispenser: false,

        kitchen: false,
        kitchenette: false,
        stove: false,
        cookerWithSmallOven: false,
        extraSmallBbqOven: false,
        separateStove: false,

        diningArea: false,
        diningRoomOrSpace: false,
        diningTable: false,
        wineGlasses: false,
        dishesAndSilverware: false,
        cookwareAndKitchenUtensils: false,
        cookingBasics: false,
        highChair: false,

        coffeeTypeAvailable: "",
        cookerWithFullOven: "",
        fridgeOrFreezer: "",
            },
amenities:  {
        carHireRecommendation: false,
        hotWaterProvided: false,
        basicEssentials: false,
        roomDarkeningShades: false,
        hangers: false,
        beachSunLoungersProvided: false,
        beachTowelsProvided: false,
        showerGel: false,
        paddleBoard: false,
        beachChair: false,
        shampooProvided: false,
        extraPillowsAndBlankets: false,
        beachTowelsCoolBagsAndBoxes: false,

        keyLocation: "",
        extraKeyLocation: "",

        bedLinen: false,
        linenOnceAWeek: false,
        linenTwiceAWeek: false,
        linenCleaningMethod: "",

        maidEveryDay: false,
        maidOnceAWeek: false,
        maidTwiceAWeek: false,
        maidThriceAWeek: false,

        safeEnhachedCleaning: "",
        safeCleaningDisinfection: "",
        safeSelfCheckInCheckOut: "",
        safeCommonSurfaceDisinfecting: "",

        safeSanitaryAssociation: "",
        sanitaryStandard: "",

        towels: false,
        towelsOnceAWeek: false,
        towelsTwiceAWeek: false,
        towelsThriceAWeek: false,
        },
safety: {
        carbonMonoxideAlarm: false,
        emergencyExitRoute: false,
        firstAidKit: false,
        fireExtinguisher: false,
        smokeAlarm: false,
        deadboltLock: false,
        policeEmergencyContact: false,
        fireEmergencyContact: false,
        outdoorLighting: false,
        lightningProtection: false,
        medicalEmergencyContact: false,
          },
location: {
        resort: false,
        river: false,
        rural: false,
        skiIn: false,
        skiOut: false,
        town: false,
        village: false,
        waterfront: false,
        onTheBeach: false,
        train: false,
        taverna: false,
        countryside: false,
        beachFront: false,
        highway: false,
        walkToTheBeach: false,

        beachView: false,
        oceanView: false,
        seaView: false,
        bayView: false,
        waterView: false,
        marinaView: false,
        panoramicView: false,
        harborView: false,
        vineyardView: false,
        sunsetView: false,
        sunriseView: false,
        cityView: false,
        countrysideView: false,
        gardenView: false,
        mountainView: false,
        resortView: false,
        valleyView: false,
        poolView: false,

        kitchenGround: false,
        diner: false,
        dinerDescription: "",
        serviceSupermarket: false,
        serviceSupermarketDelivery: false,
        serviceLunch: false,
        serviceOwnerNearby: false,
        childrenYes: false,
        serviceBoatTaxiService: false,
        serviceMealDeliveryService: false,

        closestBeach: "",
        distanceToShops: "",
        distanceToTheBeach: "",
        distanceToAirport: "",
        distanceToCityCenter: "",
        distanceToKiosk: "",
        distanceToBar: "",
        distanceToFerry: "",
        distanceToGolf: "",
        nearestVillage: "",
        nearestPointOfInterest: "",

        nearestRestaurant: "",
        nearestSupermarket: "",
        nearestMiniMarket: "",
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

        bay: "",
        coinLaundry: "",
        dutyFree: "",
        healthBeautyspa: "",
        marina: "",
        museums: "",
        themeParks: "",
        waterParks: "",
        wineryTours: "",
        zoo: "",

        antiquing: "",
        birdWatching: "",
        ecoTourism: "",
        gambling: "",
        horsebackRiding: "",
        outletShopping: "",
        paddleBoating: "",
        sledding: "",
        boating: "",
        hopping: "",
        wildLifeViewing: "",
        waterSports: "",
        fitnessCenter: "",
        hospital: "",
        laundromat: "",
        },
sports: {
        skiing: false,
        iceSkating: false,
        crossCountrySkiing: false,
        snowboarding: false,
        snowmobiling: false,
        skiLiftPrivileges: false,
        skiLiftPrivilegesOptional: false,
        rockClimbing: false,
        mountainBiking: false,
        mountaineering: false,
        mountainClimbing: false,

        spelunking: false,
        hiking: false,
        paragliding: false,
        golf: false,
        golfOptional: false,
        hunting: false,
        rollerBlading: false,
        cycling: false,
        hotAirBallooning: false,
        tennis: false,
        equestrianEvents: false,

        fishing: false,
        fishingBay: false,
        deepseaFishing: false,
        fishingFly: false,
        fishingFreshwater: false,
        fishingSurf: false,
        jetSkiing: false,
        kayaking: false,
        rafting: false,
        parasailing: false,
        pierFishing: false,
        skiingWater: false,
        sportsTubingWater: false,
        sailing: false,
        snorkeling: false,
        swimming: false,
        whitewaterRafting: false,
        windSurfing: false,
        sportsSnorkelingDiving: false,
        surfing: false,
        powerBoatRental: false,

        basketball: false,
        sports: false,
        racquetball: false,
        area: false,
        scubaOrSnorkeling: "",
        },
extras: {
        ecoHouse: false,
        partiesNotAllowed: false,
        partiesAllowed: false,
        wheelchairFriendly: false,
        childrenAllowed: false,
        petsAllowed: false,
        smokingAllowed: false,

        babyListeningDevice: false,
        babyPotty: false,
        babyChangingTable: false,
        babyLinen: false,
        babyWashingGel: false,
        portBebe: false,
        cleaningProducts: false,
        babyBath: false,
        childSafetyGate: false,
        changingMat: false,

        physicalDistancing: false,
        },
};

export default INITIAL_DATA;
