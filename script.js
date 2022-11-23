data_place = document.getElementById('data1')



axios.get('https://giannisapi.193ftgw.repl.co/').then(resp => {
    data = resp.data;
	//console.log(data)
	data2 = data.replace(/\'/g, "\"")
	 
	data_place.innerHTML = data2;

	
	
	 
	console.log(data2)
});	

