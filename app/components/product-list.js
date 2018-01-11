Vue.component('product-list', {
	template: `
		<div class="product-list">
			<product v-for="prod in products" :key="prod.id" :product="prod"></product>
		</div>

	`,

	data () {
		return {
			products: [
				{
					id: 1,
					image: 'http://www.fundosanimais.com/Imagens/imagens-lobos.jpg',
					name: 'Suscipit felis.',
					description: 'Lacinia aenean massa mattis mi, massa condimentum nibh.',
					price: 465.00
				},
				{
					id: 2,
					image: 'http://baixarimagensgratis.org/wp-content/uploads/2017/12/skull-wallpaper12.jpg',
					name: 'Torquent inceptos',
					description: 'Mattis quisque convallis mauris donec, id erat euismod.',
					price: 687.00
				},
				{
					id: 3,
					image: 'https://i.imgur.com/lMMIu6V.jpg',
					name: 'Blandit imperdiet',
					description: 'Nibh consectetur tempus pharetra velit, aliquam consectetur convallis.',
					price: 321.00
				},
				{
					id: 4,
					image: 'http://www.fundosanimais.com/Imagens/imagens-lobos.jpg',
					name: 'Faucibus fringilla',
					description: 'Fusce ultrices nibh blandit aenean, ut nam praesent.',
					price: 159.00
				},
				{
					id: 5,
					image: 'http://baixarimagensgratis.org/wp-content/uploads/2017/12/skull-wallpaper12.jpg',
					name: 'Velit semper',
					description: 'Commodo velit hendrerit eros taciti, ut rhoncus integer.',
					price: 486.00
				},
				{
					id: 6,
					image: 'https://i.imgur.com/lMMIu6V.jpg',
					name: 'Aliquam nisi',
					description: 'Nostra magna dolor luctus condimentum, quisque nunc elementum.',
					price: 357.00
				},
				{
					id: 7,
					image: 'http://www.fundosanimais.com/Imagens/imagens-lobos.jpg',
					name: 'Habitasse egestas',
					description: 'A sollicitudin ipsum sapien placerat, viverra orci malesuada',
					price: 397.00
				},
				{
					id: 8,
					image: 'http://baixarimagensgratis.org/wp-content/uploads/2017/12/skull-wallpaper12.jpg',
					name: 'Aenean sociosqu',
					description: 'In proin etiam gravida, eu dictumst, feugiat orci. ',
					price: 147.00
				},
				{
					id: 9,
					image: 'https://i.imgur.com/lMMIu6V.jpg',
					name: 'Pretium odio',
					description: 'Semper donec vulputate habitant cras, luctus eu morbi. ',
					price: 951.00
				},
				{
					id: 10,
					image: 'http://www.fundosanimais.com/Imagens/imagens-lobos.jpg',
					name: 'Dolor integer elit',
					description: 'Egestas est velit luctus malesuada, nisi nullam varius. ',
					price: 621.00
				},
				{
					id: 11,
					image: 'http://baixarimagensgratis.org/wp-content/uploads/2017/12/skull-wallpaper12.jpg',
					name: 'Purus dolor',
					description: 'Netus fringilla aliquam nec blandit, aliquam mauris turpis. ',
					price: 751.00
				},
				{
					id: 12,
					image: 'https://i.imgur.com/lMMIu6V.jpg',
					name: 'Leo porttitor eu',
					description: 'Sollicitudin quisque semper torquent iaculis, tristique taciti sagittis. ',
					price: 375.00
				}
			]
		}
	}
})
