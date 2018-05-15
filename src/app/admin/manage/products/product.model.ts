export class ProductModel {
    constructor(
    	public name: String = '',
		public mainImg: object = {},
		public images: Array<object> = [],
		public price: Number = 0,
		public salePrice: Number = 0,
		public brand: String = '',
		public category: object = {},
		public description: String = '',
		public metaDesc: String = '',
		public metaKey: Array<String> = [],
		public attributes: Array<object> = [],
		public viewer: Number = 0,
		public inStock: Number = 0,
		public likes: Number = 0,
		public createdAt?: Date,
		public updatedAt?: Date,
		public tags: Array<String> = [],
    	) {}
}
