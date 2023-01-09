//data_place = document.getElementById('data1')

//getting elements from HTML
points_place = document.getElementById("points_insert")
rebounds_place = document.getElementById("rebounds_insert")

//Request!
axios.get('https://giannisapi.193ftgw.repl.co/stats').then(resp => {
	data = resp.data;
	//console.log(data)


	//Place Data into HTML
	//data_place.innerHTML = data;
	points_place.innerHTML = data[22]
	rebounds_place.innerHTML = data[16]



	console.log(data)
	console.log(data[22])
});

