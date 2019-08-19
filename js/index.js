var errors = [];

function send (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var idade = document.getElementById("idade").value;
  var telefone = document.getElementById("telefone").value;
  var endereco = document.getElementById("endereco").value;
  var result = document.getElementById("result");
  var sucess = 0;
	
	if (name === "" || name.split(" ").length < 2) {
		errors.push("Preencha seu nome completo." + "<br/>");
	}if (email === "") {
		errors.push("Preencha seu e-mail." + "<br/>");		
	}if (idade === "") {
		errors.push("Preencha sua idade." + "<br/>");
	}if (telefone === "") {
		errors.push("Preencha seu telefone." + "<br/>");
	}if (endereco === "") {
		errors.push("Preencha seu endereço." + "<br/>");
	}

	if (errors.length > 0) {
		result.innerHTML = errors;
		result = 0;
		errors = [];
	}else
		if (idade < 18) {
			result.innerHTML = ("Proibido menores de idade!")
		}
		else {
			sucess = "<h3>Cadastro realizado com sucesso!</h3>";
			result.innerHTML = sucess + "<br/>" + "<br/>" + name + "<br/>" + email + "<br/>" + idade + "<br/>" + telefone + "<br/>" + endereco;
			result = 0;
			errors = [];	
		}
}