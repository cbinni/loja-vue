Vue.component('cart-list', {
	template: `
		<div class="cart-list">
			<cart-item v-for="item in groupedCartItems" :key="item.id" :item="item"></cart-item>
		</div>
	`,
	computed: {
		groupedCartItems () {

			var newCartItems = []

			this.$root.cartItems.forEach(function (item) {

				var itemIndex = newCartItems.findIndex(function (newCartItem) {
					return item.id == newCartItem.id
				})

				if (itemIndex >= 0) {
					Vue.set(newCartItems[itemIndex], `quantity`, newCartItems[itemIndex].quantity + 1)
				} else {
					Vue.set(item, 'quantity', 1)
					newCartItems.push(item)
				}
			})

			return newCartItems
		}
	}
})