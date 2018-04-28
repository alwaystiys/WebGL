
var VSHADER_SOURCE = [
	"attribute vec4 a_Position;",
	"attribute float a_PointSize;",
	"void main(){",
	"	gl_Position = a_Position;",
	"	gl_PointSize = a_PointSize;",
	"}"
].join("\n");
console.log(VSHADER_SOURCE);  
var FSHADER_SOURCE = [
	"void main(){",
	"	gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);",
	"}"
].join("\n");
console.log(FSHADER_SOURCE);  

function main(){
	
	var canvas = document.getElementById("webgl");
	var gl = getWebGLContext(canvas);
	if(!gl){
		console.log("gl failed");
		return;
	}
	if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)){
		console.log("shader failed");
		return;
	}

	var a_Position = gl.getAttribLocation(gl.program, "a_Position");
	if(a_Position < 0){
		console.log("failed getAttribLocation");
	}
	var a_PointSize = gl.getAttribLocation(gl.program, "a_PointSize");
	if(a_PointSize < 0){
		console.log("failed getAttribLocation");
	}

	var position = new Float32Array([0.0, 0.0, 0.0, 1.0]);
	gl.vertexAttrib4fv(a_Position, position);
	gl.vertexAttrib1f(a_PointSize, 10.0);
	// gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.POINTS, 0, 1);
}