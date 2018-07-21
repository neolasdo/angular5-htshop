export class ProductModel {
    constructor(public name: String = '',
                public slug: String = '',
                public _id?: String,
                public mainImg?: Number,
                public images?: Array<Number>,
                public price: Number = 0,
                public salePrice?: Number,
                public brand?: String,
                public category?: String,
                public description?: String,
                public metaDesc?: String,
                public metaKey?: Array<String> ,
                public attributes?: Array<object>,
                public viewer?: Number,
                public inStock?: Number,
                public likes?: Number,
                public createdAt?: Date,
                public updatedAt?: Date,
                public tags?: Array<String>) {
    }
}
