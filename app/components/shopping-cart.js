Vue.component('shopping-cart', {
	template: `
		<div class="shopping-cart">
			<div class="shopping-cart__icon">
				<i class="fa fa-shopping-cart" aria-hidden="true"></i>
			</div>
			<div class="shopping-cart__wrapper">
				<div class="shopping-cart__content cart-content">
					<div class="cart-content__header">
						<h2>Shopping Cart</h2>
					</div>
					<div class="cart-content__list">
						<cart-list></cart-list>
					</div>
					<div class="cart-content__footer">
						<p>Total: R$ {{ sumCart }}</p>
					</div>
				</div>
			</div>
		</div>
	`,

	computed: {
		sumCart(){
			return this.$root.cartItems.reduce( function( prevVal, item ) {
				return prevVal + item.price
			}, 0 );
		}
	}
})