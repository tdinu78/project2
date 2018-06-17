
export class Supplier {
    type:string;
    name: string;
    lifecycle: string;
    place: object;
    phoneNumber: string;
    email: string;
    minPrice: number;
    minInv: number;
    maxInv: number;
    outdoor: boolean;
    accommodation: boolean;
    fireworks: boolean;
    events: boolean;
    preparations: boolean;
    parking: boolean;
    password: string;


    constructor(type: string, name: string, lifecycle: string, place:object, phoneNumber: string,
                email:string, minPrice: number, minInv: number, maxInv: number,
                outdoor: boolean, accommodation: boolean, fireworks: boolean,
                events: boolean, preparations: boolean, parking: boolean, password:string) {
        this.type = type;
        this.name = name;
        this.email = email;
        this.place = place;
        this.minPrice = minPrice;
        this.minInv = minInv;
        this.maxInv = maxInv;
        this.outdoor = outdoor;
        this.accommodation = accommodation;
        this.fireworks = fireworks;
        this.events = events;
        this.preparations = preparations;
        this.parking = parking;
        this.password=password;
    }
}
