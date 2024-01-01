const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// empty search string returns no results
	if (str == "") {
		return [];
	}

	for (f of fruit) {
		if (f.toLowerCase().includes(str.toLowerCase())) {
			results.push(f);
		}
	}

	return results;
}

function searchHandler(e) {
	const results = search(e.target.value);
	showSuggestions(results, e.target.value);
}

function showSuggestions(results, inputVal) {
	// reset suggestions list
	suggestions.textContent = "";

	// limit search results to first 5
	results = results.slice(0, 5);
	console.log(results)

	for (result of results) {
		const li = document.createElement("li");

		// highlight the matching string in bold
		const i = result.toLowerCase().indexOf(inputVal.toLowerCase());
		const firstPart = result.slice(0, i);
		const strong = "<strong>" + result.slice(i, i + inputVal.length) + "</strong>";
		const lastPart = result.slice(i + inputVal.length, result.length);
		li.innerHTML = firstPart + strong + lastPart;

		suggestions.appendChild(li)
	}
}

function useSuggestion(e) {
	// replace input with selected suggestion
	suggestions.textContent = "";
	input.value = e.target.textContent;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);