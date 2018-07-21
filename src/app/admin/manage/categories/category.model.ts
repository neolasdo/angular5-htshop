export class CategoryModel {
    constructor(public name: String = '',
                public _id?: String,
                public slug: String = '',
                public metaDesc?: String,
                public metaKey?: Array<String>,
                public createdAt?: Date,
                public updatedAt?: Date
                ){}
}

