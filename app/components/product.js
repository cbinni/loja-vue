Vue.component('product', {
	template: `
		<div class="card-product">
			<div class="card-product__image" :style="{backgroundImage:  'url('+ product.image +')' }"></div>
			<div class="card-product__title">
				{{ product.name }}
			</div>
			<div class="card-product__description">
				<p>{{ product.description }}</p>
				
				<div class="card-product__price">R$ {{ product.price }}</div>
				<div class="card-product__button button">
					<div class="button__add-cart" @click="addCart">
						ADD TO CART
					</div>
				</div>
			</div>
		</div>
	`,

	props: ['product'],

	methods: {
		addCart() {
			this.$root.cartItems.push(this.product)
		}
	}
})
	

// `url(${prod.image})`
// 'url('+ prod.image +')'

