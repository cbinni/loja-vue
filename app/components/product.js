Vue.component('product', {
	template: `
		<div class="card-product">
			<div class="card-product__image" style="background-image: url('http://baixarimagensgratis.org/wp-content/uploads/2017/12/skull-wallpaper12.jpg');"></div>
			<div class="card-product__title">
				Product title
			</div>
			<div class="card-product__description">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.</p>
				
				<div class="card-product__price">R$ 200,00</div>
				<div class="card-product__button button">
					<div class="button__add-cart">
						ADD TO CART
					</div>
				</div>
			</div>
		</div>
	`
})