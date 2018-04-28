
function main(){
	var canvas = document.getElementById("webgl");
	var gl = getWebGLContext(canvas);
	if(!gl){
		console.log("gl failed");
		return;
	}
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	// error method
	// only use shader
	// gl.drawColor(1.0, 0.0, 0.0, 1.0);
	// gl.drawPoint(0, 0, 0, 10);
	console.log("render rect");
}