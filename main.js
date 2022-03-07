const pokemonCard = document.querySelectorAll('.pokemon');

pokemonCard.forEach((item) => {
	item.addEventListener('click', () => {
		location.href = 'detail-pokemon.html';
	});
});
