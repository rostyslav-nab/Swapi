export default class SwapiService {
    _apiBase = 'https://swapi.dev/api'
    async getResource (url){
        const res = await fetch(`${this._apiBase}${url}`)

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json()
    }

    async getAllPeople(){
        const res = await this.getResource('/people/')
        return res.results.map(this._transformPerson)
    }

    async getPerson(id){
        const person = await this.getResource(`/people/${id}/`)
        return this._transformPerson(person)
    }

    async getAllPlanents(){
        const res = await this.getResource('/planets/')
        return res.results.map(this._transformPlanet)
    }

    async getPlanets(id){
        const planet = await this.getResource(`/planets/${id}/`)
        return this._transformPlanet(planet)
    }

    async getAllStarships(){
        const res = await this.getResource('/starships/')
        return res.results.map(this._transformStarship)
    }

    async getStarship(id){
        const starship = await this.getResource(`/starships/${id}/`)
        return this._transformStarship(starship)
    }

    _extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1]
    }

    _transformPlanet = (planet)=>{
        return{
            id: this._extractId(planet),
            name: planet.name,
            diameter: planet.diameter,
            rotationPeriod: planet.rotation_period,
            population: planet.population
        }
    }

    _transformStarship=(starship)=>{
        return{
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.data.crew
        }
    }

    _transformPerson=(person)=>{
        return{
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}

const api = new SwapiService()

api.getAllPeople().then(people=>{
    console.log(people)
})