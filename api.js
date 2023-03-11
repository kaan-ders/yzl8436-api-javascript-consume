function filmleriListele() {	
	/*$.ajax({
		type: "GET",
		url: "https://api.themoviedb.org/3/movie/popular?api_key=837fd3c1b9dffbbe7b69a4a979ab2fe3",
		success: function (data) {
			for(let i = 0; i < data.results.length; i++) {
				satirEkle(data.results[i]);
			}
		},
		error: function (req, status, error) {
			console.log(msg);
		}
	});*/
	
	$.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=837fd3c1b9dffbbe7b69a4a979ab2fe3", function(data) {
		for(let i = 0; i < data.results.length; i++) {
			satirEkle(data.results[i]);
		}
	});
}

function satirEkle(film) {	
	var row = `<tr>
				<td>` + film.title + `</td>
			</tr>`;
	
	$('#filmler > tbody:last-child').append(row);
}

$(document).ready(function() {
    filmleriListele();
});