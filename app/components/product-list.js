Vue.component('product-list', {
	template: `
		<div class="product-list">
			<product v-for="prod in products"></product>
		</div>

	`,

	data () {
		return {
			products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
		}
	}
})