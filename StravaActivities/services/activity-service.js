const ActivityRepository = require('../repository/activity-repository');

module.exports = class ActivityService {
    constructor() {
        this.activityRepository = new ActivityRepository()
    }

    async createAtivityPhoto(reqBody) {
        this.validateBasicParams(reqBody)
        this.validatePhotoParams(reqBody)
        return await this.activityRepository.insertAtivityPhoto(reqBody);
    }

    async createAtivityPost(reqBody){
        this.validateBasicParams(reqBody)
        this.validatePostParams(reqBody)
        return await this.activityRepository.insertAtivityPost(reqBody);
    }

    async createManualPhysicalAtivity(reqBody){
        this.validateBasicParams(reqBody)
        this.validatePhysicalAactivitiesParams(reqBody)
        this.validateManualPhysicalAtivityParams(reqBody)
        return await this.activityRepository.insertManualPhysicalAtivity(reqBody);
    }

    async createAutomaticPhysicalAtivity(reqBody){
        this.validateBasicParams(reqBody)
        this.validatePhysicalAactivitiesParams(reqBody)
        this.validateAutomaticPhysicalAtivityParams(reqBody)
        return await this.activityRepository.insertAutomaticPhysicalAtivity(reqBody);
    }

    async get(user) {
        var completeActivitiesJsons = await this.activityRepository.get(user);
        return this.removeNullsParameters(completeActivitiesJsons)
    }

    removeNullsParameters(completeActivitiesJsons){

        completeActivitiesJsons.forEach(activity => {
            Object.keys(activity).forEach(function(key) {
                if(activity[key] == null){
                    delete activity[key]
                }
            })
        });
        return completeActivitiesJsons
    }
    
    validateBasicParams(reqBody){
        if(reqBody.user == undefined) throw new Error("Undefined user")
        if(reqBody.date == undefined) throw new Error("Undefined date")
        if(reqBody.title == undefined) throw new Error("Undefined title")
    }

    validatePhotoParams(reqBody){
        if(reqBody.url == undefined) throw new Error("Undefined url")
        if(reqBody.comment == undefined) throw new Error("Undefined comment")
    }

    validatePostParams(reqBody){
        if(reqBody.text == undefined) throw new Error("Undefined text")
    }

    validatePhysicalAactivitiesParams(reqBody){
        if(reqBody.type == undefined) throw new Error("Undefined type")
        if(reqBody.duration == undefined) throw new Error("Undefined duration")
        if(reqBody.distance == undefined) throw new Error("Undefined distance")
    }

    validateManualPhysicalAtivityParams(reqBody){
        if(reqBody.photo == undefined) throw new Error("Undefined photo")
        if(reqBody.description == undefined) throw new Error("Undefined description")
        if(reqBody.effort == undefined) throw new Error("Undefined effort")
    }

    validateAutomaticPhysicalAtivityParams(reqBody){
        if(reqBody.location == undefined) throw new Error("Undefined location")
        if(reqBody.average_speed == undefined) throw new Error("Undefined average_speed")
        if(reqBody.cadence == undefined) throw new Error("Undefined cadence")
        if(reqBody.calories == undefined) throw new Error("Undefined calories")
    }
}