import {SupplierModel} from "./supplier.model";

export class SupplierRespModel {
    rc: number;
    message: string;
    results: SupplierModel[];

    constructor(rc: number, message: string, results: SupplierModel[]) {
        this.rc = rc;
        this.message = message;
        this.results = results;
    }
}
