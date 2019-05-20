// JavaScript Document
let cursos = [
	{
		id: 1,
		name: "Curso JavaScript",
		duration: "6 meses",
		cost: "100$"
	},
	{
		id: 2,
		name: "Curso PHP",
		duration: "12 meses",
		cost: "200$"
	},
	{
		id: 3,
		name: "Curso C#",
		duration: "6 meses",
		cost: "150$"
	}
];

let showCourses =()=>{
	console.log("Los cursos ofrecidos por el instituto son:");
	console.log("------------------------------------------------");
	console.log("ID: " + cursos[0].id);
	console.log("Nombre: " + cursos[0].name);
	console.log("Duración: " + cursos[0].duration);
	console.log("Valor: " + cursos[0].cost);
	console.log("------------------------------------------------");
	
	setTimeout(function(){
		console.log("ID: " + cursos[1].id);
		console.log("Nombre: " + cursos[1].name);
		console.log("Duración: " + cursos[1].duration);
		console.log("Valor: " + cursos[1].cost);
		console.log("------------------------------------------------");
	}, 2000);
	
	setTimeout(function(){
		console.log("ID: " + cursos[2].id);
		console.log("Nombre: " + cursos[2].name);
		console.log("Duración: " + cursos[2].duration);
		console.log("Valor: " + cursos[2].cost);
		console.log("------------------------------------------------");
	}, 4000);
};

let findCourseById = (id)=>{
	let curso = cursos.find(function(curso) {
		return curso.id == id;
	})
	
	return curso;
}

//showCurses();
//let curso = findCurseById(2);
/*if(curso){
	console.log(curso);
}else{
	console.log("Curso no encontrado");
}*/


//Importante para importar en otras funciones
module.exports = {
	cursos,
	showCourses,
	findCourseById
};