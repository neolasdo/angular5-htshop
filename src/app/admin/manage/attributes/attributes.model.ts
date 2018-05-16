export class AttributesModel {
    constructor(
        public name: String = '',
        public type: String = '',
        public value: Array<any> = [],
        public required: boolean = false,
        public visible: boolean = false,
        public hasPrice: boolean = false,
    ) {}
}
