Vue.component('cart-item', {
	template: `
		<div class="cart-item">
			<div class="cart-item__image">
				<img :src=" item.image ">
			</div>
			<div class="cart-item__content">
				<span>{{ item.name }}</span>
				<span>Quantity: <b>{{ item.quantity }}</b></span>
			</div>
			<div class="cart-item__price">R$ {{ item.price * item.quantity }}</div>
			<div class="cart-item__remove" @click="removeCart(item.id)"><i class="fa fa-times"></i></div>
		</div>
	`,

	props: ['item'],

	methods: {
		removeCart(id) {
			this.$root.cartItems = this.$root.cartItems.filter(function (item) {
				return item.id !== id
			})
		}
	}
})