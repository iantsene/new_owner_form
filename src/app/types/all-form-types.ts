export type FormDataTypes = {
basicInfo: {
        lodgingType: string
    
        poolExists: boolean
    
        checkInTime: string
        selfCheckIn: boolean
        checkOutTime: string
        luggageCheckIn: boolean
        luggageDropTime: string
    
        rentalLicense: boolean
        extraLicenseRequired: boolean
        extraLicenseType: string
    
        maxPaxNumber: number | undefined
        maxAdultsNumber: number | undefined
        maxChildrenNumber: number | undefined
    
        bedroomNumber: number | undefined
        commonAreaBedsNumber: number | undefined
        bathroomNumber: number | undefined

        sofaBedsNumber: number | undefined
        campBedsNumber: number | undefined
        foldingBedsNumber: number | undefined
        cotsNumber: number | undefined
    
        enSuiteBathsNumber: number | undefined
        commonBathsNumber: number | undefined
    
        propertyAddress: string
        postCode: string
        gpsLatitude: string
        gpsLongitude: string
}
mainDescription: {
        awayFromItAll: boolean
        family: boolean
        romantic: boolean
        historical: boolean
        traditionalProperty: boolean
        secluded: boolean
        singleLevelHome: boolean
        detached: boolean
        semiDetached: boolean
        brandNew: boolean
        privateResidence: boolean
        bedAndBreakfast: boolean
    
        areaOfTheHouseInM2: string
        surroundingAreaInM2: string
        numOfFloorsToGround: string
        yearOfBuilt: string
    
        briefDescription: string
}
pool: {
        poolLevel: string
        terrace: boolean
        poolFurniture: boolean
        staircase: string
        jacuzziJets: boolean
        accessToPool: string
        fence: boolean
        poolTowels: boolean
        poolShower: boolean
        inflatables: boolean
    
        safetySign: boolean
        depthMarks: boolean
        poolRing: boolean
        poolLasso: boolean
        solarPanels: boolean
        poolMaintained: boolean
    
        minWidth: string
        maxWidth: string
        minDepth: string
        maxdepth: string
}
outside: {
        diningTerrace: boolean
        outsideFridge: boolean
        outsideKitchen: boolean
        traditionalPizzaOven: boolean
        outsideMiniBar: boolean
        chairsAndTableOutside: boolean
        kiosk: string
    
        washingBasin: boolean
        barbeque: string
    
        garden: boolean
        gardener: boolean
        trees: boolean
        grass: boolean
        yard: boolean
        deck: boolean
        porch: boolean
        roofTerrace: boolean
        balcony: boolean
    
        extraWaterTank: boolean
        drinkingWater: boolean
        waterFromAPersonalSupply: boolean
    
        poolTable: boolean
        outdoorJacuzzi: boolean
        footballGame: boolean
        outsideTableTennis: boolean
        playground: boolean
        gardenSwing: boolean
        hammock: boolean
        poofPilows: boolean
    
        basketballCourt: boolean
        tennisCourt: boolean
    
        terraceOrVeranda: string
        shadedTerraceOrveranda: string
        umbrella: string
        sunloungers: string
    
        parkingAvailable: boolean
        parkingDescription: string
        garage: boolean
        privateParking: boolean
        freeParkingOnTheStreet: boolean
}
inside: {
        livingRoom: boolean
        livingRoomDescription: string
        fireplaceType: string
        sofa: boolean
        tvType: string
        satelliteOrCable: boolean
        sauna: boolean
    
        internetType: string
        freeWifi: boolean
        wifiBroadband: boolean
        networkCode: string
    
        heating: string
        fan: boolean
        airConditioningCooling: boolean
        airConditioningHeating: boolean
        acInLounge: boolean
        ceilingFans: boolean
        standingFans: boolean
        woodStove: boolean
    
        hotWaterFromSolar: boolean
        hotWaterFromElectric: boolean
    
        cleaningMaterials: boolean
        dishwasher: boolean
        laundryRoom: boolean
        washingMachine: boolean
        tumbleDryer: boolean
        washerDryer: boolean
        ironNIroningBoard: boolean
        clothesDryerRack: boolean
        clothesStorage: boolean
    
        hairdryer: boolean
        mosquitoNets: boolean
        dvdPlayer: boolean
        musicSystem: boolean
        outletAdapters: boolean
        insideMiniBar: boolean
    
        insideJacuzzi: boolean
        fitnessRoom: boolean
        gym: boolean
        books: boolean
    
        privateEntrance: boolean
        petrolBoiler: boolean
        safeBox: boolean
        workStation: boolean
        telephone: boolean
        electricityKeyFob: boolean
        elevator: boolean
    
        insideTableTennis: boolean
        availableSmallGames: boolean
        videoGames: boolean
        toys: boolean
        videoLibrary: boolean
        musicLibrary: boolean
        gameRoom: boolean
        snookerTable: boolean
}
bedsNbaths: {
        bedrooms: Bedroom[]
        commonAreaBeds: CommonAreaBeds[] | []
        commonBaths: CommonBaths[] | []
}
kitchen: {
        microwave: boolean
        toaster: boolean
        smallFridge: boolean
        fridgeWithFreezer: boolean
        sandwichToaster: boolean
        blenderOrMulti: boolean
        breadMaker: boolean
        mixer: boolean
        kettle: boolean
        filterCoffeeMachine: boolean
        fryer: boolean
        espressoCoffeeMachine: boolean
        waterDispenser: boolean
    
        kitchen: boolean
        kitchenette: boolean
        stove: boolean
        cookerWithSmallOven: boolean
        extraSmallBbqOven: boolean
        separateStove: boolean
      
      
        diningArea: boolean
        diningRoomOrSpace: boolean
        diningTable: boolean
        wineGlasses: boolean
        dishesAndSilverware: boolean
        cookwareAndKitchenUtensils: boolean
        cookingBasics: boolean
        highChair: boolean
    
        coffeeTypeAvailable: string
        cookerWithFullOven: string
        fridgeOrFreezer: string
}
amenities: {
        carHireRecommendation: boolean
        hotWaterProvided: boolean
        basicEssentials: boolean
        roomDarkeningShades: boolean
        hangers: boolean
        beachSunLoungersProvided: boolean
        beachTowelsProvided: boolean
        showerGel: boolean
        paddleBoard: boolean
        beachChair: boolean
        shampooProvided: boolean
        extraPillowsAndBlankets: boolean
        beachTowelsCoolBagsAndBoxes: boolean
    
        keyLocation: string
        extraKeyLocation: string
    
        bedLinen: boolean
        linenOnceAWeek: boolean
        linenTwiceAWeek: boolean
        linenCleaningMethod: string
    
        maidEveryDay: boolean
        maidOnceAWeek: boolean
        maidTwiceAWeek: boolean
        maidThriceAWeek: boolean
      
        safeEnhachedCleaning: string
        safeCleaningDisinfection: string
        safeSelfCheckInCheckOut: string
        safeCommonSurfaceDisinfecting: string
      
        safeSanitaryAssociation: string
        sanitaryStandard: string
      
        towels: boolean
        towelsOnceAWeek: boolean
        towelsTwiceAWeek: boolean
        towelsThriceAWeek: boolean
}
safety: {
        carbonMonoxideAlarm: boolean
        emergencyExitRoute: boolean
        firstAidKit: boolean
        fireExtinguisher: boolean
        smokeAlarm: boolean
        deadboltLock: boolean
        policeEmergencyContact: boolean
        fireEmergencyContact: boolean
        outdoorLighting: boolean
        lightningProtection: boolean
        medicalEmergencyContact: boolean
}
location: {
        resort: boolean
        river: boolean
        rural: boolean
        skiIn: boolean
        skiOut: boolean
        town: boolean
        village: boolean
        waterfront: boolean
        onTheBeach: boolean
        train: boolean
        taverna: boolean
        countryside: boolean
        beachFront: boolean
        highway: boolean
        walkToTheBeach: boolean
        
        beachView: boolean
        oceanView: boolean
        seaView: boolean
        bayView: boolean
        waterView: boolean
        marinaView: boolean
        panoramicView: boolean
        harborView: boolean
        vineyardView: boolean
        sunsetView: boolean
        sunriseView: boolean
        cityView: boolean
        countrysideView: boolean
        gardenView: boolean
        mountainView: boolean
        resortView: boolean
        valleyView: boolean
        poolView: boolean
    
        kitchenGround: boolean
        diner: boolean
        dinerDescription: string
        serviceSupermarket: boolean
        serviceSupermarketDelivery: boolean
        serviceLunch: boolean
        serviceOwnerNearby: boolean
        childrenYes: boolean
        serviceBoatTaxiService: boolean
        serviceMealDeliveryService: boolean
        
        closestBeach: string
        distanceToShops: string
        distanceToTheBeach: string
        distanceToAirport: string
        distanceToCityCenter: string
        distanceToKiosk: string
        distanceToBar: string
        distanceToFerry: string
        distanceToGolf: string
        nearestVillage: string
        nearestPointOfInterest: string
      
        nearestRestaurant: string
        nearestSupermarket: string
        nearestMiniMarket: string
        nearestAtm: string
        nearestBank: string
        nearestWaterPark: string
        nearestMarina: string
        nearestDiveCenter: string
        nearestHospital: string
        nearestPoliceStation: string
        nearestPetrolStation: string
        nearestBusStation: string
        nearestTennisCourt: string
        nearestPharmacy: string
        nearestHairdressers: string
        nearestMedicalCenter: string
        nearestLaunderette: string
      
        bay: string
        coinLaundry: string
        dutyFree: string
        healthBeautyspa: string
        marina: string
        museums: string
        themeParks: string
        waterParks: string
        wineryTours: string
        zoo: string
      
        antiquing: string
        birdWatching: string
        ecoTourism: string
        gambling: string
        horsebackRiding: string
        outletShopping: string
        paddleBoating: string
        sledding: string
        boating: string
        hopping: string
        wildLifeViewing: string
        waterSports: string
        fitnessCenter: string
        hospital: string
        laundromat: string
}
sports: {
        skiing: boolean
        iceSkating: boolean
        crossCountrySkiing: boolean
        snowboarding: boolean
        snowmobiling: boolean
        skiLiftPrivileges: boolean
        skiLiftPrivilegesOptional: boolean
        rockClimbing: boolean
        mountainBiking: boolean
        mountaineering: boolean
        mountainClimbing: boolean
        
        spelunking: boolean
        hiking: boolean
        paragliding: boolean
        golf: boolean
        golfOptional: boolean
        hunting: boolean
        rollerBlading: boolean
        cycling: boolean
        hotAirBallooning: boolean
        tennis: boolean
        equestrianEvents: boolean
      
        fishing: boolean
        fishingBay: boolean
        deepseaFishing: boolean
        fishingFly: boolean
        fishingFreshwater: boolean
        fishingSurf: boolean
        jetSkiing: boolean
        kayaking: boolean
        rafting: boolean
        parasailing: boolean
        pierFishing: boolean
        skiingWater: boolean
        sportsTubingWater: boolean
        sailing: boolean
        snorkeling: boolean
        swimming: boolean
        whitewaterRafting: boolean
        windSurfing: boolean
        sportsSnorkelingDiving: boolean
        surfing: boolean
        powerBoatRental: boolean

        basketball: boolean
        sports: boolean
        racquetball: boolean
        area: boolean
        scubaOrSnorkeling: string
}
extras: {
        ecoHouse: boolean
        partiesNotAllowed: boolean
        partiesAllowed: boolean
        wheelchairFriendly: boolean
        childrenAllowed: boolean
        petsAllowed: boolean
        smokingAllowed: boolean

        babyListeningDevice: boolean
        babyPotty: boolean
        babyChangingTable: boolean
        babyLinen: boolean
        babyWashingGel: boolean
        portBebe: boolean
        cleaningProducts: boolean
        babyBath: boolean
        childSafetyGate: boolean
        changingMat: boolean

        physicalDistancing: boolean
}
};


export type BedroomType = '' | 'single' | 'double' | 'triple' | 'twin';
export type Level =  ''| 'ground' | 'first' | 'second' | 'third' |  'attic' | 'annex';
export type Bed = '' | 'double' | 'single' | 'king' | 'queen' |  'baby crib' | 'sofa bed' | 'murphy' | 'bunk bed' | 'child bed';
export type EnSuiteType = '' | 'shower' | 'bathroom' | 'wc';
export type EnSuite = '' | 'toilet' | 'bath with shower' | 'bath with jets' | 'bidet';
export type Heating = '' | 'aircon' | 'ceilingFan';
export type CommonAreaBed = '' | 'double' | 'single' | 'king' | 'queen' |  'baby crib' | 'sofa bed' | 'murphy' | 'bunk bed' | 'child bed' | 'travel cot';
export type CommonBathType = '' | 'family shower' | 'family bathroom' | 'family wc';
export type CommonBath = '' | 'toilet' | 'bath with shower' | 'bath' | 'shower' | 'bath with jets' | 'bidet' | 'outdoor shower';



export interface Bedroom {
    bedroomType: BedroomType;
    level: Level;
    beds: Bed[];
    enSuiteTypes: {type: EnSuiteType, subtype: EnSuite}[];
    heating: Heating[];
}


export interface CommonAreaBeds {
        level: Level;
        commonBeds: CommonAreaBed[];
    }

export interface CommonBaths {
        level: Level;
        commonBathTypes: {type: CommonBathType, subtype: CommonBath}[];
    }