import { LightningElement, api } from 'lwc';

export default class ViewSource extends LightningElement {
    baseURL =
        'https://github.com/risha9177719594/LWCTrail/tree/master/src/modules';

    @api source;

    get sourceURL() {
        return this.baseURL + this.source;
    }
}
