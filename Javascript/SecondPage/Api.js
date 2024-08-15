/*--------------- API ---------------*/		

function list(){
 
	fetch("https://corona.lmao.ninja/v2/countries/Afghanistan")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c1").innerHTML = data.cases.toLocaleString();
		document.getElementById("r1").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d1").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a1").innerHTML = data.active.toLocaleString();
	})

	fetch("https://corona.lmao.ninja/v2/countries/Albania")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c2").innerHTML = data.cases.toLocaleString();
		document.getElementById("r2").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d2").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a2").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Algeria")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c3").innerHTML = data.cases.toLocaleString();
		document.getElementById("r3").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d3").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a3").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Andorra")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c4").innerHTML = data.cases.toLocaleString();
		document.getElementById("r4").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d4").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a4").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Angola")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c5").innerHTML = data.cases.toLocaleString();
		document.getElementById("r5").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d5").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a5").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Anguilla")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c6").innerHTML = data.cases.toLocaleString();
		document.getElementById("r6").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d6").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a6").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Antigua and Barbuda")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c7").innerHTML = data.cases.toLocaleString();
		document.getElementById("r7").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d7").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a7").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Argentina")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c8").innerHTML = data.cases.toLocaleString();
		document.getElementById("r8").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d8").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a8").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Armenia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c9").innerHTML = data.cases.toLocaleString();
		document.getElementById("r9").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d9").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a9").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Aruba")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c10").innerHTML = data.cases.toLocaleString();
		document.getElementById("r10").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d10").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a10").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/Countries/Australia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c11").innerHTML = data.cases.toLocaleString();
		document.getElementById("r11").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d11").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a11").innerHTML = data.active.toLocaleString();
	})

	fetch("https://corona.lmao.ninja/v2/countries/Austria")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c12").innerHTML = data.cases.toLocaleString();
		document.getElementById("r12").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d12").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a12").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Azerbaijan")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c13").innerHTML = data.cases.toLocaleString();
		document.getElementById("r13").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d13").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a13").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Bahamas")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c14").innerHTML = data.cases.toLocaleString();
		document.getElementById("r14").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d14").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a14").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Bahrain")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c15").innerHTML = data.cases.toLocaleString();
		document.getElementById("r15").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d15").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a15").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Bangladesh")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c16").innerHTML = data.cases.toLocaleString();
		document.getElementById("r16").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d16").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a16").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Barbados")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c17").innerHTML = data.cases.toLocaleString();
		document.getElementById("r17").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d17").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a17").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Belarus")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c18").innerHTML = data.cases.toLocaleString();
		document.getElementById("r18").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d18").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a18").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Belgium")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c19").innerHTML = data.cases.toLocaleString();
		document.getElementById("r19").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d19").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a19").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Belize")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c20").innerHTML = data.cases.toLocaleString();
		document.getElementById("r20").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d20").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a20").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Benin")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c21").innerHTML = data.cases.toLocaleString();
		document.getElementById("r21").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d21").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a21").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Bermuda")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c22").innerHTML = data.cases.toLocaleString();
		document.getElementById("r22").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d22").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a22").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Bhutan")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c23").innerHTML = data.cases.toLocaleString();
		document.getElementById("r23").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d23").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a23").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Bolivia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c24").innerHTML = data.cases.toLocaleString();
		document.getElementById("r24").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d24").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a24").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Bosnia and Herzegovina")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c25").innerHTML = data.cases.toLocaleString();
		document.getElementById("r25").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d25").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a25").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Botswana")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c26").innerHTML = data.cases.toLocaleString();
		document.getElementById("r26").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d26").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a26").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Brazil")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c27").innerHTML = data.cases.toLocaleString();
		document.getElementById("r27").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d27").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a27").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/British Virgin Islands")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c28").innerHTML = data.cases.toLocaleString();
		document.getElementById("r28").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d28").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a28").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Brunei")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c29").innerHTML = data.cases.toLocaleString();
		document.getElementById("r29").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d29").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a29").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Bulgaria")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c30").innerHTML = data.cases.toLocaleString();
		document.getElementById("r30").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d30").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a30").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Burkina Faso")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c31").innerHTML = data.cases.toLocaleString();
		document.getElementById("r31").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d31").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a31").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Burundi")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c32").innerHTML = data.cases.toLocaleString();
		document.getElementById("r32").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d32").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a32").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Cabo Verde")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c33").innerHTML = data.cases.toLocaleString();
		document.getElementById("r33").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d33").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a33").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Cambodia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c34").innerHTML = data.cases.toLocaleString();
		document.getElementById("r34").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d34").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a34").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Cameroon")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c35").innerHTML = data.cases.toLocaleString();
		document.getElementById("r35").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d35").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a35").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Canada")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c36").innerHTML = data.cases.toLocaleString();
		document.getElementById("r36").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d36").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a36").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/CAR")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c37").innerHTML = data.cases.toLocaleString();
		document.getElementById("r37").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d37").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a37").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Caribbean Netherlands")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c38").innerHTML = data.cases.toLocaleString();
		document.getElementById("r38").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d38").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a38").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Cayman Islands")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c39").innerHTML = data.cases.toLocaleString();
		document.getElementById("r39").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d39").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a39").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Chad")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c40").innerHTML = data.cases.toLocaleString();
		document.getElementById("r40").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d40").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a40").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Channel Islands")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c41").innerHTML = data.cases.toLocaleString();
		document.getElementById("r41").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d41").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a41").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Chile")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c42").innerHTML = data.cases.toLocaleString();
		document.getElementById("r42").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d42").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a42").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/China")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c43").innerHTML = data.cases.toLocaleString();
		document.getElementById("r43").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d43").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a43").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Colombia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c44").innerHTML = data.cases.toLocaleString();
		document.getElementById("r44").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d44").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a44").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Comoros")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c45").innerHTML = data.cases.toLocaleString();
		document.getElementById("r45").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d45").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a45").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Congo")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c46").innerHTML = data.cases.toLocaleString();
		document.getElementById("r46").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d46").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a46").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Costa Rica")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c47").innerHTML = data.cases.toLocaleString();
		document.getElementById("r47").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d47").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a47").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Croatia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c48").innerHTML = data.cases.toLocaleString();
		document.getElementById("r48").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d48").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a48").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Cuba")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c49").innerHTML = data.cases.toLocaleString();
		document.getElementById("r49").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d49").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a49").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Curaçao")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c50").innerHTML = data.cases.toLocaleString();
		document.getElementById("r50").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d50").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a50").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Cyprus")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c51").innerHTML = data.cases.toLocaleString();
		document.getElementById("r51").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d51").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a51").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Czechia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c52").innerHTML = data.cases.toLocaleString();
		document.getElementById("r52").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d52").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a52").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Denmark")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c53").innerHTML = data.cases.toLocaleString();
		document.getElementById("r53").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d53").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a53").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Diamond Princess")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c54").innerHTML = data.cases.toLocaleString();
		document.getElementById("r54").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d54").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a54").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Djibouti")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c55").innerHTML = data.cases.toLocaleString();
		document.getElementById("r55").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d55").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a55").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Dominica")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c56").innerHTML = data.cases.toLocaleString();
		document.getElementById("r56").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d56").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a56").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Dominican Republic")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c57").innerHTML = data.cases.toLocaleString();
		document.getElementById("r57").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d57").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a57").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/DRC")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c58").innerHTML = data.cases.toLocaleString();
		document.getElementById("r58").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d58").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a58").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Ecuador")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c59").innerHTML = data.cases.toLocaleString();
		document.getElementById("r59").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d59").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a59").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Egypt")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c60").innerHTML = data.cases.toLocaleString();
		document.getElementById("r60").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d60").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a60").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/El Salvador")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c61").innerHTML = data.cases.toLocaleString();
		document.getElementById("r61").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d61").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a61").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Equatorial Guinea")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c62").innerHTML = data.cases.toLocaleString();
		document.getElementById("r62").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d62").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a62").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Eritrea")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c63").innerHTML = data.cases.toLocaleString();
		document.getElementById("r63").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d63").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a63").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Estonia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c64").innerHTML = data.cases.toLocaleString();
		document.getElementById("r64").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d64").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a64").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Eswatini")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c65").innerHTML = data.cases.toLocaleString();
		document.getElementById("r65").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d65").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a65").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Ethiopia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c66").innerHTML = data.cases.toLocaleString();
		document.getElementById("r66").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d66").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a66").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Faeroe Islands")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c67").innerHTML = data.cases.toLocaleString();
		document.getElementById("r67").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d67").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a67").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Falkland Islands")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c68").innerHTML = data.cases.toLocaleString();
		document.getElementById("r68").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d68").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a68").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Fiji")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c69").innerHTML = data.cases.toLocaleString();
		document.getElementById("r69").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d69").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a69").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Finland")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c70").innerHTML = data.cases.toLocaleString();
		document.getElementById("r70").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d70").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a70").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/France")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c71").innerHTML = data.cases.toLocaleString();
		document.getElementById("r71").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d71").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a71").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/French Guiana")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c72").innerHTML = data.cases.toLocaleString();
		document.getElementById("r72").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d72").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a72").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/French Polynesia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c73").innerHTML = data.cases.toLocaleString();
		document.getElementById("r73").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d73").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a73").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Gabon")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c74").innerHTML = data.cases.toLocaleString();
		document.getElementById("r74").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d74").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a74").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Gambia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c75").innerHTML = data.cases.toLocaleString();
		document.getElementById("r75").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d75").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a75").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Georgia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c76").innerHTML = data.cases.toLocaleString();
		document.getElementById("r76").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d76").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a76").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Germany")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c77").innerHTML = data.cases.toLocaleString();
		document.getElementById("r77").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d77").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a77").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Ghana")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c78").innerHTML = data.cases.toLocaleString();
		document.getElementById("r78").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d78").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a78").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Gibraltar")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c79").innerHTML = data.cases.toLocaleString();
		document.getElementById("r79").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d79").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a79").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Greece")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c80").innerHTML = data.cases.toLocaleString();
		document.getElementById("r80").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d80").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a80").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Greenland")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c81").innerHTML = data.cases.toLocaleString();
		document.getElementById("r81").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d81").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a81").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Grenada")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c82").innerHTML = data.cases.toLocaleString();
		document.getElementById("r82").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d82").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a82").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Guadeloupe")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c83").innerHTML = data.cases.toLocaleString();
		document.getElementById("r83").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d83").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a83").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Guatemala")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c84").innerHTML = data.cases.toLocaleString();
		document.getElementById("r84").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d84").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a84").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Guinea")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c85").innerHTML = data.cases.toLocaleString();
		document.getElementById("r85").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d85").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a85").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Guinea-Bissau")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c86").innerHTML = data.cases.toLocaleString();
		document.getElementById("r86").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d86").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a86").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Guyana")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c87").innerHTML = data.cases.toLocaleString();
		document.getElementById("r87").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d87").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a87").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Haiti")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c88").innerHTML = data.cases.toLocaleString();
		document.getElementById("r88").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d88").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a88").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Honduras")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c89").innerHTML = data.cases.toLocaleString();
		document.getElementById("r89").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d89").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a89").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Hongkong")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c90").innerHTML = data.cases.toLocaleString();
		document.getElementById("r90").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d90").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a90").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Hungary")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c91").innerHTML = data.cases.toLocaleString();
		document.getElementById("r91").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d91").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a91").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Iceland")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c92").innerHTML = data.cases.toLocaleString();
		document.getElementById("r92").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d92").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a92").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/India")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c93").innerHTML = data.cases.toLocaleString();
		document.getElementById("r93").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d93").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a93").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Indonesia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c94").innerHTML = data.cases.toLocaleString();
		document.getElementById("r94").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d94").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a94").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Iran")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c95").innerHTML = data.cases.toLocaleString();
		document.getElementById("r95").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d95").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a95").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Iraq")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c96").innerHTML = data.cases.toLocaleString();
		document.getElementById("r96").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d96").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a96").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Ireland")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c97").innerHTML = data.cases.toLocaleString();
		document.getElementById("r97").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d97").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a97").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Isle of Man")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c98").innerHTML = data.cases.toLocaleString();
		document.getElementById("r98").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d98").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a98").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Israel")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c99").innerHTML = data.cases.toLocaleString();
		document.getElementById("r99").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d99").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a99").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Italy")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c100").innerHTML = data.cases.toLocaleString();
		document.getElementById("r100").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d100").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a100").innerHTML = data.active.toLocaleString();
	})
 
	fetch("https://corona.lmao.ninja/v2/countries/Ivory Coast")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c101").innerHTML = data.cases.toLocaleString();
		document.getElementById("r101").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d101").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a101").innerHTML = data.active.toLocaleString();
	})

	fetch("https://corona.lmao.ninja/v2/countries/Jamaica")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c102").innerHTML = data.cases.toLocaleString();
		document.getElementById("r102").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d102").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a102").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Japan")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c103").innerHTML = data.cases.toLocaleString();
		document.getElementById("r103").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d103").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a103").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Jordan")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c104").innerHTML = data.cases.toLocaleString();
		document.getElementById("r104").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d104").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a104").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Kazakhstan")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c105").innerHTML = data.cases.toLocaleString();
		document.getElementById("r105").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d105").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a105").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Kenya")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c106").innerHTML = data.cases.toLocaleString();
		document.getElementById("r106").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d106").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a106").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Kuwait")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c107").innerHTML = data.cases.toLocaleString();
		document.getElementById("r107").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d107").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a107").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Kyrgyzstan")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c108").innerHTML = data.cases.toLocaleString();
		document.getElementById("r108").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d108").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a108").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Laos")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c109").innerHTML = data.cases.toLocaleString();
		document.getElementById("r109").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d109").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a109").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Latvia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c110").innerHTML = data.cases.toLocaleString();
		document.getElementById("r110").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d110").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a110").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/Countries/Lebanon")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c111").innerHTML = data.cases.toLocaleString();
		document.getElementById("r111").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d111").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a111").innerHTML = data.active.toLocaleString();
	})

	fetch("https://corona.lmao.ninja/v2/countries/Lesotho")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c112").innerHTML = data.cases.toLocaleString();
		document.getElementById("r112").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d112").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a112").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Liberia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c113").innerHTML = data.cases.toLocaleString();
		document.getElementById("r113").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d113").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a113").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Libya")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c114").innerHTML = data.cases.toLocaleString();
		document.getElementById("r114").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d114").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a114").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Liechtenstein")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c115").innerHTML = data.cases.toLocaleString();
		document.getElementById("r115").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d115").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a115").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Lithuania")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c116").innerHTML = data.cases.toLocaleString();
		document.getElementById("r116").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d116").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a116").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Luxembourg")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c117").innerHTML = data.cases.toLocaleString();
		document.getElementById("r117").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d117").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a117").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Macao")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c118").innerHTML = data.cases.toLocaleString();
		document.getElementById("r118").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d118").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a118").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Madagascar")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c119").innerHTML = data.cases.toLocaleString();
		document.getElementById("r119").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d119").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a119").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Malawi")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c120").innerHTML = data.cases.toLocaleString();
		document.getElementById("r120").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d120").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a120").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Malaysia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c121").innerHTML = data.cases.toLocaleString();
		document.getElementById("r121").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d121").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a121").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Maldives")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c122").innerHTML = data.cases.toLocaleString();
		document.getElementById("r122").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d122").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a122").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Mali")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c123").innerHTML = data.cases.toLocaleString();
		document.getElementById("r123").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d123").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a123").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Malta")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c124").innerHTML = data.cases.toLocaleString();
		document.getElementById("r124").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d124").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a124").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Martinique")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c125").innerHTML = data.cases.toLocaleString();
		document.getElementById("r125").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d125").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a125").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Mauritania")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c126").innerHTML = data.cases.toLocaleString();
		document.getElementById("r126").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d126").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a126").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Mauritius")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c127").innerHTML = data.cases.toLocaleString();
		document.getElementById("r127").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d127").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a127").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Mayotte")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c128").innerHTML = data.cases.toLocaleString();
		document.getElementById("r128").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d128").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a128").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Mexico")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c129").innerHTML = data.cases.toLocaleString();
		document.getElementById("r129").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d129").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a129").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Moldova")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c130").innerHTML = data.cases.toLocaleString();
		document.getElementById("r130").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d130").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a130").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Monaco")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c131").innerHTML = data.cases.toLocaleString();
		document.getElementById("r131").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d131").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a131").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Mongolia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c132").innerHTML = data.cases.toLocaleString();
		document.getElementById("r132").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d132").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a132").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Montenegro")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c133").innerHTML = data.cases.toLocaleString();
		document.getElementById("r133").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d133").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a133").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Montserrat")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c134").innerHTML = data.cases.toLocaleString();
		document.getElementById("r134").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d134").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a134").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Morocco")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c135").innerHTML = data.cases.toLocaleString();
		document.getElementById("r135").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d135").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a135").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Mozambique")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c136").innerHTML = data.cases.toLocaleString();
		document.getElementById("r136").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d136").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a136").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Ms Zaandam")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c137").innerHTML = data.cases.toLocaleString();
		document.getElementById("r137").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d137").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a137").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Myanmar")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c138").innerHTML = data.cases.toLocaleString();
		document.getElementById("r138").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d138").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a138").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Namibia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c139").innerHTML = data.cases.toLocaleString();
		document.getElementById("r139").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d139").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a139").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Nepal")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c140").innerHTML = data.cases.toLocaleString();
		document.getElementById("r140").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d140").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a140").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Netherlands")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c141").innerHTML = data.cases.toLocaleString();
		document.getElementById("r141").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d141").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a141").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/New Caledonia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c142").innerHTML = data.cases.toLocaleString();
		document.getElementById("r142").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d142").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a142").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/New Zealand")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c143").innerHTML = data.cases.toLocaleString();
		document.getElementById("r143").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d143").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a143").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Nicaragua")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c144").innerHTML = data.cases.toLocaleString();
		document.getElementById("r144").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d144").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a144").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Niger")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c145").innerHTML = data.cases.toLocaleString();
		document.getElementById("r145").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d145").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a145").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Nigeria")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c146").innerHTML = data.cases.toLocaleString();
		document.getElementById("r146").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d146").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a146").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/North Macedonia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c147").innerHTML = data.cases.toLocaleString();
		document.getElementById("r147").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d147").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a147").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Norway")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c148").innerHTML = data.cases.toLocaleString();
		document.getElementById("r148").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d148").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a148").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Oman")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c149").innerHTML = data.cases.toLocaleString();
		document.getElementById("r149").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d149").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a149").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Pakistan")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c150").innerHTML = data.cases.toLocaleString();
		document.getElementById("r150").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d150").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a150").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Palestine")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c151").innerHTML = data.cases.toLocaleString();
		document.getElementById("r151").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d151").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a151").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Panama")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c152").innerHTML = data.cases.toLocaleString();
		document.getElementById("r152").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d152").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a152").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Papua New Guinea")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c153").innerHTML = data.cases.toLocaleString();
		document.getElementById("r153").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d153").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a153").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Paraguay")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c154").innerHTML = data.cases.toLocaleString();
		document.getElementById("r154").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d154").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a154").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Peru")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c155").innerHTML = data.cases.toLocaleString();
		document.getElementById("r155").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d155").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a155").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Philippines")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c156").innerHTML = data.cases.toLocaleString();
		document.getElementById("r156").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d156").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a156").innerHTML = data.active.toLocaleString();
		document.getElementById("total").innerHTML = data.cases.toLocaleString();
		document.getElementById("recover").innerHTML = data.recovered.toLocaleString();
		document.getElementById("death").innerHTML = data.deaths.toLocaleString();
		document.getElementById("todayC").innerHTML = data.todayCases.toLocaleString();
		document.getElementById("todayR").innerHTML = data.todayRecovered.toLocaleString();
		document.getElementById("todayD").innerHTML = data.todayDeaths.toLocaleString();
		document.getElementById("casesPer").innerHTML = data.casesPerOneMillion.toLocaleString();
		document.getElementById("recoverPer").innerHTML = data.recoveredPerOneMillion.toLocaleString();
		document.getElementById("deathPer").innerHTML = data.deathsPerOneMillion.toLocaleString();
		document.getElementById("test").innerHTML = data.tests.toLocaleString();
		document.getElementById("active").innerHTML = data.active.toLocaleString();
		document.getElementById("critical").innerHTML = data.critical.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Poland")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c157").innerHTML = data.cases.toLocaleString();
		document.getElementById("r157").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d157").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a157").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Portugal")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c158").innerHTML = data.cases.toLocaleString();
		document.getElementById("r158").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d158").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a158").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Qatar")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c159").innerHTML = data.cases.toLocaleString();
		document.getElementById("r159").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d159").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a159").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Romania")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c160").innerHTML = data.cases.toLocaleString();
		document.getElementById("r160").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d160").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a160").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Russia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c161").innerHTML = data.cases.toLocaleString();
		document.getElementById("r161").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d161").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a161").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Rwanda")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c162").innerHTML = data.cases.toLocaleString();
		document.getElementById("r162").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d162").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a162").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Réunion")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c163").innerHTML = data.cases.toLocaleString();
		document.getElementById("r163").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d163").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a163").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/S. Korea")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c164").innerHTML = data.cases.toLocaleString();
		document.getElementById("r164").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d164").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a164").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Saint Kitts and Nevis")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c165").innerHTML = data.cases.toLocaleString();
		document.getElementById("r165").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d165").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a165").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Saint Lucia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c166").innerHTML = data.cases.toLocaleString();
		document.getElementById("r166").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d166").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a166").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Saint Martin")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c167").innerHTML = data.cases.toLocaleString();
		document.getElementById("r167").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d167").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a167").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Saint Pierre Miquelon")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c168").innerHTML = data.cases.toLocaleString();
		document.getElementById("r168").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d168").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a168").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/San Marino")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c169").innerHTML = data.cases.toLocaleString();
		document.getElementById("r169").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d169").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a169").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Sao Tome and Principe")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c170").innerHTML = data.cases.toLocaleString();
		document.getElementById("r170").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d170").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a170").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Saudi Arabia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c171").innerHTML = data.cases.toLocaleString();
		document.getElementById("r171").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d171").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a171").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Senegal")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c172").innerHTML = data.cases.toLocaleString();
		document.getElementById("r172").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d172").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a172").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Serbia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c173").innerHTML = data.cases.toLocaleString();
		document.getElementById("r173").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d173").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a173").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Seychelles")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c174").innerHTML = data.cases.toLocaleString();
		document.getElementById("r174").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d174").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a174").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Sierra Leone")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c175").innerHTML = data.cases.toLocaleString();
		document.getElementById("r175").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d175").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a175").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Singapore")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c176").innerHTML = data.cases.toLocaleString();
		document.getElementById("r176").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d176").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a176").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Sint Maarten")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c177").innerHTML = data.cases.toLocaleString();
		document.getElementById("r177").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d177").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a177").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Slovakia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c178").innerHTML = data.cases.toLocaleString();
		document.getElementById("r178").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d178").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a178").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Slovenia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c179").innerHTML = data.cases.toLocaleString();
		document.getElementById("r179").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d179").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a179").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Somalia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c180").innerHTML = data.cases.toLocaleString();
		document.getElementById("r180").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d180").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a180").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/South Africa")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c181").innerHTML = data.cases.toLocaleString();
		document.getElementById("r181").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d181").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a181").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/South Sudan")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c182").innerHTML = data.cases.toLocaleString();
		document.getElementById("r182").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d182").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a182").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Spain")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c183").innerHTML = data.cases.toLocaleString();
		document.getElementById("r183").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d183").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a183").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Sri Lanka")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c184").innerHTML = data.cases.toLocaleString();
		document.getElementById("r184").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d184").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a184").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/St. Barth")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c185").innerHTML = data.cases.toLocaleString();
		document.getElementById("r185").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d185").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a185").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/St. Vincent Grenadines")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c186").innerHTML = data.cases.toLocaleString();
		document.getElementById("r186").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d186").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a186").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Sudan")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c187").innerHTML = data.cases.toLocaleString();
		document.getElementById("r187").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d187").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a187").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Suriname")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c188").innerHTML = data.cases.toLocaleString();
		document.getElementById("r188").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d188").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a188").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Sweden")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c189").innerHTML = data.cases.toLocaleString();
		document.getElementById("r189").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d189").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a189").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Switzerland")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c190").innerHTML = data.cases.toLocaleString();
		document.getElementById("r190").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d190").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a190").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Syria")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c191").innerHTML = data.cases.toLocaleString();
		document.getElementById("r191").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d191").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a191").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Taiwan")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c192").innerHTML = data.cases.toLocaleString();
		document.getElementById("r192").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d192").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a192").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Tajikistan")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c193").innerHTML = data.cases.toLocaleString();
		document.getElementById("r193").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d193").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a193").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Tanzania")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c194").innerHTML = data.cases.toLocaleString();
		document.getElementById("r194").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d194").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a194").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Thailand")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c195").innerHTML = data.cases.toLocaleString();
		document.getElementById("r195").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d195").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a195").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Timor-leste")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c196").innerHTML = data.cases.toLocaleString();
		document.getElementById("r196").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d196").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a196").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Togo")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c197").innerHTML = data.cases.toLocaleString();
		document.getElementById("r197").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d197").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a197").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Trinidad and Tobago")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c198").innerHTML = data.cases.toLocaleString();
		document.getElementById("r198").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d198").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a198").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Tunisia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c199").innerHTML = data.cases.toLocaleString();
		document.getElementById("r199").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d199").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a199").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Turkey")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c200").innerHTML = data.cases.toLocaleString();
		document.getElementById("r200").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d200").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a200").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Turks and Caicos")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c201").innerHTML = data.cases.toLocaleString();
		document.getElementById("r201").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d201").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a201").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/UAE")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c202").innerHTML = data.cases.toLocaleString();
		document.getElementById("r202").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d202").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a202").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Uganda")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c203").innerHTML = data.cases.toLocaleString();
		document.getElementById("r203").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d203").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a203").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Uk")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c204").innerHTML = data.cases.toLocaleString();
		document.getElementById("r204").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d204").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a204").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Ukraine")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c205").innerHTML = data.cases.toLocaleString();
		document.getElementById("r205").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d205").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a205").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Uruguay")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c206").innerHTML = data.cases.toLocaleString();
		document.getElementById("r206").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d206").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a206").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/USA")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c207").innerHTML = data.cases.toLocaleString();
		document.getElementById("r207").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d207").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a207").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Uzbekistan")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c208").innerHTML = data.cases.toLocaleString();
		document.getElementById("r208").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d208").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a208").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Vatican City")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c209").innerHTML = data.cases.toLocaleString();
		document.getElementById("r209").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d209").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a209").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Venezuela")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c210").innerHTML = data.cases.toLocaleString();
		document.getElementById("r210").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d210").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a210").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Vietnam")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c211").innerHTML = data.cases.toLocaleString();
		document.getElementById("r211").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d211").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a211").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Western Sahara")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c212").innerHTML = data.cases.toLocaleString();
		document.getElementById("r212").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d212").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a212").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Yemen")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c213").innerHTML = data.cases.toLocaleString();
		document.getElementById("r213").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d213").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a213").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Zambia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c214").innerHTML = data.cases.toLocaleString();
		document.getElementById("r214").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d214").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a214").innerHTML = data.active.toLocaleString();
	})
	
	fetch("https://corona.lmao.ninja/v2/countries/Zimbabwe")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("c215").innerHTML = data.cases.toLocaleString();
		document.getElementById("r215").innerHTML = data.recovered.toLocaleString();
		document.getElementById("d215").innerHTML = data.deaths.toLocaleString();
		document.getElementById("a215").innerHTML = data.active.toLocaleString();
	})
	
}

setInterval(list, 10000);

/*--------------- API ---------------*/		
