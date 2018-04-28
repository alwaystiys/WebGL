
var VSHADER_SOURCE = [
	"void main(){",
	"	gl_Position = vec4(0.5, 0.5, 0.0, 1.0);",
	"	gl_PointSize = 10.0;",
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
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.POINTS, 0, 1);
}