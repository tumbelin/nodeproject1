// JavaScript Document
let {cursos,showCourses,findCourseById} = require('./info');
const fs = require('fs');

const inscripcion = {
	curso:{
		demand: true,
		alias: 'c'
	},
	nombre:{
		demand:true,
		alias:'n'
	},
	cedula:{
		demand:true,
		alias:'cc'
	}
}

const argv = require('yargs')
	.command('inscribir','Información para la opción inscribir',inscripcion)
	.argv

if(!argv.c){
	showCourses();
}else{
	let curso = findCourseById(argv.c);
	if(curso){
		resultado = "Los detalles de su inscripción a continuación: \r\n\r\nCurso inscripto: " + curso.name + '\r\nNombre: ' + argv.n + '\r\nCedula: ' + argv.cc ;
		fs.writeFile('inscripcion.txt', resultado, function(err){
			if(err){
				throw (err);	
			} 

			console.log("Inscripción realizada con exito!");

		});
	}else{
		console.log("Curso no encontrado");
	}
}


