
var cisapi = {
    root : "https://api.autodealerdata.com/",
    jwt:"",
    //Javascript bindings to the CIS Automotive API
    //This library requires Jquery for AJAX support
    //The slim version of Jquery does not support AJAX
    init: function () {
        var j = document.getElementById("cisapi-jwt");
        if (j) {
            this.jwt = j.textContent;
            return;
        }
        console.log("ERROR: Cisapi unable to find API credentials.");
        
    },
    get: function (endPoint, args, onSuccess, onFailure, method = "GET", timeout = 30000) {
        args["jwt"] = this.jwt;
        if (this.jwt === "") {
            console.log("ERROR: You must set cisapi.jwt before API calls can be made.");
            return;
        }
        $.ajax({
            type: method,
            url: this.root+endPoint,
            data: args,
            timeout: timeout,
            cache:true,
            //contentType:"text/plain",
            success: function (data) { onSuccess(data); },
            error: function (data) { onFailure(data); }
        });
    },

    getRegions: function (onSuccess, onFailure) {
        this.get("getRegions", {}, onSuccess, onFailure);
    },
    getBrands: function (onSuccess, onFailure) {
        this.get("getBrands", {}, onSuccess, onFailure);
    },
    getModels: function (brandName, onSuccess, onFailure) {
        this.get("getModels", { "brandName":brandName}, onSuccess, onFailure);
    },
    getInactiveModels: function (brandName, onSuccess, onFailure) {
        this.get("getInactiveModels", { "brandName":brandName}, onSuccess, onFailure);
    },

    daysToSell: function (brandName, regionName, onSuccess, onFailure) {
        this.get("daysToSell", { "brandName": brandName, "regionName":regionName}, onSuccess, onFailure);
    },
    daysSupply: function (brandName, regionName, onSuccess, onFailure) {
        this.get("daysSupply", { "brandName": brandName, "regionName": regionName }, onSuccess, onFailure);
    },
    listPrice: function (brandName, regionName, onSuccess, onFailure) {
        this.get("listPrice", { "brandName": brandName, "regionName": regionName }, onSuccess, onFailure);
    },
    salePrice: function (brandName, regionName, onSuccess, onFailure) {
        this.get("salePrice", { "brandName": brandName, "regionName": regionName }, onSuccess, onFailure);
    },
    salePriceHistogram: function (modelName, brandName, regionName, onSuccess, onFailure) {
        this.get("salePriceHistogram", { "modelName":modelName, "brandName": brandName, "regionName": regionName }, onSuccess, onFailure);
    },
    similarSalePrice: function (vin, regionName, daysBack=45, sameYear=false, onSuccess, onFailure) {
        this.get("similarSalePrice", { "vin":vin, "daysBack":daysBack, "sameYear":sameYear, "regionName": regionName }, onSuccess, onFailure);
    },

    modelYearDist: function (modelName, brandName, regionName, onSuccess, onFailure) {
        this.get("modelYearDist", { "modelName": modelName, "brandName": brandName, "regionName": regionName }, onSuccess, onFailure);
    },
    topModels: function (regionName, onSuccess, onFailure) {
        this.get("topModels", { "regionName": regionName }, onSuccess, onFailure);
    },
    getRegionBrandMarketShare: function (brandName, regionName, onSuccess, onFailure) {
        this.get("getRegionBrandMarketShare", { "regionName": regionName , "brandName":brandName}, onSuccess, onFailure);
    },
    getRegionMarketShare: function (regionName, onSuccess, onFailure) {
        this.get("getRegionMarketShare", { "regionName": regionName }, onSuccess, onFailure);
    },
    regionSales: function (brandName, regionName, month, onSuccess, onFailure) {
        this.get("regionSales", { "brandName":brandName, "regionName": regionName, "month":month }, onSuccess, onFailure);
    },
    regionDailySales: function (brandName, regionName, day, onSuccess, onFailure) {
        this.get("regionDailySales", { "brandName":brandName, "regionName": regionName, "day":day}, onSuccess, onFailure);
    },
    getDealers: function (zipCode, onSuccess, onFailure) {
        this.get("getDealers", { "zipCode": zipCode }, onSuccess, onFailure);
    },
    getDealersByRegion: function (regionName, page, onSuccess, onFailure) {
        this.get("getDealersByRegion", { "regionName": regionName, "page":page }, onSuccess, onFailure);
    },
    getDealersByID: function (dealerID, onSuccess, onFailure) {
        this.get("getDealersByID", { "dealerID": dealerID}, onSuccess, onFailure);
    },

    similarSalePrice: function (vin, regionName, daysBack, sameYear, onSuccess, onFailure) {
        this.get("similarSalePrice", { "vin": vin, "regionName": regionName, "daysBack": daysBack, "sameYear": sameYear }, onSuccess, onFailure);
    },
    vehicleHistory: function (vin, onSuccess, onFailure) {
        this.get("vehicleHistory", { "vin": vin }, onSuccess, onFailure);
    },
    vinDecode: function (vin, onSuccess, onFailure) {
        this.get("vinDecode", { "vin": vin }, onSuccess, onFailure);
    },

    listings: function (dealerID, page, newCars, onSuccess, onFailure) {
        this.get("listings", { "dealerID": dealerID, "page": page, "newCars": newCars }, onSuccess, onFailure);
    },
    listingsByRegion: function (regionName, modelName, daysBack, page, newCars, onSuccess, onFailure) {
        this.get("listingsByRegion", { "regionName": regionName, "modelName": modelName, "daysBack": daysBack, "page": page, "newCars": newCars }, onSuccess, onFailure);
    },
    listingsByRegionAndDate: function (regionName, modelName, startDate, endDate, page, newCars, onSuccess, onFailure) {
        this.get("listingsByRegionAndDate", { "regionName": regionName, "modelName": modelName, "startDate": startDate, "endDate": endDate, "page": page, "newCars": newCars }, onSuccess, onFailure);
    },


    simplePrint: function (data) {
        console.log(data);
    }
    
};

cisapi.init();
